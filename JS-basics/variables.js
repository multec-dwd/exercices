/* JavaScript basics
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/

//1 - variables & the console
var a = 10;
a += 5;
a; //15

//2 - variable types
var b=1;
b; //1
typeof b; //"number"
b += 1.5;
typeof b; //"number"
b += "hallo";
typeof b; //"string"

//3 - casting variables
var c = "23";
c + 4; //"234"
c = Number(c);
c + 4; //27