const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121

let db,
    dbConnectionStr = 'mongodb+srv://demo:demo@cluster0.lxhnr.mongodb.net/tennis-app-project?retryWrites=true&w=majority',
     dbName = 'tennisCourts'

     MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
     .then(client => {
         console.log(`connected to ${dbName} database`)
         db = client.db(dbName)
     })
     .catch(err => {
         console.log(err)
     })

     app.set('view engine', 'ejs' )
     app.use(express.static('public'))
     app.use(express.urlencoded({ extended: true}))
     app.use(express.json())

     app.get('/', (req, res) => {
        res.render('index.ejs')
     })

     app.listen(PORT, () =>{
         console.log("server is running")
     })