var express = require('express');
var router = express.Router();
var io = require('socket.io')();


var taskList = [
     { id : 1, name : 'Watch a movie', isCompleted : false},
     { id : 2, name : 'Go shopping', isCompleted : false},
     { id : 3, name : 'Fix that bug', isCompleted : false},
];
/* GET users listing. */
router.get('/', function(req, res, next) {
    var viewModel = {
        list : taskList,
        total : taskList.length,
        completed : taskList.filter(function(t){ return t.isCompleted }).length
    };
  res.render('tasks/index', viewModel);
});

router.get('/new', function(req, res, next){
    res.render('tasks/new');
});

router.post('/new', function(req, res, next){
    var newTaskId = taskList.reduce(function(result, task){
        return result > task.id ? result : task.id;
    },0) + 1;
    var newTask = {
        id : newTaskId,
        name : req.body.newTaskName,
        isCompleted : false
    };
    taskList.push(newTask);
    io.emit('taskMessage', 'a new task is added [' + newTask.name + ']');
    res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
    var taskId = parseInt(req.params.id);
    var task = taskList.filter(function(t){
        return t.id === taskId;
    })[0];
    if (task){
        task.isCompleted = !task.isCompleted;
    }
    io.emit('taskMessage', 'task [' + task.name + '] is toggled');
    res.redirect('/tasks');
});

module.exports = router;
