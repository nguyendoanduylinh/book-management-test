const Connection = require("./connection");

class Bookshelf {
  constructor() {
    this.connection = Connection.createConnection();
    this.connection.connect((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connect success!");
      }
    });
  }

  getBookshelfs() {
    return new Promise((resolve, reject) => {
      this.connection.query("select * from bookshelf", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  createBookshelf(bookshelf) {
    let insertQuery = `insert into bookshelf(name, price, description)
                           VALUES ('${bookshelf.name}', ${bookshelf.price}, '${bookshelf.description}')`;
    this.connection.query(insertQuery, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Insert success");
      }
    });
  }

  getBookshelf(id) {
    return new Promise((resolve, reject) => {
      let query = `select *
                         from bookshelf
                         where id = ${id}`;
      this.connection.query(query, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  updateBookshelf(id, bookshelf) {
    let query = `update bookshelf set name = '${bookshelf.name}', price = ${bookshelf.price}, description= '${bookshelf.description}' where id = ${id}`;
    this.connection.query(query, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Update success");
      }
    });
  }

  deleteBookshelf(id) {
    let query = `delete from bookshelf where id = ${id}`;
    this.connection.query(query, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Delete success");
      }
    });
  }
}

module.exports = Bookshelf;
