/* JavaScript DOM - mouse events
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser: true,
devel: true
*/

window.onload = function() {

    var links = document.getElementsByTagName("a");
    
    for(var i=0, j=links.length; i < j ; i++)
    {
        links[i].onclick = handler;
        links[i].ondblclick = handler;
    }
    
    
    var divs = document.getElementsByTagName("div");
    
    for(i=0, j=divs.length; i < j ; i++)
    {
        divs[i].onclick = handler;
        divs[i].ondblclick = handler;
    }

};


function handler(e) {
    //e bevat het event object
    //e.target bevat het element waarop het event plaatsvond (in deze oefening één van de links)
    
    //als target link is, schrijf ook url naar console
    if(e.target.localName === "a") console.log("element: " + e.target.localName + ", url: " +e.target.hash + ", event: " + e.type);
    else console.log("element: " + e.target.localName + ", event: " + e.type);
}