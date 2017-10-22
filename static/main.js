var domain_url = "http://aoi-lucario.org/";
var api_server = "http://test.aoi-lucario.org/";
// var api_server = "http://127.0.0.1:5000/";
var key = 0;
var lv = 0;
var bid = null;

var subtitle = ["私の楽土は鉄風雷火の三千世界だ。ここにまみえた友らを抱こう、砕け散るほどに愛させてくれ！",
"共にこの宇宙で謳いあげよう、大いなる祝福を",
"すべての想いに　巡り来る祝福を——",
"光源が遥か上、見上げる、挑む……皆初めてのことだ。感謝しよう、我が友よ",
"0 1 0 0 0 1 0 0 1 0 0 1 0 1 1 1 0 0 1 1 0 1 1 0 0 1 0 1 0 0 1 0 0 0 0 1",
"聞こえていますか僕らの声が",
"今日のあなたはパカパカね",
"月を抱いた十字の焔　茨を巻きつけて",
"ロードローラーだッ!",
"逝けよ兄弟、おまえが望んでいた場所に―― そこの寂しさに気付けたなら、また会おうや",
"物思へば 沢の蛍も 我が身より あくがれいづる 魂かとぞ見る",
"旋律によって、詩（し）は詩（うた）に変わる",
"人よ、幸福に生きろ！",
"髪って漢字だと長い友達って書くんだっけ？いつまでもお友だちでいられるといいね",
"月がきれいですね",
"あ……ロリコンという崇高なご趣味をお持ちでいらっしゃいますか？",
"My name is Legion, for we are many.",
"what is life's greatest illusion?　Innocence, my brother.",
"Under palest watch, you taught, we changed, base instincts were redeemed.",
"No cost too great. No mind to think. No will to break. No voice to cry suffering. Born of God and Void.",
];

var head_img_num = 19 + 1
var subtitle_num = subtitle.length

///////////////////////////////////////////////////////
// Common
function set_text(tid, text){
  document.getElementById(tid).textContent = text;
}

function set_head_image() {
	var a = parseInt(Math.random()*head_img_num);
	var img = document.getElementById("head_img");
	img.src = "/common/" + String(a) + ".jpg";
}

function set_subtitle(){
	var r = parseInt(Math.random()*subtitle_num);
	set_text("subtitle", "「 "+subtitle[r]+" 」")
}

//////////////////////////////////////////
// message board
// {i:id, n:username, u:url, t:text, f:follow, d:date}
// appendMSG(user, text, date, id)
function post_ajax(url, data, callback){
  var ajax_msg = new XMLHttpRequest();
  ajax_msg.onreadystatechange=function(){
    if (ajax_msg.readyState==4 && ajax_msg.status==200){
      callback(ajax_msg.responseText);
    }
  }
  ajax_msg.open("post", url, true);
  ajax_msg.timeout = 20000;
  ajax_msg.send(data);
}

function get_msgb(){
  post_ajax(api_server+"msg", JSON.stringify({"b":bid, "a":0}), parse_msgb);
}

function parse_msgb(arr){
  var obj = JSON.parse(arr);
  var len = obj.length
  for (var i=0; i<len; i++){
    appendMSG(obj[i]['n'], obj[i]['t'], obj[i]['d'], obj[i]['i'], obj[i]['u']);
  }
}

function check_input(name, url, text){
  if (!name || !text) {document.getElementById("msg_warn").textContent = "请输入姓名和留言"; return false;}
  if (url) {
    var url_p = /(http:\/\/|https:\/\/)[0-9a-z|-]+?\.[0-9a-z|-]+?/i;
    var is_url = url.match(url_p);
    if (!is_url) {document.getElementById("msg_warn").textContent = "请输入正确的链接格式"; return false;}
  }
  else if (name.length > 20) {document.getElementById("msg_warn").textContent = ("姓名长度（" + name.length + "）超过限制！"); return false;}
  else if (url.length > 50) {document.getElementById("msg_warn").textContent = ("链接长度（"+ url.length +"）超过限制！"); return false;}
  else if (text.length > 500) {document.getElementById("msg_warn").textContent = ("留言长度（"+ text.length +"）超过限制！"); return false;}
  return true;
}

function get_input(){
  var name = document.getElementById("msg_name_box").value;
  var url = document.getElementById("msg_url_box").value;
  var text = document.getElementById("msg_msg_box").value;
  is_valid = check_input(name, url, text);
  if (is_valid && bid!=null) {return {"b":bid, "n":name, "u":url, "t":text, "f":0, "a":1};}
  else {return false;}
}
// {n:username, u:url, t:text, f:follow}

function send_msgb(){
  var input_dict = get_input();
  if (input_dict) {
    console.log("send message!");
  	var ajax_msg = new XMLHttpRequest();
  	ajax_msg.onreadystatechange=function(){
  		if (ajax_msg.readyState==4 && ajax_msg.status==200){
  			if (ajax_msg.responseText=='ok'){
          appendMSG(input_dict["n"], input_dict["t"], '刚刚', 'temp', input_dict["u"]);
        }
        else{
          document.getElementById("msg_warn").textContent = '发送失败';
        }
  		}
  	}
  	ajax_msg.open("post", api_server+"msg", true);
    ajax_msg.timeout = 20000;
  	ajax_msg.send(JSON.stringify(input_dict));
  }
}

function createMSGCell(){
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.className = "msg_cell";
  var a_mu = document.createElement("a");
  a_mu.className = "msg_username";
  a_mu.setAttribute("target", "_blank");
  var hr = document.createElement("hr");
  var p_mt = document.createElement("p");
  p_mt.className = "msg_text";
  var p_mf = document.createElement("p");
  p_mf.className = "msg_footer";
  td.appendChild(a_mu);
  td.appendChild(hr);
  td.appendChild(p_mt);
  td.appendChild(p_mf);
  tr.appendChild(td);
  return tr;
}

function setMSGCell(mu, mt, mf, id, url){
  var cell = createMSGCell();
  id = id || "none"
  var a_mu = cell.children[0].children[0];
  var p_mt = cell.children[0].children[2];
  var p_mf = cell.children[0].children[3];
  a_mu.textContent = get_lv() + ". " + mu;
  p_mt.textContent = mt;
  p_mf.textContent = mf;
  cell.children[0].setAttribute("id", id)
  cell.children[0].setAttribute("lv", lv)
  if (url) {a_mu.setAttribute("href", url)}
  return cell;
}

function appendMSG(user, text, date, id, url){
  var cell = setMSGCell(user, text, date, id, url);
  var table = document.getElementById("msg_table");
  table.appendChild(cell);
}

function get_lv(add){
  lv += 1;
  return lv;
}

function DisplayBlock(id_){
  document.getElementById(id_).style.display = 'inline';
}

function HideBlock(id_){
  document.getElementById(id_).style.display = 'none';
}

///////////////////////////////////////////////////////

window.onload = function () {
  set_subtitle();
	set_head_image();
  bid = parseInt(document.getElementById("bid").textContent);
  get_msgb();
};
