		for(var i = start; i > -10; i--) {
			if(i > 0) {
				if(i == cent) {
					document.write('<option selected value=' + i + '> 公元' + i + '世纪</option>')	
				} else {
					document.write('<option value=' + i + '> 公元' + i + '世纪</option>')
				}
			} else if (i < 0) {
				if(i == cent) {
					document.write('<option selected value=' + i + '> 公元前' + (-i) + '世纪</option>')
				} else {
					document.write('<option value=' + i + '> 公元前' + (-i) + '世纪</option>')
				}
			}
		}