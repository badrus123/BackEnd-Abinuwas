'use strict';
var abinuwas = require('./model.js');

module.exports = (app) => {
    //halaman index
    app.route('/')
        .get(abinuwas.index);

    //api ngambil semua data
    app.route('/get_all_user')
        .get(abinuwas.user);

    app.route('/get_all_book')
        .get(abinuwas.book);
    
    //api buat cari user dan buku
    app.route('/find_user/:cari_user')
        .get(abinuwas.cari_user);

    app.route('/find_book/:cari_book')
        .get(abinuwas.cari_book);    

    //api buat nambah user dan buku
    app.route('/tambah_user')
        .post(abinuwas.tambah_user);

    app.route('/tambah_book')
        .post(abinuwas.tambah_book);

    //api buat update user
    app.route('/update_user')
        .put(abinuwas.update_user);

    app.route('/update_book')
        .put(abinuwas.update_book);

    //api buat delete user
    app.route('/delete_user')
        .delete(abinuwas.delete_user);
        
    app.route('/delete_book')
        .delete(abinuwas.delete_book);
        

};