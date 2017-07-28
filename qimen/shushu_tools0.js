// JavaScript Document


function biased_to_1(x){//x is the percentage of bias
	if (x==10){
		return 1
	}

	if (x==0) {
		return 0
	}
	var y = Math.round(Math.random()*x+1) 
	y = cycle(y,x)

	if(y == 1) {
		return 0
	}else {
		return 1
	}
	
}

function not_biased(){
	var x = Math.floor(Math.random()*10+1)
	return x%2
}

function get_yue_ganzhi(year, month){
	var ar = new Array(4)
	var c = new CCC(year, month, 15) //we just want the month ganzhi. The date does not matter.
	ar[0] = c.year()
	ar[1] = c.month()
	ar[2] = c.mGz_Str()
	ar[3] = nayin_list[c.mGz()]
	return ar
}

function xiantian_to_houtian(x){
	switch (x) {
		case 1: 
			return 6
		case 2: 
			return 7
		case 3: 
			return 9
		case 4: 
			return 3
		case 5: 
			return 4
		case 6: 
			return 1
		case 7: 
			return 8
		case 8: 
			return 2      
	}
}

function houtian_to_xiantian(x){
	switch (x) {
		case 1: 
			return 6
		case 2: 
			return 8
		case 3: 
			return 4
		case 4: 
			return 5
		

		case 6: 
			return 1
		case 7: 
			return 2
		case 8: 
			return 7
		case 9: 
			return 3
      
	}
}



function find_90(ganzhi){
	var ar = new Array(2)
	var x = locate(ganzhi,huajia)
	var degree = (x-1) * 6
	var p
	p = degree 

	if(p < 0) {p = 0}

	p = cycle(p+ 90, 360)
	p = (p/6) + 1
	p = cycle(p, 60)

	ar[0] = huajia[p]

	p = cycle(degree+ 270, 360)
	p = (p/6) + 1
	p = cycle(p, 60)
	ar[1] = huajia[p]

	p = cycle(degree+ 180, 360)
	p = (p/6) + 1
	p = cycle(p, 60)
	ar[2] = huajia[p]
	
	return ar
}

function get_nian_ganzhi(y){
	var c = new CCC(y,6,8) //we just want the 年干支. Month or date does not matter
	var a = new Array(2)
	a[0] = c.yGz()
	a[1] = c.yGz_Str()
	return a
}

function pin_dayun(birthyear, liuyear, jisui_yun, dayun_ar) {
	var x = (liuyear - birthyear) - jisui_yun[0]
	x = Math.ceil(x / 10)
	if (x < 0) {x = 0}
	//alert("x = " + x)
	//alert("dayun_ar[x] = " + dayun_ar[x])
	return dayun_ar[x] 
}

function bu_dayun(c,d,sex,liunian){
	var sui = (liunian - c.year()) + 1
	var a = new Array(2)
	var shunni = ding_dayun_shunni(c,sex)
	var y = ding_jisui_yun(c,d,shunni)
	var yuezhu = c.mGz()
	var i
	var end, start
	var temp 
	if(shunni == "shun") {
		for(i=0;i<11; i++) {
			end = parseInt((i*10) + y)
			start = end - 9
			if(start < 0) {start = 0}
			if((sui >= start) && (sui <= end)) {
				//alert("huajia[yuezhu+i] = " + huajia[yuezhu+i])
				temp = "<span style='background-color:\"#FFCCCC\"'>" + huajia[cycle(yuezhu+i,60)] + "</span>"
			} else {temp = huajia[cycle(yuezhu + i,60)]}

			dayun_name[i] = temp
			
			dayun_range[i] = start + " - " + end
		}
	} else {
		for(i=0;i<11; i++) {
			end = parseInt((i*10) + y)
			start = end - 9
			if(start < 0) {start = 0}
			if((sui >= start) && (sui <= end)) {
				temp = "<span style='background-color:\"#FFCCCC\"'>" + huajia[cycle(yuezhu-i,60)] + "</span>"
			} else {temp = huajia[cycle(yuezhu-i,60)]}
			
			dayun_name[i] = temp
			dayun_range[i] = start + " - " + end
		}
	}
	a[0] = y
	a[1] = shunni
	return a
}

function ding_dayun_shunni(c,sex){
	var shunni
	if(c.yGz()%2 == 0) {
		if(sex=="kun") {
			shunni = "shun"
		} else {
			shunni = "ni"
		}
	} else {
		if(sex=="kun") {
			shunni = "ni"
		} else {
			shunni = "shun"
		}
	}
	return shunni
}

function ding_jisui_yun(c,d,shunni) {//c is the CCC obj of the birth date; d is the Date obj of the birth date
	var jisui
	var jie_in_cur_m = get_jieqi_obj(c,0)
	var cur_jie = jie_in_cur_m[5]
	if(d.getDate() == cur_jie.getDate()) {
		return jisui = 1
	}
	//alert("cur_ymd = " + cur_jie.getYear() + cur_jie.getMonth() + cur_jie.getDate())
	var last_m = new CCC(c.year(),c.month()-1,15) //just want last month. The date does not matter

	var jie_in_last_m = get_jieqi_obj(last_m,0)
	var last_jie = jie_in_last_m[5]

	var next_m = new CCC(c.year(),c.month()+1,15) //just want next month. The date does not matter
	var jie_in_next_m = get_jieqi_obj(next_m,0)
	var next_jie = jie_in_next_m[5]
	var diff
	var a_day = 1000*60*60*24
	if(d.getTime() > cur_jie.getTime()){	
		if(shunni == "shun") {
			diff = next_jie.getTime() - d.getTime()
		} else {
			diff = d.getTime() - cur_jie.getTime()
		}
	} else {
		if(shunni == "shun") {
			diff = cur_jie.getTime() - d.getTime()
		} else {
			diff = d.getTime() - last_jie.getTime()
		}
	}
	diff = diff/a_day
	//alert("diff = " + diff)
	jisui = floor(diff/3)
	if(jisui == 0 ) {jisui = 1}
	return jisui
}

function get_jieqi_obj(c,jq){//jq specifies whether you want jie or qi: 0 is jie while 1 is qi
	var a = new Array(6) // to store the 0.jieqi_name, 1.yue, 2.ri, 3.shi, 4.fen, and 5.jiqie_object
	var solar = c.solarTerm()
	var jieqi = solar.sTermInMonth[jq] //样式--小暑:7月7日02:15
	a[0] = jieqi.substr(0,jieqi.indexOf(":")) //0-: is the jieqi_name

	jieqi = jieqi.substr(jieqi.indexOf(":") + 1)  //样式--7月7日02:15
	var split = jieqi.split("月")
	a[1] = split[0] //yue

	jieqi = split[1] //7日02:15
	split = jieqi.split("日")
	a[2] = split[0] //ri

	jieqi = split[1] //样式-- 02:15	
	split = jieqi.split(":")
	a[3] = split[0] //shi
	a[4] = split[1] //fen
	a[5] = new Date(d.getFullYear(),a[1],a[2],a[3],a[4],0)

	return a	
}

function get_tiangan_wuxing(gan){
 
  var ar = new Array(2) 
	switch(gan) {
		case "甲":
			ar[0] = "木"
			ar[1] = "阳"
			break
	
		case "乙":
			ar[0] = "木"
			ar[1] = "阴"
			break

		case "丙":
			ar[0] = "火"
			ar[1] = "阳"
			break
	
		case "丁":
			ar[0] = "火"
			ar[1] = "阴"
			break

		case "戊":
			ar[0] = "土"
			ar[1] = "阳"
			break
	
		case "己":
			ar[0] = "土"
			ar[1] = "阴"
			break

		case "庚":
			ar[0] = "金"
			ar[1] = "阳"
			break
	
		case "辛":
			ar[0] = "金"
			ar[1] = "阴"
			break

		case "壬":
			ar[0] = "水"
			ar[1] = "阳"
			break
	
		case "癸":
			ar[0] = "水"
			ar[1] = "阴"
			break
	}
	
	return ar
} 

function get_liuqin(wo, ta){
	var wo_wuxing = wo[0]
	var ta_wuxing = ta[0]
	var wo_yinyang = wo[1]
	var ta_yinyang = ta[1]

	//alert("wo_wuxing = " + wo_wuxing)
	if(wo_wuxing == "金"){
		switch(ta_wuxing){

			case "金":
				return "比"
			case "木":
				if(wo_yinyang == ta_yinyang) {
					return "财"
				} else {
					return "妻"
				}
			case "水":
				if(wo_yinyang == ta_yinyang) {
					return "孙"
				} else {
					return "子"
				}
			case "火":
				if(wo_yinyang == ta_yinyang) {
					return "鬼"
				} else {
					return "官"
				}
			case "土":
				if(ta_yinyang == "阳"){
					return "父"
				} else {
					return "母"
				}
		}
	}

	if(wo_wuxing == "木"){
		switch(ta_wuxing) {
			case "金":
				if(wo_yinyang == ta_yinyang) {
					return str = "鬼"
				} else {
					return str = "官"
				}
				
			case "木":
				return str = "比"

			case "水":
				if(ta_yinyang == "阳"){
					return "父"
				} else {
					return "母"
				}
			case "火":
				if(wo_yinyang == ta_yinyang) {
					return "孙"
				} else {
					return "子"
				}
				
			case "土":

				if(wo_yinyang == ta_yinyang) {
					return "财"
				} else {
					return "妻"
				}
		}
	}	

	if(wo_wuxing == "水"){
		switch(ta_wuxing) {
			case "金":
				if(ta_yinyang == "阳"){
					return "父"
				} else {
					return "母"
				}
			case "木":
				if(wo_yinyang == ta_yinyang) {
					return "孙"
				} else {
					return "子"
				}
			case "水":
				return "比"
			case "火":
				if(wo_yinyang == ta_yinyang) {
					return "财"
				} else {
					return "妻"
				}
			case "土":
				if(wo_yinyang == ta_yinyang) {
					return "鬼"
				} else {
					return "官"
				}
		}
	}	

	if(wo_wuxing == "火"){
		switch(ta_wuxing) {
			case "金":
				if(wo_yinyang == ta_yinyang) {
					return "财"
				} else {
					return "妻"
				}
			case "木":
				if(ta_yinyang == "阳"){
					return "父"
				} else {
					return "母"
				}
			case "水":
				if(wo_yinyang == ta_yinyang) {
					return "鬼"
				} else {
					return "官"
				}
			case "火":
				return "比"
			case "土":
				if(wo_yinyang == ta_yinyang) {
					return "孙"
				} else {
					return "子"
				}
		}
	}

	if(wo_wuxing == "土"){
		switch(ta_wuxing) {
			case "金":
				return "子"
			case "木":
				if(wo_yinyang == ta_yinyang) {
					return "鬼"
				} else {
					return "官"
				}
				
			case "水":
				if(wo_yinyang == ta_yinyang) {
					return "财"
				} else {
					return "妻"
				}
				
			case "火":
				if(ta_yinyang == "阳"){
					return "父"
				} else {
					return "母"
				}
			case "土":
				if(wo_yinyang == ta_yinyang) {
					return "孙"
				} else {
					return "子"
				}
		}
		
	}		
}

