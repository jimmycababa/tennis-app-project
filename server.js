const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')
const PORT = process.env.PORT || 2121

dotenv.config({path: './config/config.env'})

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
    //  app.use(cors())

     app.get('/', (req, res) => {
        res.render('index.ejs')
     })
    //  app.use('/api/v1/stores', require('./routes/stores'))

     app.post('/enterZip', (req, res) =>{
         console.log(req.body.zipItem)
     db.collection('courts').insertOne({todo: req.body.zipItem})
     .then(result => {
         console.log('zip added')
         res.redirect('/')
     })
 })

     app.listen(PORT, () =>{
         console.log(`server is running in ${process.NODE_ENV} mode on port ${PORT}`)
     })