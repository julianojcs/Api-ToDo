const { Types } = require('mongoose')

const ObjectIdValidation = (req, res, next) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).json({ error: 'Id inválido' })
  else next()
}

module.exports = ObjectIdValidation
