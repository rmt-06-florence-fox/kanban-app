module.exports = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json(err.message)
  } else if (err.name === `SequelizeValidationError`) {
    const listErr = err.errors.map(e => e.message)
    res.status(400).json({message : listErr})
  } else if (err.name === `SequelizeUniqueConstraintError`) {
    const listErr = err.errors.map(e => e.message)
    res.status(400).json({message : listErr})
  } else {
    res.status(500).json({message : `Internal Server Error`})
  }
}