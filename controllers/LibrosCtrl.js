
var libros = [
	{
		id: '101',
		titulo: 'Código Da Vinci',
		autor: 'Dan Brown',
		anio: 2010,
		genero: 'Novela'
	},
	{
		id:'102',
		titulo: 'Relatos de un viejo indecente',
		autor: 'Charles Bukowski',
		anio: 2010,
		genero: 'Relatos'
	}
];


exports.getLibros = function(req,res,next){
	console.log('GET /libros');
	res.status(200).jsonp(libros);
};

exports.addLibro = function(req,res,next){
	// req.body trae la información del post
	console.log('POST /libros');
	libros.push(req.body);
	res.status(200).jsonp(libros);
};

exports.getById = function(req,res,next){
	console.log('GET /libros/:id');
	console.log(req.params.id);
	var result = null;
	for (var i = 0; i < libros.length; i++) {
		if(libros[i].id == req.params.id) {
            result = libros[i];
		}
	}
	if(result == null) {
        result = {
        	'codigo': 403,
			'descripcion': 'No se encontro el libro solicitado'
		}
	}
	res.status(200).jsonp(result);
};

exports.updateLibro = function(req,res,next){
	console.log('PUT /libros/:id');
	//console.log(req.params.id);
	//console.log(req.body);
    var result = null;
    for (var i = 0; i < libros.length; i++) {
        if(libros[i].id == req.params.id) {
            result = libros[i];
            libros.splice(i, 0, req.body);
            libros.splice(i + 1, 1);
        }
    }
    if(result == null) {
        result = {
            'codigo': 403,
            'descripcion': 'No se encontro el libro solicitado'
        }
    }
	res.status(200).jsonp(result);
};

exports.deleteLibro = function(req,res,next){
	console.log('DELETE /libros/:id');
	console.log(req.params.id);
    var result = null;
    for (var i = 0; i < libros.length; i++) {
        if(libros[i].id == req.params.id) {
            result = libros[i];
            libros.splice(i, 1);
            i--;
        }
    }

    if(result == null) {
        result = {
            'codigo': 403,
            'descripcion': 'No se encontro el libro solicitado'
        }
    }
	res.status(200).jsonp(result);
};

/*Autores*/
exports.getAutores = function(req,res,next){
    console.log('GET /autores');
    var autores = []
    for (var i = 0; i < libros.length; i++) {
        autores.push(libros[i].autor);
    }
    res.status(200).jsonp(autores);
};

exports.getAutoresByNombre = function(req,res,next){
    console.log('GET /autores/:nombre');
    console.log(req.params.nombre);
    var result = [];
    for (var i = 0; i < libros.length; i++) {
        if(libros[i].autor == req.params.nombre) {
            result.push(libros[i]);
        }
    }
    if(result.length == 0) {
        result = {
            'codigo': 403,
            'descripcion': 'No se encontraron libros de ese autor'
        }
    }
    res.status(200).jsonp(result);
};

exports.updateAutores = function(req,res,next){
    console.log('PUT /autores/:nombre');
    console.log(req.params.nombre);
    var result = [];
    for (var i = 0; i < libros.length; i++) {
        if(libros[i].autor == req.params.nombre) {
            libros[i].autor = req.body.nuevo_nombre
            result.push(libros[i]);
        }
    }

    if(result.length == 0) {
        result = {
            'codigo': 403,
            'descripcion': 'No se encontro el libro solicitado'
        }
    }
    res.status(200).jsonp(result);
};

exports.deleteAutor = function(req,res,next){
    console.log('DELETE /autores/:id');
    console.log(req.params.id);
    var result = [];
    for (var i = 0; i < libros.length; i++) {
        if(libros[i].autor == req.params.nombre) {
            result.push(libros[i]);
            libros.splice(i, 1);
            i--;
        }
    }

    if(result.length == 0) {
        result = {
            'codigo': 403,
            'descripcion': 'No se encontro el libro solicitado'
        }
    }
    res.status(200).jsonp(result);
};