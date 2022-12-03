const { postSchema, updatePostSchema } = require('./validationSchemas');

const newPostValidation = (newPostData) => {
  const { error } = postSchema.validate(newPostData);
  if (error) {
    return { status: 400, error: error.details[0].message };
  }
  return 'without errors';
};

const updatePostValidation = (postData) => {
  const { error } = updatePostSchema.validate(postData);
  if (error) {
    return { status: 400, error: error.details[0].message };
  }
  return 'without errors';
};

module.exports = { 
  updatePostValidation,
  newPostValidation,
 };