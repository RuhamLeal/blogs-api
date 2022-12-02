const UserSchema = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    },
  );

  User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost,
      { foreignKey: 'user_id', as: 'blog_posts' });
  };

  return User;
}

module.exports = UserSchema;
