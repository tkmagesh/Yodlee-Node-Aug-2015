var express = require('express');
var router = express.Router();

var taskList = [
    'Watch a movie',
    'Go shopping',
    'Fix that bug'
];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tasks/index', {list : taskList});
});

module.exports = router;
