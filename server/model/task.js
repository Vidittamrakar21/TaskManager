const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const  taskSchema = new Schema ({
    
    uid: {type: String, require: true},
    title:{type: String, require: true},
    task:{type: String, require: true},
    date: {type : Date, default: Date.now}

})

module.exports = mongoose.model('task', taskSchema);