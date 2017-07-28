		if (cent > 0) {
			cent = cent - 1
		}
		var n = cent*100
		//alert("n = " + n)
 		for(var i = 0; i < 102; i++) {
			var x = n + i
			if(x == 0) {
				continue
			}
			if(x == nian) {
 				document.write("<option selected value=" + x + ">" + x + "年</option>")
			} else {
 				document.write("<option value=" + x + ">" + x + "年</option>")
			} 
 		}