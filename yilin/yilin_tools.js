function refresh_yilin_values(n){
	//n = Math.floor(Math.random()*total+1)
	var min = d.getMinutes();
	if (min<10){min = "0"+min;}
	var r = d.getFullYear() + "年" + (d.getMonth() + 1) + "月"+ d.getDate() + "日" + d.getHours() + ":" + min;
	document.getElementById("shijian").innerHTML = r;
	document.getElementById("linci_num").innerHTML = n;
	document.getElementById("mougua_zhi_mougua").innerHTML = lines[n][1] + lines[n][5] + "<font size=4>之</font>" + lines[n][2] + lines[n][6]; //某卦之某卦
	document.getElementById("linci_words").innerHTML =  lines[n][3];
	document.getElementById("shangzhu").innerHTML = lines[n][4];	
}
