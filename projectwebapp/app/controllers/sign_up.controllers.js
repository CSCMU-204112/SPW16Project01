//const pgp = require('pg-promise')(/* option */);
/*const dbconfig = require('../../config/database');
const db = pgp(dbconfig);

exports.insertMember = function(req, res){

    db.one("select Member.email from Member where Member.email=res.body['e_email'];");
    .then(function(data){
    res.redirect('/sign_up'); //แสดงค่าทีส่งกลับมา
    });
    db.one('insert into student(fname, lname, email, password) values($1, $2, $3, $4) returning email', [req.body.fname, req.body.lname, req.body.email, req.body.password])
    .then(function(data){
        console.log(`Insert email ${data.email}`);
        res.redirect('/sign_up');
    })
    .catch(function(error){
        console.error(error);
    });

};*/