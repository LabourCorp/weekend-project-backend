function errorHandler(err, req, res, next) {
  console.error('Error Handler:', err); // Log the error for debugging
  if (res.headersSent) {
    return next(err); // Delegate to default Express error handler if headers are sent
  }
  res.status(500).json({ error: 'Something went wrong!' });
}

module.exports = errorHandler;
