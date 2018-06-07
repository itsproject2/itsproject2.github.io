var message = new Array();
message[0] =  "";
message[1] =  "p";
message[2] =  "pr";
message[3] =  "pro";
message[4] =  "proj";
message[5] =  "proje";
message[6] =  "projec";
message[7] = "project";
message[8] = "project";
message[9] = "project";
message[10] = "projec";
message[11] = "proje";
message[12] =  "proj";
message[13] =  "pro";
message[14] =  "pr";
message[15] =  "p";

var reps = 2;
var speed =10; var p = message.length;
var T = "";
var C = 0;
var mC = 0;
var s = 0;
var sT = null;
if (reps < 1) reps = 1;
function doTheThing() {
T = message[mC];
A();
}
function A() {
s++;
if (s < 15) { s = 1;}
if (s == 1)  { document.title = '... '+T+' '; }
if (C < (15 * reps)) {
sT = setTimeout("A()", speed);
C++;
}
else {
C = 0;
s = 0;
mC++;
if(mC > p - 1) mC = 0;
sT = null;
doTheThing();
}
}
doTheThing();