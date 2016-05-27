//const pgp = require('pg-promise')(/* option */);
//const dbconfig = require('../../config/database');
//const db = pgp(dbconfig);

/*exports.insertusertoppic = function(req, res){

    db.any('insert into userpost(u_ptoppic, u_pdatapost) values($1, $2) returning u_ptoppic,u_pdatapost', [ req.body.u_ptoppic,req.body.u_pdatapost])
    .then(function(data){
        console.log(`Insert u_ptoppic u_pdatapost${data.u_ptoppic,data.u_pdatapost}`);
        res.redirect('/page_2');
    })
    .catch(function(error){
        console.error(error);
    });
} 
    });


};*/