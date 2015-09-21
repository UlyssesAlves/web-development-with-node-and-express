	var frasesDeIncentivo = [
		"Conquiste seus medos ou seus medos irão conquistar você.",
		"Rios precisam de fontes.",
		"Não tema o que você não conhece.",
		"Você terá uma surpresa agradável.",
		"Sempre que possível, mantenha as coisas simples."
];

exports.getFortune = function() {
	var index = Math.floor(Math.random() * frasesDeIncentivo.length);

	return frasesDeIncentivo[index];
};