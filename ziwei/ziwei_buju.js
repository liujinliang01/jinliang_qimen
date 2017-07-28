

function ding_shenming_gong(c){
	var yinli = c.lunar()
	var yue = yinli.lunarMonth
	if (yue  < 0) {yue = Math.abs(yue) + 1}
	var shi = cylce(c.hGz(),12)
	var a = new Array(2) 
	a[0] = cycle(cycle(3 + yue,12) - shi,12) //minggong
	a[1] = cycle(cycle(3 + yue,12) + shi,12) //shengong
	return a
}

function bu_shier_gong(c,gong,shen){
	var shenming = ding_shenming_gong(c)
	var ming = shenming[0]
	shen = shenming[1]
	for(var i = 1; i<13; i++){
		gong[cycle(ming-i+1,12)] = shiergong[i] 
	}
}

function get_wuxingju(c,shenming){	
	var m = shenming[0]
	var ju = new Array(2)
	var c_zhengyue = new CCC(c.year(),2,15)
	var zhengyue_ganzhi = c_zhengyue.mGz()
	var minggong_huajia = huajia[cycle(zhengyue_ganzhi + cycle(m-2,12),60)]
	var minggong_nayin = nayin_list[minggong_huajia]
	mingong_nayin = mingong_nayin.substring(2)
	switch(minggong_nayin){

		case "Ë®":
			ju[0] = "Ë®¶þ¾Ö"
			ju[1] = "2"
			break
		case "Ä¾":
			ju[0] = "Ä¾Èý¾Ö"
			ju[1] = "3"
			break
		case "½ð":
			ju[0] = "½ðËÄ¾Ö"
			ju[1] = "4"
			break
 		case "ÍÁ":
			ju[0] = "ÍÁÎå¾Ö"
			ju[1] = "5"
			break
		case "»ð":
			ju[0] = "»ðÁù¾Ö"
			ju[1] = "1"
			break
		return ju
	}
}


function ding_ziwei_loc(c,ju){//¶¨×ÏÎ¢Æðµã
	var x,y
	var shengri = c.lunar().lunarDate
	var r = shengri % ju
	if(r == ju){
		y = shengri/ju
	} else{
		x = ju - r
		if(x%2 == 0) {
			y = ((shengri + x)/ju) + x
			y = cycle(y,12)
		} else {
			y = ((shengri + x)/ju) - x
			y = cycle(y,12)			
		}
	}
}

function bu_ziwei_tianfu(ziwei,tianfu,ziwei_loc,tianfu_loc){//²¼×ÏÎ¢¡¢Ìì¸®

	for(var i=1; i<13; i++){
		ziwei[cycle(ziwei_loc-i+1,12)] = ziwei_xi[i]
		tianfu[cycle(tianfu_loc+i-1,12)] = tianfu_xi[i] 
	}

	for(var i=1; i<13; i++){
		ziwei_tianfu_xi_miaowang(ziwei_loc)
	}

}

function ziwei_tianfu_xi_miaowang(ziwei_loc){ //×ÏÎ¢¡¢Ìì¸®ÏµÃíÍú
	switch(cycle(ziwei_loc-i+1,12)) { 
		case 1: 
			ziwei[1] = "×ÏÎ¢ºÍ"
			ziwei[12] = "Ìì»úºÍ"
			ziwei[10] = "Ì«ÑôºÍ"
			ziwei[9] = "ÎäÇúµÃ"
			ziwei[8] = "ÌìÍ¬²»"
			ziwei[5] = "Á®ÕêÀû"

			tianfu[5] = "Ìì¸®Ãí"
			tianfu[6] = "Ì«ÒõÏÝ"
			tianfu[7] = "Ì°ÀÇÍú"
			tianfu[8] = "¾ÞÃÅ²»"
			tianfu[9] = "ÌìÏàÃí"
			tianfu[10] = "ÌìÁºµÃ"
			tianfu[11] = "ÆßÉ±Ãí"
			tianfu[3] = "ÆÆ¾üµÃ"
			break
		case 2: 
			ziwei[2] = "×ÏÎ¢Ãí"
			ziwei[1] = "Ìì»úÃí"
			ziwei[11] = "Ì«Ñô²»"
			ziwei[10] = "ÎäÇúÀû"
			ziwei[9] = "ÌìÍ¬Íú"
			ziwei[6] = "Á®ÕêÏÝ"

			tianfu[4] = "Ìì¸®µÃ"
			tianfu[5] = "Ì«ÒõÏÝ"
			tianfu[6] = "Ì°ÀÇÏÝ"
			tianfu[7] = "¾ÞÃÅÍú"
			tianfu[8] = "ÌìÏàµÃ"
			tianfu[9] = "ÌìÁºÏÝ"
			tianfu[10] = "ÆßÉ±Íú"
			tianfu[2] = "ÆÆ¾üÍú"
			break
		case 3: 
			ziwei[3] = "×ÏÎ¢Íú"
			ziwei[2] = "Ìì»úÏÝ"
			ziwei[12] = "Ì«ÑôÏÝ"
			ziwei[11] = "ÎäÇúÃí"
			ziwei[10] = "ÌìÍ¬ºÍ"
			ziwei[7] = "Á®ÕêºÍ"

			tianfu[3] = "Ìì¸®Ãí"
			tianfu[4] = "Ì«ÒõÏÝ"
			tianfu[5] = "Ì°ÀÇÃí"
			tianfu[6] = "¾ÞÃÅÍú"
			tianfu[7] = "ÌìÏàÃí"
			tianfu[8] = "ÌìÁºÃí"
			tianfu[9] = "ÆßÉ±Ãí"
			tianfu[1] = "ÆÆ¾üÃí"
			break
		case 4: 
			ziwei[4] = "×ÏÎ¢Íú"
			ziwei[3] = "Ìì»úµÃ"
			ziwei[1] = "Ì«ÑôÏÝ"
			ziwei[12] = "ÎäÇúºÍ"
			ziwei[11] = "ÌìÍ¬ºÍ"
			ziwei[8] = "Á®ÕêÀû"

			tianfu[2] = "Ìì¸®Ãí"
			tianfu[3] = "Ì«ÒõÍú"
			tianfu[4] = "Ì°ÀÇÀû"
			tianfu[5] = "¾ÞÃÅÏÝ"
			tianfu[6] = "ÌìÏàµÃ"
			tianfu[7] = "ÌìÁºÃí"
			tianfu[8] = "ÆßÉ±Ãí"
			tianfu[12] = "ÆÆ¾üºÍ"
			break
		case 5: 
			ziwei[5] = "×ÏÎ¢Àû"
			ziwei[4] = "Ìì»úÍú"
			ziwei[2] = "Ì«Ñô²»"
			ziwei[1] = "ÎäÇúÍú"
			ziwei[12] = "ÌìÍ¬Ãí"
			ziwei[9] = "Á®ÕêÃí"


			tianfu[1] = "Ìì¸®Ãí"
			tianfu[2] = "Ì«ÒõÃí"
			tianfu[3] = "Ì°ÀÇÍú"
			tianfu[4] = "¾ÞÃÅÃí"
			tianfu[5] = "ÌìÏàµÃ"
			tianfu[6] = "ÌìÁºÏÝ"
			tianfu[7] = "ÆßÉ±Ãí"
			tianfu[11] = "ÆÆ¾üÍú"
			break
		case 6: 
			ziwei[6] = "×ÏÎ¢Íú"
			ziwei[5] = "Ìì»úÀû"
			ziwei[3] = "Ì«ÑôÍú"
			ziwei[2] = "ÎäÇúÃí"
			ziwei[1] = "ÌìÍ¬Íú"
			ziwei[10] = "Á®ÕêºÍ"

			tianfu[12] = "Ìì¸®µÃ"
			tianfu[1] = "Ì«ÒõÃí"
			tianfu[2] = "Ì°ÀÇÃí"
			tianfu[3] = "¾ÞÃÅÃí"
			tianfu[4] = "ÌìÏàÏÝ"
			tianfu[5] = "ÌìÁºÃí"
			tianfu[6] = "ÆßÉ±ºÍ"
			tianfu[10] = "ÆÆ¾üÏÝ"
			break
		case 7: 
			ziwei[7] = "×ÏÎ¢Ãí"
			ziwei[6] = "Ìì»úºÍ"
			ziwei[4] = "Ì«ÑôÃí"
			ziwei[3] = "ÎäÇúµÃ"
			ziwei[2] = "ÌìÍ¬²»"
			ziwei[11] = "Á®ÕêÀû"


			tianfu[11] = "Ìì¸®Ãí"
			tianfu[12] = "Ì«ÒõÃí"
			tianfu[1] = "Ì°ÀÇÍú"
			tianfu[2] = "¾ÞÃÅ²»"
			tianfu[3] = "ÌìÏàÃí"
			tianfu[4] = "ÌìÁºÃí"
			tianfu[5] = "ÆßÉ±Ãí"
			tianfu[9] = "ÆÆ¾üµÃ"
			break
		case 8: 
			ziwei[8] = "×ÏÎ¢²»"
			ziwei[7] = "Ìì»úÃí"
			ziwei[5] = "Ì«ÑôÍú"
			ziwei[4] = "ÎäÇúÀû"
			ziwei[3] = "ÌìÍ¬Àû"
			ziwei[12] = "Á®ÕêÏÝ"


			tianfu[10] = "Ìì¸®ºÍ"
			tianfu[11] = "Ì«ÒõÍú"
			tianfu[12] = "Ì°ÀÇÏÝ"
			tianfu[1] = "¾ÞÃÅÍú"
			tianfu[2] = "ÌìÏàµÃ"
			tianfu[3] = "ÌìÁºÃí"
			tianfu[4] = "ÆßÉ±Íú"
			tianfu[8] = "ÆÆ¾üÍú"
			break
		case 9: 
			ziwei[9] = "×ÏÎ¢Íú"
			ziwei[8] = "Ìì»úÏÝ"
			ziwei[6] = "Ì«ÑôÍú"
			ziwei[5] = "ÎäÇúÃí"
			ziwei[4] = "ÌìÍ¬ºÍ"
			ziwei[1] = "Á®ÕêºÍ"

			tianfu[9] = "Ìì¸®µÃ"
			tianfu[10] = "Ì«ÒõÍú"
			tianfu[11] = "Ì°ÀÇÃí"
			tianfu[12] = "¾ÞÃÅÍú"
			tianfu[1] = "ÌìÏàÃí"
			tianfu[2] = "ÌìÁºÍú"
			tianfu[3] = "ÆßÉ±Ãí"
			tianfu[7] = "ÆÆ¾üÃí"
			break
		case 10: 
			ziwei[10] = "×ÏÎ¢Íú"
			ziwei[9] = "Ìì»úµÃ"
			ziwei[7] = "Ì«ÑôÍú"
			ziwei[6] = "ÎäÇúºÍ"
			ziwei[5] = "ÌìÍ¬ºÍ"
			ziwei[2] = "Á®ÕêÀû"

			tianfu[8] = "Ìì¸®Ãí"
			tianfu[9] = "Ì«ÒõÀû"
			tianfu[10] = "Ì°ÀÇÀû"
			tianfu[11] = "¾ÞÃÅÏÝ"
			tianfu[12] = "ÌìÏàµÃ"
			tianfu[1] = "ÌìÁºÃí"
			tianfu[2] = "ÆßÉ±Ãí"
			tianfu[6] = "ÆÆ¾üºÍ"
			break
		case 11: 
			ziwei[11] = "×ÏÎ¢µÃ"
			ziwei[10] = "Ìì»úºÍ"
			ziwei[8] = "Ì«Ñô²»"
			ziwei[7] = "ÎäÇúÍú"
			ziwei[6] = "ÌìÍ¬Ãí"
			ziwei[3] = "Á®ÕêÃí"


			tianfu[7] = "Ìì¸®Íú"
			tianfu[8] = "Ì«Òõ²»"
			tianfu[9] = "Ì°ÀÇºÍ"
			tianfu[10] = "¾ÞÃÅµÃ"
			tianfu[11] = "ÌìÏàµÃ"
			tianfu[12] = "ÌìÁºÏÝ"
			tianfu[1] = "ÆßÉ±Íú"
			tianfu[5] = "ÆÆ¾üÍú"
			break
		case 12: 
			ziwei[12] = "×ÏÎ¢Íú"
			ziwei[11] = "Ìì»úÀû"
			ziwei[9] = "Ì«ÑôµÃ"
			ziwei[8] = "ÎäÇúÃí"
			ziwei[7] = "ÌìÍ¬ÏÝ"
			ziwei[4] = "Á®ÕêÏÐ"

			tianfu[6] = "Ìì¸®µÃ"
			tianfu[7] = "Ì«Òõ²»"
			tianfu[8] = "Ì°ÀÇÃí"
			tianfu[9] = "¾ÞÃÅÃí"
			tianfu[10] = "ÌìÏàÏÝ"
			tianfu[11] = "ÌìÁºÃí"
			tianfu[12] = "ÆßÉ±ºÍ"
			tianfu[4] = "ÆÆ¾üÍú"
			break
	}
}

function ding_tianfu_loc(ziwei_loc){//¶¨Ìì¸®Æðµã
	return cycle(5 - ziwei_loc + 1,12)

}

function bu_tianfu(tianfu,tianfu_loc){//²¼Ìì¸®	
	for(var i=1; i<13; i++){
		tianfu[cycle(tianfu_loc+i-1,12)] = tianfu_xi[i] 
	}
}

function bu_tuo_lu_yang(tuo_lu_yang, jielu,kuiyue, tianguan, tianfu2,niangan){
//Äê¸ÉÏµ£ºÍÓÂ»Ñò¡¢½ÙÂ·¡¢¿ýîá¡¢Ìì¹Ù¡¢Ìì¸£
	switch(niangan){
		case "¼×":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+1,12)] = tuo_lu_yang_xi[i]
			}
			jielu[9] = "½ÙÂ·"

			kuiyue[2] = "Ìì¿ýÍú"
			kuiyue[8] = "ÌìîáÍú"

			tianguan[8] = "Ìì¹Ù"
			tianfu2[10] = "Ìì¸£"

			break
		case "ÒÒ":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+2,12)] = tuo_lu_yang_xi[i]
			}
			jielu[10] = "½ÙÂ·"


			kuiyue[1] = "Ìì¿ýÍú"
			kuiyue[9] = "ÌìîáÃí"

			tianguan[5] = "Ìì¹Ù"
			tianfu2[9] = "Ìì¸£"
			break
		case "±û":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+4,12)] = tuo_lu_yang_xi[i]
			}
			jielu[7] = "½ÙÂ·"


			kuiyue[12] = "Ìì¿ýÍú"
			kuiyue[10] = "ÌìîáÃí"

			tianguan[6] = "Ìì¹Ù"
			tianfu2[1] = "Ìì¸£"
			break
		case "¶¡":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+5,12)] = tuo_lu_yang_xi[i]
			}
			jielu[8] = "½ÙÂ·"


			kuiyue[12] = "Ìì¿ýÍú"
			kuiyue[10] = "ÌìîáÃí"

			tianguan[3] = "Ìì¹Ù"
			tianfu2[12] = "Ìì¸£"
			break
		case "Îì":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+4,12)] = tuo_lu_yang_xi[i]
			}
			jielu[5] = "½ÙÂ·"


			kuiyue[2] = "Ìì¿ýÍú"
			kuiyue[8] = "ÌìîáÍú"

			tianguan[4] = "Ìì¹Ù"
			tianfu2[4] = "Ìì¸£"
			break
		case "¼º":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+5,12)] = tuo_lu_yang_xi[i]
			}
			jielu[6] = "½ÙÂ·"


			kuiyue[1] = "Ìì¿ýÍú"
			kuiyue[9] = "ÌìîáÃí"

			tianguan[10] = "Ìì¹Ù"
			tianfu2[3] = "Ìì¸£"
			break
		case "¸ý":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+7,12)] = tuo_lu_yang_xi[i]
			}
			jielu[3] = "½ÙÂ·"


			kuiyue[3] = "Ìì¿ý"
			kuiyue[7] = "Ììîá"

			tianguan[12] = "Ìì¹Ù"
			tianfu2[7] = "Ìì¸£"
			break
		case "ÐÁ":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+8,12)] = tuo_lu_yang_xi[i]
			}
			jielu[4] = "½ÙÂ·"


			kuiyue[3] = "Ìì¿ý"
			kuiyue[7] = "Ììîá"

			tianguan[10] = "Ìì¹Ù"
			tianfu2[6] = "Ìì¸£"
			break
		case "ÈÉ":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+10,12)] = tuo_lu_yang_xi[i]
			}
			jielu[1] = "½ÙÂ·"


			kuiyue[4] = "Ìì¿ýÃí"
			kuiyue[6] = "ÌìîáÍú"

			tianguan[11] = "Ìì¹Ù"
			tianfu2[7] = "Ìì¸£"
			break
		case "¹ï":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+11,12)] = tuo_lu_yang_xi[i]
			}
			jielu[2] = "½ÙÂ·"


			kuiyue[4] = "Ìì¿ýÃí"
			kuiyue[6] = "ÌìîáÍú"

			tianguan[7] = "Ìì¹Ù"
			tianfu2[6] = "Ìì¸£"
			break
	}

	tuoluyang_miaowang(tuo_lu_yang)

}

function tuoluyang_miaowang(tly){ //tly --- tuo_lu_yang, the array that holds ÍÓÂÝ¡¢Â»´æ¡¢ÇæÑò


	switch(tly.indexOf("ÍÓÂÝ")){
		case 2: 
			tly[2] = "ÍÓÂÝÃí"
			break
		
		case 3: 
			tly[3] = "ÍÓÂÝÏÝ"
			break
		case 5: 
			tly[5] = "ÍÓÂÝÃí"
			break

		case 6: 
			tly[6] = "ÍÓÂÝÏÝ"
			break
		case 8: 
			tly[8] = "ÍÓÂÝÃí"
			break

		case 9: 
			tly[9] = "ÍÓÂÝÏÝ"
			break
		case 11: 
			tly[11] = "ÍÓÂÝÃí"
			break
		
		case 12: 
			tly[12] = "ÍÓÂÝÏÝ"
			break
	}
	switch(tly.indexOf("Â»´æ")){
		case 1: 
			tly[1] = "Â»´æÍú"
			break
		
		case 3: 
			tly[3] = "Â»´æÃí"
			break
		case 4: 
			tly[4] = "Â»´æÍú"
			break

		case 6: 
			tly[6] = "Â»´æÃí"
			break
		case 7: 
			tly[7] = "Â»´æÍú"
			break

		case 9: 
			tly[9] = "Â»´æÃí"
			break
		case 10: 
			tly[10] = "Â»´æÍú"
			break
		
		case 12: 
			tly[12] = "Â»´æÃí"
			break
	}

	switch(tly.indexOf("ÇæÑò")){
		case 1: 
			tly[1] = "ÇæÑòÏÝ"
			break
		
		case 2: 
			tly[2] = "ÇæÑòÃí"
			break
		case 4: 
			tly[4] = "ÇæÑòÏÝ"
			break

		case 5: 
			tly[5] = "ÇæÑòÃí"
			break
		case 7: 
			tly[7] = "ÇæÑòÆ½"
			break

		case 8: 
			tly[8] = "ÇæÑòÃí"
			break
		case 10: 
			tly[10] = "ÇæÑòÏÝ"
			break
		
		case 12: 
			tly[12] = "ÇæÑòÃí"
			break
	}
}
function bu_boshi(boshi,tuo_lu_yang,shunni){ //²©Ê¿£¬tuo_lu_yang ÍÓÂ»Ñò
	var lucun = locate("Â»´æ",tuo_lu_yang)
	if(shunni=="shun"){
		for(var i=1; i<13; i++){
			boshi[cycle(lucun+i-1,12)] = boshi_xi[i]
		}
	} else{
		for(var i=1; i<13; i++){
			boshi[cycle(lucun-i+1,12)] = boshi_xi[i]
		}
	}
}

function bu_shixi_zhuxing(qktf,jiechang,shizhu){//²¼Ê±ÏµÖîÐÇ
//qktf --- qukongtaifeng ÎÄÇú¡¢µØ¿Õ¡¢Ì¨¸¨¡¢·â¸æ
//jiechang ---dijie wenchang µØ½Ù¡¢ÎÄ²ý
//huoling --- »ðÐÇ¡¢ÁåÐÇ
	var shizhi = cycle(shizhu,12)
	for(var i=1; i<13; i++){
		qktf[i] = ""
	}
	switch(shizhi){
		case "×Ó": 
			qktf[5] = "ÎÄÇúÃí"
			qktf[12] = "µØ¿ÕÏÝ"
			qktf[7] = "Ì¨¸¨"
			qktf[3] = "·â¸æ"
			jiechang[11] = "ÎÄ²ýÏÝ"			
			jiechang[12] = "µØ½ÙÍú"
	
			break
		case "³ó": 
			qktf[6] = "ÎÄÇúÃí"
			qktf[11] = "µØ¿ÕÏÝ"
			qktf[8] = "Ì¨¸¨"
			qktf[4] = "·â¸æ"
			jiechang[10] = "ÎÄ²ýÃí"			
			jiechang[1] = "µØ½ÙÏÝ"

			break
		case "Òú": 
			qktf[7] = "ÎÄÇúÏÝ"
			qktf[10] = "µØ¿ÕÃí"
			qktf[9] = "Ì¨¸¨"
			qktf[5] = "·â¸æ"
			jiechang[9] = "ÎÄ²ýÍú"			
			jiechang[2] = "µØ½ÙÏÝ"

			break
		case "Ã®": 
			qktf[8] = "ÎÄÇúÍú"
			qktf[9] = "µØ¿ÕÃí"
			qktf[10] = "Ì¨¸¨"
			qktf[6] = "·â¸æ"
			jiechang[8] = "ÎÄ²ýÆ½"			
			jiechang[3] = "µØ½ÙÆ½"

			break
		case "³½": 
			qktf[9] = "ÎÄÇúÆ½"
			qktf[8] = "µØ¿ÕÆ½"
			qktf[11] = "Ì¨¸¨"
			qktf[7] = "·â¸æ"
			jiechang[7] = "ÎÄ²ýÃí"			
			jiechang[4] = "µØ½ÙÆ½"

			break
		case "ËÈ": 
			qktf[10] = "ÎÄÇúÃí"
			qktf[7] = "µØ¿ÕÃí"
			qktf[12] = "Ì¨¸¨"
			qktf[8] = "·â¸æ"
			jiechang[6] = "ÎÄ²ýÏÝ"			
			jiechang[5] = "µØ½ÙÏÝ"

			break
		case "Îç": 
			qktf[11] = "ÎÄÇúÏÝ"
			qktf[6] = "µØ¿ÕÃí"
			qktf[1] = "Ì¨¸¨"
			qktf[9] = "·â¸æ"
			jiechang[5] = "ÎÄ²ýÍú"			
			jiechang[6] = "µØ½ÙÏÐ"

			break
		case "Î´": 
			qktf[12] = "ÎÄÇúÍú"
			qktf[5] = "µØ¿ÕÏÝ"
			qktf[2] = "Ì¨¸¨"
			qktf[10] = "·â¸æ"
			jiechang[4] = "ÎÄ²ýÆ½"			
			jiechang[7] = "µØ½ÙÃí"

			break
		case "Éê": 
			qktf[1] = "ÎÄÇúÃí"
			qktf[4] = "µØ¿ÕÆ½"
			qktf[3] = "Ì¨¸¨"
			qktf[11] = "·â¸æ"
			qktf[5] = "µØ¿Õ"
			qktf[2] = "Ì¨¸¨"
			qktf[10] = "·â¸æ"
			jiechang[3] = "ÎÄ²ýÏÝ"			
			jiechang[8] = "µØ½ÙÆ½"

			break
		case "ÓÏ": 
			qktf[2] = "ÎÄÇúÃí"
			qktf[3] = "µØ¿ÕÏÝ"
			qktf[4] = "Ì¨¸¨"
			qktf[12] = "·â¸æ"
			qktf[5] = "µØ¿Õ"
			qktf[2] = "Ì¨¸¨"
			qktf[10] = "·â¸æ"
			jiechang[2] = "ÎÄ²ýÃí"			
			jiechang[9] = "µØ½ÙÃí"

			break
		case "Ðç": 
			qktf[3] = "ÎÄÇúÆ½"
			qktf[2] = "µØ¿ÕÏÝ"
			qktf[5] = "Ì¨¸¨"
			qktf[1] = "·â¸æ"
			jiechang[1] = "ÎÄ²ýÍú"			
			jiechang[10] = "µØ½ÙÆ½"

			break
		case "º¥": 
			qktf[4] = "ÎÄÇúÍú"
			qktf[1] = "µØ¿ÕÆ½"
			qktf[6] = "Ì¨¸¨"
			qktf[2] = "·â¸æ"
			jiechang[12] = "ÎÄ²ýÍú"			
			jiechang[11] = "µØ½ÙÆ½"

			break
	}
}

function bu_huoling(nianzhu,shizhu) {
	var n = cycle(nianzhu,12) //ÄêÖ§ÐòÊý 
	var s = cycle(shizhu,12) //Ê±Ö§ÐòÊý
	switch(n){
		case 1:
		case 5:
		case 9:
			huoling[cycle(s+2,12)] = "»ðÐÇ"
			huoling[cycle(s+10,12)] = "ÁåÐÇ"
			break

		case 2:
		case 6:
		case 10:
			huoling[cycle(s+3,12)] = "»ðÐÇ"
			huoling[cycle(s+10,12)] = "ÁåÐÇ"
			break

		case 3:
		case 7:
		case 11:
			huoling[cycle(s+1,12)] = "»ðÐÇ"
			huoling[cycle(s+3,12)] = "ÁåÐÇ"
			break

		case 4:
		case 8:
		case 12:
			huoling[cycle(s+9,12)] = "»ðÐÇ"
			huoling[cycle(s+10,12)] = "ÁåÐÇ"
			break
	}
	huoling_miaowang(huoling)
}

function huoling_miaowang(huoling) { //huoling is an array
	switch(huoling.indexOf("»ðÐÇ")) {
		case 1:
			huoling[1] = "»ðÐÇÆ½"
			break
		case 2:
			huoling[2] = "»ðÐÇÍú"
			break
		case 3:
			huoling[3] = "»ðÐÇÃí"
			break
		case 4:
			huoling[4] = "»ðÐÇÆ½"
			break
		case 5:
			huoling[5] = "»ðÐÇÏÐ"
			break
		case 6:
			huoling[6] = "»ðÐÇÍú"
			break
		case 7:
			huoling[7] = "»ðÐÇÃí"
			break
		case 8:
			huoling[8] = "»ðÐÇÏÐ"
			break
		case 9:
			huoling[9] = "»ðÐÇÏÝ"
			break
		case 10:
			huoling[10] = "»ðÐÇÏÝ"
			break
		case 11:
			huoling[11] = "»ðÐÇÃí"
			break
		case 12:
			huoling[12] = "»ðÐÇÆ½"
			break
	}
	switch(huoling.indexOf("ÁåÐÇ")) {
		case 1:
			huoling[1] = "ÁåÐÇÏÝ"
			break
		case 2:
			huoling[2] = "ÁåÐÇÏÝ"
			break
		case 3:
			huoling[3] = "ÁåÐÇÃí"
			break
		case 4:
			huoling[4] = "ÁåÐÇÃí"
			break
		case 5:
			huoling[5] = "ÁåÐÇÍú"
			break
		case 6:
			huoling[6] = "ÁåÐÇÍú"
			break
		case 7:
			huoling[7] = "ÁåÐÇÃí"
			break
		case 8:
			huoling[8] = "ÁåÐÇÍú"
			break
		case 9:
			huoling[9] = "ÁåÐÇÍú"
			break
		case 10:
			huoling[10] = "ÁåÐÇÏÝ"
			break
		case 11:
			huoling[11] = "ÁåÐÇÃí"
			break
		case 12:
			huoling[12] = "ÁåÐÇÃí"
			break
	}
}

function bu_yuexi(fujie,bixingyao,tianma,tianwu,yueyin,yue){//ÔÂÏµÖîÐÇ£º¸¨½â¡¢åöÐÌÒ¦¡¢ÌìÂí¡¢ÌìÎ×¡¢ÔÂÒõ
	for(var i=1;i<13;i++){
		fujie[i] = ""
		bixingyao[i] = ""
		tianma[i] = ""
		tianwu[i] = ""
		yueyin[i] = ""
	}
	switch(yue){
		case "Ò»":
			fujie[5] = "×ó¸¨Ãí"
			fujie[9] = "Ìì½â"
			bixingyao[11] = "ÓÒåöÃí"
			bixingyao[10] = "ÌìÐÌÃí"
			bixingyao[2] = "ÌìÒ¦Æ½"
			tianma[9] = "ÌìÂí"
			tianwu[6] = "ÌìÎ×"
			yueyin[11] = "ÌìÔÂ"
			yueyin[3] = "ÒõÉ·"
			break			
		case "¶þ":
			fujie[6] = "×ó¸¨Æ½"
			fujie[9] = "Ìì½â"
			bixingyao[10] = "ÓÒåöÏÝ"
			bixingyao[11] = "ÌìÐÌÃí"
			bixingyao[3] = "ÌìÒ¦Íú"
			tianma[6] = "ÌìÂí"
			tianwu[9] = "ÌìÎ×"
			yueyin[6] = "ÌìÔÂ"
			yueyin[1] = "ÒõÉ·"
			break		
		case "Èý":
			fujie[7] = "×ó¸¨Íú"
			fujie[11] = "Ìì½â"
			bixingyao[9] = "ÓÒåöÏÐ"
			bixingyao[12] = "ÌìÐÌÏÝ"
			bixingyao[4] = "ÌìÒ¦Ãí"
			tianma[3] = "ÌìÂí"
			tianwu[3] = "ÌìÎ×"
			yueyin[5] = "ÌìÔÂ"
			yueyin[11] = "ÒõÉ·"
			break		
		case "ËÄ":
			fujie[8] = "×ó¸¨Ãí"
			fujie[11] = "Ìì½â"
			bixingyao[8] = "ÓÒåöÃí"
			bixingyao[1] = "ÌìÐÌÆ½"
			bixingyao[5] = "ÌìÒ¦ÏÝ"
			tianma[12] = "ÌìÂí"
			tianwu[12] = "ÌìÎ×"
			yueyin[3] = "ÌìÔÂ"
			yueyin[9] = "ÒõÉ·"
			break		
		case "Îå":
			fujie[9] = "×ó¸¨Æ½"
			fujie[1] = "Ìì½â"
			bixingyao[7] = "ÓÒåöÍú"
			bixingyao[2] = "ÌìÐÌÏÝ"
			bixingyao[6] = "ÌìÒ¦Æ½"
			tianma[9] = "ÌìÂí"
			tianwu[6] = "ÌìÎ×"
			yueyin[8] = "ÌìÔÂ"
			yueyin[7] = "ÒõÉ·"
			break		
		case "Áù":
			fujie[10] = "×ó¸¨ÏÝ"
			fujie[1] = "Ìì½â"
			bixingyao[6] = "ÓÒåöÆ½"
			bixingyao[3] = "ÌìÐÌÃí"
			bixingyao[7] = "ÌìÒ¦Æ½"
			tianma[6] = "ÌìÂíÆ½"
			tianwu[9] = "ÌìÎ×"
			yueyin[4] = "ÌìÔÂ"
			yueyin[5] = "ÒõÉ·"
			break		
		case "Æß":
			fujie[11] = "×ó¸¨Ãí"
			fujie[3] = "Ìì½â"
			bixingyao[5] = "ÓÒåöÃí"
			bixingyao[4] = "ÌìÐÌÃí"
			bixingyao[8] = "ÌìÒ¦Íú"
			tianma[3] = "ÌìÂí"
			tianwu[3] = "ÌìÎ×"
			yueyin[12] = "ÌìÔÂ"
			yueyin[3] = "ÒõÉ·"
			break		
		case "°Ë":
			fujie[12] = "×ó¸¨ÏÐ"
			fujie[3] = "Ìì½â"
			bixingyao[4] = "ÓÒåöÏÝ"
			bixingyao[5] = "ÌìÐÌÆ½"
			bixingyao[9] = "ÌìÒ¦ÏÝ"
			tianma[12] = "ÌìÂí"
			tianwu[12] = "ÌìÎ×"
			yueyin[8] = "ÌìÔÂ"
			yueyin[1] = "ÒõÉ·"
			break		
		case "¾Å":
			fujie[1] = "×ó¸¨Íú"
			fujie[5] = "Ìì½â"
			bixingyao[3] = "ÓÒåöÍú"
			bixingyao[6] = "ÌìÐÌÏÝ"
			bixingyao[10] = "ÌìÒ¦Ãí"
			tianma[9] = "ÌìÂí"
			tianwu[6] = "ÌìÎ×"
			yueyin[3] = "ÌìÔÂ"
			yueyin[11] = "ÒõÉ·"
			break		
		case "Ê®":
			fujie[2] = "×ó¸¨Ãí"
			fujie[5] = "Ìì½â"
			bixingyao[2] = "ÓÒåöÃí"
			bixingyao[7] = "ÌìÐÌÆ½"
			bixingyao[11] = "ÌìÒ¦Ãí"
			tianma[6] = "ÌìÂí"
			tianwu[9] = "ÌìÎ×"
			yueyin[7] = "ÌìÔÂ"
			yueyin[9] = "ÒõÉ·"
			break		
		case "Ê®Ò»":
			fujie[3] = "×ó¸¨Ãí"
			fujie[7] = "Ìì½â"
			bixingyao[1] = "ÓÒåöÃí"
			bixingyao[8] = "ÌìÐÌÏÝ"
			bixingyao[12] = "ÌìÒ¦ÏÝ"
			tianma[3] = "ÌìÂí"
			tianwu[3] = "ÌìÎ×"
			yueyin[11] = "ÌìÔÂ"
			yueyin[7] = "ÒõÉ·"
			break		
		case "Ê®¶þ":
			fujie[4] = "×ó¸¨ÏÝ"
			fujie[7] = "Ìì½â"
			bixingyao[12] = "ÓÒåöÆ½"
			bixingyao[9] = "ÌìÐÌÏÝ"
			bixingyao[1] = "ÌìÒ¦ÏÝ"
			tianma[12] = "ÌìÂí"
			tianwu[12] = "ÌìÎ×"
			yueyin[3] = "ÌìÔÂ"
			yueyin[5] = "ÒõÉ·"
			break		
	}
}

function bu_rixing(enguang,santai,bazuo,tiangui,ri,qktf,jiechang,fujie,bixingyao){//ÈÕÏµ£º¶÷¹â¡¢ÈýÌ¨¡¢°Ë×ù¡¢Ìì¹ó
	var wenqu_loc = locate("ÎÄÇú",qktf)
	var wenchang_loc = locate("ÎÄ²ý",jiechang)
	var zuofu_loc = locate("×ó¸¨",fujie)
	var youbi_loc = locate("ÓÒåö",bixingyao)
	for(var i=1;i<13;i++){
		enguang[i] = ""
		santai[i] = ""
		bazuo[i] = ""
		tiangui[i] = ""
	}
	enguang[cycle(wenchang_loc+ri-2,12)] = "¶÷¹â"
	santai[cycle(zuofu_loc+ri-1,12)] = "ÈýÌ¨"
	bazuo[cycle(youbi_loc-ri+1,12)] = "°Ë×ù"
	tiangui[cycle(wenqu_loc+ri-2,12)] = "Ìì¹ó"	

}

function bu_nianzhi_xi(kongkufeng,xulong,gugua,luanxifei,posui,suijian,jiangxing,nianzhi){//ÄêÏµÖîÐÇ£º¹Â¹Ñ¡¢ð½Ï²òã¡¢¿Õ¿Þ·ï¡¢ÐéÁú¡¢ÆÆËé
	for(var i=1;i<13;i++){
		kongkufeng[i] = ""
		xulong[i] = ""
		gugua[i] = ""
		luanxifei[i] = ""
		posui[i] = ""
	}

	switch(nianzhi){
		case "×Ó":
			kongkufeng[2] = "Ìì¿Õ"
			kongkufeng[7] = "Ìì¿ÞÏÝ"
			kongkufeng[11] = "·ï¸ó"
			xulong[7] = "ÌìÐéÆ½"
			xulong[5] = "Áú³Ø"
			gugua[3] = "¹Â³½"
			gugua[11] = "¹ÑËÞ"
			luanxifei[4] = "ºìð½Ãí"
			luanxifei[10] = "ÌìÏ²Ãí"
			luanxifei[9] = "òãÁ®"
			posui[6] = "ÆÆËé"
			for(var i=1;i<13;i++){
				suijian[cycle(i+1-1,12)] = suijian_xi[i]
				jiangxing[i] = jiangxing_xi[i]
			}
			break
		case "³ó":
			kongkufeng[3] = "Ìì¿Õ"
			kongkufeng[6] = "Ìì¿Þ"
			kongkufeng[10] = "·ï¸ó"
			xulong[8] = "ÌìÐéÏÝ"
			xulong[6] = "Áú³Ø"
			gugua[3] = "¹Â³½"
			gugua[11] = "¹ÑËÞ"
			luanxifei[3] = "ºìð½Íú"
			luanxifei[9] = "ÌìÏ²Íú"
			luanxifei[10] = "òãÁ®"
			posui[2] = "ÆÆËé"
			for(var i=1;i<13;i++){
				suijian[cycle(i+2-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+10-1,12)] = jiangxing_xi[i]
			}
			break		
		case "Òú":
			kongkufeng[4] = "Ìì¿Õ"
			kongkufeng[5] = "Ìì¿ÞÆ½"
			kongkufeng[9] = "·ï¸ó"
			xulong[9] = "ÌìÐéÃí"
			xulong[7] = "Áú³Ø"
			gugua[6] = "¹Â³½"
			gugua[2] = "¹ÑËÞ"
			luanxifei[2] = "ºìð½ÏÝ"
			luanxifei[8] = "ÌìÏ²ÏÝ"
			luanxifei[11] = "òãÁ®"
			posui[10] = "ÆÆËé"
			for(var i=1;i<13;i++){
				suijian[cycle(i+3-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+7-1,12)] = jiangxing_xi[i]
			}
			break		
		case "Ã®":
			kongkufeng[5] = "Ìì¿Õ"
			kongkufeng[4] = "Ìì¿ÞÃí"
			kongkufeng[8] = "·ï¸ó"
			xulong[10] = "ÌìÐéÍú"
			xulong[8] = "Áú³Ø"
			gugua[6] = "¹Â³½"
			gugua[2] = "¹ÑËÞ"
			luanxifei[1] = "ºìð½Ãí"
			luanxifei[7] = "ÌìÏ²Ãí"
			luanxifei[6] = "òãÁ®"
			posui[6] = "ÆÆËé"
			for(var i=1;i<13;i++){
				suijian[cycle(i+4-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+4-1,12)] = jiangxing_xi[i]
			}
			break		
		case "³½":
			kongkufeng[6] = "Ìì¿Õ"
			kongkufeng[3] = "Ìì¿ÞÆ½"
			kongkufeng[7] = "·ï¸ó"
			xulong[11] = "ÌìÐéÏÝ"
			xulong[9] = "Áú³Ø"
			gugua[6] = "¹Â³½"
			gugua[2] = "¹ÑËÞ"
			luanxifei[12] = "ºìð½Ãí"
			luanxifei[6] = "ÌìÏ²Ãí"
			luanxifei[7] = "òãÁ®"
			posui[2] = "ÆÆËé"
			for(var i=1;i<13;i++){
				suijian[cycle(i+5-1,12)] = suijian_xi[i]
				jiangxing[i] = jiangxing_xi[i]
			}
			break		
		case "ËÈ":
			kongkufeng[7] = "Ìì¿Õ"
			kongkufeng[2] = "Ìì¿ÞÃí"
			kongkufeng[6] = "·ï¸ó"
			xulong[12] = "ÌìÐéÆ½"
			xulong[10] = "Áú³Ø"
			gugua[9] = "¹Â³½"
			gugua[5] = "¹ÑËÞ"
			luanxifei[11] = "ºìð½ÏÝ"
			luanxifei[5] = "ÌìÏ²ÏÝ"
			luanxifei[8] = "òãÁ®"
			posui[10] = "ÆÆËé"
			for(var i=1;i<13;i++){
				suijian[cycle(i+6-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+10-1,12)] = jiangxing_xi[i]
			}
			break		
		case "Îç":
			kongkufeng[8] = "Ìì¿Õ"
			kongkufeng[1] = "Ìì¿ÞÆ½"
			kongkufeng[5] = "·ï¸ó"
			xulong[1] = "ÌìÐéÏÝ"
			xulong[11] = "Áú³Ø"
			gugua[9] = "¹Â³½"
			gugua[5] = "¹ÑËÞ"
			luanxifei[10] = "ºìð½Íú"
			luanxifei[4] = "ÌìÏ²Íú"
			luanxifei[3] = "òãÁ®"
			posui[6] = "ÆÆËé"
			for(var i=1;i<13;i++){
				suijian[cycle(i+7-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+7-1,12)] = jiangxing_xi[i]
			}
			break		
		case "Î´":
			kongkufeng[9] = "Ìì¿Õ"
			kongkufeng[12] = "Ìì¿ÞÆ½"
			kongkufeng[4] = "·ï¸ó"
			xulong[2] = "ÌìÐéÃí"
			xulong[12] = "Áú³Ø"
			gugua[9] = "¹Â³½"
			gugua[5] = "¹ÑËÞ"
			luanxifei[9] = "ºìð½Ãí"
			luanxifei[3] = "ÌìÏ²Ãí"
			luanxifei[4] = "òãÁ®"
			posui[2] = "ÆÆËé"
			for(var i=1;i<13;i++){
				suijian[cycle(i+8-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+4-1,12)] = jiangxing_xi[i]
			}
			break		
		case "Éê":
			kongkufeng[10] = "Ìì¿Õ"
			kongkufeng[11] = "Ìì¿ÞÆ½"
			kongkufeng[3] = "·ï¸ó"
			xulong[3] = "ÌìÐéÍú"
			xulong[1] = "Áú³Ø"
			gugua[12] = "¹Â³½"
			gugua[8] = "¹ÑËÞ"
			luanxifei[8] = "ºìð½ÏÝ"
			luanxifei[2] = "ÌìÏ²ÏÝ"
			luanxifei[5] = "òãÁ®"
			posui[10] = "ÆÆËé"
			for(var i=1;i<13;i++){
				suijian[cycle(i+9-1,12)] = suijian_xi[i]
				jiangxing[i] = jiangxing_xi[i]
			}
			break		
		case "ÓÏ":
			kongkufeng[11] = "Ìì¿Õ"
			kongkufeng[10] = "Ìì¿ÞÏÐ"
			kongkufeng[2] = "·ï¸ó"
			xulong[4] = "ÌìÐéÃí"
			xulong[2] = "Áú³Ø"
			gugua[12] = "¹Â³½"
			gugua[8] = "¹ÑËÞ"
			luanxifei[7] = "ºìð½Íú"
			luanxifei[1] = "ÌìÏ²Íú"
			luanxifei[12] = "òãÁ®"
			posui[6] = "ÆÆËé"
			for(var i=1;i<13;i++){
				suijian[cycle(i+10-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+10-1,12)] = jiangxing_xi[i]
			}
			break		
		case "Ðç":
			kongkufeng[12] = "Ìì¿Õ"
			kongkufeng[9] = "Ìì¿ÞÃí"
			kongkufeng[1] = "·ï¸ó"
			xulong[5] = "ÌìÐéÏÝ"
			xulong[3] = "Áú³Ø"
			gugua[12] = "¹Â³½"
			gugua[8] = "¹ÑËÞ"
			luanxifei[6] = "ºìð½Íú"
			luanxifei[12] = "ÌìÏ²Íú"
			luanxifei[1] = "òãÁ®"
			posui[2] = "ÆÆËé"
			for(var i=1;i<13;i++){
				suijian[cycle(i+11-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+7-1,12)] = jiangxing_xi[i]
			}
			break
		case "º¥":
			kongkufeng[1] = "Ìì¿Õ"
			kongkufeng[8] = "Ìì¿ÞÆ½"
			kongkufeng[12] = "·ï¸ó"
			xulong[6] = "ÌìÐéÍú"
			xulong[4] = "Áú³Ø"
			gugua[3] = "¹Â³½"
			gugua[11] = "¹ÑËÞ"
			luanxifei[5] = "ºìð½Ãí"
			luanxifei[11] = "ÌìÏ²ÏÝ"
			luanxifei[2] = "òãÁ®"
			posui[10] = "ÆÆËé"
			for(var i=1;i<13;i++){
				suijian[cycle(i+12-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+4-1,12)] = jiangxing_xi[i]
			}
			break				
	}
}

function bu_shangshi_mingzhu(shangshi,shenming_gong){//ÌìÉË¡¢ÌìÊ¹
	switch(shenming_gong[0]){
		case 1:
			shangshi[6] = "ÌìÉË"
			shangshi[8] = "ÌìÊ¹"
			mingzhu = "Ì°ÀÇ"
			break
		case 2:
			shangshi[7] = "ÌìÉË"
			shangshi[9] = "ÌìÊ¹"
			mingzhu = "¾ÞÃÅ"
			break		
		case 3:
			shangshi[8] = "ÌìÉË"
			shangshi[10] = "ÌìÊ¹"
			mingzhu = "Â»´æ"
			break		
		case 4:
			shangshi[9] = "ÌìÉË"
			shangshi[11] = "ÌìÊ¹"
			mingzhu = "ÎÄÇú"
			break		
		case 5:
			shangshi[10] = "ÌìÉË"
			shangshi[12] = "ÌìÊ¹"
			mingzhu = "Á®Õê"
			break		
		case 6:
			shangshi[11] = "ÌìÉË"
			shangshi[1] = "ÌìÊ¹"
			mingzhu = "ÎäÇú"
			break		
		case 7:
			shangshi[12] = "ÌìÉË"
			shangshi[2] = "ÌìÊ¹"
			mingzhu = "ÆÆ¾ü"
			break		
		case 8:
			shangshi[1] = "ÌìÉË"
			shangshi[3] = "ÌìÊ¹"
			mingzhu = "ÎäÇú"
			break		
		case 9:
			shangshi[2] = "ÌìÉË"
			shangshi[4] = "ÌìÊ¹"
			mingzhu = "Á®Õê"
			break		
		case 10:
			shangshi[3] = "ÌìÉË"
			shangshi[5] = "ÌìÊ¹"
			mingzhu = "ÎÄÇú"
			break		
		case 11:
			shangshi[4] = "ÌìÉË"
			shangshi[6] = "ÌìÊ¹"
			mingzhu = "Â»´æ"
			break		
		case 12:
			shangshi[5] = "ÌìÉË"
			shangshi[7] = "ÌìÊ¹"
			mingzhu = "¾ÞÃÅ"
			break			
	}
}

function ding_shenzhu(shenzhu,shenming_gong){//ÌìÉË¡¢ÌìÊ¹
	switch(shenming_gong[1]){
		case 1:
			shenzhu = "»ðÐÇ"
			break
		case 2:
			shenzhu = "ÌìÏà"
			break	
		case 3:
			shenzhu = "ÌìÁº"
			break	
		case 4:
			shenzhu = "ÌìÍ¬"
			break		
		case 5:
			shenzhu = "ÎÄ²ý"
			break	
		case 6:
			shenzhu = "Ìì»ú"
			break	
		case 7:
			shenzhu = "»ðÐÇ"
			break	
		case 8:
			shenzhu = "ÌìÏà"
			break		
		case 9:
			shenzhu = "ÌìÁº"
			break	
		case 10:
			shenzhu = "ÌìÍ¬"
			break	
		case 11:
			shenzhu = "ÎÄ²ý"
			break	
		case 12:
			shenzhu = "Ìì»ú"
			break		
	}
}

function bu_daxian(daxian,shier_gong,ju,shunni){//´óÏÞ
	var start, end
	var ming = locate("¡¾Ãü  ¹¬¡¿",shier_gong)
	if(shunni = "shun"){
		for(var i=1;i<13;i++){
			end = (i*10) + ju
			start = end - 9
			if(start < 0){start = 0}
			daxian[cycle(ming+i-1,12)] = start + "-" + end
		}
	}else {
		for(var i=1;i<13;i++){
			end = (i*10) + ju
			start = end - 9
			if(start < 0){start = 0}
			daxian[cycle(ming-i+1,12)] = start + "-" + end
		}
	}

}

function bu_zhangsheng(zhangsheng,ju,shunni){//³¤Éú
	var jushu = ju[1]
	switch(jushu){
		case "2":
			if(shunni=="shun"){
				for(var i=1; i<13;i++){
					zhangsheng[cycle(9+i-1,12)] = shier_zhangsheng[i] 
				}
			} else {
				for(var i=1; i<13;i++){
					zhangsheng[cycle(9-i+1,12)] = shier_zhangsheng[i] 
				}
			}
			break
		case "3":
			if(shunni=="shun"){
				for(var i=1; i<13;i++){
					zhangsheng[cycle(12+i-1,12)] = shier_zhangsheng[i] 
				}
			} else {
				for(var i=1; i<13;i++){
					zhangsheng[cycle(12-i+1,12)] = shier_zhangsheng[i] 
				}
			}
			break
		case "4":
			if(shunni=="shun"){
				for(var i=1; i<13;i++){
					zhangsheng[cycle(6+i-1,12)] = shier_zhangsheng[i] 
				}
			} else {
				for(var i=1; i<13;i++){
					zhangsheng[cycle(6-i+1,12)] = shier_zhangsheng[i] 
				}
			}
			break
		case "5":
			if(shunni=="shun"){
				for(var i=1; i<13;i++){
					zhangsheng[cycle(9+i-1,12)] = shier_zhangsheng[i] 
				}
			} else {
				for(var i=1; i<13;i++){
					zhangsheng[cycle(9-i+1,12)] = shier_zhangsheng[i] 
				}
			}
			break
		case "6":
			if(shunni=="shun"){
				for(var i=1; i<13;i++){
					zhangsheng[cycle(3+i-1,12)] = shier_zhangsheng[i] 
				}
			} else {
				for(var i=1; i<13;i++){
					zhangsheng[cycle(3-i+1,12)] = shier_zhangsheng[i] 
				}
			}
			break
	}
}
function sihua(gan,zhuxing){
	var h
	switch(gan) {
		case "¼×":
			if(zhuxing=="Á®Õê") {
				h = "Â»"
			} else if(zhuxing=="ÆÆ¾ü") {
				h = "È¨"
			} else if(zhuxing=="ÎäÇú") {
				h = "¿Æ"
			} else if(zhuxing=="Ì«Ñô"){
				h = "¼É"
			}
			break
		case "ÒÒ":
			if(zhuxing=="Ìì»ú") {
				h = "Â»"
			} else if(zhuxing=="ÌìÁº") {
				h = "È¨"
			} else if(zhuxing=="×ÏÎ¢") {
				h = "¿Æ"
			} else if(zhuxing=="Ì«Òõ"){
				h = "¼É"
			}
			break
		case "±û":
			if(zhuxing=="ÌìÍ¬") {
				h = "Â»"
			} else if(zhuxing=="Ìì»ú") {
				h = "È¨"
			} else if(zhuxing=="ÎÄ²ý") {
				h = "¿Æ"
			} else if(zhuxing=="Á®Õê"){
				h = "¼É"
			}
			break
		case "¶¡":
			if(zhuxing=="Ì«Òõ") {
				h = "Â»"
			} else if(zhuxing=="ÌìÍ¬") {
				h = "È¨"
			} else if(zhuxing=="Ìì»ú") {
				h = "¿Æ"
			} else if(zhuxing=="¾ÞÃÅ"){
				h = "¼É"
			}
			break
		case "Îì":
			if(zhuxing=="Ì°ÀÇ") {
				h = "Â»"
			} else if(zhuxing=="Ì«Òõ") {
				h = "È¨"
			} else if(zhuxing=="ÓÒåö") {
				h = "¿Æ"
			} else if(zhuxing=="Ìì»ú"){
				h = "¼É"
			}
			break
		case "¼º":
			if(zhuxing=="ÎäÇú") {
				h = "Â»"
			} else if(zhuxing=="Ì°ÀÇ") {
				h = "È¨"
			} else if(zhuxing=="ÌìÁº") {
				h = "¿Æ"
			} else if(zhuxing=="ÎÄÇú"){
				h = "¼É"
			}
			break
		case "¸ý":
			if(zhuxing=="Ì«Ñô") {
				h = "Â»"
			} else if(zhuxing=="ÎäÇú") {
				h = "È¨"
			} else if(zhuxing=="Ì«Òõ") {
				h = "¿Æ"
			} else if(zhuxing=="ÌìÍ¬"){
				h = "¼É"
			}
			break
		case "ÐÁ":
			if(zhuxing=="¾ÞÃÅ") {
				h = "Â»"
			} else if(zhuxing=="Ì«Ñô") {
				h = "È¨"
			} else if(zhuxing=="ÎÄÇú") {
				h = "¿Æ"
			} else if(zhuxing=="ÎÄ²ý"){
				h = "¼É"
			}
			break
		case "ÈÉ":
			if(zhuxing=="ÌìÁº") {
				h = "Â»"
			} else if(zhuxing=="×ÏÎ¢") {
				h = "È¨"
			} else if(zhuxing=="×ó¸¨") {
				h = "¿Æ"
			} else if(zhuxing=="ÎäÇú"){
				h = "¼É"
			}
			break
		case "¹ï":
			if(zhuxing=="ÆÆ¾ü") {
				h = "Â»"
			} else if(zhuxing=="¾ÞÃÅ") {
				h = "È¨"
			} else if(zhuxing=="Ì«Òõ") {
				h = "¿Æ"
			} else if(zhuxing=="Ì°ÀÇ"){
				h = "¼É"
			}
			break
	}
	
}

function bu_doujun(doujun,yue_num,c){
	for(var i=1;i<13;i++){
		doujun[i] = ""
	}
	var h = cycle(c.hGz(),12)
	
	doujun[cycle(h-yue_num+1,12)] = "¶·¾ý"
}