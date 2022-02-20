'use strict';
const Controller = require('egg').Controller;
class AdminControl extends Controller {
  /** 登录验证 */
  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    // const sql = " SELECT username FROM berwin WHERE username = '" + userName +
    //   "' AND password = '" + password + "'";
    const sql = ' SELECT username FROM berwin WHERE username = ? AND password = ?';
    const res = await this.app.mysql.query(sql, [ userName, password ]);
    if (res.length > 0) {
      // 登录成功,进行session缓存
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      console.log(this.ctx.session.openId);
      this.ctx.body = { data: '登录成功', openId };
    } else {
      this.ctx.body = { data: '登录失败' };
    }
  }
  /** 获取分类列表 */
  async getType() {
    const resType = await this.app.mysql.select('type');
    this.ctx.body = { data: resType };
  }
  /** 添加文章 */
  async addArticle() {
    const tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.insert('article', tmpArticle);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;

    this.ctx.body = {
      isScuccess: insertSuccess,
      insertId,
    };
  }
  /** 多次点击添加文章&修改文章 */
  async updateArticle() {
    const tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.update('article', tmpArticle);
    const updateSuccess = result.affectedRows === 1;
    console.log(updateSuccess);
    this.ctx.body = {
      isScuccess: updateSuccess,
    };
  }
  /** 获取文章列表 */
  async getArticlelist() {
    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.view_count as view_count,' +
      'article.introduce as introduce,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'ORDER BY article.id DESC ';
    const resList = await this.app.mysql.query(sql);
    this.ctx.body = { list: resList };
  }
  /** 删除文章*/
  async delArticle() {
    const id = this.ctx.params.id;
    const res = await this.app.mysql.delete('article', { id });/** 删除语法，以后可能会优化 */
    this.ctx.body = { data: res };
  }
  /** 根据id获取文章 */
  async getArticleById() {
    const id = this.ctx.params.id;
    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ,' +
      'type.id as typeId ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'WHERE article.id=' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
  /** 判断用户是否登录*/
  async isLogin() {
    console.log(this.ctx.session.openId);
    if (this.ctx.session.openId) {
      this.ctx.body = { data: '已经登陆' };
    } else {
      this.ctx.body = { data: '没有登录' };
    }
  }
  /** 添加小册*/
  async addBooks() {
    const { addBook } = this.ctx.request.body;
    const result = await this.app.mysql.insert('books', { bookname: addBook });
    const updateSuccess = result.affectedRows === 1;
    console.log(updateSuccess);
    this.ctx.body = {
      isScuccess: updateSuccess,
    };
  }
  /** 获取小册*/
  async getBooks() {
    const result = await this.app.mysql.query('SELECT bookname,id FROM books');
    this.ctx.body = { data: result };
  }
  /** 编辑小册*/
  async updateBooks() {
    console.log(' 编辑小册 ');
  }
}
module.exports = AdminControl;
