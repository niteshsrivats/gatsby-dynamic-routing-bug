const path = require('path');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: '/products/:id/',
    matchPath: '/products/:id/',
    component: path.resolve('./src/components/Product.js'),
  });
};
