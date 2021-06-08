const router = require('express').Router();
let Checko = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/models/heart.model.js');

router.route('/').get((req, res) => {
  console.log("happening find ing ");
  Checko.find()
    .then(countnew => res.json(countnew))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;