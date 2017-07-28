function output_huajia_table(y,inn){ // y is the pivotal year; inn is id of the div whose innerHTML will hold the table
	var con = "<table>"
	var t
	var c
	var y_Gz
	var line_max = 6
	var col_max = 10
	for(i=1;i<line_max+1;i++){
		con = con + "<tr>"
		for(k=1;k<col_max+1;k++){
//alert("i="+i+"; k="+ k + "; (i-1)*10 + k =" + ((i-1)*10 + k))
			con = con + "<td>"
			t = y - (30-((i-1)*(col_max)+k))
			c = new CCC(t,6,1) // this is the year CCC object, "June 1" can be any date within the ganzhi year
			y_Gz = c.yGz_Str()
			//alert(t + y_Gz +"年")
			con =  con + t + y_Gz +"年" + "</td>"			
		}
		con = con + "</tr>"
		alert(con)
	}
	con = con + "</table>"
	//alert(con)
	//document.getElementById(inn).innerHTML(con)
	document.write(con)
}

/*本想用dom，可不知为什么，table.appendChild(tr) 就是不行
function output_huajia_table(y){ // y is the pivotal year; inn is id of the div whose innerHTML will hold the table
	//var tbl = document.createElement("huajia_table")
	//alert("1")
	//huajia_table = document.getElementById("huajia_table")
		//alert("2")
	var tb = document.createElement("tbody") //网上有人说需要加这一行，但加上之后也仍然不行
	
	var tr1 = document.createElement("tr")
	tr1.innerHTML="Hurray"
	alert("trying")
	tb.appendChild(tr1)
		alert("success")
	//document.getElementById("huajia_table").appendChild(tr1) //这样不行 
	document.getElementById("huajia_table").appendChild(tb) //这样也不行
	alert("success1")
	var t
	var c
	var y_Gz
	var line_max = 6
	var col_max = 10
	for(i=1;i<line_max+1;i++){
		var tr = document.createElement("tr")
		for(k=1;k<col_max+1;k++){
//alert("i="+i+"; k="+ k + "; (i-1)*10 + k =" + ((i-1)*10 + k))
			t = y - (30-((i-1)*(col_max)+k))
			c = new CCC(t,6,1) // this is the year CCC object, "June 1" can be any date within the ganzhi year
			y_Gz = c.yGz_Str()

			var td = document.createElement("td")
			//alert(t + y_Gz +"年")
			td.innerHTML =  t + y_Gz +"年"
			tr.appendChild(td)			
		}
//alert("before")
		huajia_table.appendChild(tr)
		alert("success")
	}
}
*/

// JavaScript Document
/*本来想讨巧，后来发现不行，还是需要另打主意
function get_kong_peigan(ref_a,target_a){
	var kong_peigan = ""
	for(i=1;i<10;i++){
		if(ref_a[i].length>1){
			kong_peigan = kong_peigan + target_a[i] 
		}
	}
	return kong_peigan
}
*/
function get_kong_peigan(ri_xunshou,shi_xunshou){
	var kong = ""
	var r = get_liuyi_order(ri_xunshou[0])
	var s = get_liuyi_order(shi_xunshou[0]) 
	var c = cycle(r-s,6)

	switch(c){
		case 1:
			return kong = "壬癸"
		case 2:
			return kong = "庚辛"
		case 3:
			return kong = "戊己"
		case 4:
			return kong = "丙丁"
		case 5:
			return kong = "甲乙"
		case 6:
			return kong = ""			
	}
}

function get_liuyi_order(liuyi){
	switch(liuyi){
		case "戊":
			return 1;
		case "己":
			return 2;		
		case "庚":
			return 3;
		case "辛":
			return 4;	
		case "壬":
			return 5;
		case "癸":
			return 6;
	}
}
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
	var c = new CCC(year, month, 15) //we just want the month ganzhi. The date does not matter, and we use the 15th which is far away from the border.
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
	var jie_in_cur_m = get_jieqi_obj(c,0,d)
	var cur_jie = jie_in_cur_m[5]
	if(d.getDate() == cur_jie.getDate()) {
		return jisui = 1
	}
	//alert("cur_ymd = " + cur_jie.getYear() + cur_jie.getMonth() + cur_jie.getDate())
	var last_m = new CCC(c.year(),c.month()-1,15) //just want last month. The date does not matter

	var jie_in_last_m = get_jieqi_obj(last_m,0,d)
	var last_jie = jie_in_last_m[5]

	var next_m = new CCC(c.year(),c.month()+1,15) //just want next month. The date does not matter
	var jie_in_next_m = get_jieqi_obj(next_m,0,d)
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

function get_jieqi_obj(c,jq,d){//jq specifies whether you want jie or qi: 0 is jie while 1 is qi; d is the date object
	var a = new Array(6) // to store the following info: 0.jieqi_name, 1.yue, 2.ri, 3.shi, 4.fen, and 5.jieqi_object
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
	a[5] = new Date(d.getFullYear(),a[1]-1,a[2],a[3],a[4],0,0)
	return a	
}


function ding_zhiri_gua(c,d){//c is the CCC object, while d is the Date object

	var jie_to_be_used
	var n
	var jie_in_cur_m = get_jieqi_obj(c,0,d)

	var qi_in_cur_m = get_jieqi_obj(c,1,d)
	var cur_qi = qi_in_cur_m[5]
	var cur_jie = jie_in_cur_m[5]

	var diff
	var a_month

	if(d.getDate() == cur_qi.getDate()) {
		var qi_name = qi_in_cur_m[0] //this is the jieqi name

		switch(qi_name){
			case "春分":
				return "震"
			case "夏至":
				return "离"
			case "秋分":
				return "兑"
			case "冬至":
				return "坎"

		}
	}

	if(d.getTime() == cur_jie.getTime()){
		jie_to_be_used = jie_in_cur_m[1]
		n = 1
		return zhiri_guaqi[jie_to_be_used][n]
	}

	if(d.getTime() < cur_jie.getTime()){
		var last_m = new CCC(c.year(),c.month()-1,15) //just want last month. The date does not matter
		var jie_in_last_m = get_jieqi_obj(last_m,0,d)
		var last_jie = jie_in_last_m[5]
		a_month = cur_jie.getTime() - last_jie.getTime() 
		diff = d.getTime() - last_jie.getTime() 
		jie_to_be_used = jie_in_last_m[0]
	} else{
		var next_m = new CCC(c.year(),c.month()+1,15) //just want next month. The date does not matter
		var jie_in_next_m = get_jieqi_obj(next_m,0,d)
		var next_jie = jie_in_next_m[5]
		a_month = next_jie.getTime() - cur_jie.getTime()
		diff = d.getTime() - cur_jie.getTime() 
		jie_to_be_used = jie_in_cur_m[0]
	}

	var a_day = 1000*60*60*24
	var a_gua_period = a_month / 5   // one month is assigned to 5 guas, each of equal length of roughly 6 days.
	n = Math.ceil(diff/a_gua_period)

	return zhiri_guaqi[jie_to_be_used][n]	
}

var zhiri_guaqi = new Array(24)//值日卦气
/*
传世的《易林》中，书前即列有六十四卦的具体值日之法，名曰"焦林直日"。其法云："六十卦，每卦直六日，共直三百六十日。余四卦，各寄直一日。
立春、雨水（三十日五卦，每卦直六日），小过、蒙、益、渐、泰；
惊蜇、春分（春分震卦直一日），需、随、晋、解、大壮；
清明、谷雨，豫、讼、蛊、革、夬；
立夏、小满，旅、师、比、小畜、乾；
芒种、夏至（夏至离卦直一日），大有、家人、井、咸、姤；
小暑、大暑，鼎、丰、涣、履、遁；
立秋、处暑，恒、节、同人、损、否；
白露、秋分（秋分兑卦直一日），巽、萃、大畜、贲、观；
寒露、霜降，归妹、无妄、明夷、困、剥；
立冬、小雪，艮、既济、噬嗑、大过、坤；
大雪、冬至（冬至坎卦直一日），未济、蹇、颐、中孚、复（从大雪后将坎卦入数，断从立冬后四十五日，系王相不断）；
小寒、大寒，屯、谦、睽、升、临。
每两节气共三十日，管五卦，逐日终而复始，排定一卦，相次管六日。凡卜，看本日得何卦，便于本日卦内，寻所卜得卦，看吉凶。"

*/

zhiri_guaqi["立春"] = ["","小过","蒙","益","渐","泰"]
zhiri_guaqi["惊蛰"] = ["震","需","随","晋","解","大壮"]
zhiri_guaqi["清明"] = ["","豫","讼","蛊","革","夬"]
zhiri_guaqi["立夏"] = ["","旅","师","比","小蓄","乾"]
zhiri_guaqi["芒种"] = ["离","大有","家人","井","咸","姤"]
zhiri_guaqi["小暑"] = ["","鼎","丰","涣","履","遁"]
zhiri_guaqi["立秋"] = ["","恒","节","同人","损","否"]
zhiri_guaqi["白露"] = ["兑","巽","萃","大蓄","賁","观"]
zhiri_guaqi["寒露"] = ["","归妹","无妄","明夷","困","剥"]
zhiri_guaqi["立冬"] = ["","艮","既济","噬磕","大过","坤"]
zhiri_guaqi["大雪"] = ["坎","未济","蹇","颐","中孚","复"]
zhiri_guaqi["小寒"] = ["","屯","谦","睽","升","临"]


function get_tiangan_wuxing(gan){
 //alert(gan)
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
				if(wo_yinyang == ta_yinyang) {
					return "比"
				} else {
					return "劫"
				}			
				//return "比"
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
				if(wo_yinyang == ta_yinyang) {
					return "比"
				} else {
					return "劫"
				}			
				//return "比"
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
				if(wo_yinyang == ta_yinyang) {
					return "比"
				} else {
					return "劫"
				}			
				//return "比"
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
				if(wo_yinyang == ta_yinyang) {
					return "比"
				} else {
					return "劫"
				}			
				//return "比"
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
				if(wo_yinyang == ta_yinyang) {
					return "孙"
				} else {
					return "子"
				}
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
					return "比"
				} else {
					return "劫"
				}			
				//return "比"
		}
		
	}		
}

var liushisi_gua = new Array(65)
liushisi_gua[0] = ""
liushisi_gua[1] = "乾"
liushisi_gua[2] = "坤"
liushisi_gua[3] = "屯"
liushisi_gua[4] = "蒙"
liushisi_gua[5] = "需"
liushisi_gua[6] = "讼"
liushisi_gua[7] = "师"
liushisi_gua[8] = "比"
liushisi_gua[9] = "小畜"
liushisi_gua[10] = "履"
liushisi_gua[11] = "泰"
liushisi_gua[12] = "否"
liushisi_gua[13] = "同人"
liushisi_gua[14] = "大有"
liushisi_gua[15] = "谦"
liushisi_gua[16] = "豫"
liushisi_gua[17] = "随"
liushisi_gua[18] = "蛊"
liushisi_gua[19] = "临"
liushisi_gua[20] = "观"
liushisi_gua[21] = "噬嗑"
liushisi_gua[22] = "贲"
liushisi_gua[23] = "剥"
liushisi_gua[24] = "复"
liushisi_gua[25] = "无妄"
liushisi_gua[26] = "大畜"
liushisi_gua[27] = "颐"
liushisi_gua[28] = "大过"
liushisi_gua[29] = "坎"
liushisi_gua[30] = "离"
liushisi_gua[31] = "咸"
liushisi_gua[32] = "恒"
liushisi_gua[33] = "遯"
liushisi_gua[34] = "大壮"
liushisi_gua[35] = "晋"
liushisi_gua[36] = "明夷"
liushisi_gua[37] = "家人"
liushisi_gua[38] = "睽"
liushisi_gua[39] = "蹇"
liushisi_gua[40] = "解"
liushisi_gua[41] = "损"
liushisi_gua[42] = "益"
liushisi_gua[43] = "夬"
liushisi_gua[44] = "姤"
liushisi_gua[45] = "萃"
liushisi_gua[46] = "升"
liushisi_gua[47] = "困"
liushisi_gua[48] = "井"
liushisi_gua[49] = "革"
liushisi_gua[50] = "鼎"
liushisi_gua[51] = "震"
liushisi_gua[52] = "艮"
liushisi_gua[53] = "渐"
liushisi_gua[54] = "归妹"
liushisi_gua[55] = "丰"
liushisi_gua[56] = "旅"
liushisi_gua[57] = "巽"
liushisi_gua[58] = "兑"
liushisi_gua[59] = "涣"
liushisi_gua[60] = "节"
liushisi_gua[61] = "中孚"
liushisi_gua[62] = "小过"
liushisi_gua[63] = "既济"
liushisi_gua[64] = "未济"

var liushisi_gua_to_num = new Array(65)
liushisi_gua_to_num["乾"]=['1']
liushisi_gua_to_num["坤"]=['2']
liushisi_gua_to_num["屯"]=['3']
liushisi_gua_to_num["蒙"]=['4']
liushisi_gua_to_num["需"]=['5']
liushisi_gua_to_num["讼"]=['6']
liushisi_gua_to_num["师"]=['7']
liushisi_gua_to_num["比"]=['8']
liushisi_gua_to_num["小畜"]=['9']
liushisi_gua_to_num["履"]=['10']
liushisi_gua_to_num["泰"]=['11']
liushisi_gua_to_num["否"]=['12']
liushisi_gua_to_num["同人"]=['13']
liushisi_gua_to_num["大有"]=['14']
liushisi_gua_to_num["谦"]=['15']
liushisi_gua_to_num["豫"]=['16']
liushisi_gua_to_num["随"]=['17']
liushisi_gua_to_num["蛊"]=['18']
liushisi_gua_to_num["临"]=['19']
liushisi_gua_to_num["观"]=['20']
liushisi_gua_to_num["噬嗑"]=['21']
liushisi_gua_to_num["贲"]=['22']
liushisi_gua_to_num["剥"]=['23']
liushisi_gua_to_num["复"]=['24']
liushisi_gua_to_num["无妄"]=['25']
liushisi_gua_to_num["大畜"]=['26']
liushisi_gua_to_num["颐"]=['27']
liushisi_gua_to_num["大过"]=['28']
liushisi_gua_to_num["坎"]=['29']
liushisi_gua_to_num["离"]=['30']
liushisi_gua_to_num["咸"]=['31']
liushisi_gua_to_num["恒"]=['32']
liushisi_gua_to_num["遯"]=['33']
liushisi_gua_to_num["大壮"]=['34']
liushisi_gua_to_num["晋"]=['35']
liushisi_gua_to_num["明夷"]=['36']
liushisi_gua_to_num["家人"]=['37']
liushisi_gua_to_num["睽"]=['38']
liushisi_gua_to_num["蹇"]=['39']
liushisi_gua_to_num["解"]=['40']
liushisi_gua_to_num["损"]=['41']
liushisi_gua_to_num["益"]=['42']
liushisi_gua_to_num["夬"]=['43']
liushisi_gua_to_num["姤"]=['44']
liushisi_gua_to_num["萃"]=['45']
liushisi_gua_to_num["升"]=['46']
liushisi_gua_to_num["困"]=['47']
liushisi_gua_to_num["井"]=['48']
liushisi_gua_to_num["革"]=['49']
liushisi_gua_to_num["鼎"]=['50']
liushisi_gua_to_num["震"]=['51']
liushisi_gua_to_num["艮"]=['52']
liushisi_gua_to_num["渐"]=['53']
liushisi_gua_to_num["归妹"]=['54']
liushisi_gua_to_num["丰"]=['55']
liushisi_gua_to_num["旅"]=['56']
liushisi_gua_to_num["巽"]=['57']
liushisi_gua_to_num["兑"]=['58']
liushisi_gua_to_num["涣"]=['59']
liushisi_gua_to_num["节"]=['60']
liushisi_gua_to_num["中孚"]=['61']
liushisi_gua_to_num["小过"]=['62']
liushisi_gua_to_num["既济"]=['63']
liushisi_gua_to_num["未济"]=['64']

function generate_linci(c,d){ // 

var a = new Array(7)
var total = 64
var zhirigua = ding_zhiri_gua(c,d)

var zhirigua_num = liushisi_gua_to_num[zhirigua]
var r = Math.floor(Math.random()*total+1)
var zhuade_gua = liushisi_gua[r]

var n
if(r == 1){
	n = (zhirigua_num - 1)*64 + r // this is the Lin number out of 4096
}else if(r < zhirigua_num){
	n = (zhirigua_num - 1)*64 + (r+1) // this is the Lin number out of 4096
}else {
	n = (zhirigua_num - 1)*64 + r // this is the Lin number out of 4096
}
/*
a[0] = zhirigua
a[1] = zhirigua_num
a[2] = zhuade_gua
a[3] = n
a[4] = lines[n][1] + lines[n][2] + lines[n][3] // this is "某卦之某卦"
a[5] = lines[n][4] //断语
a[6] = lines[n][5] //尚注
*/

a[0] = n
a[1] = zhirigua_num
a[2] = zhirigua
a[3] = zhuade_gua
a[4] = lines[n][1] + lines[n][5] + "<font size=2>之</font>" + lines[n][2] + lines[n][6]// this is "某卦之某卦"
a[5] = lines[n][3] //断语
a[6] = lines[n][4] //尚注

return a

}
