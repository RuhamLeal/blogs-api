const userRouter = require('./user.routes');

const mainRouter = (app) => {
  app.use(
    userRouter,
  );
};

module.exports = mainRouter;