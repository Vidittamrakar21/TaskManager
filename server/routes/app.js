const  express =  require('express');
const aunthenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();


const {createTask , findAllTasks, findOneTask, findUserTasks , updateTask,deleteTask} = require('../controller/app')


router.route('/tasks').post(createTask);   
router.route('/tasks').get(aunthenticateJWT,findAllTasks);   
router.route('/tasks/:id').get(findOneTask);   
router.route('/tasks/:id').put(updateTask);   
router.route('/tasks/:id').delete(deleteTask);   
router.route('/usertasks/:id').get(findUserTasks);   


module.exports = router; 