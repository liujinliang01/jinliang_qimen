var shi_tiangan = new Array("","甲","乙","丙","丁","戊","己","庚","辛","壬","癸")
var shier_dizhi = new Array("","子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥")
/*
var huajia = new Array("",
"甲子","乙丑","丙寅","丁卯","戊辰",
"己巳","庚午","辛未","壬申","癸酉",
"甲戌","乙亥","丙子","丁丑","戊寅",
"己卯","庚辰","辛巳","壬午","癸未",
"甲申","乙酉","丙戌","丁亥","戊子",
"己丑","庚寅","辛卯","壬辰","癸巳",
"甲午","乙未","丙申","丁酉","戊戌",
"己亥","庚子","辛丑","壬寅","癸卯",
"甲辰","乙巳","丙午","丁未","戊申",
"己酉","庚戌","辛亥","壬子","癸丑",
"甲寅","乙卯","丙辰","丁巳","戊午",
"己未","庚申","辛酉","壬戌","癸亥"
)
*/
var yin_jiuju = new Array("","阴一局","阴二局","阴三局","阴四局","阴五局","阴六局","阴七局","阴八局","阴九局")
var yang_jiuju = new Array("","阳一局","阳二局","阳三局","阳四局","阳五局","阳六局","阳七局","阳八局","阳九局")
var san_yuan = new Array("","上元","中元","下元")

function zhoushi_jushu(c, x) {
	var passed_years = 60 - c.hGz()
	var bianju_year = c.year() + passed_years
	//document.write("<p> ju_num[0] 1 = " + ju_num[0])
	if((x-c.year()) > passed_years) {
		if (ju_num[1] > 0) {
			ju_num[1] = cycle(ju_num[1]+6, 9)
			ju_num[0] = yin_jiuju[ju_num[1]] + " " + (bianju_year + 1) + "年" + passed_years + "岁换局"	
		} else {
			var k = -ju_num[1] - 6
			k = -cycle(k,9)
			ju_num[1] = k
			ju_num[0] = yin_jiuju[-k]  + " " + (bianju_year + 1) + "年" + passed_years + "岁换局"
		}				
	} 
}

function zhoushi_shizhu(c, x) {
	var passed = x - c.year()
	var i = c.hGz() + passed
	i = cycle(i,60)
	return huajia[i]
}

function huajia_xushu(str) {
	var hj = new Array(61)
	hj[0] = ""
	var x, y
	return locate(str,huajia)
}

function ding_fen_ganzhi(shi_24, shi_ganzhi,fen) {
	var x = floor(fen/10)
	x = x + 1
	if(shi_24%2 == 0) {
		x = x + 6		
	} 

	var fen_dizhi = shier_dizhi[x]
	var shichen_tiangan = shi_ganzhi.substring(0,1)	
	var fen_ganzhi = zhi_peigan(dungan(shichen_tiangan),fen_dizhi)
	return fen_ganzhi
}	

function fenjia_jushu(shichen_gz_xushu,fen_gz) {
	//document.write("<p> shi = " + shi)

	var jieqi_yuan
	var yuan = ding_sanyuan(shichen_gz_xushu)
	if(shi > 11) {
		jieqi_yuan = "夏至" + yuan
	} else {
		jieqi_yuan = "冬至" + yuan
	}
	var a = new Array(3)
	a = ding_jushu(jieqi_yuan)

	return a
}


function zhi_peigan(zishi_g,z) {
	var zishi_gan_xushu = gan_xushu(zishi_g)
	var fenzhi_xushu = zhi_xushu(z)
	var target_gan_xushu = cycle(zishi_gan_xushu + fenzhi_xushu - 1, 10)
	var target_gan = shi_tiangan[target_gan_xushu]
	return target_gan+z	
}


function locate(str, ar) {
	for(var i=0; i<ar.length + 1; i++) {
		if(ar[i] == str) {
			return i
		}
	}
}


function gan_xushu(str) {
	return locate(str,shi_tiangan)
}

function zhi_xushu(str) {
	return locate(str,shier_dizhi)	
}

function dungan(str) {
	switch(str){
		case "甲":
		case "己":
		return "甲"

		case "乙":
		case "庚":
		return "丙"

		case "丙":
		case "辛":
		return "戊"

		case "丁":
		case "壬":
		return "庚"

		case "戊":
		case "癸":
		return "壬"

		default:
		return "dungan error"
	}
}

function shi24_to_dizhi(x) {
	switch(x) {
		case 23:
		case 0:
		return "子"
		case 1:
		case 2:
		return "丑"
		case 3:
		case 4:
		return "寅"
		case 5:
		case 6:
		return "卯"
		case 7:	
		case 8:
		return "辰"
		case 9:
		case 10:
		return "巳"
		case 11:
		case 12:
		return "午"
		case 13:
		case 14:
		return "未"
		case 15:
		case 16:
		return "申"
		case 17:
		case 18:
		return "酉"
		case 19:
		case 20:
		return "戌"
		case 21:
		case 22:
		return "亥"
		default:
		return "dizhi error"
	}
}

function liunian_shizhu(x) {
	var y = cycle((x - 3) , 12) 
	return (y - 1) * 2
}

function xingshi_shizhu(x) {
	x = cycle(x,12)
 	return (x - 1) * 2	
}

function fengan(x,y) {
	x = cycle(x,10)
	if (x > 5){
		x = x - 5
	}
	//document.write("<p>y = " + y)
	var z = ((x-1)*2 + 1) + (y - 1)

	if (cycle(z,10) != 1) {
		z = cycle(z,10)
		switch(z) {
			case 2:
			return "乙"

			case 3:
			return "丙"

			case 4:
			return "丁"

			case 5:
			return "戊"

			case 6:
			return "己"

			case 7:
			return "庚"

			case 8:
			return "辛"

			case 9:
			return "壬"

			case 10:
			return "癸"

			default:
			return "error"
		}
	} else {
		var n = y - (z - 1)
		n = cycle(n, 12)
		switch(n) {
			case 1:
			return "戊"

			case 3:
			return "癸"

			case 5:
			return "壬"

			case 7:
			return "辛"

			case 9:
			return "庚"

			case 11:
			return "己"

			default:
			return "error"
		}
	}
}

function ding_jushu(jq_yuan) {
//根据“某节某元”算出局数, 结果储存在一个Array(2)中, Array[0] 是中文String, 如"阴二局", Array[1] 是数字形式 如"-2"

	var ju = new Array(3)
 switch(jq_yuan) {
	case "立春上元":
	ju[0] = "阳八局"
	ju[1] = 8
	return ju

	case "立春中元":
	ju[0] = "阳五局"
	ju[1] = 5
	return ju

	case "立春下元":
	ju[0] = "阳二局"
	ju[1] = 2
	return ju

	case "雨水上元":
	ju[0] = "阳九局"
	ju[1] = 9
	return ju

	case "雨水中元":
	ju[0] = "阳六局"
	ju[1] = 6
	return ju

	case "雨水下元":
	ju[0] = "阳三局"
	ju[1] = 3
	return ju

	case "惊蛰上元":
	ju[0] = "阳一局"
	ju[1] = 1
	return ju

	case "惊蛰中元":
	ju[0] = "阳七局"
	ju[1] = 7
	return ju

	case "惊蛰下元":
	ju[0] = "阳四局"
	ju[1] = 4
	return ju

	case "春分上元":
	ju[0] = "阳三局"
	ju[1] = 3
	return ju

	case "春分中元":
	ju[0] = "阳九局"
	ju[1] = 9
	return ju

	case "春分下元":
	ju[0] = "阳六局"
	ju[1] = 6
	return ju

	case "清明上元":
	ju[0] = "阳四局"
	ju[1] = 4
	return ju


	case "清明中元":
	ju[0] = "阳一局"
	ju[1] = 1
	return ju


	case "清明下元":
	ju[0] = "阳七局"
	ju[1] = 7
	return ju



	case "谷雨上元":
	ju[0] = "阳五局"
	ju[1] = 5
	return ju


	case "谷雨中元":
	ju[0] = "阳二局"
	ju[1] = 2
	return ju


	case "谷雨下元":
	ju[0] = "阳八局"
	ju[1] = 8
	return ju


	case "立夏上元":
	ju[0] = "阳四局"
	ju[1] = 4
	return ju


	case "立夏中元":
	ju[0] = "阳一局"
	ju[1] = 1
	return ju


	case "立夏下元":
	ju[0] = "阳七局"
	ju[1] = 7
	return ju


	case "小满上元":
	ju[0] = "阳五局"
	ju[1] = 5
	return ju


	case "小满中元":
	ju[0] = "阳二局"
	ju[1] = 2
	return ju

	case "小满下元":
	ju[0] = "阳八局"
	ju[1] = 8
	return ju

	case "芒种上元":
	ju[0] = "阳六局"
	ju[1] = 6
	return ju


	case "芒种中元":
	ju[0] = "阳三局"
	ju[1] = 3
	return ju


	case "芒种下元":
	ju[0] = "阳九局"
	ju[1] = 9
	return ju


	case "夏至上元":
	ju[0] = "阴九局"
	ju[1] = -9
	return ju


	case "夏至中元":
	ju[0] = "阴三局"
	ju[1] = -3
	return ju


	case "夏至下元":
	ju[0] = "阴六局"
	ju[1] = -6
	return ju


	case "小暑上元":
	ju[0] = "阴八局"
	ju[1] = -8
	return ju


	case "小暑中元":
	ju[0] = "阴二局"
	ju[1] = -2
	return ju


	case "小暑下元":
	ju[0] = "阴五局"
	ju[1] = -5
	return ju


	case "大暑上元":
	ju[0] = "阴七局"
	ju[1] = -7
	return ju


	case "大暑中元":
	ju[0] = "阴一局"
	ju[1] = -1
	return ju


	case "大暑下元":
	ju[0] = "阴四局"
	ju[1] = -4
	return ju


	case "立秋上元":
	ju[0] = "阴二局"
	ju[1] = -2
	return ju


	case "立秋中元":
	ju[0] = "阴五局"
	ju[1] = -5
	return ju


	case "立秋下元":
	ju[0] = "阴八局"
	ju[1] = -8
	return ju


	case "处暑上元":
	ju[0] = "阴一局"
	ju[1] = -1
	return ju

	case "处暑中元":
	ju[0] = "阴四局"
	ju[1] = -4
	return ju


	case "处暑下元":
	ju[0] = "阴七局"
	ju[1] = -7
	return ju
	

	case "白露上元":
	ju[0] = "阴九局"
	ju[1] = -9
	return ju
	
	case "白露中元":
	ju[0] = "阴三局"
	ju[1] = -3
	return ju
	
	case "白露下元":
	ju[0] = "阴六局"
	ju[1] = -6
	return ju
	

	case "秋分上元":
	ju[0] = "阴七局"
	ju[1] = -7
	return ju
	
	case "秋分中元":
	ju[0] = "阴一局"
	ju[1] = -1
	return ju

	case "秋分下元":
	ju[0] = "阴四局"
	ju[1] = -4
	return ju

	case "寒露上元":
	ju[0] = "阴六局"
	ju[1] = -6
	return ju

	case "寒露中元":
	ju[0] = "阴九局"
	ju[1] = -9
	return ju

	case "寒露下元":
	ju[0] = "阴三局"
	ju[1] = -3
	return ju

	case "霜降上元":
	ju[0] = "阴五局"
	ju[1] = -5
	return ju

	case "霜降中元":
	ju[0] = "阴八局"
	ju[1] = -8
	return ju

	case "霜降下元":
	ju[0] = "阴二局"
	ju[1] = -2
	return ju

	case "立冬上元":
	ju[0] = "阴六局"
	ju[1] = -6
	return ju

	case "立冬中元":
	ju[0] = "阴九局"
	ju[1] = -9
	return ju

	case "立冬下元":
	ju[0] = "阴三局"
	ju[1] = -3
	return ju

	case "小雪上元":
	ju[0] = "阴五局"
	ju[1] = -5
	return ju

	case "小雪中元":
	ju[0] = "阴八局"
	ju[1] = -8
	return ju

	case "小雪下元":
	ju[0] = "阴二局"
	ju[1] = -2
	return ju

	case "大雪上元":
	ju[0] = "阴四局"
	ju[1] = -4
	return ju

	case "大雪中元":
	ju[0] = "阴七局"
	ju[1] = -7
	return ju

	case "大雪下元":
	ju[0] = "阴一局"
	ju[1] = -1
	return ju

	case "冬至上元":
	ju[0] = "阳一局"
	ju[1] = 1
	return ju

	case "冬至中元":
	ju[0] = "阳七局"
	ju[1] = 7
	return ju

	case "冬至下元":
	ju[0] = "阳四局"
	ju[1] = 4
	return ju

	case "小寒上元":
	ju[0] = "阳二局"
	ju[1] = 2
	return ju

	case "小寒中元":
	ju[0] = "阳八局"
	ju[1] = 8
	return ju

	case "小寒下元":
	ju[0] = "阳五局"
	ju[1] = 5
	return ju

	case "大寒上元":
	ju[0] = "阳三局"
	ju[1] = 3
	return ju

	case "大寒中元":
	ju[0] = "阳九局"
	ju[1] = 9
	return ju

	case "大寒下元":
	ju[0] = "阳六局"
	ju[1] = 6
	return ju

	default:
	ju[0] = "Ding_jushu Error"
	ju[1] = "Ding_jushu Error"
	return ju	

 }

}
/* 此功能尚未写完
function maoshan_dingju(c) {
	var jq = c.solarTerm()
	var jq1 = jq.sTermInMonth[0] //样式--小暑:7月7日02:15
	var jq2 = jq.sTermInMonth[1] //样式--大暑:7月22日19:33

	var jq1_name = jq1.substr(0,jq1.indexOf(":")) 
	var jq2_name = jq2.substr(0,jq1.indexOf(":")) 

	var jq1 = jq1.substr(jq1.indexOf(":")+1) 
	var jq2 = jq2.substr(jq2.indexOf(":")+1) 

	jq1 = jq1.substr(jq1.indexOf("月") + 1)
	jq2 = jq2.substr(jq2.indexOf("月") + 1)

	var jq1ri = jq1.split("日")
	var jq2ri = jq2.split("日")

	var jq1shi = jq1ri[1]
	var jq2shi = jq2ri[1]

	var c1 = new CCC(d.getYear(),month+1,jq1ri[0],jq1shi,8,1)
	var c2 = new CCC(d.getYear(),month+1,jq2ri[0],jq2shi,8,1)

	var d1 = new Date(c1.year(),c1.month()-1,c1.date(),c1.hour(),c1.minute())
	var d2 = new Date(c2.year(),c2.month()-1,c2.date(),c2.hour(),c2.minute())

	var cur_jq
	var time_passed
	if (d.getTime() >= d2.getTime()){
		cur_jq = jq2_name
		time_passed = d.getTime() - d2.getTime()	
	}  
	else if (d.getTime() >= d1.getTime()) {
		cur_jq = jq1_name
		time_passed = d.getTime() - d1.getTime()
	} 
	else {
		var y
		if(month == 0) {
			month = 12
			y = d.getYear() -1			
		}
		var last_month = new CCC(y,month,d.getDate(),d.getHours()+':'+d.getMinutes(),8,1)				
		cur_jq = last_month.solarTerm().sTermInMonth[1]
		cur_jq = cur_jq.substring(0,cur_jq.indexOf(":"))
		time_passed = d.getTime() - last_month.getTime()
	}
	var a_day = 24*60*60*1000
	var yuan = ""
	if(time_passed >= 15*a_day) {
		yuan = "上元"		
	}else if (time_passed >= 10*a_day) {
		yuan = ""
	}else if (time_passed >= 5*a_day) {
		yuan = ""
	} else {
		yuan = ""
	}
	
	return cur_jq
}
*/


function ding_jq(c) {
//alert(c.year() + " " + c.month()+ " " + c.date()+ " " + c.hour())
	var jq = c.solarTerm()
	var jq1 = jq.sTermInMonth[0] //样式--小暑:7月7日02:15
	var jq2 = jq.sTermInMonth[1] //样式--大暑:7月22日19:33
	var jq1_name = jq1.substr(0,jq1.indexOf(":")) 
	var jq2_name = jq2.substr(0,jq1.indexOf(":")) //the month is identical for both jq1 and jq2, so we can still use jq1
	var jq1 = jq1.substr(jq1.indexOf(":")+1) 
	var jq2 = jq2.substr(jq2.indexOf(":")+1) 

	jq1 = jq1.substr(jq1.indexOf("月") + 1)
	jq2 = jq2.substr(jq2.indexOf("月") + 1)

	var jq1ri = jq1.split("日")
	var jq2ri = jq2.split("日")

	var jq1shi = jq1ri[1]
	var jq2shi = jq2ri[1]
	var t1 = new Array(2)
	t1 = jq1shi.split(":")

	var t2 = new Array(2) 
	t2 = jq2shi.split(":") 

	var d1 = new Date(d.getFullYear(),month,jq1ri[0],t1[0],t1[1],0)
	var d2 = new Date(d.getFullYear(),month,jq2ri[0],t2[0],t2[1],0)
//alert(d1.getFullYear() + " " + d1.getMonth() + " " + d1.getDate() + " " +  d1.getHours() + " " +  d1.getMinutes())
//alert(d2.getFullYear() + " " + d2.getMonth() + " " + d2.getDate() + " " +  d2.getHours() + " " +  d2.getMinutes())
	var cur_jq
//alert(d.getFullYear() + " " + d.getMonth() + " " + d.getDate() + " " +  d.getHours() + " " +  d.getMinutes())
	if (d.getTime() >= d2.getTime()){
		cur_jq = jq2_name	
	}  
	else if (d.getTime() >= d1.getTime()) {
		cur_jq = jq1_name
	} 
	else {

		var y
		if(month == 0) {
			month = 12
			y = d.getYear() -1			
		}
		var last_month = new CCC(y,month,d.getDate(),d.getHours()+':'+d.getMinutes(),8,1)
		
		cur_jq = last_month.solarTerm().sTermInMonth[1]
		cur_jq = cur_jq.substring(0,cur_jq.indexOf(":"))
	}
	return cur_jq
}


function chaibu_jq_yuan(c) { // c is an instance of CCC

	var cur_jq = ding_jq(c)
	var x = ding_sanyuan(c.dGz())
	return cur_jq + x	
}


function ding_sanyuan(n) {
	var x = n % 15
	var y 
	if (x == 0 ) {
		y = "下元"
	} else if (x < 6) {
		y = "上元"
	}  else if (x < 11 ) {
		y = "中元"
	} else {
		y = "下元"
	}
	return y
}

function tianshu_jushu(x,xunshou) {
	var y 
	switch(xunshou){
		case "戊":
		y = 0
		break;

		case "己":
		y = 1
		break;

		case "庚":
		y = 2
		break;

		case "辛":
		y = 3
		break;

		case "壬":
		y = 4
		break;

		case "癸":
		y = 5
		break;

		default:
		return "error"
	}

	if (x < 0) {
		x = -x
		x = cycle(x - y, 9)
		x = -x
	} else {
		x = cycle(x + y, 9)
	}
	return x
}

function tianshi_dingju(str) {
	//document.write(" " + str)
	var ju_num = new Array(3)
	ju_num = ding_jushu(str)
	ju_num[2] = " " + str
	return ju_num	
}

function tianshi_jq_yuan(c) {
	var str = ding_jq(c)	
	var x = c.hGz()
	var y = floor(x/10)
	if(x%10 == 0) {
		y = y - 1
	}
	//document.write("<p> shiganzhi = " + c.hGz())
	//document.write("<p> y = " + y)
	switch(y) {
		case 0: //这是甲子旬，为上元
		z = "上元"
		break;

		case 1: //这是甲戌旬，为下元
		z = "下元"
		break;

		case 2: //这是甲申旬，为中元
		z = "中元"
		break;

		case 3: //这是甲午旬，为上元
		z = "上元"
		break;

		case 4: //这是甲辰旬，为下元
		z = "下元"
		break;

		case 5: //这是甲寅旬，为中元
		z = "中元"
		break;

		default: 
		return "Tianshi_dingju Error"
	}

	str = str + z
	//document.write("<p> str = " + str)
	//var j = ding_jushu(str)
	//document.write("j = " + j)
	return str
}