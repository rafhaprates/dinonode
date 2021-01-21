const indexController = {
    index:  function(req,res){
        res.status(202).json({ message: 'Olá Mundão'});
    }
}

module.exports = indexController;