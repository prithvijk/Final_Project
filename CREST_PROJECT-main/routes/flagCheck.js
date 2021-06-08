const router = require('express').Router();
let Check = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/models/flag.model.js');

router.route('/').get((req, res) => {
  console.log("happening find ing ");
  Check.find()
    .then(countnew => res.json(countnew))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
  console.log("happening posting");
  console.log(req);
  const temperature = req.body.temperature;
  const newCheck = new Check({
      temperature,
  });
  newCheck.save()
  .then(() => res.json('Added values'))
  .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;