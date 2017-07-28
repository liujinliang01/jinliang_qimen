if(isNaN(shi)){
	shi = d.getHours()
}

for (var i = 0; i < 25; i++) {
	if(i == shi) {
		document.write("<option selected value=" + i + ">" + i + "时</option>")
	//document.write("<option  selected = " + h + " value=" + i + ">" + i + "时</option>")
	} else {
		document.write("<option value=" + i + ">" + i + "时</option>")		
	}
}