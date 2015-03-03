/* JavaScript basics - datatypes
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
devel: true
*/

function som(a,b)
{
	return a+b;
}

//uitbreiding fouten afhandelen
function som2(a,b)
{
	if(typeof a != 'number' || typeof b != 'number')
	{
		console.error('Foute invoer: geef 2 getallen in');
	}
	else
	{
		return a+b;
	}
}

//uitbreiding fouten afhandelen, alternatieve oplossing
function som3(a,b)
{
	if(isNaN(a) || isNaN(b))
	{
		console.error('Foute invoer: geef 2 getallen in');
	}
	else
	{
		var som = Number(a) + Number(b);
		return som;
	}
}

//test values
/*

som(1,6);
som(1,-6);
som(3,5.2);
som(1,'6');
som(1,'abc');

som2(1,6);
som2(1,-6);
som2(3,5.2);
som2(1,'6');
som2(1,'abc');

som3(1,6);
som3(1,-6);
som3(3,5.2);
som3(1,'6');
som3(1,'abc');

//*/