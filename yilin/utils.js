
var instr = "\
1. 静下心来，把你要问的事在头脑中用语言清楚地、默默地表述一下，然后点击“开始”。<p>\
2. 您所关心的结果只是红色方框中的内容，其他部分供象数爱好者揣摩、记录之用。<p>\
3. 每次把占测结果都复制粘贴到Word里，记录下当时所问之事的原委、结果，久之会有很大收获<p>\
4. 如果所得到的结果与所问之事明显文不对题，或结果不够明确，则可以另起一卦。如果你觉得抓出来的卦只反映了事情的某一个阶段，则可以再抓一卦或几个卦，直至事情已经比较全面、清楚。<p>\
5. “回放”按钮的功能：如果你记得以前得到的一个卦的序号，可以把该序号填在空格中，然后点“回放”按钮即可看到你当时得到的卦辞。<p>\
6.《焦氏易林》是汉代焦延寿所作四言诗集。它的功能也象《易经》一样，有四端：以言者尚其辞，以动者尚其变，以制器者尚其象，以卜筮者尚其占。意思是，看重它的文学价值的，推崇它的文辞、诗学之美；看重辩证法的，推崇它的变化运动规律；看重发明的，推崇它的意象提示；看重卜筮的，推崇它占卜的功能。<p>\
7. 《金亮易林软件》是刘金亮用自己发明的算法，根据求测人头脑中所想作为“输入”信息，利用《焦氏易林》中的诗给出“输出”结果。<p>\
8. 软件中显示的“尚先生解象”是民国时期国学大师尚秉和先生为《焦氏易林》中的诗所作的注解。他主要是从八卦意象角度来阐释为什么得出此卦就有此诗，对研究象数易学的人有重大启发，而一般没有八卦知识之人可以不必管这一节，不懂这一节也并不影响对卦辞的解读。<p>\
9. 《金亮易林软件》最神奇之处在于，它经常把求测人所问之事的关键词点出来，颇值得玩味。<p>\
"

function show_instructions(){
//alert("/" + document.getElementById("instructions").innerHTML + "/")
	if(document.getElementById("instructions").value == "undefined" || document.getElementById("instructions").innerHTML == ""){
	//if(document.getElementById("instructions").innerHTML == "" || document.getElementById("instructions").innerHTML == "undefined"|| document.getElementById("instructions").innerHTML == "null"){
		document.getElementById("instructions").innerHTML = instr;
		document.getElementById("instructions").style.cssText = "border-style: solid; border-color: red; border-width: 1px;";
		document.getElementById("shuoming").innerHTML = "隐藏说明";
	} else {
		hide_instructions();	
	}
}
function hide_instructions(){
	document.getElementById("instructions").innerHTML = "";
	document.getElementById("shuoming").innerHTML = "显示说明";
	document.getElementById("instructions").style.cssText = "";
}

 var ComposeSMS = function(){
    var contactno = document.yilin.tel.value;
    var messagetext = "序号：" + document.getElementById("a3").innerHTML + " " + document.getElementById("a4").innerHTML + " 卦辞: " + document.getElementById("a5").innerHTML + " 尚秉和先生解象：" + document.getElementById("a6").innerHTML;
	//alert(contactno + ":" + messagetext)
    window.location.href = "sms:" + contactno + "?body=" + messagetext;
 }
 
 var a = new Array(7); //this is to store one line of linci: a[0]序号, a[1]本卦,a[2]之, a[3]之卦,a[4]林辞,[a5]尚注, a[6]备注

var b; // to store label strings
var c; // CCC object
var d; // date object
var r; // to store the time in 年月日时分
var m; // method name
var instruction = 
d = new Date();
c = new CCC(d.getFullYear(),d.getMonth()+1,d.getDate(),d.getHours()+':'+d.getMinutes(),8,1);

b = new Array(5);
//r = d.getFullYear() + "年" + (d.getMonth() + 1) + "月"+ d.getDate() + "日 " + d.getHours() + ":" + d.getMinutes()
function check_vals(){
	var str = new QueryString();
	str = str.value("inf");
	if(str != "undefined"){
		use_rec(str);
	}

}
function use_rec(str){
	var recv_a = str.split("/");
	//recv[0]=时间，1=序号，2=本之，3=林辞，4=尚注
	assign_constants();
	r = recv_a[0];//时间
	a[3] = recv_a[1]; //序号
	a[4] = recv_a[2]; //本之
	a[5] = recv_a[3]; //断语
	a[6] = recv_a[4]; //尚注
	update_content(a,b,r,"大抓机法");	
}
function refresh_values(){
	d = new Date();
	c = new CCC(d.getFullYear(),d.getMonth()+1,d.getDate(),d.getHours()+':'+d.getMinutes(),8,1);
	b = new Array(5);
	var min = d.getMinutes();
	if (min<10){min = "0"+min;}
	r = d.getFullYear() + "年" + (d.getMonth() + 1) + "月"+ d.getDate() + "日 " + d.getHours() + ":" + min;
}

function guaqi_method(){ //占测
	a = generate_linci(c,d);
	refresh_values();
	b[0] = "当前值日之卦气：";
	b[1] = "您抓得之卦：";
	b[2] = "结果：";
	b[3] = "序号：";
	b[4] = "尚先生解象：";
	update_content(a,b,r,"卦气值日法");
	//alert(a + " / " + b " / " + r);
}

function purely_rand(){
	var total = 4096;
	var n = Math.floor(Math.random()*total+1);
	given_xuhao(n);
}
function use_given_num(){
	var n = document.getElementById("xuhao").value;
	//alert(n);
	given_xuhao(n);
}
function given_xuhao(n){
	refresh_values();
	assign_constants();
	a[3] = n;
	a[4] = lines[n][1] + lines[n][2] + lines[n][3]; // this is "某卦之某卦"
	a[5] = lines[n][4]; //断语
	a[6] = lines[n][5]; //尚注
	update_content(a,b,r,"大抓机法");
}

function assign_constants(){
	b[0] = "";
	b[1] = ""
	//b[2] = "结果：";
	b[3] = "序号：";
	b[4] = "尚先生解象：";

	a[0] = "";
	a[1] = "";
	a[2] = "";
}
function update_content(a,b,r,m){

	document.getElementById("r0").innerHTML = "占测时间：";
	document.getElementById("r1").innerHTML = r; //r is 日期 string in the form of 年月日时

	document.getElementById("m0").innerHTML = "占测方法：";
	document.getElementById("m1").innerHTML = m;

	//document.getElementById("a0").innerHTML = a[0];
	//document.getElementById("b0").innerHTML = b[0];

	//document.getElementById("b1").innerHTML = b[1];
	//document.getElementById("a2").innerHTML = a[2];

	//document.getElementById("b2").innerHTML = b[2];

	//document.getElementById("b3").innerHTML = b[3];
	//document.getElementById("a3").innerHTML = a[3];

	document.getElementById("a4").innerHTML = a[4];//某卦之某卦
	document.getElementById("a5").innerHTML = a[5];//林辞

	document.getElementById("b4").innerHTML = b[4];//“尚先生解象”
	document.getElementById("a6").innerHTML = a[6];//尚解内容
}

// Query String Parser
//
//    qs= new QueryString()
//    qs= new QueryString(string)
//
//        Create a query string object based on the given query string. If
//        no string is given, we use the one from the current page by default.
//
//    qs.value(key)
//
//        Return a value for the named key.  If the key was not defined,
//        it will return undefined. If the key was multiply defined it will
//        return the last value set. If it was defined without a value, it
//        will return an empty string.
//
//   qs.values(key)
//
//        Return an array of values for the named key. If the key was not
//        defined, an empty array will be returned. If the key was multiply
//        defined, the values will be given in the order they appeared on
//        in the query string.
//
//   qs.keys()
//
//        Return an array of unique keys in the query string.  The order will
//        not necessarily be the same as in the original query, and repeated
//        keys will only be listed once.
//
//    QueryString.decode(string)
//
//        This static method is an error tolerant version of the builtin
//        function decodeURIComponent(), modified to also change pluses into
//        spaces, so that it is suitable for query string decoding. You
//        shouldn't usually need to call this yourself as the value(),
//        values(), and keys() methods already decode everything they return.
//
// Note: W3C recommends that ; be accepted as an alternative to & for
// separating query string fields. To support that, simply insert a semicolon
// immediately after each ampersand in the regular expression in the first
// function below.

function QueryString(qs)
{
    this.dict= {};

    // If no query string  was passed in use the one from the current page
    if (!qs) qs= location.search;

    // Delete leading question mark, if there is one
    if (qs.charAt(0) == '?') qs= qs.substring(1);

    // Parse it
    var re= /([^=&]+)(=([^&]*))?/g;
    while (match= re.exec(qs))
    {
        var key= decodeURIComponent(match[1].replace(/\+/g,' '));
        var value= match[3] ? QueryString.decode(match[3]) : '';
        if (this.dict[key])
            this.dict[key].push(value);
        else
            this.dict[key]= [value];
    }
}

QueryString.decode= function(s)
{
    s= s.replace(/\+/g,' ');
    s= s.replace(/%([EF][0-9A-F])%([89AB][0-9A-F])%([89AB][0-9A-F])/gi,
        function(code,hex1,hex2,hex3)
        {
            var n1= parseInt(hex1,16)-0xE0;
            var n2= parseInt(hex2,16)-0x80;
            if (n1 == 0 && n2 < 32) return code;
            var n3= parseInt(hex3,16)-0x80;
            var n= (n1<<12) + (n2<<6) + n3;
            if (n > 0xFFFF) return code;
            return String.fromCharCode(n);
        });
    s= s.replace(/%([CD][0-9A-F])%([89AB][0-9A-F])/gi,
        function(code,hex1,hex2)
        {
            var n1= parseInt(hex1,16)-0xC0;
            if (n1 < 2) return code;
            var n2= parseInt(hex2,16)-0x80;
            return String.fromCharCode((n1<<6)+n2);
        });
    s= s.replace(/%([0-7][0-9A-F])/gi,
        function(code,hex)
        {
            return String.fromCharCode(parseInt(hex,16));
        });
    return s;
};

QueryString.prototype.value= function (key)
{
    var a= this.dict[key];
    return a ? a[a.length-1] : undefined;
};

QueryString.prototype.values= function (key)
{
    var a= this.dict[key];
    return a ? a : [];
};

QueryString.prototype.keys= function ()
{
    var a= [];
    for (var key in this.dict)
        a.push(key);
    return a;
};