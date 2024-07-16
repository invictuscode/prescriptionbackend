const admin = require('firebase-admin');
const config = require("./config.json")

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: 'https://prescriptionmed.firebaseio.com'
});

const db = admin.firestore();

// Example: Create a new document
// const docRef = db.collection('prescriptions');

// Call the functions to perform operations
module.exports = db;