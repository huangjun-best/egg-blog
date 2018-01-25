'use strict';
const _ = require('lodash');
const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async create() {
    const body = this.ctx.request.body;
    if(!this.ctx.session.user){
      //如果当前用户没有登录，则无法发表文章
      this.ctx.status = 400;
      this.ctx.body = {
        'code': '400',
        'message': '当前用户没有登录',
      };
      return;
    }
    const result = await this.app.mysql.insert('article', {
      title: body.title,
      content: body.desc,
      author: this.ctx.session.user,
      date: new Date().getTime()
    });
    console.log(result);
    this.ctx.body = {
      'code': '200',
      'message': '发表成功',
    }
  }
  async query() {
    const result = await this.app.mysql.select('article');
    this.ctx.body = result;
  }
}

module.exports = ArticleController;
