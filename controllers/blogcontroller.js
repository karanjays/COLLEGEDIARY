const Post = require("../model/post");


exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Post.find({
            type: "blogs"
        });
        res.render("blog", {
            blogs: blogs
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
            notices
        });
    } catch (err) {
        console.log(err);
    }
};