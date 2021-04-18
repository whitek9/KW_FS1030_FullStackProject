//error handler middleware (code taken from link in lab)
function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    return res.status(404).json( { message : 'not found' } )
  }

export default errorHandler