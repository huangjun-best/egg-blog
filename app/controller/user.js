'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const body = this.ctx.request.body;
    const result = await this.app.mysql.insert('user', {
      username: body.username,
      password: body.password,
      sex: '1'
    });
    this.ctx.body = result;
  }
}

module.exports = UserController;
