module.exports = appInfo => {
  const config = {};

  // keys
  config.keys = appInfo.name + '_1516064689802_6922';

  // mysql
  config.mysql = {
    clients: {
      // donnot change the name
      __ebdb: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '',
        database: 'sys',
      },
    },
  };

  return config;
};
