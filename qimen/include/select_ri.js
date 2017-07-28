for (var i = 1; i < 32; i++) {
	if (i == ri) {
		document.write("<option selected value=" + i + ">" + i + "日</option>")
	} else {
		document.write("<option value=" + i + ">" + i + "日</option>")
	}
}