start = floor(nian/100)

var n = start*100

 for(var i = -1; i < 102; i++) {
	var x = n + i
	if(x==0) {
		continue
	}
	if(x == nian) {
 		document.write("<option selected value=" + x + ">" + x + "年</option>")
	} else {
 		document.write("<option value=" + x + ">" + x + "年</option>")
	} 
 }