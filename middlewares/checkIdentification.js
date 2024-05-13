const checkIdentification = (req, res, next) => {
  const { idCard } = req.query;
  if (idCard === undefined) {
    const err = new Error("신원확인이 불가합니다.");
    err.statusCode = 403;
    next(err);
    return;
  }
  next();
};

module.exports = checkIdentification;
