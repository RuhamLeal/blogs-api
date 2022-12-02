const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    }
  );

  PostCategory.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category,
      { foreignKey: 'category_id', as: 'categories', through: PostCategory, otherKey: 'post_id' });

      Category.belongsToMany(BlogPost,
      { foreignKey: 'post_id', as: 'posts', through: PostCategory, otherKey: 'category_id' });
  };

  return PostCategory;
};

module.exports = PostCategorySchema;