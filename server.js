const express = require("express")

const app = express();

require("dotenv").config();

app.use(express.json())

const connectDB = require ('./config/connectDB')

connectDB()

app.use ('/api/mail' , require ('./routes/mail'))

app.use ('/api/reservation' , require ('./routes/reservation'))

app.use ('/api/postulation' , require ('./routes/postulation'))

app.use ('/api/admin' , require ('./routes/admin'))

app.use ('/api/newsletter' , require ('./routes/newsletter'))

app.use ('/api/actus' , require ('./routes/actus'))

app.use ('/api/offredemploi' , require ('./routes/offredemploi'))

app.use((req,res) => {
    res.send("Hello")
})

const PORT = process.env.PORT || 9876

app.listen(PORT  , error =>{  
    error? console.error(`Fail to connect , ${error}`)
    :
    console.error(`Server is running on port ${PORT}`)
})