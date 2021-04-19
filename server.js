const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121

let db,
    dbConnectionStr = 'mongodb+srv://demo:demo@cluster0.lxhnr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
     dbName = 'tennisCourts'

     MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
     .then(client => {
         console.log(`connected to ${dbName} database`)
         db = client.db(dbName)
     })

     app.listen(PORT, () =>{
         console.log("server is running")
     })