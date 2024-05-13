const users = {
  minho: true,
  chulsu: true,
};

const checkRegister = (req, res, next) => {
  const { visitor } = req.query;
  if (users[visitor] === undefined) {
    const err = new Error("등록되지 않은 방문자입니다.");
    err.statusCode = 401;
    next(err);
    return;
  }
  next();
};

module.exports = checkRegister;
