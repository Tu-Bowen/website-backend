/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_tutu5201314';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'tutu5201314',
      // database
      database: 'blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  config.security = {
    csrf: { enable: false },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    // origin: 'http://localhost:3001',
    // 只允许这个域进行访问接口
    credentials: true, // 开启认证，允许cookie跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  /** 注意以后项目的维护，因为加密算法的API有的被弃用了 */
  config.session = {
    // 设置session cookie里面的key
    key: 'SESSION_ID',
    // 设置最大的过期时间
    maxAge: 30 * 1000 * 60,
    // 设置是否只服务端可以访问
    httpOnly: true,
    // 设置是否加密
    encrypt: true,
    // 设置为true每次刷新页面的时候session都会被延期
    renew: true,
  };
  config.cookies = {
    sameSite: 'none',
  };
  return {
    ...config,
    ...userConfig,
  };
};
