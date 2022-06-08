module.exports=(req,res)=>{
    if(req.session.isloggedIn)
    {
        next();
    }
    else
    {
        res.redirect("/login");
    }
}

