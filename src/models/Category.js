const CategorySchema = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category', 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'categories',
    },
  );

  Category.associate = ({ PostCategory }) => {
    Category.hasMany(PostCategory,
      { foreignKey: 'category_id', as: 'categories' }
    )
  }

  return Category;
}

module.exports = CategorySchema;