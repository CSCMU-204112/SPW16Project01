const pgp = require('pg-promise')(/* option */);
const dbconfig = require('../../config/database');
const db = pgp(dbconfig);

exports.insertMember = function(req, res){

    /*db.one("select member.m_email from member where member.m_email='"+res.body['m_email']+"';")
    .then(function(data){
    res.redirect('/sign_in'); //แสดงค่าทีส่งกลับมา
    });*/
    db.one('insert into member(m_fname, m_lname, m_email, m_password) values($1, $2, $3, $4) returning m_email', [req.body.m_fname, req.body.m_lname, req.body.m_email, req.body.m_password])
    .then(function(data){
        console.log(`Insert m_email ${data.m_email}`);
        res.redirect('/sign_up');
    })
    .catch(function(error){
        console.error(error);
    });

};