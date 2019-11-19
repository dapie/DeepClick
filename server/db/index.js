const Realm = require('realm');

let UserSchema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: 'int',
    email: 'string',
    password: 'string',
    name: 'string',
    isAdmin: {type: 'bool', default: false},
    timestamp: 'date'
  }
};

let LinkSchema = {
  name: 'Link',
  primaryKey: 'id',
  properties: {
    id: 'int',
    ownerID: 'int',
    timestamp: 'date',
    service: 'string',
    clicks: 'int',
    paidClicks: 'int',
    link: 'string',
    iosLink: 'string',
    androidLink: 'string',
    name: 'string?'
  }
};

let dataRealm = new Realm({
  path: 'data.realm',
  schema: [UserSchema, LinkSchema]
});

module.exports.Realm = dataRealm;