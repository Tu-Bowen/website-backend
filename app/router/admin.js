'use strict';
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.adminauth();
  router.post('/admin/checkLogin', controller.admin.index.checkLogin);
  router.get('/admin/getType', auth, controller.admin.index.getType);
  router.post('/admin/addArticle', auth, controller.admin.index.addArticle);
  router.post('/admin/updateArticle', auth, controller.admin.index.updateArticle);
  router.get('/admin/getArticlelist', auth, controller.admin.index.getArticlelist);
  router.get('/admin/delArticle/:id', auth, controller.admin.index.delArticle);
  router.get('/admin/getArticleById/:id', auth, controller.admin.index.getArticleById);
  router.get('/admin/isLogin', auth, controller.admin.index.isLogin);
  router.post('/admin/addBooks', auth, controller.admin.index.addBooks);
  router.get('/admin/getBooks', auth, controller.admin.index.getBooks);
};
