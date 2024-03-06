const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

module.exports = router;

router.post('/', (req, res) => {
    Item.create(req.body)
    .then((item) => res.json({msg: 'Listing added successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to add this listing.'}));
});
router.get('/', (req, res) => {
    Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json({error: 'No listings found.'}));
});
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json({error: 'No listing found.'}));
});
router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({msg: 'Listing updated successfully.'}))
    .catch((err) => res.status(400).json({error: 'Unable to update the listing.'}));
});
router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
    .then((item) => res.json({msg: 'Listing deleted successfully.'}))
    .catch((err) => res.status(400).json({error: 'No such listing.'}));
});