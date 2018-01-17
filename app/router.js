'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/dev', controller.home.dev);
  router.get('/*', controller.home.index);
};
