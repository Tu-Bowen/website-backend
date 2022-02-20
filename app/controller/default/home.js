'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'default.home.index';
  }
  async getArticleList() {
    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      "FROM_UNIXTIME(article.addtime,'%Y-%m-%d') as addTime," +
      'article.view_count as view_count ,' +
      'type.typename as typeName, ' +
      'books.bookname as bookName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id LEFT JOIN books ON article.book_id = books.Id ';
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }
  async getArticleById() {
    const id = this.ctx.query.id;
    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      "FROM_UNIXTIME(article.addtime,'%Y-%m-%d') as addTime," +
      'article.view_count as view_count ,' +
      'type.typename as typeName ,' +
      'type.id as typeId ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'WHERE article.id=' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
  // 得到类别名称和编号
  async getTypeInfo() {
    const result = await this.app.mysql.query('SELECT * FROM type');
    this.ctx.body = { data: result };
  }
  // 根据类别ID获得文章列表
  async getListById() {
    const id = this.ctx.params.id;
    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      "FROM_UNIXTIME(article.addtime,'%Y-%m-%d') as addTime," +
      'article.view_count as view_count ,' +
      'type.typeName as typeName, ' +
      'books.bookname as bookName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id RIGHT JOIN books ON article.book_id = books.Id ' +
      'WHERE type_id=' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
  async getBooks() {
    const result = await this.app.mysql.query('SELECT books.id as bookid,bookname FROM books');
    this.ctx.body = { data: result };
  }
  async getListByBookid() {
    const bookid = this.ctx.params.bookid;
    const sql = 'SELECT article.id as id,' +
    'article.title as title,' +
    'article.introduce as introduce,' +
    "FROM_UNIXTIME(article.addtime,'%Y-%m-%d') as addTime," +
    'article.view_count as view_count ,' +
    'books.bookname as bookname ' +
    'FROM article LEFT JOIN books ON article.book_id = books.Id ' +
    'WHERE book_id=' + bookid;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
}
module.exports = HomeController;
