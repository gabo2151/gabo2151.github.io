var preg1 = "0";
var preg2 = "0";
var preg3 = "0";
var preg4 = "0";
var preg5 = "0";
var pts = 0;

function resp1(valor) {preg1 = valor};
function resp2(valor) {preg2 = valor};
function resp3(valor) {preg3 = valor};
function resp4(valor) {preg4 = valor};
function resp5(valor) {preg5 = valor};


function evaluar() 
{ 
	if(preg1 == "A") {pts=pts+2};
	if(preg1 == "B") {pts=pts+1};
	
	if(preg2 == "A") {pts=pts+2};
	if(preg2 == "B") {pts=pts+1};
	
	if(preg3 == "A") {pts=pts+2};
	if(preg3 == "B") {pts=pts+1};
	
	if(preg4 == "A") {pts=pts+2};
	if(preg4 == "B") {pts=pts+1};
	
	if(preg5 == "A") {pts=pts+2};
	if(preg5 == "B") {pts=pts+1};
	
	
	if(pts < 4) {alert("Puntaje: "+pts+"\n\n¿Crees en Dios?\n-Si: Reza (o lo que haga tu religión)\n-No: Llora")};
	if(4<=pts && pts<=7) {alert("Puntaje: "+pts+"\n\nSin desmotivarse, ¡Vamos que se puede!")};
	if(pts > 7) {alert("Puntaje: "+pts+"\n\nSeguro que si")};
}

