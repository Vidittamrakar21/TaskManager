const  express =  require('express');

const router = express.Router()


const {registerUser ,loginUser}  = require('../controller/auth');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

module.exports = router;