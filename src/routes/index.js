const userRouter = require('./user.routes');
const categoryRouter = require('./category.routes');
const postRouter = require('./post.routes');

const mainRouter = (app) => {
  app.use(
    userRouter,
    categoryRouter,
    postRouter,
  );
};

module.exports = mainRouter;