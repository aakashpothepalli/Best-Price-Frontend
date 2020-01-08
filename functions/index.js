const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express')
const app = express()

const body_parser = require('body-parser');

// parse JSON (application/json content-type)
app.use(body_parser.json());


var port = 8080;

// let currentUsers={}
// admin
//     .database()
//     .ref('/')
//     .set({
//         "users" : {
      
//           "-LvVQ3LEWsNsao4RXtmZ" : {
//             "email" : "p.saiaakash517@gmail.com",
//             "name" : "aakash",
//             "cart":["football"],
//             "pass" : "aakash"
//           },
//           "-LvW2dX3OIWmKVHcSPJ4" : {
//             "email" : "arun@gmail.com",
//             "name" : "arun",
//             "pass" : "arun",
//             "cart" :["TV"],
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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/cart', async (req, res) => {
    res.json({
        products: await dbref.child(req.query.id).once('value').then(ds=>ds.val()['cart'])
    })

})
app.post('/cart',async (req,res)=>{
    let cart = await dbref.child(req.body.id).once('value').then(ds=>ds.val()['cart'])
    cart.push(req.body.newItem)
    dbref.child(req.body.id).child('cart').set(cart)
    console.log(await dbref.child(req.body.id).once('value').then(ds=>ds.val()['cart']))
    res.send('success')
})

app.get('/auth', (req, res) => {
    checkAuth(req.query.email, req.query.pass, res)
})

app.post('/signup',async (req,res)=>{
    let key = dbref.push().key

    let newUser = {}
    newUser[key]= {
      name:req.body.name,
      email:req.body.email,
      pass:req.body.pass
    }
    await dbref.update(newUser)
    
    res.send(`hi ${req.body.name}`)
})

const checkAuth = async (email, pass, res) => {

   let database = await dbref
    .once('value')
    .then(datasnap => datasnap.val())
    .catch(er => console.log(er));

    if(email && pass)
    for (let id in database) {
        if (database[id].email === email && database[id].pass === pass) {

            // let uniqueId = Math.random().toString(36).substring(7);
            
            // currentUsers[uniqueId] =id

            let userName = await dbref.child(id).once('value').then(ds=>ds.val()['name'])
            res.json({
                username:userName,
                id:id
            })
            return true
        }
    }
    res.send(false)
    return false
}
app.listen(port, () => console.log(`working on ${port}`))

exports.app = functions.https.onRequest(app);
