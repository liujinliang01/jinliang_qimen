function display_hj_table(){

document.write("\
<table border=1>\
<tr>\
<td id=4_gong_hj>\
</td>\
<td id=9_gong_hj>\
</td>\
<td id=2_gong_hj>\
</td>\
</tr>\
\
<tr>\
<td id=3_gong_hj>\
</td>\
<td id=5_gong_hj>\
</td>\
<td id=7_gong_hj>\
</td>\
</tr>\
\
<tr>\
<td id=8_gong_hj>\
</td>\
<td id=1_gong_hj>\
</td>\
<td id=6_gong_hj>\
</td>\
</tr>\
</table>\
")

}

function assign_gong_hj(j,k){
var a = new Array(10)

a = get_gong_hj(k)
var s, n

for (var i=1; i<10; i++){
	s = "<table border=0>"
	
	s = s + a[i] + "</table>"
	//alert(s)

	if(j>0){
		n = cycle(k+j-1+i-1,9)
		document.getElementById(n+"_gong_hj").innerHTML = s
	} else {
		n = cycle(-k-j+1-i+1,9)
		document.getElementById(n+"_gong_hj").innerHTML = s
	}
}
}

function get_gong_hj(k){
	var a = new Array(10)
	var s = ""
	var x
for(var m=1; m<10; m++) {
	s = ""
	for(var i=1;i<5;i++){
	
		x = cycle(1+ 10*(k-1)+(i-1)*9 + m-1,60)
		if(m>6 && i==4){
			s = s + "<tr><td>" + "&nbsp;" + "</td></tr>" 		
		}else if(i==4){
			s = s + "<tr><td>" + huajia[cycle(x+3*9,60)] + "</td></tr>"
		} else {
			s = s + "<tr><td>" + huajia[x] + "</td><td>" + huajia[cycle(x+3*9,60)] + "</td></tr>"
		}

/*
		if(i%2 == 1){
			if(m>6 && i==7){
				s= s + "<tr><td>" + "&nbsp;"
			}else{
	 			s = s + "<tr><td>" + huajia[x] 
			}
		} else {
			s = s  + huajia[x] + "</td></tr>"
		}
*/

	}

	a[m] = s
}

	return a
}

/*
function get_gong_hj(k){
	var a = new Array(10)
	var s = ""
	var x
for(var m=1; m<10; m++) {
	s = ""
	for(var i=1;i<8;i++){
	
		x = cycle(1+ 10*(k-1)+(i-1)*9 + m-1,60)
		if(i%2 == 1){
			if(m>6 && i==7){
				s= s + "<tr><td>" + "&nbsp;"
			}else{
	 			s = s + "<tr><td>" + huajia[x] 
			}
		} else {
			s = s  + huajia[x] + "</td></tr>"
		}


	}

	a[m] = s
}

	return a
}
*/
