const BlogDAO = require('../dao/Blog');

const newBlogGetController = (req,res) => {
    // display form
    res.render('newBlog', {blog: BlogDAO.getBlankBlog()});
}

const newBlogPostController = async (req,res)=>{
    try{
        const blog = await BlogDAO.createBlog(req,res);
        res.redirect(`/blogs/${blog._id}`)
    }
    catch(err)
    {
        return res.status(400).send(`Server Error`);
    }
}

const createdBlogGetController = async (req, res) => {
    try{
        const blog = await BlogDAO.findBlogByID(req,res);
        if(blog)
        {
            res.render('showBlog', {blog: blog});
        }
        else
        {
            res.redirect('/');
        }
    }
    catch(err)
    {
        return res.status(400).send(`Server Error`);
    }
};

const editBlogGetController = async(req,res) => {
    try{
        const blog = await BlogDAO.findBlogByID(req,res);
        if(blog)
        {
            res.render('editBlog', {blog: blog});
        }
        else
        {
            res.redirect('/');
        }
    }
    catch(err)
    {
        return res.status(400).send(`Server Error`);
    }
};

const editBlogPostController = async(req,res) => {
    try{
        const updatedBlog = await BlogDAO.updateBlogById(req,res);
        res.redirect(`/blogs/${updatedBlog._id}`);
    }
    catch(err)
    {
        return res.status(400).send(`Server Error`);
    }
};

const deleteBlogPostController = async(req,res) => {
    try{
        await BlogDAO.deleteBlogById(req,res);
        res.redirect(`/`);
    }
    catch(err)
    {
        return res.status(400).send(`Server Error`);
    }
};


module.exports = {
    newBlogGetController,
    newBlogPostController,
    createdBlogGetController,
    editBlogGetController,
    editBlogPostController,
    deleteBlogPostController
};