const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express')
const app = express()
var port = 8080;

let currentUsers={}
// admin
//     .database()
//     .ref('/')
//     .set({
//         "users" : {
//           "-LvTUVpOSnRx1GXxgxJG" : {
//             "age" : 18,
//             "name" : "aakash"
//           },
//           "-LvVQ3LEWsNsao4RXtmZ" : {
//             "email" : "p.saiaakash518@gmail.com",
//             "name" : "aakash",
//             "pass" : "aakash"
//           },
//           "-LvW2dX3OIWmKVHcSPJ4" : {
//             "email" : "arun@gmail.com",
//             "name" : "arun",
//             "pass" : "arun"
//           },
//           "-Lvk6DaPypMdtsmUUSkt" : {
//             "email" : "",
//             "name" : "",
//             "pass" : ""
//           },
//           "-Lvpc24r_LvLGe_j4mUA" : {
//             "email" : "p.rishika900@gmail.com",
//             "name" : "rishika",
//             "pass" : "rishika"
//           },
//           "keys" : "name"
//         }
//       })

let dbref = admin.database().ref('users')

app.get('/cart', (req, res) => {
    res.json({
        products: ['gaming laptop \n', 'headphones\n', 'tablets\n']
    })

})
app.get('/navdata',(req,res)=>{

    let username = dbref.child(currentUsers[req.query.id]).once('value').then(ds=>ds.val()['name'])
    console.log(username)
    res.json({
        name:database[currentUsers[req.query.id]]
    })
})

app.get('/auth', (req, res) => {
    checkAuth(req.query.email, req.query.pass, res)
})

const checkAuth = async (email, pass, res) => {

   let database = await dbref
    .once('value')
    .then(datasnap => datasnap.val())
    .catch(er => console.log(er));

    if(email && pass)
    for (let el in database) {
        if (database[el].email === email && database[el].pass === pass) {

            let uniqueId = Math.random().toString(36).substring(7);
            
            currentUsers[uniqueId] =el

            let userName = await dbref.child(currentUsers[uniqueId]).once('value').then(ds=>ds.val()['name'])
            res.json({
                username:userName,
                id:uniqueId
            })
            return true
        }
    }
    res.send(false)
    return false
}
app.listen(port, () => console.log(`working on ${port}`))

exports.app = functions.https.onRequest(app);
