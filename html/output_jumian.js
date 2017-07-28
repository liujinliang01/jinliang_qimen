﻿function fei_nayin_full(c,d){
	document.write("<table border = 0> <tr><td>")
	output_fei_full()
	document.write("</td><td>")
	yue_nayin_table(c)
	document.write("</td><td>")
	nian_ganzhi_table(c,d)
	document.write("</td></tr></table>")
}

function nian_ganzhi_table(c,d){

	document.write("<table border=1><tr><th>流年</th> <th>干支</th> <th>流年</th> <th>干支</th></tr>")
	var y = c.year()
	var gz = c.yGz()
	var z = 0
	var start = -14
	var lichun = get_jieqi_obj(c,0,d)
	var d_lichun = lichun[5]

	var mgz = c.mGz_Str()
	mgz = mgz.substring(1)

	//we need the following because of bug in CCC
	if(c.month()==1 || c.month()==2) {
		if(d.getTime()<d_lichun.getTime()){
			var c_tmp = new CCC(c.year(),2,1)
			gz = c_tmp.yGz()
			start =-15
			z = 1
		}
	}

	for(var i=start; i<-4; i++){
		document.write("<tr><td>" + (y+i) +"</td><td>" +huajia[cycle(gz+i+z,60)]+ "</td>")

		if((i + z) ==-10){
			document.write("<td style='background-color:#FFCCCC'>" + (y+i+10) +"</td><td style='background-color:#FFCCCC'>" +huajia[cycle(gz+i+10+z,60)]+ "</td></tr>")
		} else {

			document.write("<td>" + (y+i+10) +"</td><td>" +huajia[cycle(gz+i+10+z,60)]+ "</td></tr>")
		}

	}

	document.write("</table>")
}

function yue_nayin_table(c){
	var start_year = c.year() - 1
	var col1_yue 
	var col2_yue 
	var col3_yue 
	var a = new Array(4)
	var row
	var i = 0
	var d = new Date(start_year,c.month(),15)
	var d1, d2, d3
	var y1, y2, y3
	var m1, m2, m3
	var cur_m_nayin = nayin_list[c.mGz()]

	document.write("<table border=1><tr><th>月份</th> <th>干支</th> <th>纳音</th>")
	document.write("<th>月份</th> <th>干支</th> <th>纳音</th></tr>")
	//document.write("<th>月份</th> <th>干支</th> <th>纳音</th></tr>")

	col1_yue = c.month()

	for(row = 0; row < 13; row++){
		document.write("<tr>")

		col1_yue = col1_yue + 1 
		col2_yue = col1_yue + 13
		//col3_yue = col2_yue + 13

		d1 = new Date(start_year, col1_yue)
		d2 = new Date(start_year, col2_yue)
		//d3 = new Date(start_year, col3_yue)

		y1 = d1.getFullYear()
		y2 = d2.getFullYear()
		//y3 = d3.getFullYear()

		m1 = d1.getMonth()
		if(m1 == 0) {
			m1 = 12
			y1 = y1 -1
		}

		m2 = d2.getMonth()

		if(m2 == 0) {
			m2= 12
			y2 = y2 -1
		}
/*
		m3 = d3.getMonth()
		if(m3 == 0) {
			m3= 12
			y3 = y3 -1
		}
*/
		a1 = get_yue_ganzhi(y1,m1)
		a2 = get_yue_ganzhi(y2,m2)
		//a3 = get_yue_ganzhi(y3,m3)

		if(a1[3] == cur_m_nayin){
			a1[3] = "<span style='background-color:\"#FFCCCC\"'>" + a1[3] + "</span>"
		} 

		if(a2[3] == cur_m_nayin){ 
			a2[3] = "<span style='background-color:\"#FFCCCC\"'>" + a2[3] + "</span>"
		}
/*
		if(a3[3] == cur_m_nayin){
			a3[3] = "<span style='background-color:\"#FFCCCC\"'>" + a3[3] + "</span>"
		}
*/
		document.write("<td>"+a1[0]+"."+a1[1]+"</td><td>"+a1[2]+"</td><td>"+a1[3]+"</td>")

		document.write("<td>"+a2[0]+"."+a2[1]+"</td><td>"+a2[2]+"</td><td>"+a2[3]+"</td>")

		//document.write("<td>"+a3[0]+"."+a3[1]+"</td><td>"+a3[2]+"</td><td>"+a3[3]+"</td>")
		
		document.write("</tr>")
	}

	document.write("</table>")
}


/*
function output_zhuan() {
document.write("\
┌──────┬──────┬──────┐<br>\
│"+an[4]+"　"+tian_shen[4]+"　"+ma[4]+"│"+an[9]+"　"+tian_shen[5]+"　　│"+an[2]+"　"+tian_shen[6]+"　"+ma[2]+"│<br>\
│　"+kong[4]+""+xing[4]+""+dai_gan[4]+""+tian[4]+"│　"+kong[9]+""+xing[5]+""+dai_gan[5]+""+tian[5]+"│　"+kong[2]+""+xing[6]+""+dai_gan[6]+""+tian[6]+"│<br>\
│"+di_shen[4]+"　"+men[4]+"　"+di[4]+"│"+di_shen[5]+"　"+men[5]+"　"+di[9]+"│"+di_shen[6]+"　"+men[6]+""+di[5]+""+di[2]+"│<br>\
├──────┼──────┼──────┤<br>\
│"+an[3]+"　"+tian_shen[3]+"　　│"+an[5]+"　　　"+ma[1]+"&nbsp;                       │"+an[7]+"　"+tian_shen[7]+"　　│<br>\
│　"+kong[3]+""+xing[3]+""+dai_gan[3]+""+tian[3]+"│　　　　　　│　"+kong[7]+""+xing[7]+""+dai_gan[7]+""+tian[7]+"│<br>\
│"+di_shen[3]+"　"+men[3]+"　"+di[3]+"│　　　　　"+di[5]+"│"+di_shen[7]+"　"+men[7]+"　"+di[7]+"│<br>\
├──────┼──────┼──────┤<br>\
│"+an[8]+"　"+tian_shen[2]+"　"+ma[8]+"│"+an[1]+"　"+tian_shen[1]+"　　│"+an[6]+"　"+tian_shen[8]+"　"+ma[6]+"│<br>\
│　"+kong[8]+""+xing[2]+""+dai_gan[2]+""+tian[2]+"│　"+kong[1]+""+xing[1]+""+dai_gan[1]+""+tian[1]+"│　"+kong[6]+""+xing[8]+""+dai_gan[8]+""+tian[8]+"│<br>\
│"+di_shen[2]+"　"+men[2]+"　"+di[8]+"│"+di_shen[1]+"　"+men[1]+"　"+di[1]+"│"+di_shen[8]+"　"+men[8]+"　"+di[6]+"│<br>\
└──────┴──────┴──────┘</p>\
")

}
*/

function skip_nayin(){

document.write("<table border = 0> <tr><td>")
document.write("\
┌──────┬──────┬──────┐<br>\
│"+an[4]+"　"+tian_shen[4]+"　"+ma[4]+"│"+an[9]+"　"+tian_shen[9]+"　　│"+an[2]+"　"+tian_shen[2]+"　"+ma[2]+"│<br>\
│"+shi_zibai[4]+""+kong[4]+""+xing[4]+"　"+tian[4]+"│"+shi_zibai[9]+""+kong[9]+""+xing[9]+"　"+tian[9]+"│"+shi_zibai[2]+""+kong[2]+""+xing[2]+"　"+tian[2]+"│<br>\
│"+di_shen[4]+"　"+men[4]+"　"+di[4]+"│"+di_shen[5]+"　"+men[9]+"　"+di[9]+"│"+di_shen[6]+"　"+men[2]+"　"+di[2]+"│<br>\
├──────┼──────┼──────┤<br>\
│"+an[3]+"　"+tian_shen[3]+"　　│"+an[5]+"　"+tian_shen[5]+"　　│"+an[7]+"　"+tian_shen[7]+"　　│<br>\
│"+shi_zibai[3]+""+kong[3]+""+xing[3]+"　"+tian[3]+"│"+shi_zibai[5]+""+kong[5]+""+xing[5]+"　"+tian[5]+"│"+shi_zibai[7]+""+kong[7]+""+xing[7]+"　"+tian[7]+"│<br>\
│"+di_shen[3]+"　"+men[3]+"　"+di[3]+"│　　　　　"+di[5]+"│"+di_shen[7]+"　"+men[7]+"　"+di[7]+"│<br>\
├──────┼──────┼──────┤<br>\
│"+an[8]+"　"+tian_shen[8]+"　"+ma[8]+"│"+an[1]+"　"+tian_shen[1]+"　　│"+an[6]+"　"+tian_shen[6]+"　"+ma[6]+"│<br>\
│"+shi_zibai[8]+""+kong[8]+""+xing[8]+"　"+tian[8]+"│"+shi_zibai[1]+""+kong[1]+""+xing[1]+"　"+tian[1]+"│"+shi_zibai[6]+""+kong[6]+""+xing[6]+"　"+tian[6]+"│<br>\
│"+di_shen[2]+"　"+men[8]+"　"+di[8]+"│"+di_shen[1]+"　"+men[1]+"　"+di[1]+"│"+di_shen[8]+"　"+men[6]+"　"+di[6]+"│<br>\
└──────┴──────┴──────┘</p>\
")
//"+kong[1]+"

document.write("</td><td>")
//document.write("<br>")
output_nayin_yinshen()
document.write("</td></tr></table>")
}

function output_nayin_yinshen() {
document.write("\
┌──────┬──────┬──────┐<br>\
│"+tian_yinshen[4]+""+huo_ganzhi[4]+"　　│"+tian_yinshen[5]+""+huo_ganzhi[9]+"　　│"+tian_yinshen[6]+""+huo_ganzhi[2]+"　　│<br>\
│　"+ri_zibai[4]+""+huo_xunwei[4]+""+shi_zibai[4]+"　│　"+ri_zibai[9]+""+huo_xunwei[9]+""+shi_zibai[9]+"　│　"+ri_zibai[2]+""+huo_xunwei[2]+""+shi_zibai[2]+"　│<br>\
│"+di_yinshen[4]+"　"+nayin[4]+"　│"+di_yinshen[9]+"　"+nayin[9]+"　│"+di_yinshen[2]+""+di_yinshen[5]+""+nayin[2]+"　│<br>\
├──────┼──────┼──────┤<br>\
│"+tian_yinshen[3]+""+huo_ganzhi[3]+"　　│　　"+huo_ganzhi[5]+"　　│"+tian_yinshen[7]+""+huo_ganzhi[7]+"　　│<br>\
│　"+ri_zibai[3]+""+huo_xunwei[3]+""+shi_zibai[3]+"　│　"+ri_zibai[5]+""+huo_xunwei[5]+""+shi_zibai[5]+"　│　"+ri_zibai[7]+""+huo_xunwei[7]+""+shi_zibai[7]+"　│<br>\
│"+di_yinshen[3]+"　"+nayin[3]+"　│"+di_yinshen[5]+"　"+nayin[5]+"　│"+di_yinshen[7]+"　"+nayin[7]+"　│<br>\
├──────┼──────┼──────┤<br>\
│"+tian_yinshen[2]+""+huo_ganzhi[8]+"　　│"+tian_yinshen[1]+""+huo_ganzhi[1]+"　　│"+tian_yinshen[8]+""+huo_ganzhi[6]+"　　│<br>\
│　"+ri_zibai[8]+""+huo_xunwei[8]+""+shi_zibai[8]+"　│　"+ri_zibai[1]+""+huo_xunwei[1]+""+shi_zibai[1]+"　│　"+ri_zibai[6]+""+huo_xunwei[6]+""+shi_zibai[6]+"　│<br>\
│"+di_yinshen[8]+"　"+nayin[8]+"　│"+di_yinshen[1]+"　"+nayin[1]+"　│"+di_yinshen[6]+"　"+nayin[6]+"　│<br>\
└──────┴──────┴──────┘</p>\
")

}



function zhuan_nayin(c,d){

document.write("<table border = 0> <tr><td>")

output_zhuan()
document.write("</td><td>")
yue_nayin_table(c)
document.write("</td><td>")
nian_ganzhi_table(c,d)
document.write("</td></tr></table>")
}


function fei_nayin(){

document.write("<table border = 0> <tr><td>")
/*
document.write("\
┌──────┬──────┬──────┐<br>\
│"+an[4]+"　"+tian_shen[4]+"　"+ma[4]+"│"+an[9]+"　"+tian_shen[9]+"　　│"+an[2]+"　"+tian_shen[2]+"　"+ma[2]+"│<br>\
│"+shi_zibai[4]+""+kong[4]+""+xing[4]+"　"+tian[4]+"│"+shi_zibai[9]+""+kong[9]+""+xing[9]+"　"+tian[9]+"│"+shi_zibai[2]+""+kong[2]+""+xing[2]+"　"+tian[2]+"│<br>\
│"+di_shen[4]+"　"+men[4]+"　"+di[4]+"│"+di_shen[9]+"　"+men[9]+"　"+di[9]+"│"+di_shen[2]+"　"+men[2]+"　"+di[2]+"│<br>\
├──────┼──────┼──────┤<br>\
│"+an[3]+"　"+tian_shen[3]+"　　│"+an[5]+"　"+tian_shen[5]+"　　│"+an[7]+"　"+tian_shen[7]+"　　│<br>\
│"+shi_zibai[3]+""+kong[3]+""+xing[3]+"　"+tian[3]+"│"+shi_zibai[5]+""+kong[5]+""+xing[5]+"　"+tian[5]+"│"+shi_zibai[7]+""+kong[7]+""+xing[7]+"　"+tian[7]+"│<br>\
│"+di_shen[3]+"　"+men[3]+"　"+di[3]+"│"+di_shen[5]+"　"+men[5]+"　"+di[5]+"│"+di_shen[7]+"　"+men[7]+"　"+di[7]+"│<br>\
├──────┼──────┼──────┤<br>\
│"+an[8]+"　"+tian_shen[8]+"　"+ma[8]+"│"+an[1]+"　"+tian_shen[1]+"　　│"+an[6]+"　"+tian_shen[6]+"　"+ma[6]+"│<br>\
│"+shi_zibai[8]+""+kong[8]+""+xing[8]+"　"+tian[8]+"│"+shi_zibai[1]+""+kong[1]+""+xing[1]+"　"+tian[1]+"│"+shi_zibai[6]+""+kong[6]+""+xing[6]+"　"+tian[6]+"│<br>\
│"+di_shen[8]+"　"+men[8]+"　"+di[8]+"│"+di_shen[1]+"　"+men[1]+"　"+di[1]+"│"+di_shen[6]+"　"+men[6]+"　"+di[6]+"│<br>\
└──────┴──────┴──────┘</p>\
")
*/
output_fei()
document.write("</td><td>")
output_nayin_yinshen()
document.write("</td></tr></table>")
}

function output_zhuan_strip() {
document.write("\
┌──────┬──────┬──────┐<br>\
│　　"+tian_shen[4]+"　"+ma[4]+"│　　"+tian_shen[5]+"　　│　　"+tian_shen[6]+"　"+ma[2]+"│<br>\
│　"+kong[4]+""+xing[4]+""+dai_gan[4]+""+tian[4]+"│　"+kong[9]+""+xing[5]+""+dai_gan[5]+""+tian[5]+"│　"+kong[2]+""+xing[6]+""+dai_gan[6]+""+tian[6]+"│<br>\
│　　"+men[4]+"　"+di[4]+"│　　"+men[5]+"　"+di[9]+"│　　"+men[6]+""+di[5]+""+di[2]+"│<br>\
├──────┼──────┼──────┤<br>\
│　　"+tian_shen[3]+"　　│　　　　"+ma[1]+"&nbsp;                      │　　"+tian_shen[7]+"　　│<br>\
│　"+kong[3]+""+xing[3]+""+dai_gan[3]+""+tian[3]+"│　　　　　　│　"+kong[7]+""+xing[7]+""+dai_gan[7]+""+tian[7]+"│<br>\
│　　"+men[3]+"　"+di[3]+"│　　　　　"+di[5]+"│　　"+men[7]+"　"+di[7]+"│<br>\
├──────┼──────┼──────┤<br>\
│　　"+tian_shen[2]+"　"+ma[8]+"│　　"+tian_shen[1]+"　　│　　"+tian_shen[8]+"　"+ma[6]+"│<br>\
│　"+kong[8]+""+xing[2]+""+dai_gan[2]+""+tian[2]+"│　"+kong[1]+""+xing[1]+""+dai_gan[1]+""+tian[1]+"│　"+kong[6]+""+xing[8]+""+dai_gan[8]+""+tian[8]+"│<br>\
│　　"+men[2]+"　"+di[8]+"│　　"+men[1]+"　"+di[1]+"│　　"+men[8]+"　"+di[6]+"│<br>\
└──────┴──────┴──────┘</p>\
")

}

/*
function output_fei_full() {
document.write("\
┌──────┬──────┬──────┐<br>\
│"+an[4]+"　"+tian_shen[4]+"　"+ma[4]+"│"+an[9]+"　"+tian_shen[9]+"　　│"+an[2]+"　"+tian_shen[2]+"　"+ma[2]+"│<br>\
│　"+kong[4]+""+xing[4]+""+liuqin[4]+""+tian[4]+"│　"+kong[9]+""+xing[9]+""+liuqin[9]+""+tian[9]+"│　"+kong[2]+""+xing[2]+""+liuqin[2]+""+tian[2]+"│<br>\
│"+di_shen[4]+"　"+men[4]+"　"+di[4]+"│"+di_shen[9]+"　"+men[9]+"　"+di[9]+"│"+di_shen[2]+"　"+men[2]+"　"+di[2]+"│<br>\
├──────┼──────┼──────┤<br>\
│"+an[3]+"　"+tian_shen[3]+"　　│"+an[5]+"　"+tian_shen[5]+"　　│"+an[7]+"　"+tian_shen[7]+"　　│<br>\
│　"+kong[3]+""+xing[3]+""+liuqin[3]+""+tian[3]+"│　"+kong[5]+""+xing[5]+""+liuqin[5]+""+tian[5]+"│　"+kong[7]+""+xing[7]+""+liuqin[7]+""+tian[7]+"│<br>\
│"+di_shen[3]+"　"+men[3]+"　"+di[3]+"│"+di_shen[5]+"　"+men[5]+"　"+di[5]+"│"+di_shen[7]+"　"+men[7]+"　"+di[7]+"│<br>\
├──────┼──────┼──────┤<br>\
│"+an[8]+"　"+tian_shen[8]+"　"+ma[8]+"│"+an[1]+"　"+tian_shen[1]+"　　│"+an[6]+"　"+tian_shen[6]+"　"+ma[6]+"│<br>\
│　"+kong[8]+""+xing[8]+""+liuqin[8]+""+tian[8]+"│　"+kong[1]+""+xing[1]+""+liuqin[1]+""+tian[1]+"│　"+kong[6]+""+xing[6]+""+liuqin[6]+""+tian[6]+"│<br>\
│"+di_shen[8]+"　"+men[8]+"　"+di[8]+"│"+di_shen[1]+"　"+men[1]+"　"+di[1]+"│"+di_shen[6]+"　"+men[6]+"　"+di[6]+"│<br>\
└──────┴──────┴──────┘</p>\
")
}
*/

function output_fei() {
document.write("\
┌──────┬──────┬──────┐<br>\
│"+an[4]+"　"+tian_shen[4]+"　"+ma[4]+"│"+an[9]+"　"+tian_shen[9]+"　　│"+an[2]+"　"+tian_shen[2]+"　"+ma[2]+"│<br>\
│　"+kong[4]+""+xing[4]+"　"+tian[4]+"│　"+kong[9]+""+xing[9]+"　"+tian[9]+"│　"+kong[2]+""+xing[2]+"　"+tian[2]+"│<br>\
│"+di_shen[4]+"　"+men[4]+"　"+di[4]+"│"+di_shen[9]+"　"+men[9]+"　"+di[9]+"│"+di_shen[2]+"　"+men[2]+"　"+di[2]+"│<br>\
├──────┼──────┼──────┤<br>\
│"+an[3]+"　"+tian_shen[3]+"　　│"+an[5]+"　"+tian_shen[5]+"　　│"+an[7]+"　"+tian_shen[7]+"　　│<br>\
│　"+kong[3]+""+xing[3]+"　"+tian[3]+"│　"+kong[5]+""+xing[5]+"　"+tian[5]+"│　"+kong[7]+""+xing[7]+"　"+tian[7]+"│<br>\
│"+di_shen[3]+"　"+men[3]+"　"+di[3]+"│"+di_shen[5]+"　"+men[5]+"　"+di[5]+"│"+di_shen[7]+"　"+men[7]+"　"+di[7]+"│<br>\
├──────┼──────┼──────┤<br>\
│"+an[8]+"　"+tian_shen[8]+"　"+ma[8]+"│"+an[1]+"　"+tian_shen[1]+"　　│"+an[6]+"　"+tian_shen[6]+"　"+ma[6]+"│<br>\
│　"+kong[8]+""+xing[8]+"　"+tian[8]+"│　"+kong[1]+""+xing[1]+"　"+tian[1]+"│　"+kong[6]+""+xing[6]+"　"+tian[6]+"│<br>\
│"+di_shen[8]+"　"+men[8]+"　"+di[8]+"│"+di_shen[1]+"　"+men[1]+"　"+di[1]+"│"+di_shen[6]+"　"+men[6]+"　"+di[6]+"│<br>\
└──────┴──────┴──────┘</p>\
")

}

function output_fei_strip() {
document.write("\
┌──────┬──────┬──────┐<br>\
│　　"+tian_shen[4]+"　"+ma[4]+"│　　"+tian_shen[9]+"　　│　　"+tian_shen[2]+"　"+ma[2]+"│<br>\
│　"+kong[4]+""+xing[4]+"　"+tian[4]+"│　"+kong[9]+""+xing[9]+"　"+tian[9]+"│　"+kong[2]+""+xing[2]+"　"+tian[2]+"│<br>\
│"+di_shen[4]+"　"+men[4]+"　"+di[4]+"│"+di_shen[9]+"　"+men[9]+"　"+di[9]+"│"+di_shen[2]+"　"+men[2]+"　"+di[2]+"│<br>\
├──────┼──────┼──────┤<br>\
│　　"+tian_shen[3]+"　　│　　"+tian_shen[5]+"　　│　　"+tian_shen[7]+"　　│<br>\
│　"+kong[3]+""+xing[3]+"　"+tian[3]+"│　"+kong[5]+""+xing[5]+"　"+tian[5]+"│　"+kong[7]+""+xing[7]+"　"+tian[7]+"│<br>\
│"+di_shen[3]+"　"+men[3]+"　"+di[3]+"│"+di_shen[5]+"　"+men[5]+"　"+di[5]+"│"+di_shen[7]+"　"+men[7]+"　"+di[7]+"│<br>\
├──────┼──────┼──────┤<br>\
│　　"+tian_shen[8]+"　"+ma[8]+"│　　"+tian_shen[1]+"　　│　　"+tian_shen[6]+"　"+ma[6]+"│<br>\
│　"+kong[8]+""+xing[8]+"　"+tian[8]+"│　"+kong[1]+""+xing[1]+"　"+tian[1]+"│　"+kong[6]+""+xing[6]+"　"+tian[6]+"│<br>\
│"+di_shen[8]+"　"+men[8]+"　"+di[8]+"│"+di_shen[1]+"　"+men[1]+"　"+di[1]+"│"+di_shen[6]+"　"+men[6]+"　"+di[6]+"│<br>\
└──────┴──────┴──────┘</p>\
")

}


function print_header(d,c, qijufa){
	var yl = c.lunar()
	var era = ""
	if (c.year() < 1949) {
		era = "<br>" + c.chineseEra()
	}
	var lichun = get_jieqi_obj(c,0,d)
	var c_lichun = lichun[5]
	var year_ganzhi = c.yGz_Str()
	var month_ganzhi = c.mGz_Str()

//alert(c_lichun.getYear() +"年" + c_lichun.getMonth() + "月" + c_lichun.getDate() +"日" + c_lichun.getHours() +":"+ c_lichun.getMinutes())
//alert(d.getYear() +"年" + d.getMonth() + "月" + d.getDate() +"日" + d.getHours() +":"+ d.getMinutes())

/*we need the following because of a bug in CCC*/

	if(c.month() ==2){
		var c_tmp
		if(d.getTime() < c_lichun.getTime()){
			c_tmp = new CCC(c.year(),2,1)
		} else {
			c_tmp = new CCC(c.year(),2,15)		
		}
		year_ganzhi = c_tmp.yGz_Str()
		month_ganzhi = c_tmp.mGz_Str()
	}

	document.write(nian+"年 " + c.month() + "月 "
+ c.date() + "日 " +c.hour()+ "时 " +c.minute()+ "分\t 农历：" + yl.lunarMonth_Str + "月 " + yl.lunarDate_Str + "日" +era)
	document.write("<br>" + qijufa+ " <font color=red>[金亮奇门系列软件]</font>起局<br>")
	document.write(year_ganzhi + "年 " + month_ganzhi + "月 " + c.dGz_Str() + "日 " + c.hGz_Str() +"时 ")
}

function print_bazi_header(c,sex) {
	var yl = c.lunar()
	var era = ""
	if (c.year() < 1949) {
		era = "<br>" + c.chineseEra()
	}

	var nianzhu = c.yGz_Str()
	var yuezhu = c.mGz_Str()
	var rizhu = c.dGz_Str()
	var shizhu = c.hGz_Str()

	document.write("出生时间：<br>" + nian + "年 " + c.month() + "月 "
+ c.date() + "日 " +c.hour()+ "时 " +c.minute()+ "分\t 农历：" + yl.lunarMonth_Str + "月 " + yl.lunarDate_Str + "日" +era)
	
	if(sex == "qian"){
		sex = "乾"
	}else{
		sex = "坤" 
	}
	document.write("<p>")
	document.write("<br>" + sex + "造：")
	document.write(nianzhu + " " + yuezhu + " " + rizhu + " " + shizhu +" ")
	document.write("<p>")

	var niangan = nianzhu.substring(0,1)
	var yuegan = yuezhu.substring(0,1)
	var rigan = rizhu.substring(0,1)
	var shigan = shizhu.substring(0,1)
	var nianzhi = nianzhu.substring(1,2)
	var yuezhi = yuezhu.substring(1,2)
	var rizhi = rizhu.substring(1,2)
	var shizhi = shizhu.substring(1,2)

	document.write("<table id=\"sizhu_bazi\"><tr>")
	document.write("<td></td><td>"+sex+"</td><td>造</td><td></td><td></td><td></td><td></td><td></td><td>"+sex+"</td></tr>")
	document.write("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>造</td></tr>")
	document.write("<tr><td>年：</td><td>"+niangan+"</td>")
	document.write("<td>"+nianzhi+"</td><td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>")
	document.write("<td>时</td><td>日</td><td>月</td><td>年</td><td></td>")
	document.write("</tr>")
	document.write("<tr>")
	document.write("<td>月：</td><td>"+yuegan+"</td><td>"+yuezhi+"</td><td></td><td>:</td><td>:</td><td>:</td><td>:</td><td></td>")
	document.write("</tr>")
	document.write("<tr>")
	document.write("<td>日：</td><td>"+rigan+"</td><td>"+rizhi+"</td><td></td><td>"+shigan+"</td>")
	document.write("<td>"+rigan+"</td><td>"+yuegan+"</td><td>"+niangan+"</td><td></td>")
	document.write("</tr>")
	document.write("<tr>")
	document.write("<td>时：</td><td>"+shigan+"</td><td>"+shizhi+"</td><td></td><td>"+shizhi+"</td>")
	document.write("<td>"+rizhi+"</td><td>"+yuezhi+"</td><td>"+nianzhi+"</td><td></td>")
	document.write("</tr>")
	document.write("</table></font>")

}

function output_bazi_dayun(jisuiyun){
	var shunni
	if (jisuiyun[1] == "shun") {
		shunni = "顺行"
	} else {
		shunni = "逆行"		
	}
	document.write("大运表：<br>" + jisuiyun[0] + "岁运 " + shunni)
	document.write("<table border=1 id=\"dayun\"><tr>")
	document.write("<td>"+dayun_range[0]+"</td><td>"+dayun_range[1]+"</td>")
	document.write("<td>"+dayun_range[2]+"</td><td>"+dayun_range[3]+"</td><td>"+dayun_range[4]+"</td>")
	document.write("<td>"+dayun_range[5]+"</td><td>"+dayun_range[6]+"</td><td>"+dayun_range[7]+"</td>")
	document.write("<td>"+dayun_range[8]+"</td><td>"+dayun_range[9]+"</td></tr>")
	document.write("<tr><td>"+dayun_name[0]+"</td><td>"+dayun_name[1]+"</td><td>"+dayun_name[2]+"</td>")
	document.write("<td>"+dayun_name[3]+"</td><td>"+dayun_name[4]+"</td>")
	document.write("<td>"+dayun_name[5]+"</td><td>"+dayun_name[6]+"</td><td>"+dayun_name[7]+"</td>")
	document.write("<td>"+dayun_name[8]+"</td><td>"+dayun_name[9]+"</td></tr></table></font>")
}


function output_liunian_table(birthyear, liuyear, jisuiyun,dayun, colour){
	document.write("流年表：<br>")	
	document.write("<table border=1><tr>")
	document.write("<th>流年</th> <th>干支</th> <th>大运</th> <th>流年</th> <th>干支</th> <th>大运</th>")
	document.write("<th>流年</th> <th>干支</th> <th>大运</th> <th>流年</th> <th>干支</th> <th>大运</th>")
	document.write("<th>流年</th> <th>干支</th> <th>大运</th></tr>")

	var ar = new Array(2)
	var col1
	var col2
	var col3
	var col4
	var col5
	var col6
	var col7
	var col8
	var col9
	var col10
	var col11
	var col12

	var r = liuyear - birthyear
	r = Math.ceil(r/4)
	if (r < 4 ) {r = 4}
	var i = 0
	for(i = 0; i < r+1; i++){//each round is a row	
		col1 = birthyear + i
		ar = get_nian_ganzhi(col1)
		col2 = ar[1]
		col3 = pin_dayun(birthyear,col1,jisuiyun,dayun)
		col1 = mark_liunian(liunian, col1,colour)

		col4 = birthyear + r + i + 1
		ar = get_nian_ganzhi(col4)
		col5= ar[1]
		col6 = pin_dayun(birthyear,col4,jisuiyun,dayun)
		col4  = mark_liunian(liuyear, col4,colour)
		
		col7 = birthyear + 2*r + i + 2
		ar = get_nian_ganzhi(col7)
		col8 = ar[1]
		col9 = pin_dayun(birthyear,col7,jisuiyun,dayun)
		col7 = mark_liunian(liuyear, col7,colour)

		col10 = birthyear + 3*r + i + 3
		ar = get_nian_ganzhi(col10)
		col11 = ar[1]
		col12 = pin_dayun(birthyear,col10,jisuiyun,dayun)
		col10 = mark_liunian(liuyear, col10,colour)

		col13 = birthyear + 4*r + i + 4
		ar = get_nian_ganzhi(col13)
		col14 = ar[1]
		col15 = pin_dayun(birthyear,col13,jisuiyun,dayun)
		col13 = mark_liunian(liuyear, col13,colour)
		
		document.write("<tr>")

		document.write("<td>"+col1+"</td> <td>"+col2+"</td> <td>"+col3+"</td> <td>"+col4+"</td> <td>"+col5+"</td>")
		document.write("<td>"+col6+"</td> <td>"+col7+"</td> <td>"+col8+"</td> <td>"+col9+"</td>")
		document.write("<td>"+col10+"</td><td>"+col11+"</td> <td>"+col12+"</td>")
		document.write("<td>"+col13+"</td><td>"+col14+"</td> <td>"+col15+"</td> </tr>")		
	}

	document.write("</table>")
}

function output_90(nian90,yue90,ri90,shi90) {
	document.write("90度表：<br>")
	document.write("<table border=1><tr><th></th><th>与年柱关系</th><th>与月柱关系</th><th>与日柱关系</th><th>与时柱关系</th></tr>")
	document.write("<tr><td>90度</td><td>"+nian90[0]+"</td><td>"+yue90[0]+"</td><td>"+ri90[0]+"</td><td>"+shi90[0]+"</td></tr>")
	document.write("<tr><td>270度</td><td>"+nian90[1]+"</td><td>"+yue90[1]+"</td><td>"+ri90[1]+"</td><td>"+shi90[1]+"</td></tr>")
	document.write("<tr><td>180度</td><td>"+nian90[2]+"</td><td>"+yue90[2]+"</td><td>"+ri90[2]+"</td><td>"+shi90[2]+"</td></tr>")
	document.write("</table>")
}

function mark_liunian(liuy,to_mark,colour){
	if (parseInt(to_mark) == parseInt(liuy)){
		to_mark = "<span style='background-color:" + colour + "'>" + to_mark + "</span>"	
	}
	return to_mark
}

function print_liunian_header() {
	document.write("<br>测" + liunian + "年流年（" + liunian_ganzhi + "）")
	document.write("<br>流年太岁："+ liunian_taisui)
	document.write("&nbsp;&nbsp;&nbsp;&nbsp;暗干: " + angan + "<br>")
}

function output_tianshu() {
document.write("\
┌──────┬──────┬──────┐<br>\
│"+an[4]+"　"+tian_shen[4]+"　"+ma[4]+"│"+an[9]+"　"+tian_shen[5]+"　　│"+an[2]+"　"+tian_shen[6]+"　"+ma[2]+"│<br>\
│"+dai_gan[4]+""+kong[4]+""+xing[4]+"　"+tian[4]+"│"+dai_gan[5]+""+kong[9]+""+xing[9]+"　"+tian[5]+"│"+dai_gan[6]+""+kong[2]+""+xing[2]+"　"+tian[6]+"│<br>\
│"+di_shen[4]+"　"+men[4]+"　"+di[4]+"│"+di_shen[5]+"　"+men[5]+"　"+di[9]+"│"+di_shen[6]+"　"+men[6]+"　"+di[2]+"│<br>\
├──────┼──────┼──────┤<br>\
│"+an[3]+"　"+tian_shen[3]+"　　│"+an[5]+"　"+xing[5]+"　        &nbsp;│"+an[7]+"　"+tian_shen[7]+"　　│<br>\
│"+dai_gan[3]+""+kong[3]+""+xing[3]+"　"+tian[3]+"│　　　　　　│"+dai_gan[7]+""+kong[7]+""+xing[7]+"　"+tian[7]+"│<br>\
│"+di_shen[3]+"　"+men[3]+"　"+di[3]+"│　　　　　"+di[5]+"│"+di_shen[7]+"　"+men[7]+"　"+di[7]+"│<br>\
├──────┼──────┼──────┤<br>\
│"+an[8]+"　"+tian_shen[2]+"　"+ma[8]+"│"+an[1]+"　"+tian_shen[1]+"　　│"+an[6]+"　"+tian_shen[8]+"　"+ma[6]+"│<br>\
│"+dai_gan[2]+""+kong[8]+""+xing[8]+"　"+tian[2]+"│"+dai_gan[1]+""+kong[1]+""+xing[1]+"　"+tian[1]+"│"+dai_gan[8]+""+kong[6]+""+xing[6]+"　"+tian[8]+"│<br>\
│"+di_shen[2]+"　"+men[2]+"　"+di[8]+"│"+di_shen[1]+"　"+men[1]+"　"+di[1]+"│"+di_shen[8]+"　"+men[8]+"　"+di[6]+"│<br>\
└──────┴──────┴──────┘</p>\
")
//"+kong[1]+"
}

function output_tianshu_strip() {
document.write("\
┌──────┬──────┬──────┐<br>\
│　　"+tian_shen[4]+"　"+ma[4]+"│　　"+tian_shen[5]+"　　│　　"+tian_shen[6]+"　"+ma[2]+"│<br>\
│"+dai_gan[4]+""+kong[4]+""+xing[4]+"　"+tian[4]+"│"+dai_gan[5]+""+kong[9]+""+xing[9]+"　"+tian[5]+"│"+dai_gan[6]+""+kong[2]+""+xing[2]+"　"+tian[6]+"│<br>\
│"+di_shen[4]+"　"+men[4]+"　"+di[4]+"│"+di_shen[5]+"　"+men[5]+"　"+di[9]+"│"+di_shen[6]+"　"+men[6]+"　"+di[2]+"│<br>\
├──────┼──────┼──────┤<br>\
│　　"+tian_shen[3]+"　　│"+an[5]+"　"+xing[5]+"　        &nbsp;│　　"+tian_shen[7]+"　　│<br>\
│"+dai_gan[3]+""+kong[3]+""+xing[3]+"　"+tian[3]+"│　　　　　　│"+dai_gan[7]+""+kong[7]+""+xing[7]+"　"+tian[7]+"│<br>\
│"+di_shen[3]+"　"+men[3]+"　"+di[3]+"│　　　　　"+di[5]+"│"+di_shen[7]+"　"+men[7]+"　"+di[7]+"│<br>\
├──────┼──────┼──────┤<br>\
│　　"+tian_shen[2]+"　"+ma[8]+"│　　"+tian_shen[1]+"　　│　　"+tian_shen[8]+"　"+ma[6]+"│<br>\
│"+dai_gan[2]+""+kong[8]+""+xing[8]+"　"+tian[2]+"│"+dai_gan[1]+""+kong[1]+""+xing[1]+"　"+tian[1]+"│"+dai_gan[8]+""+kong[6]+""+xing[6]+"　"+tian[8]+"│<br>\
│"+di_shen[2]+"　"+men[2]+"　"+di[8]+"│"+di_shen[1]+"　"+men[1]+"　"+di[1]+"│"+di_shen[8]+"　"+men[8]+"　"+di[6]+"│<br>\
└──────┴──────┴──────┘</p>\
")
//"+kong[1]+"
}


function zhuan_shigan_keying(){
	var a = new Array(10)
	var i
	var jigong = to_fei(locate("禽芮",xing))
	var str
	i = di[5] + di[jigong]
	var str5 = shigan_keying[i]
	
	i = tian[1] + di[1]
	str = "【坎一宫】：" + shigan_keying[i]
	if(jigong == 1) {
		a[1] = str + "<br>〖五寄坎〗：" + str5
	} else {
		a[1] = str
	}

	i = tian[6] + di[2]
	var i2 = tian[6] + di[5]
	var i5 = di[5] + di[5]
	
	str = "【坤二宫】：" + shigan_keying[i] + "<br>〖五寄坤〗：" + shigan_keying[i2]
	if(jigong == 2) {
		a[2] = str + "<br>〖五加五〗：" + shigan_keying[i5]
	} else {
		a[2] = str
	}


	i = tian[3] + di[3]
	str = "【震三宫】：" + shigan_keying[i]
	if(jigong == 3){
		a[3] = str + "<br>〖五寄震〗：" + str5
	} else {
		a[3] = str		
	}

	
	i = tian[4] + di[4]
	str = "【巽四宫】：" + shigan_keying[i]
	if(jigong == 4) {
		a[4] = str + "<br>〖五寄巽〗：" + str5
	} else {
		a[4] = str			
	}

	i = tian[8] + di[6]
	str = "【乾六宫】：" + shigan_keying[i]
	if (jigong == 6) {
		a[6] = str + "<br>〖五寄乾〗：" + str5
	} else {
		a[6] = str		
	}

	i = tian[7] + di[7]
	str = "【兑七宫】：" + shigan_keying[i]
	if (jigong == 7) {
		a[7] = str + "<br>〖五寄兑〗：" + str5
	} else {
		a[7] = str 	
	}

	i = tian[2] + di[8]
	str = "【艮八宫】：" + shigan_keying[i]
	if(jigong == 8) {
		a[8] = str + "<br>〖五寄艮〗：" + str5
	} else {
		a[8] = str 
	}

	i = tian[5] + di[9]
	str = "【离九宫】：" + shigan_keying[i]
	if (jigong == 9) {
		a[9] = str + "<br>〖五寄离〗：" + str5
	} else {
		a[9] = str
	}

	return a

}

function fei_shigan_keying(){
	var a = new Array(10)
	var i
	i = tian[1] + di[1]
	alert("1 = " + i)
	a[1] = "坎一宫：" + shigan_keying[i]

	i = tian[2] + di[2]
	alert("2 = "+i)
	a[2] = "坤二宫：" + shigan_keying[i]

	i = tian[3] + di[3]
	a[3] = "震三宫：" + shigan_keying[i]

	i = tian[4] + di[4]
	alert("3 = " +i)
	a[4] = "巽四宫：" + shigan_keying[i]

	i = tian[5] + di[5]
	a[5] = "中五宫：" + shigan_keying[i]

	i = tian[6] + di[6]
	a[6] = "乾六宫：" + shigan_keying[i]

	i = tian[7] + di[7]
	a[7] = "兑七宫：" + shigan_keying[i]

	i = tian[8] + di[8]
	alert("8 = " +i)
	a[8] = "艮八宫：" + shigan_keying[i]

	i = tian[9] + di[9]
	alert("9 = " +i)
	a[9] = "离九宫：" + shigan_keying[i]

	return a
}