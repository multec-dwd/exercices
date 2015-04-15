/* JavaScript Validation - Hello RegExp
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
//Hello Regexp
/Haas/.test('Mijn naam is Haas');
//Enkel kleine en/of hoofdletters?
/^[a-z]+$/i.test('AbRcD');
/^[a-z]+$/i.test('Abf3498');
//Alternatieve oplossing
/^[a-zA-Z]+$/.test('AbRcD');
/^[a-zA-Z]+$/.test('Abf3498');