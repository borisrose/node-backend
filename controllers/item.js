const Item = require('../models/item')


exports.creatingItem = (req, res, next) => {

    //delete req.body.id;
    //mongoDB en créé un automatiquement risque de confusion autrement
    const item = new Item({
        ...req.body
    });

    item.save()
        .then(()=> res.status(201).json({message: 'Item saved'}))
        .catch(error => res.status(400).json({message: error}));


}

exports.updateItem = (req, res, next) => {

    Item.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(() => res.status(200).json({message: 'Item modifié'}))
        .catch(err => res.status(400).json({err}));
}


exports.deleteItem = (req, res, next) => {

    Item.deleteOne({_id:req.params.id})
        .then(() => {
            res.status(200).jsaon({message:'Item supprimé'})

        })
        .catch(err => res.status(400).json({err}));

}

exports.getOneItem = (req, res, next) => {

    Item.findOne({
        _id: req.params.id
    })
        .then(item=> 

            res.status(200).json(item)

        )
        .catch(err => res.status(404).json({err}));

}

exports.getAllItems = (req, res, next) => {

    Item.find()
        .then(items => res.status(200).json(items))
        .catch(error => res.status(400).json({message: error}));

}