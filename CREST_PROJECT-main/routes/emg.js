const router = require('express').Router();
let Check = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/models/emg.model.js');

router.route('/').get((req, res) => {
  console.log("happening find ing ");
  Check.find()
    .then(countnew => res.json(countnew))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;