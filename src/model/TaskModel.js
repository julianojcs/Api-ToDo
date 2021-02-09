const { Mongoose } = require('../config/database')
const Schema = Mongoose.Schema

const TaskSchema = new Schema({
  macaddress: { type: String, required: true },
  type: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  when: { type: Date, required: true },
  done: { type: Boolean, default: false },
  created: { type: Date, default: new Date() } // default: Date.now()
})

module.exports = Mongoose.model('Task', TaskSchema)
