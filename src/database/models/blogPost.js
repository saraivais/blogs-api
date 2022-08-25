const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {}, {});

  return BlogPost;
};