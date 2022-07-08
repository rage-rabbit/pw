import express from 'express';
import * as path from 'path'

const router = express.Router();

router.get('/', function(req, res){
    res.redirect('/home');
});
 
router.get('/home', function(req, res){
    var options = {
        root: path.join(path.resolve(path.dirname('')))
    };
     
    var fileName = '/html/home.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});
 
router.get('/product', function(req, res){
    var options = {
        root: path.join(path.resolve(path.dirname('')))
    };
     
    var fileName = '/html/product.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});
 
router.get('/about', function(req, res){
    var options = {
        root: path.join(path.resolve(path.dirname('')))
    };
     
    var fileName = '/html/about.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

router.get('/team', function(req, res){
    var options = {
        root: path.join(path.resolve(path.dirname('')))
    };
     
    var fileName = '/html/team.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});
 
router.get('/contact', function(req, res){
    var options = {
        root: path.join(path.resolve(path.dirname('')))
    };
     
    var fileName = '/html/contact.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});
 
router.get('/login', function(req, res){
    var options = {
        root: path.join(path.resolve(path.dirname('')))
    };
     
    var fileName = '/html/login.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});
 
router.get('/admin', function(req, res){
    var options = {
        root: path.join(path.resolve(path.dirname('')))
    };
     
    var fileName = '/html/contact.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});
 
export default router;