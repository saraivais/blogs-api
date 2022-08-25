const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {}, {});

  return PostCategory;
};

module.exports = PostCategory;
