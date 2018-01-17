'use strict';

// had enabled by egg
// exports.static = true;

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
}

exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}

exports.security = {
  csrf: {
    headerName: 'x-csrf-token',
    useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
    cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
    sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfTok
  },
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};
