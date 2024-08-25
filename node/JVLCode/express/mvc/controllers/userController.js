const { getUser } = require("../models/userModel")

exports.loginPage = (req, res, next) => {
    res.render('login')
}

exports.dashBoardPage = (req, res, next) => {
    const user = getUser(req.query.email);
    res.render('dashboard', {
        user
    })
}

exports.loginProcess = (req, res, next) => {
    // get user data
    const user = getUser(req.body.email);
    if (user !== null && user.password === req.body.password) {
        res.redirect('/dashBoard?email=' + req.body.email);
    } else if (user === null) {
        res.render('error', {
            message : " No user exists"
        })
    } else {
        res.render('error', {
            message : 'Invalid credentials'
        })
    }
}