if(isNaN(fen)){
	fen = d.getMinutes()
}

for (var i = 0; i < 60; i++) {
	if(i == fen) {
	//document.write("<option selected value=" + i + ">" + i + "分</option>")
		document.write("<option selected value=" + i + ">" + i + "分</option>")
	} else {
		document.write("<option value=" + i + ">" + i + "分</option>")
	}
}