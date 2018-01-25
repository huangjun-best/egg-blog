'use strict';
const _ = require('lodash');
const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const body = this.ctx.request.body;
    const getName = await this.app.mysql.get('user', {
      username: body.username,
    });
    if(getName) {
      this.ctx.body = {
        'code': '400',
        'message': '用户名已存在',
      };
      return;
    }
    const result = await this.app.mysql.insert('user', {
      username: body.username,
      password: body.password,
      sex: '1'
    });
    this.ctx.body = _.merge(result, { "message": "注册成功" });
  }

  async login() {
    const body = this.ctx.request.body;
    const result = await this.app.mysql.get('user', {
      username: body.username,
    });
    if(!result) {
      this.ctx.status = 400;
      this.ctx.body = {
        'code': '400',
        'message': '用户名不存在',
      };
      return;
    }
    if(result.password !== body.password){
      this.ctx.status = 400;
      this.ctx.body = {
        'code': '400',
        'message': '密码错误',
      };
      return;
    }
    //登录成功
    this.ctx.session.user = body.username;
    this.ctx.body = {
      'code': '200',
      'message': '登录成功',
    }
  }
}

module.exports = UserController;
