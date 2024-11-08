document.getElementById("btnGetCDCollection").addEventListener("click", function(event){
    event.preventDefault();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);// passando a minha requisição
        }
    };
    xmlhttp.open("GET", "cd_pacientes.xml", true);
    xmlhttp.send();
});

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr></tr>";

    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i <x.length; i++) { 
        table += "<tr class='cabecalhoTabela dadosTabela'><td>" +
        x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("PESO")[0].childNodes[0].nodeValue +
        "</td ><td>"+
        x[i].getElementsByTagName("ALTURA")[0].childNodes[0].nodeValue +
        "</td ><td>"+
        x[i].getElementsByTagName("GORDURA")[0].childNodes[0].nodeValue +
        `</td><td>`+
        x[i].getElementsByTagName("IMC")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("tabela").innerHTML += table;
  }