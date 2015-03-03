/* JavaScript basics - datatypes
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser: true,
devel: true
*/

//var student = {firstName:"Macbook Pro",lastName:"Mac OS X", EducationProgram:"17 inch", laptop:{type:"Macbook Pro",os:"Mac OS X", screenSize:"17 inch"}};

//indien geen studenten opgeslagen in de localStorage, maak lege array aan, indien wel plaats de studenten in de "students" array.
var students = (localStorage.getItem("students") === undefined || localStorage.getItem("students") === null)? [] : JSON.parse(localStorage.getItem("students"));

//student object toevoegen aan array
function addStudent(student){
    students.push(student);
}

//students array opslaan in de localstorage
function saveData(){
    localStorage.setItem("students",JSON.stringify(students));
}

/* students printen in console volgens formaat:
Student 1: Michel Drets; opleiding Multec
Laptop: Macbook Pro, Mac OS X, 17 inch
------
*/
function printData(){
    var resultString = "";
    for(var i=0, j=students.length; i<j; i++){
        var student = students[i];
        resultString += "Student " + (i+1) +": " + student.firstName + " " + student.lastName +"; opleiding " + student.educationProgram + "\n";
        resultString += "Laptop: " + student.laptop.type + ", Mac OS X, 17 inch\n";
        resultString += "------\n";
    }
    console.log(resultString);
}

//toon aantal studenten
function countStudents(){
    console.log(students.length);
}