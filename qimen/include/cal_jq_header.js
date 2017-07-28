		var cal_month = new CCC(nian,yue,15)
 		var jq = c.solarTerm()
		document.write("<tr><td>" + nian + "年 " + ygz + " "+ yue + "月" +cal_month.mGz_Str() +"</td></tr>")	
		document.write("<tr><td>交节：" + jq.sTermInMonth[0] + " " + jq.sTermInMonth[1]+ "</td></tr>")