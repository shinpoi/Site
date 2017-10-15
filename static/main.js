var domain_url = "http://aoi-lucario.org";
var api_server = "http://api.aoi-lucario.org"

///////////////////////////////////////////////////////

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
  console.log(r)
	set_text("subtitle", "「 "+subtitle[r]+" 」")
}

window.onload = function () {
	set_head_image();
	set_subtitle();
};

///////////////////////////////////////////////////////

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
