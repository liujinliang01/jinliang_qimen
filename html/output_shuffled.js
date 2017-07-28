function display_shuffled(){
var a = populate_arr(11)
a = shuffle(a,10)
var s  = "<table>"

var x

for(var i=1; i<2+1; i++){
	s = s + "<tr class=balls>"
		for(var k=1; k<5+1;k++){
			x =  ((i-1)*5) + k
			
			s = s + "<td class=balls><button name=b" + a[x] + " onclick=\"mark_donggong(" + a[x] + ",'fei');document.all.choose_lot.style.visibility='hidden'\"> <img src='icon/step0.jpg'> </button></td>"
		}
 	s = s +"</tr>"
}
s = s + "</table>"
document.getElementById("choose_lot").innerHTML = s
}