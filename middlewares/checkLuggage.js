const prohibitProducts = {
  knife: true,
  gun: true,
};

const checkLuggage = (req, res, next) => {
  const { luggage } = req.body;
  console.log(luggage);
  if (luggage !== undefined && Object.keys(luggage).length > 0) {
    const found = Object.keys(luggage).find(
      (name) => prohibitProducts[name] === true
    );

    console.log(found);
    if (found !== undefined && Object.keys(luggage).length > 0) {
      const err = new Error(`${found}는 가지고 들어갈 수 없습니다.`);
      err.statusCode = 403;
      next(err);
      return;
    }
  }
  next();
};
module.exports = checkLuggage;
