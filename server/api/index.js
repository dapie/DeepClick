const router = require('express').Router()
const { Realm } = require('../db')
const jwt = require('express-jwt')
const crypto = require('crypto')
// JWT middleware
const secret = "dapiemyhero"
router.use(
  jwt({
    secret: secret,
    header: 'Bearer'
  }).unless({
    path: '/api/auth/login'
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
		return res.status(500).send("Неверная почта или пароль");
	}
});

router.post('/auth/logout/', async function (req, res, next){
	res.json({status: 'OK'})
})

router.get('/auth/user/', async function(req, res, next){
	res.json({ user: req.user })
})

module.exports.router = router;