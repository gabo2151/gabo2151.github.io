function GetUser(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
var json_obj = JSON.parse(  GetUser('https://randomuser.me/api/?nat=de&inc=name,picture'));
document.getElementById("getUserDemo").innerHTML = "<img src='" + json_obj.results[0].picture.large + "' alt='' width='180' height='180' />" +
"<br /> <h2>" + json_obj.results[0].name.first + " " + json_obj.results[0].name.last + "</h2>";