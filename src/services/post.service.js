const { BlogPost, Category, sequelize, PostCategory, User } = require('../models/index');
const newPostValidation = require('./validations/postValidations');

const findAllPosts = async () => {
  try {
    const posts = await BlogPost.findAll(
      { 
        include: [
          { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      },
    );

    return { status: 200, data: posts };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
};

const findPostById = async (postId) => {
  try {
    const post = await BlogPost.findByPk(postId,
      { 
        include: [
          { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      });

    console.log(post);

    if (post) return { status: 200, data: post };
  
    return { status: 404, data: { message: 'Post does not exist' } };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
};

const createPostInDb = async ({ title, content, categoryIds }, userId) => {
  const result = await sequelize.transaction(async (transaction) => {
    const newPost = await BlogPost.create(
      { title, content, userId, published: new Date(), updated: new Date() },
      { transaction },
    );

    categoryIds.map(async (id) => {
      await PostCategory.create({ postId: newPost.id, categoryId: id });
    });

    return newPost;
  });
  return result;
};

const verifyCategories = async ({ categoryIds }) => {
  const categoryVerification = await Promise.all(
    categoryIds.map((id) => Category.findOne({
      where: { id },
    })),
  );

  const verificationResult = categoryVerification.some((category) => category === null);

  if (verificationResult) return true;

  return false;
};

const createPost = async (userId, newPostData) => {
  try {
    const validationMessage = newPostValidation(newPostData);
  
    if (validationMessage !== 'without errors') {
      return { status: validationMessage.status, data: { message: validationMessage.error } };
    }

    const categoriesVerification = await verifyCategories(newPostData);

    if (categoriesVerification) {
      return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
    }

    const newPost = await createPostInDb(newPostData, userId);
    
    return { status: 201, data: newPost };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
};

module.exports = {
  createPost,
  findAllPosts,
  findPostById,
};