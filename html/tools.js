function show_zhengshi(){
	//top.cal.document.getElementById("choice").style.display='inline'
	top.cal.document.getElementById("zhengshi").style.display='inline'
	top.cal.document.getElementById("zhengmian").style.display='none'
	top.cal.document.getElementById("beimian").style.display='none'
}

function show_zhengmian(){
	//top.cal.document.getElementById("choice").style.display='inline'
	top.cal.document.getElementById("zhengshi").style.display='none'
	top.cal.document.getElementById("zhengmian").style.display='inline'
	top.cal.document.getElementById("beimian").style.display='none'
}

function show_beimian(){
	top.cal.location = 'zhuaji.html'
}

function findX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	return curleft;
}

function findY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
	return curtop;
}

function xy(){
	<!-- Original:  CodeLifter.com (support@codelifter.com) -->
	<!-- Web Site:  http://www.codelifter.com -->

	<!-- This script and many more are available free online at -->
	<!-- The JavaScript Source!! http://javascript.internet.com -->

	<!-- Begin
	var IE = document.all?true:false;
	if (!IE) document.captureEvents(Event.MOUSEMOVE)
	document.onmousemove = getMouseXY;
	var tempX = 0;
	var tempY = 0;
	function getMouseXY(e) {
		if (IE) { // grab the x-y pos.s if browser is IE
			tempX = event.clientX + document.body.scrollLeft;
			tempY = event.clientY + document.body.scrollTop;
		} else {  // grab the x-y pos.s if browser is NS
			tempX = e.pageX;
			tempY = e.pageY;
		} 

		if (tempX < 0){tempX = 0;}
		if (tempY < 0){tempY = 0;}  
		document.Show.MouseX.value = tempX;
		document.Show.MouseY.value = tempY;
		return true;
	}
	//  End -->
}

function mark_ri(str) {
	var a = new Array(3,2)
	a = coords(str)
	circle(a[0]) //tian
	circle(a[1]) //di
	circle(a[2]) //ren
}

function circle(ar) {
	var x = ar[0]
	var y = ar[1]
	document.write("<div style='position: absolute; left:" + x +"px; top: " + y + "px;'><v:oval ")
	document.write("style='width:18.75pt;height:21.75pt; z-index:1' filled='f' strokecolor='red' strokeweight='1pt'/></div>")

}

function coords(str) {
	var a = new Array(3,2)
	for(var i = 1; i < tian.length + 1; i++) {

	}
}

function declare_vars() {
	var kong = new Array(10) 
	kong[1] = "空"

	var ma = new Array(10)
	ma[1] = "马"
}