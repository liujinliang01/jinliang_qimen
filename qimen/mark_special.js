function mark_digong_bg(k1, k2, kr,kp,c) {//k1 = kong_dizhi_1, k2 = kong_dizhi_2, k3 = kong_rigan, kp = kong_peigan
	var kp1 = kp.substr(0,1)
	var kp2 = kp.substr(1,2)
	var inn = ""
	for(var i = 1; i < 10; i++) {
		for(var m = 1; m<4; m++){
		//alert("digong_" + i + m)
			inn = top.main.document.getElementById("digong_" + i + m).innerHTML
			//alert(inn)
			if(inn == k1 || inn == k2 || inn == kr || inn == kp1 || inn == kp2){			
				top.main.document.getElementById("digong_" + i + m).innerHTML = "<span style='background-color:" + c + "'>" + inn + "</span>"					
			}
		}
	}
}

function gen_donggong(){
	var r 
	r = Math.floor(Math.random()*9+1)
	return r
}

function mark_donggong(r,bujufa){
	document.write("<style>")
	document.write("table." + bujufa + "_" + r + "{background-color: yellow}")
	document.write("</style>")
	document.write(r + " 宫发动")
}

/* 
function cirle(x,y,w,h,id,str,ar,colour){
	var jg = new jsGraphics(id) //
	var i
	for(i = 1; i< ar.length+1; i++) {
		if(ar[i] == str){
			ar[i] = "<div id='tongling' style='position:relative;top:100px;left:10px;z-index:2;width:100px;height:100px'>" + str + "</div>"
		}
	}
	jg.setColor(colour); 
	jg.drawEllipse(x,y,w,h)		
}
*/

function mark(str, ar, c) { 
//str is the string you want to mark
//ar is the array in which str is stored
//c is the color you want it to be. c should be in the form of a string

	for(var i = 1; i < ar.length+1; i++) {
		if(str == ar[i]){			
			ar[i] = "<font color=" + c + ">" + ar[i] + "</font>"						
		}
	}
}

function mark_bg(str, ar, c) {
	for(var i = 1; i < ar.length+1; i++) {
		if(str == ar[i]){			
			ar[i] = "<span style='background-color:" + c + "'>" + ar[i] + "</span>"					
		}
	}
}

function mark_wei_ma(a){
	for(var i = 1; i < a.length-1; i++) {		
		if(a[i].substr(1) == "δ") {
  			a[i] = "<span style='background-color:\"#FFCCCC\"'>" + a[i] + "</span>"
		}
	}
}

function get_kong_gan(gan){
	var k = locate(gan, qiyi) 
	//qiyi is an array declared in buju.js
	//locate is a function defined in jushu.js
	k = cycle(k+1,6)
	return qiyi[k]
}

function mark_wangdong(xing_ar, men_ar, tian_shen_ar,di_shen_ar,tian_qiyi_ar, di_qiyi_ar, colour){ 
	//mark 坎一宫
	if (xing_ar[1] == "天冲" || xing_ar[1] == "天辅") {mark(xing_ar[1],xing_ar, colour)}

	if (men_ar[1] == "伤门" || men_ar[1] == "杜门") {mark(men_ar[1],men_ar, "red")}
	if (tian_qiyi_ar[1] == "壬" || tian_qiyi_ar[1] == "癸") {mark(tian_qiyi_ar[1],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[1] == "壬" || di_qiyi_ar[1] == "癸") {mark(di_qiyi_ar[1],di_qiyi_ar, colour)}
	if (tian_shen_ar[1] == "玄武") {mark(tian_shen_ar[1],tian_shen_ar, colour)}
	if (di_shen_ar[1] == "玄武") {mark(di_shen_ar[1],di_shen_ar, colour)}

	//mark 坤二宫
	if (xing_ar[2] == "天心" || xing_ar[2] == "天柱" || xing_ar[2] == "天禽") {mark(xing_ar[2],xing_ar, colour)}
	if (men_ar[2] == "开门" || men_ar[2] == "惊门") {mark(men_ar[2],men_ar, colour)}
	if (tian_qiyi_ar[2] == "戊" || tian_qiyi_ar[2] == "己") {mark(tian_qiyi_ar[2],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[2] == "戊" || di_qiyi_ar[2] == "己") {mark(di_qiyi_ar[2],di_qiyi_ar, colour)}
	if (tian_shen_ar[2] == "勾陈" || tian_shen_ar[2] == "九地") {mark(tian_shen_ar[2],tian_shen_ar, colour)}
	if (di_shen_ar[2] == "勾" || di_shen_ar[2] == "地") {mark(di_shen_ar[2],di_shen_ar, colour)}

	//mark 震三宫
	if (xing_ar[3] == "天辅" || xing_ar[3] == "天英") {mark(xing_ar[3],xing_ar, colour)}
	if (men_ar[3] == "杜门" || men_ar[3] == "景门") {mark(men_ar[3],men_ar, colour)}
	if (tian_qiyi_ar[3] == "甲" || tian_qiyi_ar[3] == "乙") {mark(tian_qiyi_ar[3],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[3] == "甲" || di_qiyi_ar[3] == "乙") {mark(di_qiyi_ar[3],di_qiyi_ar, colour)}
	if (tian_shen_ar[3] == "朱雀" || tian_shen_ar[3] == "六合") {mark(tian_shen_ar[3],tian_shen_ar, colour)}
	if (di_shen_ar[3] == "朱" || di_shen_ar[3] == "合") {mark(di_shen_ar[3],di_shen_ar, colour)}

	//mark 巽四宫
	if (xing_ar[4] == "天冲" || xing_ar[4] == "天英") {mark(xing_ar[4],xing_ar, colour)}
	if (men_ar[4] == "伤门" || men_ar[4] == "景门") {mark(men_ar[4],men_ar, colour)}
	if (tian_qiyi_ar[4] == "甲" || tian_qiyi_ar[4] == "乙") {mark(tian_qiyi_ar[4],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[4] == "甲" || di_qiyi_ar[4] == "乙") {mark(di_qiyi_ar[4],di_qiyi_ar, colour)}
	if (tian_shen_ar[4] == "朱雀" || tian_shen_ar[4] == "六合") {mark(tian_shen_ar[4],tian_shen_ar, colour)}
	if (di_shen_ar[4] == "朱" || di_shen_ar[4] == "合") {mark(di_shen_ar[4],di_shen_ar, colour)}

	//mark 中五宫
	if (xing_ar[5] == "天芮" || xing_ar[5] == "天心"||xing_ar[5] == "天柱" || xing_ar[5] == "天任") {mark(xing_ar[5],xing_ar, colour)}
	if (men_ar[5] == "死门" || men_ar[5] == "开门"||men_ar[5] == "惊门" || men_ar[5] == "生门") {mark(men_ar[5],men_ar, colour)}
	if (tian_qiyi_ar[5] == "戊" || tian_qiyi_ar[5] == "己") {mark(tian_qiyi_ar[5],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[5] == "戊" || di_qiyi_ar[5] == "己") {mark(di_qiyi_ar[5],di_qiyi_ar, colour)}
	if (tian_shen_ar[5] == "勾陈" || tian_shen_ar[5] == "九地"||tian_shen_ar[5] == "太常") {mark(tian_shen_ar[5],tian_shen_ar, colour)}
	if (di_shen_ar[5] == "勾" || di_shen_ar[5] == "地"||di_shen_ar[5] == "常") {mark(di_shen_ar[5],di_shen_ar, colour)}

	//mark 乾六宫
	if (xing_ar[6] == "天蓬" || xing_ar[6] == "天柱") {mark(xing_ar[6],xing_ar, colour)}
	if (men_ar[6] == "休门" || men_ar[6] == "惊门") {mark(men_ar[6],men_ar, colour)}
	if (tian_qiyi_ar[6] == "庚" || tian_qiyi_ar[6] == "辛") {mark(tian_qiyi_ar[6],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[6] == "庚" || di_qiyi_ar[6] == "辛") {mark(di_qiyi_ar[6],di_qiyi_ar, colour)}
	if (tian_shen_ar[6] == "太阴" || tian_shen_ar[6] == "白虎"|| tian_shen_ar[6] == "九天") {mark(tian_shen_ar[6],tian_shen_ar, colour)}
	if (di_shen_ar[6] == "阴" || di_shen_ar[6] == "虎"|| di_shen_ar[6] == "天") {mark(di_shen_ar[6],di_shen_ar, colour)}

	//mark 兑七宫
	if (xing_ar[7] == "天蓬" || xing_ar[7] == "天心") {mark(xing_ar[7],xing_ar, colour)}
	if (men_ar[7] == "休门" || men_ar[7] == "开门") {mark(men_ar[7],men_ar, colour)}
	if (tian_qiyi_ar[7] == "庚" || tian_qiyi_ar[7] == "辛") {mark(tian_qiyi_ar[7],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[7] == "庚" || di_qiyi_ar[7] == "辛") {mark(di_qiyi_ar[7],di_qiyi_ar, colour)}
	if (tian_shen_ar[7] == "太阴" || tian_shen_ar[7] == "白虎"|| tian_shen_ar[7] == "九天") {mark(tian_shen_ar[7],tian_shen_ar, colour)}
	if (di_shen_ar[7] == "阴" || di_shen_ar[7] == "虎"|| di_shen_ar[7] == "天") {mark(di_shen_ar[7],di_shen_ar, colour)}

	//mark 艮八宫
	if (xing_ar[8] == "天心" || xing_ar[8] == "天柱" || xing_ar[8] == "天禽") {mark(xing_ar[8],xing_ar, colour)}
	if (men_ar[8] == "开门" || men_ar[8] == "惊门") {mark(men_ar[8],men_ar, colour)}
	if (tian_qiyi_ar[8] == "戊" || tian_qiyi_ar[8] == "己") {mark(tian_qiyi_ar[8],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[8] == "壬" || di_qiyi_ar[8] == "癸") {mark(di_qiyi_ar[8],di_qiyi_ar, colour)}
	if (tian_shen_ar[8] == "勾陈" || tian_shen_ar[8] == "九地") {mark(tian_shen_ar[8],tian_shen_ar, colour)}
	if (di_shen_ar[8] == "勾" || di_shen_ar[8] == "地") {mark(di_shen_ar[8],di_shen_ar, colour)}


	//mark 离九宫
	if (xing_ar[9] == "天芮" || xing_ar[9] == "天任") {mark(xing_ar[9],xing_ar, colour)}
	if (men_ar[9] == "死门" || men_ar[9] == "生门") {mark(men_ar[9],men_ar, colour)}
	if (tian_qiyi_ar[9] == "丙" || tian_qiyi_ar[9] == "丁") {mark(tian_qiyi_ar[9],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[9] == "丙" || di_qiyi_ar[9] == "丁") {mark(di_qiyi_ar[9],di_qiyi_ar, colour)}
	if (tian_shen_ar[9] == "勾陈" || tian_shen_ar[9] == "朱雀"||tian_shen_ar[9] == "值符"||tian_shen_ar[9] == "螣蛇") {mark(tian_shen_ar[9],tian_shen_ar, colour)}
	if (di_shen_ar[9] == "勾" || di_shen_ar[9] == "朱"||di_shen_ar[9] == "值"||tian_shen_ar[9] == "蛇") {mark(di_shen_ar[9],di_shen_ar, colour)}

}

function feiyu_fumu_wangdong(xing_ar, men_ar, tian_shen_ar,di_shen_ar,tian_qiyi_ar, di_qiyi_ar, colour){ 
	//mark 坎一宫
	if (xing_ar[1] == "天心" || xing_ar[1] == "天柱") {mark(xing_ar[1],xing_ar, colour)}

	if (men_ar[1] == "伤门" || men_ar[1] == "杜门") {mark(men_ar[1],men_ar, "red")}
	if (tian_qiyi_ar[1] == "壬" || tian_qiyi_ar[1] == "癸") {mark(tian_qiyi_ar[1],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[1] == "壬" || di_qiyi_ar[1] == "癸") {mark(di_qiyi_ar[1],di_qiyi_ar, colour)}
	if (tian_shen_ar[1] == "玄武") {mark(tian_shen_ar[1],tian_shen_ar, colour)}
	if (di_shen_ar[1] == "玄武") {mark(di_shen_ar[1],di_shen_ar, colour)}

	//mark 坤二宫
	if (xing_ar[2] == "天任" || xing_ar[2] == "天英" || xing_ar[2] == "天禽") {mark(xing_ar[2],xing_ar, colour)}
	if (men_ar[2] == "开门" || men_ar[2] == "惊门") {mark(men_ar[2],men_ar, colour)}
	if (tian_qiyi_ar[2] == "戊" || tian_qiyi_ar[2] == "己") {mark(tian_qiyi_ar[2],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[2] == "戊" || di_qiyi_ar[2] == "己") {mark(di_qiyi_ar[2],di_qiyi_ar, colour)}
	if (tian_shen_ar[2] == "勾陈" || tian_shen_ar[2] == "九地") {mark(tian_shen_ar[2],tian_shen_ar, colour)}
	if (di_shen_ar[2] == "勾" || di_shen_ar[2] == "地") {mark(di_shen_ar[2],di_shen_ar, colour)}

	//mark 震三宫
	if (xing_ar[3] == "天蓬" || xing_ar[3] == "天辅") {mark(xing_ar[3],xing_ar, colour)}
	if (men_ar[3] == "杜门" || men_ar[3] == "景门") {mark(men_ar[3],men_ar, colour)}
	if (tian_qiyi_ar[3] == "甲" || tian_qiyi_ar[3] == "乙") {mark(tian_qiyi_ar[3],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[3] == "甲" || di_qiyi_ar[3] == "乙") {mark(di_qiyi_ar[3],di_qiyi_ar, colour)}
	if (tian_shen_ar[3] == "朱雀" || tian_shen_ar[3] == "六合") {mark(tian_shen_ar[3],tian_shen_ar, colour)}
	if (di_shen_ar[3] == "朱" || di_shen_ar[3] == "合") {mark(di_shen_ar[3],di_shen_ar, colour)}

	//mark 巽四宫
	if (xing_ar[4] == "天冲" || xing_ar[4] == "天蓬") {mark(xing_ar[4],xing_ar, colour)}
	if (men_ar[4] == "伤门" || men_ar[4] == "景门") {mark(men_ar[4],men_ar, colour)}
	if (tian_qiyi_ar[4] == "甲" || tian_qiyi_ar[4] == "乙") {mark(tian_qiyi_ar[4],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[4] == "甲" || di_qiyi_ar[4] == "乙") {mark(di_qiyi_ar[4],di_qiyi_ar, colour)}
	if (tian_shen_ar[4] == "朱雀" || tian_shen_ar[4] == "六合") {mark(tian_shen_ar[4],tian_shen_ar, colour)}
	if (di_shen_ar[4] == "朱" || di_shen_ar[4] == "合") {mark(di_shen_ar[4],di_shen_ar, colour)}

	//mark 中五宫
	if (xing_ar[5] == "天芮" || xing_ar[5] == "天英"|| xing_ar[5] == "天任") {mark(xing_ar[5],xing_ar, colour)}
	if (men_ar[5] == "死门" || men_ar[5] == "开门"||men_ar[5] == "惊门" || men_ar[5] == "生门") {mark(men_ar[5],men_ar, colour)}
	if (tian_qiyi_ar[5] == "戊" || tian_qiyi_ar[5] == "己") {mark(tian_qiyi_ar[5],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[5] == "戊" || di_qiyi_ar[5] == "己") {mark(di_qiyi_ar[5],di_qiyi_ar, colour)}
	if (tian_shen_ar[5] == "勾陈" || tian_shen_ar[5] == "九地"||tian_shen_ar[5] == "太常") {mark(tian_shen_ar[5],tian_shen_ar, colour)}
	if (di_shen_ar[5] == "勾" || di_shen_ar[5] == "地"||di_shen_ar[5] == "常") {mark(di_shen_ar[5],di_shen_ar, colour)}

	//mark 乾六宫
	if (xing_ar[6] == "天芮" || xing_ar[6] == "天任"|| xing_ar[6] == "天禽"|| xing_ar[6] == "天柱") {mark(xing_ar[6],xing_ar, colour)}
	if (men_ar[6] == "休门" || men_ar[6] == "惊门") {mark(men_ar[6],men_ar, colour)}
	if (tian_qiyi_ar[6] == "庚" || tian_qiyi_ar[6] == "辛") {mark(tian_qiyi_ar[6],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[6] == "庚" || di_qiyi_ar[6] == "辛") {mark(di_qiyi_ar[6],di_qiyi_ar, colour)}
	if (tian_shen_ar[6] == "太阴" || tian_shen_ar[6] == "白虎"|| tian_shen_ar[6] == "九天") {mark(tian_shen_ar[6],tian_shen_ar, colour)}
	if (di_shen_ar[6] == "阴" || di_shen_ar[6] == "虎"|| di_shen_ar[6] == "天") {mark(di_shen_ar[6],di_shen_ar, colour)}

	//mark 兑七宫
	if (xing_ar[7] == "天芮" || xing_ar[7] == "天任"|| xing_ar[7] == "天禽" || xing_ar[7] == "天心") {mark(xing_ar[7],xing_ar, colour)}
	if (men_ar[7] == "休门" || men_ar[7] == "开门") {mark(men_ar[7],men_ar, colour)}
	if (tian_qiyi_ar[7] == "庚" || tian_qiyi_ar[7] == "辛") {mark(tian_qiyi_ar[7],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[7] == "庚" || di_qiyi_ar[7] == "辛") {mark(di_qiyi_ar[7],di_qiyi_ar, colour)}
	if (tian_shen_ar[7] == "太阴" || tian_shen_ar[7] == "白虎"|| tian_shen_ar[7] == "九天") {mark(tian_shen_ar[7],tian_shen_ar, colour)}
	if (di_shen_ar[7] == "阴" || di_shen_ar[7] == "虎"|| di_shen_ar[7] == "天") {mark(di_shen_ar[7],di_shen_ar, colour)}

	//mark 艮八宫
	if (xing_ar[8] == "天芮" || xing_ar[8] == "天英" || xing_ar[8] == "天禽") {mark(xing_ar[8],xing_ar, colour)}
	if (men_ar[8] == "开门" || men_ar[8] == "惊门") {mark(men_ar[8],men_ar, colour)}
	if (tian_qiyi_ar[8] == "戊" || tian_qiyi_ar[8] == "己") {mark(tian_qiyi_ar[8],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[8] == "壬" || di_qiyi_ar[8] == "癸") {mark(di_qiyi_ar[8],di_qiyi_ar, colour)}
	if (tian_shen_ar[8] == "勾陈" || tian_shen_ar[8] == "九地") {mark(tian_shen_ar[8],tian_shen_ar, colour)}
	if (di_shen_ar[8] == "勾" || di_shen_ar[8] == "地") {mark(di_shen_ar[8],di_shen_ar, colour)}


	//mark 离九宫
	if (xing_ar[9] == "天辅" || xing_ar[9] == "天冲") {mark(xing_ar[9],xing_ar, colour)}
	if (men_ar[9] == "死门" || men_ar[9] == "生门") {mark(men_ar[9],men_ar, colour)}
	if (tian_qiyi_ar[9] == "丙" || tian_qiyi_ar[9] == "丁") {mark(tian_qiyi_ar[9],tian_qiyi_ar, colour)}
	if (di_qiyi_ar[9] == "丙" || di_qiyi_ar[9] == "丁") {mark(di_qiyi_ar[9],di_qiyi_ar, colour)}
	if (tian_shen_ar[9] == "勾陈" || tian_shen_ar[9] == "朱雀"||tian_shen_ar[9] == "值符"||tian_shen_ar[9] == "螣蛇") {mark(tian_shen_ar[9],tian_shen_ar, colour)}
	if (di_shen_ar[9] == "勾" || di_shen_ar[9] == "朱"||di_shen_ar[9] == "值"||tian_shen_ar[9] == "蛇") {mark(di_shen_ar[9],di_shen_ar, colour)}

}

