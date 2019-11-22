const router = require('express').Router()
const { Realm } = require('../db')
const jwt = require('express-jwt')
const crypto = require('crypto')
const axios = require('axios')
// JWT middleware
const secret = "dapiemyhero"
router.use(
  jwt({
    secret: secret,
    header: 'Bearer'
  }).unless({
    path: [/\/api\/auth\/login/, /\/api\/auth\/register/, /\/api\/db\/links\/\d+/]
  })
)
const jsonwebtoken = require('jsonwebtoken')

router.post('/auth/login/', async function (req, res, next) {
 	const { email, password } = req.body
 	//Check Valid on Server
	const cryptoPass = crypto.createHash('sha1').update(JSON.stringify(secret + password)).digest('hex')
	let findedUser = Realm.objects('User').filtered('email = "' + email + '"')[0]
	if(findedUser && findedUser.password === cryptoPass){
		const accessToken = jsonwebtoken.sign({
	    	email: findedUser.email,
	    	isAdmin: findedUser.isAdmin,
	    	name: findedUser.name,
	    	id: findedUser.id
	    },secret)
	  	res.json({
	    	token: accessToken
	  	})
	} else{
		return res.status(400).send("Неверная почта или пароль");
	}
});

router.post('/auth/register/', async function (req, res, next) {
 	const { email, password, name } = req.body
 	//Check Valid on Server
	const cryptoPass = crypto.createHash('sha1').update(JSON.stringify(secret + password)).digest('hex')
	let findedUser = Realm.objects('User').filtered('email = "' + email + '"')[0]
	if(findedUser)
		return res.status(400).send("Такой пользователь уже существует");
	const results = Realm.objects('User').sorted('id', true);
    const id = results.length > 0 ? results[0].id + 1 : 1;
	Realm.write(() => {
      Realm.create('User', {
      	id: id,
      	email: email,
      	password: cryptoPass,
      	name: name,
      	timestamp: new Date()
      });
    });
    res.json({status: 'OK'})
});

router.post('/auth/logout/', async function (req, res, next){
	res.json({status: 'OK'})
})

router.get('/auth/user/', async function(req, res, next){
	res.json({ user: req.user })
})

router.get('/db/links', async function(req, res, next){
	let findedLinks = Realm.objects('Link').filtered('ownerID = "' + req.user.id + '"').sorted('id')
  	res.json(findedLinks)
})

router.get('/db/links/:id', async function(req, res, next){
	let findedLink = Realm.objects('Link').filtered('id = "' + req.params.id + '"')[0]
	if(!findedLink) return res.status(400).send("Такой диплинк не существует");
	return res.json({
		link: findedLink.link,
		iosLink: findedLink.iosLink,
		androidLink: findedLink.androidLink,
		id: findedLink.id,
		service: findedLink.service,
		works: true
	})
})

router.post('/db/links/add', async function(req, res, next){
	const { service, link, iosLink, androidLink, name } = req.body
 	let linkOnServer = Realm.objects('Link').filtered('link = "' + link + '"')[0]
 	if(linkOnServer)
 		return res.status(400).send("Такой диплинк уже существует");
 	const max = Realm.objects('Link').max('id');
    const id = max ? max + 1 : 1;
 	const userId = req.user.id
	Realm.write(() => {
    	Realm.create('Link', {
    		id: id,
      		ownerID: userId,
      		timestamp: new Date(),
      		clicks: 0,
      		paidClicks: 400,
      		service,
      		link,
      		iosLink,
      		androidLink,
      		name
    	});
    });
    res.json({status: 'OK'})
})

router.post('/db/links/delete', async function(req, res, next){
	const { id } = req.body
 	let linkOnServer = Realm.objects('Link').filtered('id = "' + id + '"')[0]
 	if(!linkOnServer) return res.status(400).send("Такой диплинк уже не существует");
 	if(linkOnServer.ownerID != req.user.id) return res.status(400).send("Ссылка не пренадлежит вам");
	Realm.write(() => {
		Realm.delete(linkOnServer);
    });
    res.json({status: 'OK'})
})

router.get('/inst/mediaId', async function(req, res, next){
	const url = "https://api.instagram.com/oembed/?url=" + req.query.url
	const data = await axios.get(url)
		.then((result) => {
			const mediaId = result.data.media_id.split('_')[0]
			res.json({mediaId})
		})
		.catch((e) => res.json({error: e}))
})

module.exports.router = router;