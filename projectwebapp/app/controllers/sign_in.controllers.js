const pgp = require('pg-promise')(/* option */);
const dbconfig = require('../../config/database');
const db = pgp(dbconfig);
exports.checkUser = function(req, res){
    qury = "select count(*) as cc from member where member.m_email='"+req.body.m_email+"';";
    db.one(qury)
    .then(function(data){
       
        if(data.cc == '1'){
    res.redirect('/page_1');
     console.log('aaaaa');
   }else{

        console.log('afafafa');
       res.redirect('/sign_in');
    }
})
};