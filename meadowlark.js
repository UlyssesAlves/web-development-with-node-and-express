var express = require("express");
var path = require("path");

var app = express();

var frasesDeIncentivo = [
	"Conquiste seus medos ou seus medos irão conquistar você.",
	"Rios precisam de fontes.",
	"Não tema o que você não conhece.",
	"Você terá uma surpresa agradável.",
	"Sempre que possível, mantenha as coisas simples."
];

app.set('views', 'views');
app.set('view engine', 'jade');

app.locals.basedir = path.join(__dirname, 'views');

app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/about", function(req, res) {
	var fraseDoDia = frasesDeIncentivo[Math.floor(Math.random() * frasesDeIncentivo.length)];

	res.render("about", {fraseDoDia: fraseDoDia});
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