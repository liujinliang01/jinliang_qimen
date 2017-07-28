/************************************
* 名称：奇门布局                    *
* 作者：刘金亮                      *
* 缘起：为方便大规模采集奇门数据，  *
* 解决暗干、天书定局数、多种方法起  *
* 局、摆脱对互联网的依赖等等问题，  *
* 迫切需要根据自己需要的自动化起局  *
* 软件。恰巧北大的汪洋制作了一个万  *
* 年历软件，在网上公开了，省却了我  *
* 不少功夫，得以专注于奇门布局的开  *
* 发。断断续续于2004年4-9月份所作   *
************************************/
//var empty = "&nbsp;&nbsp;"
//var empty = "<span visible=false>空</span>"
var qiyi = new Array("","戊","己","庚","辛","壬","癸","丁","丙","乙")
var shi_tiangan = new Array("","甲","乙","丙","丁","戊","己","庚","辛","壬")
var shier_dizhi = new Array("","子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥")

var bamen = new Array("","休门","生门","伤门","杜门","景门","死门","惊门","开门")
//var bamen_fei = new Array("","休门","死门","伤门","杜门","中门","开门","惊门","生门","景门")
var bamen_fei = new Array("","休","死","伤","杜","中","开","惊","生","景")
var bamen_skip = new Array("","休门","死门","伤门","杜门","开门","惊门","生门","景门")
var jiuxing= new Array("","天蓬","天任","天冲","天辅","天英","禽芮","天柱","天心")
//var jiuxing_fei= new Array("","天蓬","天芮","天冲","天辅","天禽","天心","天柱","天任","天英")
var jiuxing_fei= new Array("","蓬","芮","冲","辅","禽","心","柱","任","英")
var bashen_quan = new Array("","值符","螣蛇","太阴","六合","勾陈","朱雀","九地","九天")
var bashen_quan_yin = new Array("","值符","螣蛇","太阴","六合","白虎","玄武","九地","九天")

//var bashen_fei_quan = new Array("","值符","螣蛇","太阴","六合","勾陈","太常","朱雀","九地","九天")
//var bashen_fei_quan_yin = new Array("","值符","螣蛇","太阴","六合","白虎","太常","玄武","九地","九天")

var bashen_fei_quan = new Array("","值","蛇","阴","合","勾","常","朱","地","天")
var bashen_fei_quan_yin = new Array("","值","蛇","阴","合","虎","常","朱","地","天")

var bashen_fei = new Array("","值","蛇","阴","合","勾","常","朱","地","天")
var bashen_fei_yin = new Array("","值","蛇","阴","合","虎","常","玄","地","天")

var bashen = new Array("","值","蛇","阴","合","勾","朱","地","天")
var bashen_yin = new Array("","值","蛇","阴","合","虎","玄","地","天")

var zibai = new Array("","①","②","③","④","⑤","⑥","⑦","⑧","⑨")


var yinshen = new Array("","值","蛇","阴","合","勾","虎","玄","地","天")

var nayin_list = new Array("",
"海中金","海中金","炉中火","炉中火","大林木",
"大林木","路旁土","路旁土","剑锋金","剑锋金",
"山头火","山头火","涧下水","涧下水","城墙土",
"城墙土","白腊金","白腊金","杨柳木","杨柳木",
"泉中水","泉中水","屋上土","屋上土","霹雷火",
"霹雷火","松柏木","松柏木","常流水","常流水",
"沙中金","沙中金","山下火","山下火","平地木",
"平地木","壁上土","壁上土","金箔金","金箔金",
"佛灯火","佛灯火","天河水","天河水","大驿土",
"大驿土","钗钏金","钗钏金","桑柘木","桑柘木",
"大溪水","大溪水","沙中土","沙中土","天上火",
"天上火","石榴木","石榴木","大海水","大海水"
)


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

function bu_huoganzhi(huo_ganzhi,huo_xunwei){
	var i
	var temp
	var ar = new Array()
	var xunwei
	for(i = 1; i < 10; i++) {
		ar[i] = huo_ganzhi[i].substr(0,1)
		if(huo_xunwei[i].substr(0,1) == "癸") {
			xunwei = huo_xunwei[i].substr(1,1)
		}
	}
}


function bu_renpan_anganzhi(ju_num,xunshou,fushi_loc){
	//alert(fushi_loc)
	//var xunshou_gan = xunshou[0]
	var xunshou_zhi = xunshou[1].substr(1,1)
	var zhishi_loc = parseInt(fushi_loc.substr(fushi_loc.indexOf("值使")+4,1))
	//alert(fushi_loc.substr(fushi_loc.indexOf("值使")+3,1))
	var zhi_start_at = locate(xunshou_zhi,shier_dizhi)
	
	//alert(zhishi_loc + ":"+zhi_start_at)
	
	for(i=0; i<9; i++){

		if(ju_num[1]>0){
			ren_anzhi[cycle(i+zhishi_loc,9)] = shier_dizhi[cycle(zhi_start_at + i,12)]			
			//alert(cycle(i+zhishi_loc,9)+ "宫："+ren_anzhi[cycle(i+zhishi_loc,12)])
			ren_angan[cycle(i+zhishi_loc,9)] = shi_tiangan[cycle(1 + i,9)]
		} else{
			ren_anzhi[cycle(-i+zhishi_loc,9)] = shier_dizhi[cycle(zhi_start_at + i,12)]
			  //alert("-i="+ (-i)+":"+cycle(-i+zhishi_loc,9)+ "宫："+ren_anzhi[cycle(i+zhishi_loc,12)])
			ren_angan[cycle(-i+zhishi_loc,9)] = shi_tiangan[cycle(1 + i,9)]
		}
	}
	//alert(ren_angan+":"+ren_anzhi)
}


function bu_tiandi_zhishen(ju_num,xunshou,tian, di){
	var xunshou_gan = xunshou[0]
	var xunshou_zhi = xunshou[1].substr(1,1)

	var i
	var dipan_gan_start_at = locate(xunshou_gan,di)
	var tianpan_gan_start_at = locate(xunshou_gan,tian)
	var zhi_start_at = locate(xunshou_zhi,shier_dizhi)

	for(i=0; i<9; i++){

		if(ju_num[1]>0){
			di_zhi[cycle(i+dipan_gan_start_at,9)] = shier_dizhi[cycle(zhi_start_at + i,12)]
			tian_zhi[cycle(i+tianpan_gan_start_at,9)] = shier_dizhi[cycle(zhi_start_at + i,12)]
		} else{
			di_zhi[cycle(-i+dipan_gan_start_at,9)] = shier_dizhi[cycle(zhi_start_at +i,12)]
			tian_zhi[cycle(-i+tianpan_gan_start_at,9)] = shier_dizhi[cycle(zhi_start_at + i,12)]
		}
	}
	//alert("tian = " + tian + "; di = " + di + "; huo_ganzhi = " + huo_ganzhi)
}

function bu_tiandi_angan(ju_num,xunshou,tian,di,tian_angan,di_angan){
	var xunshou_gan = xunshou[0]
	var i
	var dipan_gan_start_at = locate(xunshou_gan,di)
	var tianpan_gan_start_at = locate(xunshou_gan,tian)

	for(i=1; i<10; i++){

		if(ju_num[1]>0){
			di_angan[cycle(i+dipan_gan_start_at,9)] = shi_tiangan[cycle(i+1,9)]
			tian_angan[cycle(i+tianpan_gan_start_at,9)] = shi_tiangan[cycle(i+1,9)]
		} else{
			di_angan[cycle(-i+dipan_gan_start_at,9)] = shi_tiangan[cycle(i+1,9)]
			tian_angan[cycle(-i+tianpan_gan_start_at,9)] = shi_tiangan[cycle(i+1,9)]
		}
	}	
	//alert(tian_angan + "   "+ di_angan)
}


/*
function bu_tiandi_huozhi(huo_ganzhi,huo_xunwei,tian, di){
	//alert("活干支 = " + huo_ganzhi + "; huo_xunwei = " + huo_xunwei)
	var i
	var temp
	var ar = new Array()
	var xunwei
	for(i = 1; i < 10; i++) {
		ar[i] = huo_ganzhi[i].substr(0,1)
		if(huo_xunwei[i].substr(0,1) == "癸") {
			xunwei = huo_xunwei[i].substr(1,1)
		}
	}

	for(i=1; i<10; i++){
		if(di[i] == "癸") {
			di_zhi[i] = xunwei	
		} else{
			temp = locate(di[i],ar)
			di_zhi[i] = huo_ganzhi[temp].substr(1,1)
		}
		if(tian[i] == "癸"){
			tian_zhi[i] = xunwei	
		} else{
			temp = locate(tian[i],ar) 
			tian_zhi[i] = huo_ganzhi[temp].substr(1,1)
		}
	}
}
*/

function bu_riliuqin(rigan, fill_ar, ref_ar){

	var i 
 	var rigan_wuxing = new Array(2) 
	rigan_wuxing = get_tiangan_wuxing(rigan)
	//alert("rigan_wuxing="+rigan_wuxing)
	var temp
	for (i =1; i < 10; i++) {
		temp = ref_ar[i] 

		if(temp.length>1){
			temp = temp.substr(0,1)
		} 			
		fill_ar[i] = get_liuqin(rigan_wuxing, get_tiangan_wuxing(temp))	
  	}
	//alert("finished")
}
function bu_liuqin(shigan, fill_ar, ref_ar){ 
	var i 
 	var shigan_wuxing = new Array(2) 
	shigan_wuxing = get_tiangan_wuxing(shigan)
	var temp
	for (i =1; i < 10; i++) {
		temp = ref_ar[i] 

		if(temp.length>1){
			temp = temp.substr(0,1)
			fill_ar[i] = get_liuqin(shigan_wuxing, get_tiangan_wuxing(temp))
		} else {
			if(temp == shigan) {
				fill_ar[i] = "<span style='background-color:yellow'>比</span>"	
			} else {
				fill_ar[i] = get_liuqin(shigan_wuxing, get_tiangan_wuxing(temp))
			}
		}
  	}
	//alert("finished")
}

function skip_fei(start,ar,ar_start, x) {
// start是从哪一宫开始 
// ar储存元素的数列
// ar_start是ar从哪里开始
// x是布完之后的结果数列

	var i, k
	i = ar_start
	if (start < 0) {
		start = -start	
		for(k=1; k<10; k++) {//运行九次
				
			if(start == 5) {
				start = 4
				continue
			}

			if(i == 5) {
				i = i + 1
			}

			i = cycle(i,9)
			start = cycle(start,9)	
			x[start] = ar[i]
			start = start -1
			i = i + 1			
		}
	} else {	
		for (k=1; k<10; k++){//运行九次
			
			if(start == 5){
				start = 6
				continue
			}
			
			if(i == 5) {
				i = i + 1
			}

			i = cycle(i,9)
			start = cycle(start,9)						
			x[start] = ar[i]
			start = start + 1
			i = i + 1
		}					
	}
}

function set_zhifu_loc(xing_name,ji_gong) {
	return "<br>值符" + xing_name + "星在" +ji_gong + "宫"
}

function set_zhishi_loc(men_name,ji_gong) {
	return " 值使" + men_name + "在" + ji_gong + "宫"
}

function buju_skip(angan,ju_num,seed_zhu_xushu) {
	var xunshou_fushi_inf = " " + xunshou[1]

	var jushu = parseInt(ju_num[1]) //ju_num in numeric format
	bu_fei(jushu,qiyi,1,di, di_info,seed_zhu_xushu) // 两个array被赋值： 一个储存地盘各宫得何干，另一个储存旬首、年、月、日、时、值符各在何宫
	var zhuan_di_info = to_zhuan_array(di_info)

	di_shen = new Array(10) 
	var di_shen_info = new Array(7)
	var start_di_shen
	if (jushu < 0) {
		start_di_shen = -di_info[0]
	} else {
		start_di_shen = di_info[0]
	}

	tian_shen = new Array(10)
	var tian_shen_info = new Array (7)

	var start
	if (jushu < 0) {
		start = -di_info[4]
	} else {
		start = di_info[4]
	}

	di_shen = bu_zhuan(zhuan_di_info[0],bashen,1)

	bu_fei(start,bashen_fei_quan,1,tian_shen, tian_shen_info)
	men = new Array(10)
	var men_info = new Array(7)

	zhishi = find_zhishi(di_info[0],cycle(seed_zhu_xushu,10))
	
	if(zhishi == 5) {
		if(jushu > 0) {	
			zhishi = 6
		} else {
			zhishi = 4
		}
	}
	var zhishi_gong = zhishi
	if(jushu < 0) {
		zhishi_gong = -zhishi
	}

//alert(zhishi_gong)
	var zhishi_men
	if(di_info[0] == 5){
		if(jushu > 0) {
			zhishi_men = 8		
		} else {
			zhishi_men = 2
		}
	} else {
		zhishi_men = di_info[0]
	}

	skip_fei(zhishi_gong, bamen_fei, zhishi_men,men)

	xing = new Array(10)
	var xing_info = new Array(7)
	var xing_start = di_info[5]

	if(jushu<0) {
		 xing_start = -di_info[5]
	}

	bu_fei(xing_start,jiuxing_fei,di_info[0], xing, xing_info)
	var xunshou_gong = di_info[0]

	xunshou_fushi_inf = xunshou_fushi_inf + set_zhifu_loc(jiuxing_fei[xunshou_gong],di_info[5]) + set_zhishi_loc(bamen_fei[xunshou_gong],zhishi)

	var angan_starts = fei_angan_starts_at()
	xunshou_fushi_inf = xunshou_fushi_inf + " " +angan_starts[1]
	an = new Array(10)
	var angan_info = new Array(7)
	var x = qiyi_xushu(angan)
	bu_fei(angan_starts[0], qiyi, x, an, angan_info) //fill two arrays: an and angan_info 

	tian = new Array(10)
	var tian_info = new Array(7)
	var tian_start = di_info[5]
	bu_fei(tian_start, qiyi, qiyi_xushu(xunshou[0]), tian, tian_info)
	mark_bg(bamen_fei[xunshou_gong],men,"#C0C0C0")
	return xunshou_fushi_inf
}

function bu_zibai(ju,x,a){ //ju 是局数，据此以定顺逆；x是入中之数；a是储存紫白的Array

	var start
	var z
	a[0] = ""

	if(ju>0){
		start = cycle(x - 5,9)	
		for(var i=1; i<10; i++){
			z = cycle(start+i,9)
			a[i] = zibai[z]
		}		
	} else{
		start = cycle(x + 5,9)	
		for(var i=1; i<10; i++){
			z = cycle(start-i,9)
			a[i] = zibai[z]
		}
	}
}

function tian_qiyi_zhuan(di_start,d,start) {
	var ar = new Array(10)
	ar[0] = ""
	for (var i=1; i < 10; i++) {
		ar[i] = d[to_fei(i)]
	}
	var a = bu_zhuan_shun(di_start,ar,start)
	return a
}


function nayin_yinshen(x) {
	var start
	if (jushu > 0) {
		start = -di_info[0]
		di_info[4] = -di_info[4]
	} else {
		start = di_info[0]
	}

	simple_fei(start, yinshen, 1, di_yinshen, 9)
	//simple_fei(di_info[4], yinshen, 1, tian_yinshen, 9)
	var tian_temp = new Array(10) 

	tian_yinshen = tian_qiyi_zhuan(start,di_yinshen,di_info[4]) //借用tian_qiyi_zhuan()

	for(var i = 0; i < 11; i++) {
		if (tian_yinshen[i] == di_yinshen[2]){
			tian_yinshen[i] = tian_yinshen[i] + di_yinshen[5] 
		} else {
			tian_yinshen[i] = tian_yinshen[i] + "　" 
		}
	}
	var y = floor(x/10)


	if(x%10 == 0) {
		y = y - 1		
	} 

	y = y*10 + 1
	
	if (jushu < 0) {
		start = -di_info[0]
	} else {
		start = di_info[0]
	}	
	
	//alert("huajia["  + y + "] = " + huajia[y])
	simple_fei(start, huajia, y, huo_ganzhi, 60)
	mark_wei_ma(huo_ganzhi)

	simple_fei(start, nayin_list, y, nayin, 60)	

	//populate huo_xunwei
	for(var i = 0; i < 11; i++){
		huo_xunwei[i] = "　　"
		huo_xunwei[di_info[0]] = huajia[cycle(y + 9,60)]
	}

}

function to_zhuan_array(a) {
	var b = new Array(a.length)
	for(var i=0; i < a.length +1; i++) {		
		b[i] = to_zhuan(a[i])
	}
	return b
}

function simple_fei(start, ar, ar_start, x, c){ // c is the cycle, with huajia, the cycle is 60; with palace, the cylce is 9
	var i, k
	i = ar_start
	if (start < 0) {
		start = -start	
		for(k=1; k<10; k++,i++) {//运行九次					
			start = cycle(start,9)
			i = cycle(i,c)
			x[start--] = ar[i]		
		}
	} else {	
		for (k=1; k<10; k++,i++){//运行九次
			start = cycle(start,9)
			i = cycle(i,c)				
			x[start++] = ar[i]
			//alert("x[" + start + "] = " + ar[i])
		}					
	}
}

 
function bu_kong(str,c){
	for(var i=1; i < kong.length; i++) {
		kong[i] = "　"
	}

	//var k = "<font color=orange>空</font>"
	var k = "<span style='background-color:" + c + "'>空</span>"

	var s = str[0]
	switch(s){
		case "戊":
		kong[6] = k
		break;

		case "己":
		kong[2] = k
		kong[7] = k
		break;

		case "庚":
		kong[2] = k
		kong[9] = k
		break;

		case "辛":
		kong[4] = k
		break;

		case "壬":
		kong[3] = k
		kong[8] = k
		break;

		case "癸":
		kong[1] = k
		kong[8] = k
		break;
	}
}

function bu_ma(str) {

	for(var i=1; i < ma.length; i++) {
		//ma[i] = "<font color=white>马</font>"
		ma[i] = "　"
	}

	var m = "<span style='background-color: #FF99CC'>马</span>"
	//var m = "<font color=orange>马</font>"
	var zhi = str.substring(1,2)
	switch(zhi) {
		case "申":
		ma[8] = m
		break;

		case "子":
		ma[8] = m
		break;

		case "辰":
		ma[8] = m
		break;

		case "亥":
		ma[4] = m
		break;

		case "卯":
		ma[4] = m
		break;

		case "未":
		ma[4] = m
		break;


		case "巳":
		ma[6] = m
		break;

		case "酉":
		ma[6] = m
		break;

		case "丑":
		ma[6] = m
		break;


		case "寅":
		return ma[2] = m
		break;

		case "午":
		ma[2] = m
		break;

		case "戌":
		ma[2] = m
		break;		
	}	
}


function buju_tianshu(angan,ju_num,seed_zhu_xushu) {
	var xunshou_fushi_inf = " " + xunshou[1]
	jushu = parseInt(ju_num[1]) //ju_num in numeric format
	jushu = tianshu_jushu(jushu, xunshou[0])
	xunshou_fushi_inf = xunshou_fushi_inf + " 天书局数 = " + jushu
	di = new Array(10) 
	di_info = new Array(7)
	bu_fei(jushu,qiyi,1,di, di_info,seed_zhu_xushu) // 两个array被赋值： 一个储存地盘各宫得何干，另一个储存旬首、年、月、日、时、值符各在何宫
	zhuan_di_info = to_zhuan_array(di_info)
	zhishi = find_zhishi(di_info[0],cycle(seed_zhu_xushu,10))
	var zhuan_zhishi = to_zhuan(zhishi)
	if(zhuan_di_info[0]<0){
		di_shen = bu_zhuan(zhuan_di_info[0],bashen_yin,1)
		tian_shen = bu_zhuan(zhuan_di_info[5],bashen_quan_yin,1)
	} else {
		di_shen = bu_zhuan(zhuan_di_info[0],bashen,1)
		tian_shen = bu_zhuan(zhuan_di_info[5],bashen_quan,1)
	}
	men = bu_zhuan_shun(to_zhuan(zhishi), bamen, zhuan_di_info[0])
	xing = new Array(10)
	var xing_info = new Array(7)

	bu_fei(di_info[4],jiuxing_fei,di_info[0], xing, xing_info,seed_zhu_xushu)

	var xunshou_gong = di_info[0]

	if(xunshou_gong == 5) {
		xunshou_gong = 2
	}
	
	xunshou_fushi_inf = xunshou_fushi_inf + set_zhifu_loc(jiuxing_fei[xunshou_gong],di_info[5]) + set_zhishi_loc(bamen_fei[xunshou_gong],zhishi)

	var angan_starts = angan_starts_at()
	xunshou_fushi_inf = xunshou_fushi_inf + " " +angan_starts[1]
	an = new Array(10)
	var angan_info = new Array(7)
	var x = qiyi_xushu(angan)
	bu_fei(angan_starts[0], qiyi, x, an, angan_info,seed_zhu_xushu) //fill two arrays: an and angan_info 
	tian = tian_qiyi_zhuan(zhuan_di_info[5], di, zhuan_di_info[0])
	dai_gan = qin_gan(xing)
	mark_bg(bamen_fei[xunshou_gong],men,"#C0C0C0")
	return xunshou_fushi_inf
}

function buju_zhuan(angan,ju_num,seed_zhu_xushu) {
	
	var xunshou_fushi_inf = " " + xunshou[1]
	jushu = parseInt(ju_num[1])
	di = new Array(10) 
	di_info = new Array(7)

	bu_fei(jushu,qiyi,1,di,di_info,seed_zhu_xushu) /* 两个array被赋值： 一个储存地盘各宫得何干，
另一个储存旬首、年、月、日、时、值符各在何宫 
*/
	var zhuan_di_info = to_zhuan_array(di_info)
	zhishi = find_zhishi(di_info[0],cycle(seed_zhu_xushu,10))

	var zhuan_zhishi = to_zhuan(zhishi)

	if(jushu<0){
		di_shen = bu_zhuan(zhuan_di_info[0],bashen_yin,1)
		tian_shen = bu_zhuan(zhuan_di_info[5],bashen_quan_yin,1)
	} else {
		di_shen = bu_zhuan(zhuan_di_info[0],bashen,1)
		tian_shen = bu_zhuan(zhuan_di_info[5],bashen_quan,1)
	}
/*
	di_shen = bu_zhuan(zhuan_di_info[0],bashen,1)
	tian_shen = bu_zhuan(zhuan_di_info[5],bashen_quan,1)
*/
	men = bu_zhuan_shun(to_zhuan(zhishi), bamen, zhuan_di_info[0])
	xing = bu_zhuan_shun(zhuan_di_info[5],jiuxing,zhuan_di_info[0])
	
	tian = tian_qiyi_zhuan(zhuan_di_info[5], di, zhuan_di_info[0])
	dai_gan = qin_gan(xing)
	var xunshou_gong = di_info[0]

	if(xunshou_gong == 5) {
		xunshou_gong = 2
	}

	xunshou_fushi_inf = xunshou_fushi_inf + " " + set_zhifu_loc(jiuxing_fei[xunshou_gong],di_info[5]) + set_zhishi_loc(bamen_fei[xunshou_gong],zhishi)	
	//alert(xunshou_fushi_inf)
	var angan_starts = angan_starts_at()
	xunshou_fushi_inf = xunshou_fushi_inf + " " +angan_starts[1]
	an = new Array(10)
	var angan_info = new Array(7)
	var x = qiyi_xushu(angan)
	bu_fei(angan_starts[0], qiyi, x, an,angan_info,seed_zhu_xushu)
	//mark_bg(bamen_fei[xunshou_gong],men,"#C0C0C0")
	return xunshou_fushi_inf
}

function buju_kuonang(angan,ju_num,seed_zhu_xushu) {

	//var xunshou_fushi_inf = " " +  xunshou[1]
	var xunshou_fushi_inf = " " 
	var jushu = parseInt(ju_num[1]) //ju_num in numeric format

// 两个array被赋值： 一个储存地盘各宫得何干，另一个储存旬首、年、月、日、时、值符各在何宫
	bu_fei(jushu,qiyi,1,di, di_info,seed_zhu_xushu) 
	if (seed_zhu_xushu%10 == 1){ //用以起局的种子时柱如果是六甲旬首时，括囊要求天盘直符加在地盘戊，而不是加在地盘旬首上
		di_info[5] = Math.abs(jushu)
	}
	//alert(di_info)
	zhishi = find_zhishi(di_info[0],cycle(seed_zhu_xushu,10))
	if (seed_zhu_xushu%10 == 1){ //用以起局的种子时柱如果是六甲旬首时，括囊要求致使门加在暗干戊所在之宫
		if(jushu<0){// 从地盘旬首宫开始，顺或逆飞四宫即是暗干戊所在之宫
			zhishi = cycle(di_info[0] - 4,9) 		
		}else{		
			zhishi = cycle(di_info[0] + 4,9) 		
		}
	}	
	di_shen = new Array(10) 
	var di_shen_info = new Array(7)
	var start_di_shen

	if (jushu < 0) {
		start_di_shen = -di_info[0]
		bu_fei(start_di_shen,bashen_fei_yin,1,di_shen,di_shen_info)
	} else {
		start_di_shen = di_info[0]
		bu_fei(start_di_shen,bashen_fei,1,di_shen,di_shen_info)
	}

	//bu_fei(start_di_shen,bashen_fei,1,di_shen,di_shen_info)

	tian_shen = new Array(10)
	var tian_shen_info = new Array (7)

	var start
	if (jushu < 0) {
		start = -di_info[5]
		bu_fei(start,bashen_fei_quan_yin,1,tian_shen, tian_shen_info)
	} else {
		start = di_info[5]
		bu_fei(start,bashen_fei_quan,1,tian_shen, tian_shen_info)
	}
	//bu_fei(start,bashen_fei_quan,1,tian_shen, tian_shen_info)
	men = new Array(10)
	var men_info = new Array(7)
	if(jushu <0){
		bu_fei(-1*zhishi, bamen_fei, di_info[0],men,men_info)	
	}else {
		bu_fei(zhishi, bamen_fei, di_info[0],men,men_info)	
	}

	xing = new Array(10)
	var xing_info = new Array(7)
	if(jushu<0){
		bu_fei(-1*di_info[5],jiuxing_fei,di_info[0], xing, xing_info)		
	}else{
		bu_fei(di_info[5],jiuxing_fei,di_info[0], xing, xing_info)
	}

	var xunshou_gong = di_info[0]

	xunshou_fushi_inf = xunshou_fushi_inf + " " + set_zhifu_loc(jiuxing_fei[xunshou_gong],di_info[5]) + set_zhishi_loc(bamen_fei[xunshou_gong],zhishi)

	var angan_starts = fei_angan_starts_at()
	xunshou_fushi_inf = xunshou_fushi_inf + " " +angan_starts[1]
	an = new Array(10)
	var angan_info = new Array(7)
	var x = qiyi_xushu(angan)
	bu_fei(angan_starts[0], qiyi, x, an, angan_info) //fill two arrays: an and angan_info 

	tian = new Array(10)
	var tian_info = new Array(7)

	var tian_start 
	if (jushu<0) {
		tian_start = -di_info[5]
	} else {
		tian_start = di_info[5]
	}
	bu_fei(tian_start, qiyi, qiyi_xushu(xunshou[0]), tian, tian_info)
	//mark_bg(bamen_fei[xunshou_gong],men,"#C0C0C0")
//alert(an + " " + an_angan_info)
	
	
	var an_men

	an_men = cycle(10 - di_info[0],9) //地盘旬首宫对冲宫之门

	var anzhishi_start
	var anzhishi_info = new Array(7)
	if(jushu<0){
		anzhishi_start = cycle(an_men +  cycle(seed_zhu_xushu,10) - 1,9)
		//alert(anzhishi_start)
		bu_fei(1*anzhishi_start, bamen_fei, an_men,anzhishi,anzhishi_info)
		
	} else{
		anzhishi_start = cycle(an_men -  cycle(seed_zhu_xushu,10) + 1,9)
		bu_fei(-1*anzhishi_start, bamen_fei,an_men,anzhishi,anzhishi_info)
	}
	//alert(xunshou_fushi_inf.indexOf("nbsp;"))
	if(xunshou_fushi_inf.indexOf(" &nbsp;")>0){
		xunshou_fushi_inf = xunshou_fushi_inf.substr(0,xunshou_fushi_inf.indexOf(" &nbsp;"))
	}
//alert("/"+xunshou_fushi_inf+"/")
	return xunshou_fushi_inf
}

function bu_fei_shunni(start,ar,ar_start, x, y,seed_hj_xushu) {
// return 2 arrays: 
// 1. di 储存地盘奇仪的分布, 即1-9宫各得何干
// 2. di_info 储存旬首、年干、月干、日干、时干、值符 各在何宫, 序数从0算起, 即0为旬首
//alert("start=" + start + " ar=" + ar + " ar_start=" + ar_start + " x=" + x + " y="+ y + " seed_hj_xushu=" + seed_hj_xushu)
	var i, k
	i = ar_start
	if (start < 0) {
		start = -start	
		for(k=1; k<10; k++,i++) {//运行九次					
			start = cycle(start,9)
			i = cycle(i,9)
			x[start--] = ar[i]
		}
	} else {	
		for (k=1; k<10; k++,i++){//运行九次
			start = cycle(start,9)
			i = cycle(i,9)				
			x[start++] = ar[i]
		}					
	}
	var seed_gan = sizhu_gan(seed_hj_xushu)

	for(var m = 1; m < x.length + 1; m++) {
		//document.write("<br> x[" + m + "] = " + x[m]) 
		if(x[m] == xunshou[0]) {
			y[0] = m
		}
		if(x[m] == niangan) {
			y[1] = m
		}
		if(x[m] == yuegan) {
			y[2] = m
		}
		if(x[m] == rigan) {
			y[3] = m
		}
		if(x[m] == shigan) {
			y[4] = m

		}
		if(x[m] == seed_gan) {
			//document.write("<br> x[m] = " + x[m])
			y[5] = m
		}		
	}	
}


function buju_zhigui(angan,ju_num,seed_zhu_xushu) {

	var xunshou_fushi_inf = " " +  xunshou[1]

	var jushu = parseInt(ju_num[1]) //ju_num in numeric format

// 两个array被赋值： 一个储存地盘各宫得何干，另一个储存旬首、年、月、日、时、值符各在何宫
	bu_fei(jushu,qiyi,1,di, di_info,seed_zhu_xushu) 

	zhishi = find_zhishi(di_info[0],cycle(seed_zhu_xushu,10))

	di_shen = new Array(10) 
	var di_shen_info = new Array(7)
	var start_di_shen

	if (jushu < 0) {
		start_di_shen = -di_info[0]
		bu_fei(start_di_shen,bashen_fei_yin,1,di_shen,di_shen_info)
	} else {
		start_di_shen = di_info[0]
		bu_fei(start_di_shen,bashen_fei,1,di_shen,di_shen_info)
	}

	//bu_fei(start_di_shen,bashen_fei,1,di_shen,di_shen_info)

	tian_shen = new Array(10)
	var tian_shen_info = new Array (7)

	var start
	if (jushu < 0) {
		start = -di_info[4]
		bu_fei(start,bashen_fei_quan_yin,1,tian_shen, tian_shen_info)
	} else {
		start = di_info[4]
		bu_fei(start,bashen_fei_quan,1,tian_shen, tian_shen_info)
	}
	//bu_fei(start,bashen_fei_quan,1,tian_shen, tian_shen_info)
	men = new Array(10)
	var men_info = new Array(7)
	bu_fei(zhishi, bamen_fei, di_info[0],men,men_info)
	xing = new Array(10)
	var xing_info = new Array(7)
	bu_fei(di_info[5],jiuxing_fei,di_info[0], xing, xing_info)
	var xunshou_gong = di_info[0]

	xunshou_fushi_inf = xunshou_fushi_inf + " " + set_zhifu_loc(jiuxing_fei[xunshou_gong],di_info[5]) + set_zhishi_loc(bamen_fei[xunshou_gong],zhishi)

	var angan_starts = fei_angan_starts_at()
	xunshou_fushi_inf = xunshou_fushi_inf + " " +angan_starts[1]
	an = new Array(10)
	var angan_info = new Array(7)
	var x = qiyi_xushu(angan)
	bu_fei(angan_starts[0], qiyi, x, an, angan_info) //fill two arrays: an and angan_info 

	tian = new Array(10)
	var tian_info = new Array(7)

	var tian_start 
	if (jushu<0) {
		tian_start = -di_info[5]
	} else {
		tian_start = di_info[5]
	}
	bu_fei(tian_start, qiyi, qiyi_xushu(xunshou[0]), tian, tian_info)
	//mark_bg(bamen_fei[xunshou_gong],men,"#C0C0C0")
//alert(an + " " + an_angan_info)
	return xunshou_fushi_inf
}

function find_zhishi(xunshou,shigan) {
	//document.write("<br> xunshou = " + xunshou)
	//document.write("<br> shigan = " + shigan)

	var x
	if(jushu < 0) {
		x = xunshou - (shigan - 1)
	} else {
		x = xunshou + (shigan - 1)		
	} 
	return cycle(x,9)
}

function find_anzhishi(xunshou,shigan) {
	//document.write("<br> xunshou = " + xunshou)
	//document.write("<br> shigan = " + shigan)
	shigan = cycle(shigan,10)
	var x
	if(jushu > 0) {
		x = xunshou - (shigan - 1)
	} else {
		x = xunshou + (shigan - 1)		
	} 
	return cycle(x,9)
}
function bu_mingzhishi(di_xunshou_gong,shigan,ming_ar){
	shigan = cycle(shigan,10)
	var m = find_zhishi(di_xunshou_gong,shigan) // 明值使所在之宫
	//var a = find_anzhishi(di_xunshou_gong,shigan) // 暗值使所在之宫
	for(i=1;i<10;i++){
		ming_ar[i] = "&nbsp;"
	}
	ming_ar[m] = "<span style='background-color:\"yellow\"'>明</span>" 
	//alert(ming_ar)
	return ming_ar
}

function bu_anzhishi(di_xunshou_gong,shigan,an_ar){//this function is based on a wrong understanding of anzhishi
	shigan = cycle(shigan,10)
	//var m = find_zhishi(di_xunshou_gong,shigan) // 明值使所在之宫
	var a = find_anzhishi(di_xunshou_gong,shigan) // 暗值使所在之宫
	for(i=1;i<10;i++){
		an_ar[i] = "&nbsp;"
	}
	an_ar[a] = " <span style='background-color:\"#99CCFF\"'>暗</span>"
	//alert(an_ar)
	return an_ar
}

function bu_fei(start,ar,ar_start, x, y,seed_hj_xushu) {
// return 2 arrays: 
// 1. di 储存地盘奇仪的分布, 即1-9宫各得何干
// 2. di_info 储存旬首、年干、月干、日干、时干、值符 各在何宫, 序数从0算起, 即0为旬首
//alert("start=" + start + " ar=" + ar + " ar_start=" + ar_start + " x=" + x + " y="+ y + " seed_hj_xushu=" + seed_hj_xushu)
	var i, k
	i = ar_start
	if (start < 0) {
		start = -start	
		for(k=1; k<10; k++,i++) {//运行九次					
			start = cycle(start,9)
			i = cycle(i,9)
			x[start--] = ar[i]
		}
	} else {	
		for (k=1; k<10; k++,i++){//运行九次
			start = cycle(start,9)
			i = cycle(i,9)				
			x[start++] = ar[i]
		}					
	}
	var seed_gan = sizhu_gan(seed_hj_xushu)

	for(var m = 1; m < x.length + 1; m++) {
		//document.write("<br> x[" + m + "] = " + x[m]) 
		if(x[m] == xunshou[0]) {
			y[0] = m
		}
		if(x[m] == niangan) {
			y[1] = m
		}
		if(x[m] == yuegan) {
			y[2] = m
		}
		if(x[m] == rigan) {
			y[3] = m
		}
		if(x[m] == shigan) {
			y[4] = m

		}
		if(x[m] == seed_gan) {
			//document.write("<br> x[m] = " + x[m])
			y[5] = m
		}		
	}	
}

function find_xunshou(x){
	var a = new Array(2)
	//document.write("<br> x%10 = " +x%10)
	var y = floor(x/10)
	if(x%10 == 0) {
		y = y - 1
	}

	//document.write("<br> x = " +x)
	
	switch(y) {
		case 0: 
		a[0] = "戊"
		a[1] = "甲子戊 戌亥空"
		break;

		case 1: 
		a[0] = "己"
		a[1] = "甲戌己 申酉空"
		break;

		case 2: 
		a[0] = "庚"
		a[1] = "甲申庚 午未空"
		break;

		case 3: 
		a[0] = "辛"
		a[1] = "甲午辛 辰巳空"
		break;

		case 4: 
		a[0] = "壬"
		a[1] = "甲辰壬 寅卯空"
		break;

		case 5: 
		a[0] = "癸"
		a[1] = "甲寅癸 子丑空"
		break;

		case 6: 
		a[0] = "癸"
		a[1] = "甲寅癸 子丑空"
		break;

		default: 
		return "error"
		break;
	}
	return a	
}


function to_zhuan(x) {
	 var y
	switch(x) {
		case 1:
		y = 1
		break;

		case 2:
		y = 6
		break;

		case 3:
		y = 3
		break;

		case 4:
		y = 4
		break;

		case 5:
		y = 6
		break;

		case 6:
		y = 8
		break;

		case 7:
		y = 7
		break;

		case 8:
		y = 2
		break;

		case 9:
		y = 5
		break;

		default: y = "error"
		break;
	}
	return y			
}

function to_fei(x) {
	switch(x) {
		case 1: 
		return 1
		break;

		case 2: 
		return 8
		break;

		case 3: 
		return 3
		break;

		case 4: 
		return 4
		break;

		case 5: 
		return 9
		break;

		case 6: 
		return 2
		break;

		case 7: 
		return 7
		break;

		case 8: 
		return 6
		break;

		default:
		return "error"
		break;
	}
}

function sizhu_gan(x){
	if(x==1) {
		return "戊"
	} else if (x==11) {
		return "己"
	} else if (x==21) {
		return "庚"
	} else if (x==31) {
		return "辛"
	} else if (x==41) {
		return "壬"
	} else if (x==51) {
		return "癸"
	
	} else {
		switch(x%10) {

			case 2:
				return "乙"
				break;
			case 3:
				return "丙"
				break;
			case 4:
				return "丁"
				break;
			case 5:
				return "戊"
				break;
			case 6:
				return "己"
				break;
			case 7:
				return "庚"
				break;
			case 8:
				return "辛"
				break;
			case 9:
				return "壬"
				break;
			case 0:
				return "癸"
				break;
		}
	}
}

function angan_starts_at() {	
	var start
	var text = "" 
	var a = new Array(2)
	if ((angan == di[zhishi]) && zhishi != 5) {
		start = 5
		text = "&nbsp;&nbsp;&nbsp;&nbsp;"
	} else if ((angan == di[zhishi]) && zhishi == 5){
		start = 2
	} else {
		start = zhishi
	}

	if (jushu < 0) {
		start = -start
	}
	a[0] = start
	a[1] = text
	return a
}

function fei_angan_starts_at() {
	var start
	var text = "" 
	var a = new Array(2)
	if (angan == di[zhishi]) {
		start = 5
		//text = "&nbsp;&nbsp;&nbsp;&nbsp; 暗干伏吟，求变入中"
		text = "&nbsp;&nbsp;&nbsp;&nbsp; "
	} else if (angan == tian[zhishi]) {
		start = 5
		//text = "&nbsp;&nbsp;&nbsp;&nbsp; 暗干与天盘雷同，求变入中"
		text = "&nbsp;&nbsp;&nbsp;&nbsp; "		
	} else {
		start = zhishi
	}
	if (jushu < 0) {
		start = -start
	}

	a[0] = start
	a[1] = text
	return a
}

function bu_zhuan(di_start,ar,start) {//di_start 是从哪一个宫开始布；start 是要布的序列中从哪一个开始；ar is an array; start is the start in ar.
	var a = new Array(9)
	var k

	if(jushu > 0) {		
		for(var i = start; i < start + 8; i++) {
			k = cycle(di_start++,8)
			a[k] = ar[cycle(i,8)]
			//document.write("<br>k=" + k)
			//document.write("<br>bashen=" + a[k])
		}
	} else {

		for(var i = start; i < start + 8; i++) {
			k = cycle(di_start--,8)
			a[k] = ar[cycle(i,8)]
			//document.write("<br>k=" + k)
			//document.write("<br>bashen=" + a[k])
		}
	}
	return a
}


function qiyi_xushu(s){
	switch(s) {
		case "戊":
		return 1
		break;

		case "己":
		return 2
		break;

		case "庚":
		return 3
		break;

		case "辛":
		return 4
		break;

		case "壬":
		return 5
		break;

		case "癸":
		return 6
		break;

		case "丁":
		return 7
		break;

		case "丙":
		return 8
		break;

		case "乙":
		return 9
		break;

		defualt: return "error"
	}
}

function qin_gan(xing) {//标出天禽所带之干
	var a = new Array(9)
	a[0] = "<font color=white>带</font>"
	
	for(var i = 1; i < xing.length + 1; i++) {

		if (xing[i] == "禽芮"){			
			a[i] = di[5]
		} else {
			//a[i] = "<font color=white>带</font>"
			a[i] = "　"
		}
		//document.write("<br>dai_gan = " + a[i])	
	}
	return a
}


function bu_zhuan_shun(di_start,ar,start) {
	var a = new Array(9)
	var k
			
	for(var i = start; i < start + 8; i++) {
		k = cycle(di_start++,8)
		a[k] = ar[cycle(i,8)]
		//document.write("<br>k=" + k)
		//document.write("<br>bashen=" + a[k])
	}
	
	return a
}


function nian_zibai_ruzhong(y) {
	var x = y%9
	return cycle(11 - x,9)
}

function yue_zibai_ruzhong(nianzhi,yueshu) {
	var mzj = meng_zhong_ji(nianzhi)
	if(mzj == "zhong") {
		return cycle(18 - yueshu, 9)
	} else if (mzj == "ji") {
		return cycle(15 - yueshu, 9)
	} else {
		return cycle(12 - yueshu, 9)
	}
}

function ri_zibai_ruzhong(c) {

	var year = c.year()
	var month = c.month()

	if((month < 3) && (c.yGz_Str().substr(1,2) == "丑")) {
		year = year - 1			
	}

	var dongzhi = get_millis(year, 12, 2)
	var yushui = get_millis(year, 2, 2)
	var guyu = get_millis(year, 4, 2)
	var xiazhi = get_millis(year, 6, 2)
	var chushu = get_millis(year, 8, 2)
	var hanlu = get_millis(year, 10, 2)

	var dGz = c.dGz()

	var d = new Date(year, month-1, c.date(), c.hour(), c.minute())
	var time = d.getTime()

	if(month == 1) {
		return cycle(dGz, 9)		
	}

	if(month == 2) {
		if(time < yushui) {
			return cycle(dGz,9)
		} else {
			return cycle(dGz+6, 9)
		}
	}

	if(month == 3) {
		return cycle(dGz+6,9)	
	}

	if(month == 4) {
		if(time < guyu) {
			return cycle(dGz+6, 9)
		} else {
			return cycle(dGz+3, 9)
		}
	}

	if(month == 5) {
		return cycle(dGz+3, 9)
	}

	if(month == 6) {
		if(time < xiazhi) {
			return cycle(dGz+3, 9)
		}else{
			return cycle(64-dGz, 9)
		}
	}

	if(month == 7) {
		return cycle(64-dGz, 9)
	}

	if(month == 8) {
		if(time < chushu) {
			return cycle(64 - dGz, 9)
		} else {
			return cycle(67 - dGz, 9)
		}
	}

	if(month == 9) {
		return cycle(67-dGz, 9)
	}

	if(month == 10) {
		if(time < hanlu) {
			return cycle(67-dGz, 9)
		} else {
			return cycle(61-dGz, 9)
		}
	}

	if(month == 11){
		return cycle(61-dGz, 9)
	}

	if(month == 12) {
		if(time < dongzhi) {
			return cycle(61-dGz(), 9)
		} else {
			return cycle(dGz, 9)
		}
	}
}

function shi_zibai_ruzhong(ju, dgz, hgz) {
	var rizhi = dgz.substr(1,2)
	var shizhi = hgz.substr(1,2)
	var mzj = meng_zhong_ji(rizhi)	
	var x = locate(shizhi,shier_dizhi)
	var y
	if(ju < 0) {
		switch(mzj) {
			case "zhong":
			y = cycle(19-x,9)
			break;

			case "ji":
			y = cycle(16-x,9)
			break;

			case "meng":
			y = cycle(13-x,9)	
			break;

			default:
			return "Hour Zibai Error"
		}
	} else {
		switch(mzj) {
			case "zhong":
			y = cycle(x, 9)
			break;

			case "ji":
			y = cycle(x+3, 9)
			break;

			case "meng":
			y = cycle(x+6, 9)
			break;

			default:
			return "Hour Zibai Error"
		}
	}
	//alert("y = " + y)
	return y
}

function guashen(ruzhong,hgz) {
	var shizhi = hgz.substr(1,2)
	if(shizhi == "酉" || shizhi=="戌" || shizhi == "亥") {
		return 5
	} else {
		return cycle(ruzhong + 5, 9)
	}	
}

function meng_zhong_ji(dizhi_str) {
	var x = locate(dizhi_str,shier_dizhi)
	if(x == 1 || x == 4 || x == 7 || x == 10) { 
		return "zhong"
	} else if (x == 2 || x == 5 || x == 8 || x == 11) {
		return "ji"
	} else {
		return "meng"
	}
}

function get_ri_shi_fen(s) {
	var name = s.substr(0,s.indexOf(":"))
	//样式--小暑:7月7日02:15

	var yue_ri_shi = s.substr(s.indexOf(":")+1) 
	var ri_shi = s.substr(s.indexOf("月")+1)
	var ri = ri_shi.split("日")
	var ri_str = ri[0]	
	var shi_fen = ri[1]
	var a = new Array(2)
	a[0] = ri_str
	a[1] = shi_fen
	return a
}

function get_millis(n,y,jq_xushu) { 
	var d = new CCC(n, y-1, 15)
	//var c_jq = new CCC(d.getYear, )
	var jq = d.solarTerm().sTermInMonth[jq_xushu-1]
	var jq_info = new Array(2)
	jq_info = get_ri_shi_fen(jq)
	d = new Date(n, y-1, jq_info[0], jq_info[1], 8, 1)
	return d.getTime()
}

function get_gongwei_wangshuai(str){
var s = str.substr(1,2)
//alert(s)
var start = 0
var a = new Array(10)
if (s== "冬至" || s == "小寒" || s == "大寒"){
	start = 1
	a[1] = "旺"
	a[8] = "相"
	a[3] = "胎"
	a[4] = "没"
	a[9] = "死"
	a[2] = "囚"
	a[7] = "休"
	a[6] = "废"

} else if(s== "立春" || s == "雨水" || s == "惊蛰"){
	start = 8
	a[1] = "废"
	a[8] = "旺"
	a[3] = "相"
	a[4] = "胎"
	a[9] = "没"
	a[2] = "死"
	a[7] = "囚"
	a[6] = "休"
} else if (s== "春分" || s == "清明" || s == "谷雨"){
	start = 3
	a[1] = "休"
	a[8] = "废"
	a[3] = "旺"
	a[4] = "相"
	a[9] = "胎"
	a[2] = "没"
	a[7] = "死"
	a[6] = "囚"
} else if (s== "立夏" || s == "小满" || s == "芒种"){
	start = 4
	a[1] = "囚"
	a[8] = "休"
	a[3] = "废"
	a[4] = "旺"
	a[9] = "相"
	a[2] = "胎"
	a[7] = "没"
	a[6] = "死"
} else if (s== "夏至" || s == "小暑" || s == "大暑"){
	start = 9
	a[1] = "死"
	a[8] = "囚"
	a[3] = "休"
	a[4] = "废"
	a[9] = "旺"
	a[2] = "相"
	a[7] = "胎"
	a[6] = "没"
} else if (s== "立秋" || s == "处暑" || s == "白露"){
	start = 2
	a[1] = "没"
	a[8] = "死"
	a[3] = "囚"
	a[4] = "休"
	a[9] = "废"
	a[2] = "旺"
	a[7] = "相"
	a[6] = "胎"
} else if (s== "秋分" || s == "寒露" || s == "霜降"){
	start = 7
	a[1] = "胎"
	a[8] = "没"
	a[3] = "死"
	a[4] = "囚"
	a[9] = "休"
	a[2] = "废"
	a[7] = "旺"
	a[6] = "相"
} else if (s== "立冬" || s == "小雪" || s == "大雪"){
	start = 6
	a[1] = "相"
	a[8] = "胎"
	a[3] = "没"
	a[4] = "死"
	a[9] = "囚"
	a[2] = "休"
	a[7] = "废"
	a[6] = "旺"
}
return a
}