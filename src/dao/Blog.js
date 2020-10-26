const Blog = require('../models/Blog');

const getBlankBlog = () => {
    return new Blog();
}

const createBlog = async (req,res) => {
    // CREATE New Blog
    const blog = new Blog({
        blogTitle: req.body.blogTitle,
        blogDescription: req.body.blogDescription,
    });
    try{
        // SEND DATA TO DB TO STORE USER
        const createdBlog = await blog.save();
        return createdBlog;
    }
    catch(err){
        return res.status(400).send(`Server Error!`);
    }
}

const findBlogByID = async (req,res) => {
    try{
        const blog = await Blog.findById(req.params.blogId);
        return blog;
    }
    catch(err){
        return res.status(400).send(`Server Error!`);
    }
}

const getAllBlogs = async (req,res) => {
    try{
        const blogs = await Blog.find().sort({createdAt: 'desc'});
        return blogs;
    }
    catch(err)
    {
        return res.status(400).send(`Server Error!`);
    }
}

const updateBlogById = async (req,res) => {
    try{
        const updatedBlog = await Blog.findOneAndUpdate({_id: req.params.blogId}, {blogTitle: req.body.blogTitle, blogDescription: req.body.blogDescription}, {new: true});
        return updatedBlog;
    }
    catch(err) {
        return res.status(400).send(`Server Error!`);
    }
}

const deleteBlogById = async (req,res) => {
    try{
        await Blog.findByIdAndDelete(req.params.blogId);
    }
    catch(err) {
        return res.status(400).send(`Server Error!`);
    }
}

module.exports = {
    createBlog,
    getBlankBlog,
    findBlogByID,
    getAllBlogs,
    updateBlogById,
    deleteBlogById
}