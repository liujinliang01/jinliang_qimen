
function get_six(b){
	//alert("欢迎！")
	var y = b.year.value

	y = parseInt(y)
	nian = y

	var m = b.yue.value
	m = parseInt(m) -1
	yue = m

	var r = b.ri.value
	r = parseInt(r)
	ri = r

	var s = b.shi.value
	s = parseInt(s)
	shi = s
	
	var f = b.fen.value
	f = parseInt(f)
	fen = f

	var j = b.jushu.value
	chosen_ju_num = j.split(" ")
}


/*
function get_six(){
	var y = top.cal_index.choice.dummy.year.value
	//document.write("<br> y = " + y)
	y = parseInt(y)
	nian = y
	var m = top.cal_index.choice.dummy.yue.value
	m = parseInt(m) -1
	yue = m
	var r = top.cal_index.choice.dummy.ri.value
	r = parseInt(r)
	ri = r
	var s = top.cal_index.choice.dummy.shi.value
	s = parseInt(s)
	shi = s
	
	var f = top.cal_index.choice.dummy.fen.value
	f = parseInt(f)
	fen = f

	var j = top.cal_index.choice.dummy.jushu.value
	chosen_ju_num = j.split(" ")
}
*/
function choose_ju_num(c, j) {
	var a = new Array(3)
	if(j[0]=="自动拆补定局") {
		jq_yuan = chaibu_jq_yuan(c) 
		a = ding_jushu(jq_yuan)	
		a[2] = " " + jq_yuan
	} else if(j[0] == "抓局"){
		a = zhuaju()
	}else {
		jq_yuan = ""
		a[0] = j[0]
		a[1] = parseInt(j[1])
	}
	return a
}

function zhuaju(){
	var a = new Array("","阳一局","阳二局","阳三局","阳四局","阳五局","阳六局","阳七局","阳八局","阳九局","阴一局","阴二局","阴三局","阴四局","阴五局","阴六局","阴七局","阴八局","阴九局")
	var x = Math.floor(Math.random()*18+1)
	var arr = new Array(3) //format: ("阳一局","",)
	arr[0] = a[x]

	if(x>9){
		x = -1* cycle(x,9)
	} 
	arr[1] = x
	return arr
}