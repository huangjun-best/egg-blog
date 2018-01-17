'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1516066475672_7453';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl':'nunjucks'
    }
  };

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'test'
    },
    app: true,
    agent: false
  };

  config.jwt = {
    secret: '123456',
    enable: true,
    match: '/success'
  }



  return config;
};
