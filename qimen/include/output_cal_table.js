			var z, lun, count
			count = 1
			var max = days_in_month(nian, yue-1)
			
			if(parseInt(nian) < 0) {
				nian = parseInt(nian) + 1
			}
			
			var st = set_r()

			for(var i=1; i < 7; i++) {

			document.write("<tr style='font-size:10pt'>")
			{
				for(var j=0; j<7; j++) {

				if((count == 1) && (j<xingqi)){			
					document.write("<td> &nbsp;&nbsp;</td>")
				} else if (count > max) { 
					document.write("<td> &nbsp;&nbsp;</td>")
				} else {
				z = new CCC(nian, yue, count)
				lun = z.lunar()
				lun_str = lun.lunarDate_Str
				count = parseInt(eval(count))
				if(lun_str == "初一"){
					document.write("<td style='cursor:hand;font-size=9pt' onclick='" + st +count + "\"'><font color=blue>"  + count + lun.lunarMonth_Str + "月<br>" + "&nbsp;&nbsp;" + z.dGz_Str() + "</font></td>")
				} else {
					document.write("<td style='cursor:hand' onclick='" + st + count + "\"'>" + count + lun_str  + "<br>" + "&nbsp;&nbsp;" + z.dGz_Str() + "</font></td>")
				}
				count++	
			}
		}
	}
	document.write("</tr>")	

} 