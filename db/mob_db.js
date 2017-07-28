function clear_recs(b){
	window.top.localStorage.clear()
	top.main.location = "rec.html"
}
function assign_vals(k){
	var temp = window.top.localStorage.getItem(k)
	var a = temp.split("/")
	document.getElementById("nian").value = a[0]
//alert(document.getElementById("nian").value)
	document.getElementById("yue").value = a[1]
	document.getElementById("ri").value = a[2]
	document.getElementById("shi").value = a[3]
	document.getElementById("fen").value = a[4]
	document.getElementById("hidden_zhuade").value = a[5]
	//alert(document.getElementById("hidden_zhuade").value)
	document.getElementById("yilin_num").value = a[6]
}
function addRec(inf){//inf is "/" connected string that contains 起局时间, 抓得时柱, 动宫, and 易林卦序数

	var k = window.top.localStorage.length + 1
	//alert(inf)
	localStorage.setItem(k,inf)

}

function showAll(){
//alert("1")
	for(i=1;i<window.top.localStorage.length+1;i++){
		showData(i,window.top.localStorage.getItem(i))
	}
}

function showData(k,v){
//alert("Individual")
	var a = v.split("/")
	//alert(v)

	if(a[4].length ==1){
		a[4] = "0" + a[4]
	}
	
	var t = a[0] + "年" + a[1] + "月" + a[2] + "日" + a[3] + ":" + a[4]//起局时间
	var z = a[5] //抓得时柱
	var zh = huajia[z]

	var dong = a[6]
	//alert("动宫="+dong)
	var y = a[7] //易林卦数
     //构建一个表行用于取得当前所要的信息 
     var tr = document.createElement('tr'); 
     //创建第一列，这一列是起局时间 
     var td1 = document.createElement('td'); 
     //填充第一列的信息为该行的key 
     td1.innerHTML = k;

     //创建第二列，这一列是起局时间 
     var td2 = document.createElement('td'); 
     //td2.innerHTML = t; 
	 td2.id = k
	 //td2.setAttribute("onclick","eval(assign_vals(this.id));top.main.location='baoshu_jumian.html?n=" + z + "&inf=" + v + "'")
	 //td2.setAttribute("onclick","top.main.location='baoshu_jumian.html?n=" + z + "&inf=" + v + "'")
	 var btn = document.createElement("BUTTON")
	 //alert("b")
	 var btn_label = document.createTextNode(t)
	 	 //alert("L")
	 btn.appendChild(btn_label)
	 	 //alert("C")
	 btn.setAttribute("type","submit")
	 btn.setAttribute("style","width:100%")	
	 btn.setAttribute("class","rec_time")
	 btn.onclick = function(){top.main.location="baoshu_jumian.html?n=" + z + "&inf=" + v}
	 	 //alert("clic")
	 td2.appendChild(btn)
	 	 //alert("ap")
    //创建第三列，这一列是抓得时柱 
     var td3=document.createElement('td'); 
     td3.innerHTML = zh

   //创建第四列，这一列是动宫	 
	 var td4 = document.createElement('td'); 
     td4.innerHTML = dong
	 //alert(dong)
    //创建第五列，这一列是易林卦数	 
	 var td5 = document.createElement('td'); 
     td5.innerHTML = y
	 
	 
     //把这四列挂到当前行中 
     tr.appendChild(td1); 
     tr.appendChild(td2); 
     tr.appendChild(td3); 
     tr.appendChild(td4); 
     tr.appendChild(td5); 
     //让这个表格在后面加上这一行 
     recs.appendChild(tr); 
	 
 } 
/*
    document.addEventListener("deviceready", onDeviceReady, false);    // PhoneGap is ready    
	function onDeviceReady() {        
		var db = window.openDatabase("Database", "1.0", "qimen_rec", 200000);        
		db.transaction(populateDB, errorCB, successCB);    
	}    
	
		// Populate the database     
	function populateDB(tx,j) {         
		//tx.executeSql('DROP TABLE IF EXISTS DEMO');         
		//tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)'); 
		tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (data)');         
		tx.executeSql('INSERT INTO DEMO (id, data) VALUES (j)');         
		//tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');    
	}    
		// Transaction error callback    //    
	function errorCB(err) {        
		alert("Error processing SQL: "+err);    
	}    
	// Transaction success callback    //    
	function successCB() {        
		alert("success!");    
	}
*/