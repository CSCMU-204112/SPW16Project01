var sign_upCtrl = require('./controllers/sign_up.controllers');
var sign_in = require('./controllers/sign_in.controllers');
//var userpost = reqire('./controllers/userpost.controllers')
module.exports = function(app){
    app.get('/', function(req, res){
        res.render('sign_in');
        app.post('/page_1', sign_in.checkUser);
        app.get('/page_1', function(req, res){
        res.render('page_1');
    });
        app.get('/sign_in', function(req, res){
        res.render('sign_in');
    });
    });
    
    app.get('/sign_up', function(req, res){
        res.render('sign_up');
    });
    app.post('/sign_up', sign_upCtrl.insertMember);

    //app.post('/crate_forum',userpost.inserposttoppic)
    //app.post('/crate_forum', function(req, res){
     //   res.render('page_2');
    //});
}