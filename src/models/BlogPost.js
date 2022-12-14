const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
    }
  );

  BlogPost.associate = ({ User, PostCategory }) => {
    BlogPost.belongsTo(User,
      { foreignKey: 'userId', as: 'user' });
    BlogPost.hasMany(PostCategory, 
      { foreignKey: 'post_id', as: 'posts'  }
    )
  };

  return BlogPost;
};

module.exports = BlogPostSchema;
