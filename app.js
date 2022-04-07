const [app, listen] = require('./get-express-app')()

app.post('/cookies', (req, res) =>{
    const cookieVal = req.body.policyRespone
    const cookieOptions = {
        expires: new Date(Date.now() + 1000 * 60 *60)
    }

    res.cookie('policyResponse', cookieVal, cookieOptions).redirect('/index.html')


})

listen()
