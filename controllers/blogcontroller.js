const Post = require("../model/post");


exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Post.find({
            type: "blogs"
        });
        res.setHeader('Set-Cookie', 'blogs=xys');
        res.render("blog", {
            blogs: blogs,
            isLoggedIn: req.session.isLoggedIn
        });
    } catch (err) {
        console.log(err);
    }
};

exports.getAllNotices = async (req, res) => {
    try {
        const notices = await Post.find({
            type: "notices"
        });
        res.render("notice", {
            notices,
            isLoggedIn: req.session.isLoggedIn
        });
    } catch (err) {
        console.log(err);
    }
};