var men_gua = new Array(9)
men_gua["休门"] = "1"
men_gua["死门"] = "2"
men_gua["伤门"] = "3"
men_gua["杜门"] = "4"
men_gua["中门"] = "5"
men_gua["开门"] = "6"
men_gua["惊门"] = "7"
men_gua["生门"] = "8"
men_gua["景门"] = "9"

function get_fushi_gua(){

}

function get_zhuanpan_gua(m,g1,g2){

	for(var i=1; i<10;i++){
	//alert(to_zhuan(i))
		try{
			g1[i]= get_shiyao(men_gua[m[to_zhuan(i)]],i) 
			g2[i]= get_shiyao(i,men_gua[m[to_zhuan(i)]])
			
		} catch(e){
			
			continue
		}
	
	}

}

function get_feipan_gua(m,g1,g2){

	for(var i=1; i<10;i++){
		try{

			g1[i]= get_shiyao(men_gua[m[i]],i) 
			g2[i]= get_shiyao(i,men_gua[m[i]])

		} catch(e){
			
			continue
		}
	
	}
}

function get_shiyao(wai,nei){
//wai and nei are both houtian trigram ordinals e.g. "64" is 天风姤
	if(wai == 5){wai = 2}
	if(nei == 5){nei = 2}
	return houtian_hex[wai+nei][4] //the 4th item of houtian_hex is 世爻
}

/*
var hexagrams = new Array(9)
hexagrams[0] = ""

hexagrams[1] = new Array("金","乾为天","天风姤","天山遁","天地否","风地观","山地剥","火地晋","火天大有")

hexagrams[2] = new Array("金","兑为泽","泽水困","泽地翠","泽山咸","水山蹇","地山谦","雷山小过","雷泽归妹")

hexagrams[3] = new Array("火","离为火","火山旅","火风鼎","火水未济","山水蒙","风水涣","天水讼","天火同人")

hexagrams[4] = new Array("木","震为雷","雷地豫","雷水解","雷风恒","地风升","火风井","则风大过","泽雷随")

hexagrams[5] = new Array("木","巽为风","风天小蓄","风火家人","风雷益","天雷无妄","火雷噬嗑","山雷颐","火风蛊")

hexagrams[6] = new Array("水","坎为水","水泽节","水雷迍","水火既济","泽火革","雷火丰","地火明夷","地水师")

hexagrams[7] = new Array("土","艮为山","山火贲","山天大蓄","山泽损","火泽睽","山泽履","风泽中孚","风山渐")

hexagrams[8] = new Array("坤","坤为地","地雷复","地泽临","地天泰","雷天大壮","泽天夬","水天需","水地比")
*/

/*
Associated houtian_hex is an associated two dimentional array 
格式：
1. 用后天卦数作为index，如天风姤卦，上卦乾、下卦巽，乾6、巽4，所以要找houtian_hex["64"]
2. 第二维的array格式如下：八宫属性、卦名、阴阳爻（从左边第一个数字为上爻）、纳支和六亲（从左到右对应从初爻到上爻）、世爻地支、应爻地支。
*/

var houtian_hex = new Array(64)
houtian_hex["66"] = new Array("金","乾为天","111111","子孙子水/妻财寅木/父母辰土应/官鬼午火/兄弟申金/父母戌土世","戌土","辰土")
houtian_hex["64"] = new Array("金","天风姤","111110","父母丑土世/子孙亥水/兄弟酉金/官鬼午火应/兄弟申金/父母戌土","丑土","午火")
houtian_hex["68"] = new Array("金","天山遁","111100","父母辰土/官鬼午火世/兄弟申金/官鬼午火/兄弟申金应/父母戌土","午火","申金")
houtian_hex["62"] = new Array("金","天地否","111000","父母未土/官鬼巳火/妻财卯木世/官鬼午火/兄弟申金/父母戌土应","卯木","戌土")
houtian_hex["42"] = new Array("金","风地观","110000","父母未土应/官鬼巳火/妻财卯木/父母未土世/官鬼巳火/妻财卯木","未土","未土")
houtian_hex["82"] = new Array("金","山地剥","100000","父母未土/官鬼巳火应/妻财卯木/父母戌土/子孙子水世/妻财寅木","子水","巳火")
houtian_hex["92"] = new Array("金","火地晋","101000","父母未土应/官鬼巳火/妻财卯木/兄弟酉金世/父母未土/官鬼巳火","酉金","未土")
houtian_hex["96"] = new Array("金","火天大有","101111","子孙子水/妻财寅木/父母辰土世/兄弟酉金/父母未土/官鬼巳火应","辰土","巳火")

houtian_hex["77"] = new Array("金","兑为泽","011011","官鬼巳火/妻财卯木/父母丑土应/子孙亥水/兄弟酉金/父母未土世","未土","丑土")
houtian_hex["71"] = new Array("金","泽水困","011010","妻财寅木世/父母辰土/官鬼午火/子孙亥水应/兄弟酉金/父母未土","寅木","亥水")
houtian_hex["72"] = new Array("金","泽地翠","011000","父母未土/官鬼巳火世/妻财卯木/子孙亥水/兄弟酉金应/父母未土","巳火","酉金")
houtian_hex["78"] = new Array("金","泽山咸","011100","父母辰土/官鬼午火/兄弟申金世/子孙亥水/兄弟酉金/父母未土应","申金","未土")
houtian_hex["18"] = new Array("金","水山蹇","010100","父母辰土应/官鬼午火/兄弟申金/兄弟申金世/父母戌土/子孙子水","申金","辰土")
houtian_hex["28"] = new Array("金","地山谦","000100","父母辰土/官鬼午火应/兄弟申金/父母丑土/子孙亥水世/兄弟酉金","亥水","午火")
houtian_hex["78"] = new Array("金","雷山小过","001100","父母辰土应/官鬼午火/兄弟申金/官鬼午火世/兄弟申金/父母戌土","午火","辰土")
houtian_hex["37"] = new Array("金","雷泽归妹","001011","官鬼巳火/妻财卯木/父母丑土世/官鬼午火/兄弟申金/父母戌土应","丑土","戌土")

houtian_hex["99"] = new Array("火","离为火","101101","父母卯木/子孙丑土/官鬼亥水应/妻财酉金/子孙未土/兄弟巳火世","巳火","亥水")
houtian_hex["98"] = new Array("火","火山旅","101100","子孙辰土世/兄弟午火/妻财申金/妻财酉金应/子孙未土/兄弟巳火","辰土","酉金")
houtian_hex["94"] = new Array("火","火风鼎","101110","子孙丑土/官鬼亥水世/妻财酉金/妻财酉金/子孙未土应/兄弟巳火","亥水","未土")
houtian_hex["91"] = new Array("火","火水未济","101010","父母寅木/子孙辰土/兄弟午火世/妻财酉金/子孙未土/兄弟巳火应","午火","巳火")
houtian_hex["81"] = new Array("火","山水蒙","100010","父母寅木应/子孙辰土/兄弟午火/子孙戌土世/官鬼子水/父母寅木","戌土","寅木")
houtian_hex["41"] = new Array("火","风水涣","110010","父母寅木/子孙辰土应/兄弟午火/子孙未土/兄弟巳火世/父母卯木","巳火","辰土")
houtian_hex["61"] = new Array("火","天水讼","111010","父母寅木应/子孙辰土/兄弟午火/兄弟午火世/妻财申金/子孙戌土","午火","寅木")
houtian_hex["69"] = new Array("火","天火同人","111101","父母卯木/子孙丑土/官鬼亥水世/兄弟午火/妻财申金/子孙戌土应","亥水","戌土")

houtian_hex["33"] = new Array("木","震为雷","001001","父母子水/兄弟寅木/妻财辰土应/子孙午火/官鬼申金/妻财戌土世","戌土","辰土")
houtian_hex["32"] = new Array("木","雷地豫","001000","妻财未土世/子孙子火/兄弟卯木/子孙午火应/官鬼申金/妻财戌土","未土","午火")
houtian_hex["31"] = new Array("木","雷水解","001010","兄弟寅木/妻财辰土世/子孙午火/子孙午火/官鬼申金应/妻财戌土","辰土","申金")
houtian_hex["34"] = new Array("木","雷风恒","001110","妻财丑土/父母亥水/官鬼酉金世/子孙午火/官鬼申金/妻财戌土应","酉金","戌土")
houtian_hex["24"] = new Array("木","地风升","000110","妻财丑土应/父母亥水/官鬼酉金/妻财丑土世/父母亥水/官鬼酉金","丑土","丑土")
houtian_hex["14"] = new Array("木","水风井","010110","妻财丑土/父母亥水应/官鬼酉金/官鬼申金/妻财戌土世/父母子水","戌土","亥水")
houtian_hex["74"] = new Array("木","泽风大过","011110","妻财丑土应/父母亥水/官鬼酉金/父母亥水世/官鬼酉金/妻财未土","亥水","丑土")
houtian_hex["73"] = new Array("木","泽雷随","011001","父母子水/兄弟寅木/妻财辰土世/父母亥水/官鬼酉金/妻财未土应","辰土","未土")

houtian_hex["44"] = new Array("木","巽为风","110110","妻财丑土/父母亥水/官鬼酉金应/妻财未土/子孙巳火/兄弟卯木世","卯木","酉金")
houtian_hex["46"] = new Array("木","风天小畜","110111","父母子水世/兄弟寅木/妻财辰土/妻财未土应/子孙巳火/兄弟卯木","子水","未土")
houtian_hex["49"] = new Array("木","风火家人","110101","兄弟卯木/妻财丑土世/父母亥水/妻财未土/子孙巳火应/兄弟卯木","丑土","巳火")
houtian_hex["43"] = new Array("木","风雷益","110001","父母子水/兄弟寅木/妻财辰土世/妻财未土/子孙巳火/兄弟卯木应","辰土","卯木")
houtian_hex["63"] = new Array("木","天雷无妄","111001","父母子水应/兄弟寅木/妻财辰土/子孙午火世/官鬼申金/妻财戌土","午火","子水")
houtian_hex["93"] = new Array("木","火雷噬嗑","101001","父母子水/兄弟寅木应/妻财辰土/官鬼酉金/妻财未土世/子孙巳火","未土","寅木")
houtian_hex["83"] = new Array("木","山雷颐","100001","父母子水应/兄弟寅木/妻财辰土/妻财戌土世/父母子水/兄弟寅木","戌土","子水")
houtian_hex["84"] = new Array("木","山风蛊","100110","妻财丑土/父母亥水/官鬼酉金世/妻财戌土/父母子水/兄弟寅木应","酉金","寅木")

houtian_hex["11"] = new Array("水","坎为水","010010","子孙寅木/官鬼辰土/妻财午火应/父母申金/官鬼戌土/兄弟子水世","子水","午火")
houtian_hex["17"] = new Array("水","水泽节","010011","妻财巳火世/子孙卯木/官鬼丑土/父母申金应/官鬼戌土/兄弟子水","巳火","申金")
houtian_hex["13"] = new Array("水","水雷屯","010001","兄弟子水/子孙寅木世/官鬼辰土/父母申金/官鬼戌土应/兄弟子水","寅木","戌土")
houtian_hex["19"] = new Array("水","水火既济","010101","子孙卯木/官鬼丑土/兄弟亥水世/父母申金/官鬼戌土/兄弟子水应","亥水","子水")
houtian_hex["79"] = new Array("水","泽火革","011101","子孙卯木应/官鬼丑土/兄弟亥水/兄弟亥水世/父母酉金/官鬼未土","亥水","卯木")
houtian_hex["39"] = new Array("水","雷火丰","001101","子孙卯木/官鬼丑土应/兄弟亥水/妻财午火/父母申金世/官鬼戌土","申金","丑土")
houtian_hex["29"] = new Array("水","地火明夷","000101","子孙卯木应/官鬼丑土/兄弟亥水/官鬼丑土世/兄弟亥水/父母酉金","丑土","卯木")
houtian_hex["21"] = new Array("水","地水师","000010","子孙寅木/官鬼辰土/妻财午火世/官鬼丑土/兄弟亥水/父母酉金应","午火","酉金")

houtian_hex["88"] = new Array("土","艮为山","100100","兄弟辰土/父母午火/子孙申金应/兄弟戌土/妻财子水/官鬼寅木世","寅木","申金")
houtian_hex["89"] = new Array("土","山火贲","100101","官鬼卯木世/兄弟丑土/妻财亥水/兄弟戌土应/妻财子水/官鬼寅木","卯木","戌土")
houtian_hex["86"] = new Array("土","山天大畜","100111","妻财子水/官鬼寅木世/兄弟辰土/兄弟戌土/妻财子水应/官鬼寅木","寅木","子水")
houtian_hex["87"] = new Array("土","山泽损","100011","父母巳火/官鬼卯木/兄弟丑土世/兄弟戌土/妻财子水/官鬼寅木应","丑土","寅木")
houtian_hex["97"] = new Array("土","火泽睽","101011","父母巳火应/官鬼卯木/兄弟丑土/子孙酉金世/兄弟未土/父母巳火","酉金","巳火")
houtian_hex["67"] = new Array("土","天泽履","111011","父母巳火/官鬼卯木应/兄弟丑土/父母午火/子孙申金世/兄弟戌土","申金","卯木")
houtian_hex["47"] = new Array("土","风泽中孚","110011","父母巳火应/官鬼卯木/兄弟丑土/兄弟未土世/父母巳火/官鬼卯木","未土","巳火")
houtian_hex["48"] = new Array("土","风山渐","110100","兄弟辰土/父母午火/子孙申金世/兄弟未土/父母巳火/官鬼卯木应","申金","卯木")

houtian_hex["22"] = new Array("土","坤为土","000000","兄弟未土/父母巳火/官鬼卯木应/兄弟丑土/妻财亥水/子孙酉金世","酉金","卯木")
houtian_hex["23"] = new Array("土","地雷复","000001","妻财子水世/官鬼寅木/兄弟辰土/兄弟丑土应/妻财亥水/子孙酉金","子水","丑土")
houtian_hex["27"] = new Array("土","地泽临","000011","父母巳火/官鬼卯木世/兄弟丑土/兄弟丑土/妻财亥水应/子孙酉金","卯木","亥水")
houtian_hex["26"] = new Array("土","地天泰","000111","妻财子水/官鬼寅木/兄弟辰土世/兄弟丑土/妻财亥水/子孙酉金应","辰土","酉金")
houtian_hex["36"] = new Array("土","雷天大壮","001111","妻财子水应/官鬼寅木/兄弟辰土/父母午火世/子孙申金/兄弟戌土","午火","子水")
houtian_hex["76"] = new Array("土","泽天夬","011111","妻财子女/官鬼寅木应/兄弟辰土/妻财亥水/子孙酉金世/兄弟未土","酉金","寅木")
houtian_hex["16"] = new Array("土","水天需","010111","妻财子水应/官鬼寅木/兄弟辰土/子孙申金世/兄弟戌土/妻财子水","申金","子水")
houtian_hex["12"] = new Array("土","水地比","010000","兄弟未土/父母巳火/官鬼卯木世/子孙申金/兄弟戌土/妻财子水应","卯木","子水")

var hex_ordinal = new Array(65)
hex_ordinal[0] = ""
hex_ordinal[1] = "66" 
hex_ordinal[2] = "64" 
hex_ordinal[3] = "68" 
hex_ordinal[4] = "62" 
hex_ordinal[5] = "42" 
hex_ordinal[6] = "82" 
hex_ordinal[7] = "92" 
hex_ordinal[8] = "96" 

hex_ordinal[9] = "77" 
hex_ordinal[10] = "71" 
hex_ordinal[11] = "72" 
hex_ordinal[12] = "78" 
hex_ordinal[13] = "18" 
hex_ordinal[14] = "28" 
hex_ordinal[15] = "78" 
hex_ordinal[16] = "37" 

hex_ordinal[17] = "99" 
hex_ordinal[18] = "98" 
hex_ordinal[19] = "94" 
hex_ordinal[20] = "91" 
hex_ordinal[21] = "81" 
hex_ordinal[22] = "41" 
hex_ordinal[23] = "61" 
hex_ordinal[24] = "69" 

hex_ordinal[25] = "33" 
hex_ordinal[26] = "32" 
hex_ordinal[27] = "31" 
hex_ordinal[28] = "34" 
hex_ordinal[29] = "24" 
hex_ordinal[30] = "14" 
hex_ordinal[31] = "74" 
hex_ordinal[32] = "73" 

hex_ordinal[33] = "44" 
hex_ordinal[34] = "46" 
hex_ordinal[35] = "49" 
hex_ordinal[36] = "43" 
hex_ordinal[37] = "63" 
hex_ordinal[38] = "93" 
hex_ordinal[39] = "83" 
hex_ordinal[40] = "84" 

hex_ordinal[41] = "11" 
hex_ordinal[42] = "17" 
hex_ordinal[43] = "13" 
hex_ordinal[44] = "19" 
hex_ordinal[45] = "79" 
hex_ordinal[46] = "39" 
hex_ordinal[47] = "29" 
hex_ordinal[48] = "21" 

hex_ordinal[49] = "88" 
hex_ordinal[50] = "89" 
hex_ordinal[51] = "86" 
hex_ordinal[52] = "87" 
hex_ordinal[53] = "97" 
hex_ordinal[54] = "67" 
hex_ordinal[55] = "47" 
hex_ordinal[56] = "48" 

hex_ordinal[57] = "22" 
hex_ordinal[58] = "23" 
hex_ordinal[59] = "27" 
hex_ordinal[60] = "26" 
hex_ordinal[61] = "36" 
hex_ordinal[62] = "76" 
hex_ordinal[63] = "16" 
hex_ordinal[64] = "12" 

var hex_digits = new Array(65)
hex_digits[0] = ""
hex_digits[1] = "111111"
hex_digits[2] = "111110"
hex_digits[3] = "111100"
hex_digits[4] = "111000"
hex_digits[5] = "110000"
hex_digits[6] = "100000"
hex_digits[7] = "101000"
hex_digits[8] = "101111"

hex_digits[9] = "011011"
hex_digits[10] = "011010"
hex_digits[11] = "011000"
hex_digits[12] = "011100"
hex_digits[13] = "010100"
hex_digits[14] = "000100"
hex_digits[15] = "001100"
hex_digits[16] = "001011"

hex_digits[17] = "101101"
hex_digits[18] = "101100"
hex_digits[19] = "101110"
hex_digits[20] = "101010"
hex_digits[21] = "100010"
hex_digits[22] = "110010"
hex_digits[23] = "111010"
hex_digits[24] = "111101"

hex_digits[25] = "001001"
hex_digits[26] = "001000"
hex_digits[27] = "001010"
hex_digits[28] = "001110"
hex_digits[29] = "000110"
hex_digits[30] = "010110"
hex_digits[31] = "011110"
hex_digits[32] = "011001"

hex_digits[33] = "110110"
hex_digits[34] = "110111"
hex_digits[35] = "110101"
hex_digits[36] = "110001"
hex_digits[37] = "111001"
hex_digits[38] = "101001"
hex_digits[39] = "100001"
hex_digits[40] = "100110"

hex_digits[41] = "010010"
hex_digits[42] = "010011"
hex_digits[43] = "010001"
hex_digits[44] = "010101"
hex_digits[45] = "011101"
hex_digits[46] = "001101"
hex_digits[47] = "000101"
hex_digits[48] = "000010"

hex_digits[49] = "100100"
hex_digits[50] = "100101"
hex_digits[51] = "100111"
hex_digits[52] = "100011"
hex_digits[53] = "101011"
hex_digits[54] = "111011"
hex_digits[55] = "110011"
hex_digits[56] = "110100"

hex_digits[57] = "000000"
hex_digits[58] = "000001"
hex_digits[59] = "000011"
hex_digits[60] = "000111"
hex_digits[61] = "001111"
hex_digits[62] = "011111"
hex_digits[63] = "010111"
hex_digits[64] = "010000"

function get_andong(fu_loc,shi_loc,shizhi){
	if(fu_loc == 5 || shi_loc == 5) {
		return 5
	}

	fu_loc = houtian_to_xiantian(fu_loc)
	shi_loc = houtian_to_xiantian(shi_loc)
//alert("f=" + fu_loc + " sh="+ shi_loc + " 时支= "+shizhi)
	var x = fu_loc + shi_loc + shizhi
	x = cycle(x,6)

	var y

	if (x>3) {
		y = trigram_biangua[fu_loc]
		//alert("上动")
		
	} else {
		y = trigram_biangua[shi_loc]
		//alert("下动")
	}
	
	x = cycle(x,3)

	y = y.substr(x-1,1)
	return y
}

/*
乾兑离震巽坎艮坤，各卦一爻变、二爻变、三爻变的结果，如乾卦一爻变变为巽4，二爻变变为离9，三爻变变为兑7，所以乾卦对应的数字是497，以此类推，兑卦对应的是136，等等
*/

var trigram_biangua = new Array("","497","136","863","279","681","724","942","318") 


