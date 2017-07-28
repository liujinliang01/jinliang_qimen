
function days_in_month (year, month) {
     return 32 - new Date(year, month, 32).getDate();
}

var sels = new Array(4)
var s1, s2, s3, s4, s5, s6, s7, s
function set_cent(o){
	//s1 = "window.location='baoshu.html?cent="
	s2 = eval(o.value)
	s3 = "&y="
	s4 = eval(document.dum.y.value)
	s5 = "&m="
	s6 = eval(document.dum.m.value)	
	s7 = "'"
	s = s1 + s2 + s3 + s4 + s5 + s6 + s7
	return s
}

function set_y(o){
	//s1 = "window.location='baoshu.html?cent="
	s2 = eval(document.dum.century.value)
	s3 = "&y="
	s4 = document.dum.y.value
	s5 = "&m="
	s6 = eval(document.dum.m.value)
	s7 = "'"
	s = s1 + s2 + s3 + s4 + s5 + s6 + s7
	return s
}

function set_m(o){
	//s1 = "window.location='baoshu.html?cent="
	s2 = eval(document.dum.century.value)
	s3 = "&y="
	s4 = eval(document.dum.y.value)
	s5 = "&m="
	s6 = eval(o.value)	
	s7 = "'"
	s = s1 + s2 + s3 + s4 + s5 + s6 + s7
	return s
}


function set_r(){
	//s1 = 'window.location="baoshu.html?cent='
	s2 = eval(document.dum.century.value)
	s3 = '&y='
	s4 = eval(document.dum.y.value)
	s5 = '&m='
	s6 = eval(document.dum.m.value)
	s7 = '&r='
	s = s1 + s2 + s3 + s4 + s5 + s6 + s7
	return s	
}

function get_values() {
window.onerror=function doNothing(){return true}
	var s = window.location.search
	if(s=="") {return} // on first load, s will be empty. Then we don't want to change the default values.
	s = s.substring(s.indexOf("?")+5,s.length)
	sels = s.split("=") //sel[0] = "", sels[1] = year, sels[2] = month

	var j = sels[1].substring(0,sels[1].indexOf("&"))
	if(!isNaN(j)){
		cent = j
	}

	var k = sels[2].substring(0,sels[2].indexOf("&"))
	if(!isNaN(k)){
		nian = k
	//alert("nian = " + nian)
	}
	var l = sels[3]
	if (l.indexOf("&") != -1) {
		l = l.substr(0,l.indexOf("&"))
	}
	if(!isNaN(l)) {
		yue = l
	}

	var n = sels[4]
	if(!isNaN(n)) {
		ri = n
	}
}

