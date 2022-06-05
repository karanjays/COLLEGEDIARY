const user = require("../model/user");
const bcrypt = require("bcrypt");

exports.getlogin = (req, res) => {
    res.render("login");
};

exports.getlogout = async (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect("/");
}

exports.getsignup = (req, res) => {
    res.render("sign-up");
};


exports.makesignup = async (req, res) => {
    let hashedpassword = await bcrypt.hash(req.body.password, 12);
    const userdata = new user({
        email: req.body.email,
        username: req.body.email.split("@")[0],
        name: req.body.fullname,
        password: hashedpassword,
        admin: true,
        posts: [{}]
    });
    try {
        await userdata.save();
        console.log(userdata);
        req.session.isLoggedIn = true;
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
};

exports.postlogin = async (req, res) => {
    try {
        let access = await user.findOne({
            email: req.body.email
        });
        if (access) {
            let password = req.body.password,
                hashedpassword = access.password;
            const result = await bcrypt.compare(password, hashedpassword);
            if (result) {
                req.session.isLoggedIn = true;
                res.redirect("/");
            }
        } else
            res.send("Invalid Username or Password");
    } catch (err) {
        console.log(err);
    }
}