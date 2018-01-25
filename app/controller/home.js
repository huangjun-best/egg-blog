'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.tpl',{
      staticPath: `/public/dist/static/${this.config.version}`
    })
  }
  async dev() {
    await this.ctx.render('dev.tpl',{app:'hello'})
  }
}

module.exports = HomeController;
