var express = require("express");
var path = require("path");

var fortune = require("./lib/fortune.js");

var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.locals.basedir = path.join(__dirname, 'views');

app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/about", function(req, res) {
	res.render("about", {fraseDoDia: fortune.getFortune() });
});

// Mostra as informações adicionais que o browser está enviando para o servidor.
app.get("/headers", function(req, res) {
	res.set("Content-Type", "text/plain");

	var headersInfo = "";

	for (var name in req.headers) {
		headersInfo += name + ": " + req.headers[name] + "\n";
	}

	res.send(headersInfo);
});

// Página 404 customizada.
app.use(function(req, res) {
	res.status(404);
	res.render("404");
});

// Página 500 customizada.
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render("500");
});

app.listen(app.get("port"), function() {
	console.log("Express iniciado em http://localhost:" + app.get("port") + "; Pressione Ctrl-C  para sair.");
});