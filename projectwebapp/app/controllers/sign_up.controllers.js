const pgp = require('pg-promise')(/* option */);
const dbconfig = require('../../config/database');
const db = pgp(dbconfig);

exports.insertMember = function(req, res){

    db.one("select count(*) as cc from member where member.m_email='"+req.body.m_email+"';")
    .then(function(data){
        console.log('aaaaa');
        if(data.cc != '0'){
    res.redirect('/sign_up');
   }else{
    db.one('insert into member(m_fname, m_lname, m_email, m_password) values($1, $2, $3, $4) returning m_email', [ req.body.m_fname, req.body.m_lname, req.body.m_email, req.body.m_password])
    .then(function(data){
        console.log(`Insert m_email ${data.m_email}`);
        res.redirect('/');
    })
    .catch(function(error){
        console.error(error);
    });
} 
    });


};