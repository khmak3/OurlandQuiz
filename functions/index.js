const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
//const gcs = require('@google-cloud/storage')();
//const vision = require('@google-cloud/vision')();
const exec = require('child-process-promise').exec;
const nodemailer = require('nodemailer');
const check = require('./check');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.check = check.check;
