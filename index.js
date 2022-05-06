const express = require('express')

require('dotenv').config()
const requires = {express:require('express'),expressLayouts:require('express-ejs-layouts'),mongoose:require('mongoose')}

const app = requires.express()

app.set('view engine','ejs')

app.set('views', './src/views')

app.use(requires.express.static('./src/public'))
app.use(requires.expressLayouts)
app.use(express.urlencoded({extended:true}))

app.get('/',function(req,res){
    
    res.render('index.ejs')
})
app.listen(process.env.port,console.log(`${process.env.portMessage}${process.env.port}`))