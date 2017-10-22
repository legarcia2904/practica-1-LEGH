var express = require('express');
var router = express.Router();

//var multer = require('multer'); // v1.0.5
//var upload = multer(); // for parsing multipart/form-data

var LibrosCtrl = require('../controllers/LibrosCtrl');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', saludo:'gen 2017'});
});

/*router.get('/libros', function(req,res, next){
  res.render('index', { title: 'Libros', saludo:'gen 2017'});	
});

router.post('/libros', function(req,res,next){
	res.status(200).jsonp({nombre:'código Da Vinci', autor:'Dan Brown'});
});*/

/*router.route('/libros')
	.get(LibrosCtrl.getLibros)
	.post(upload.array(),LibrosCtrl.addLibro);

router.route('/libros/:id')
	.get(LibrosCtrl.getById)
	.put(upload.array(), LibrosCtrl.updateLibro)
	.delete(LibrosCtrl.deleteLibro);*/
/*
router.route('/autores')
	.get(); //Devolver todos los autores

router.route('/autores/:nombre')
	.get() //Devolver todos los libros del autor
	.put() //Actualizar nombre de autor en los libros
	.delete(); //Eliminar libros del autor
*/
	//Utilizar git, crear una cuenta en github y subir tarea1; no subir los node_modules; hacer README.md

//module.exports = router;

module.exports = function (app) {
    app.get('/libros', LibrosCtrl.getLibros);
    app.get('/libros/:id', LibrosCtrl.getById);
    app.post('/libros', LibrosCtrl.addLibro);
    app.put('/libros/:id', LibrosCtrl.updateLibro);
    app.delete('/libros/:id', LibrosCtrl.deleteLibro);

    app.get('/autores', LibrosCtrl.getAutores);
    app.get('/autores/:nombre', LibrosCtrl.getAutoresByNombre);
    app.put('/autores/:nombre', LibrosCtrl.updateAutores);
    app.delete('/autores/:nombre', LibrosCtrl.deleteAutor);
};
