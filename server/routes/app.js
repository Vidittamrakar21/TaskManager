const  express =  require('express');
const aunthenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();


const {createTask , findAllTasks, findOneTask, findUserTasks , updateTask,deleteTask,verifyToken} = require('../controller/app')


router.route('/tasks').post(aunthenticateJWT,createTask);   
router.route('/tasks').get(aunthenticateJWT,findAllTasks);   
router.route('/tasks/:id').get(aunthenticateJWT,findOneTask);   
router.route('/tasks/:id').put(aunthenticateJWT,updateTask);   
router.route('/tasks/:id').delete(aunthenticateJWT,deleteTask);   
router.route('/usertasks/:id').get(aunthenticateJWT,findUserTasks);   
router.route('/verify/:id').get(verifyToken);   


module.exports = router; 