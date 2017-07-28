		if(!isNaN(nian)){
			nian = document.dum.y.value
		}

		if(parseInt(nian) < 0) {
			c = new CCC(parseInt(nian) + 1, yue, 15)
		} else {
			c = new CCC(nian, yue,15)
		}


		var ygz = c.yGz_Str()
		var xingqi = c.day()