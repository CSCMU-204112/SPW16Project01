const pgp = require('pg-promise')(/* option */);
const dbconfig = require('../../config/database');
const db = pgp(dbconfig);
exports.getAll = function(req, res){


    db.any('select * from student;')
    .then(function(data){
            res.render('student',{
                data: data
            });
    })
    .catch(function(error){
        console.log(error);
    });
    

};

exports.getAllWithDepartment = function(req, res){


    db.any('select sid, fname, lname,grade, name as department_name from student,department where (student.dep_id = department.depid) union  select sid, fname, lname, grade, cast(dep_id as text) as department_name from student where dep_id  is NULL order by sid;')
    .then(function(data){
            res.render('student',{
                data: data,
                showDepartment: true
            });
    })
    .catch(function(error){
        console.log(error);
    });
    

};

exports.insertStudent = function(req, res){

    db.one('insert into student(sid, fname, lname, grade) values($1, $2, $3, $4) returning sid', [req.body.sid, req.body.fname, req.body.lname, req.body.grade])
    .then(function(data){
        console.log(`Insert student_id ${data.sid}`);
        res.redirect('/student');
    })
    .catch(function(error){
        console.error(error);
    });

};