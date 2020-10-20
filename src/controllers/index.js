const indexController = (req,res) => {
    console.log(req.session);
    res.render(`index`);
}

module.exports = indexController;