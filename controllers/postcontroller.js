const Post=require("../model/post");

exports.getInputForm=(req,res)=>{
    res.render("post");
}

exports.createNewPost = async (req,res)=>
{
    let postData = new Post({
        title:req.body.title,
        content:req.body.content,
        type:"notices",
        author:"Karan",
        date: new Date(),
        upvote: 3
    });

    // callback
    // postData.save((err,post)=>
    // {
    // if(err)
    //     console.log(err);
    // else
    //     console.log(post);
    // }
    // );

    //promices
    // postData.save()
    // .then(post=>{
    //     console.log(post);
    // })
    // .catch(err=>{
    //     console.log(err);
    // });


    // async and await
    try
    {
    await postData.save();
    // console.log(postData);
    const blogs = await Post.find({});
    // console.log(blogs);
    res.render("home");
    }catch(err)
    {
        console.log(err);
    }
};