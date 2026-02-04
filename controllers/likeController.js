const Like = require('../models/likeModel')

const Post = require('../models/postModel')

//like a post 

exports.likePost = async(req,res)=>{
    try{
        const {user,post} = req.body;

        const like = new Like({user,post})

        const savedLike = await like.save();

        //update the post collection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate("likes").exec()

        res.json({
            post:updatedPost,
            message:"liked a post successfully"
        })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while fetching post"
        })
    }
}


//unlike the post

exports.unLikePost = async(req,res)=>{
    try{
        const {post,like} = req.body
        //find and delete from like collections 
        const deletedLike = await Like.findOneAndDelete({post:post,_id:like})

        //update the post collection

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true}).populate("likes").exec()
        res.json({
            posts:updatedPost,
            message:"deleted like succesfully"
        })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while deleting"
        })
    }
}



exports.dummyLink=(req,res)=>{
    res.send("this is your dummy page")
}