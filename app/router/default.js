'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  router.get('/default/getArticleById', controller.default.home.getArticleById);
  router.get('/default/getTypeinfo', controller.default.home.getTypeInfo);
  router.get('/default/getListById/:id', controller.default.home.getListById);
  router.get('/default/getBooks', controller.default.home.getBooks);
  router.get('/default/getListByBookid/:bookid', controller.default.home.getListByBookid);
};
