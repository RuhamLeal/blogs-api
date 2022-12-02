const userRouter = require('./user.routes');
const categoryRouter = require('./category.routes');

const mainRouter = (app) => {
  app.use(
    userRouter,
    categoryRouter,
  );
};

module.exports = mainRouter;