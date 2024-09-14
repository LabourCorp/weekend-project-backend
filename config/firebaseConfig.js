const admin = require('firebase-admin');
const serviceAccount = require('../labour-corp-firebase-adminsdk-66k95-1e3dfd42ca.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://labour-corp-default-rtdb.firebaseio.com'
});

const db = admin.database();
module.exports = db;
