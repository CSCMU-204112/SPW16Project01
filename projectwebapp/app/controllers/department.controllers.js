const pgp = require('pg-promise')(/* option */);
const dbconfig = require('../../config/database');
const db = pgp(dbconfig);

exports.getAll = function(req, res){

    db.any('select * from department;')
    .then(function(data){
            res.render('department',{
                data: data
            });
    })
    .catch(function(error){
        console.log(error);
    });
    

};