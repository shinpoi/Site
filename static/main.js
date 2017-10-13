var domain_url = "http://aoi-lucario.org";
var head_img_num = 19

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
	var r = parseInt(Math.random()*subtitle.length);
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
					 "我が槍を恐れるならば、この炎を越すこと許さぬ！",
					 "聞こえていますか僕らの声が",
					 "今日のあなたはパカパカね",
					 "月を抱いた十字の焔　茨を巻きつけて",
					 "ロードローラーだッ!",
					 "逝けよ兄弟、おまえが望んでいた場所に―― そこの寂しさに気付けたなら、また会おうや",
					];
