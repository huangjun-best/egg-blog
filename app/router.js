'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller} = app;
  router.get('/dev', controller.home.dev);

  //接口请求
  router.post('/user/register', controller.user.register);
  router.post('/user/login', controller.user.login);

  router.post('/articleql/create', controller.article.create);
  router.get('/articleql/query', controller.article.query);

  router.get('/', controller.home.index);
  router.get('/index', controller.home.index);
};
