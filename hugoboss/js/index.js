$(function(){
		
		var useragent = navigator.userAgent;
		if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
			window.location.href = "wxError.html";//若不是微信浏览器，跳转到温馨error页面
		}
		var rNumber = 1;
		var step1Sex = 0;
		var ismake = 'false';
		step1anima();
		setInterval('step1anima()',2000);
    
    function drawCanvas() {	
		var shareContent = document.getElementById('p9');//需要截图的包裹的（原生的）DOM 对象
		var width = shareContent.offsetWidth; //获取dom 宽度
		var height = shareContent.offsetHeight; //获取dom 高度
		var canvas = document.createElement("canvas"); //创建一个canvas节点
		document.getElementById('drawCanvas').appendChild(canvas);
		var scale = 4; //定义任意放大倍数 支持小数
		canvas.width = width * scale; //定义canvas 宽度 * 缩放
		canvas.height = height * scale; //定义canvas高度 *缩放
		canvas.getContext("2d").scale(scale, scale); //获取context,设置scale
		var opts = {
			scale: scale, // 添加的scale 参数
			canvas: canvas, //自定义 canvas
			logging: false, //日志开关，便于查看html2canvas的内部执行流程
			width: width, //dom 原始宽度
			height: height,
			useCORS: true // 【重要】开启跨域配置
		};
		html2canvas(shareContent,opts).then(function (canvas) {
			var context = canvas.getContext('2d');
			// 【重要】关闭抗锯齿
			context.mozImageSmoothingEnabled = false;
			context.webkitImageSmoothingEnabled = false;
			context.msImageSmoothingEnabled = false;
			context.imageSmoothingEnabled = false;
			// 【重要】默认转化的格式为png,也可设置为其他格式
			var img = Canvas2Image.convertToPNG(canvas, canvas.width, canvas.height);
			$("#picImg").append(img);
			var imgTimer = setInterval(function () {
				var answerBg = $("#picImg>img")[0];
				if(answerBg.complete){
						ismake = "true";
					setTimeout(function(){
						setTimeout(function () {
//							$('#drawCanvas').css('display','block')
							$("#loading").addClass("hide");
//							$('#makeImage').css("opacity","1");
//							$("#showBox").removeClass("hide");
//							$("#showBox").css("opacity","1");
							$("#showBox").removeClass("hide");
             					$("#showBox").css("opacity","1");
							
						},1500);
						$("#loading").css("opacity","0");
					},1500);
					clearInterval(imgTimer);
				}
			},50);
		});
	};
    
	$("#makeImage").click(function() {
				loading();
				$(this).hide();
				$('#clicksigle').hide();
				if(ismake === "true") {
					$("#showBox").removeClass("hide");
					setTimeout(function() {
						$("#showBox").css("opacity", "1");
					}, 50);
				} else {
					$("#loading").removeClass("hide");
					setTimeout(function() {
						$("#loading").css("opacity", "1");
					}, 100);
					drawCanvas();
				}
			});
    
    
})
function goStep4(){
	var manShopG = ['刺绣大衣','刺绣羊毛西装','动物刺绣卫衣','动物刺绣卫衣','动物印花衬衫','动物印花旅行包','动物印花皮革双肩包','动物印花皮革腰包','印花T恤','印花衬衫','印花卡包','印花皮革手包','印花手袋','印花运动鞋'];
    var womenShopG = ['动物图案T恤','动物图案羊绒针织衫','印花百褶裙','印花卡包','印花皮革手包','印花丝巾','真丝印花衬衣'];
    $('#step4Poker').attr('src',rNumber)
    if(step1Sex == 'man'){
        var womenShop = Math.round(Math.random()*6 + 1);
        var womenShopIndex = womenShop-1;
        womenShop = 'img/women/womenimg'+womenShop+'.jpg';
        $('#step4Shop').attr('src',womenShop)
        $('#shopTitle').text(womenShopG[womenShopIndex])
    }else{
		var manShop = Math.round(Math.random()*13 + 1);
        manShopIndex= manShop-1;
        manShop = 'img/man/manimg'+manShop+'.jpg';
        $('#step4Shop').attr('src',manShop);
        $('#shopTitle').text(manShopG[manShopIndex])
	}
	$('.step3').hide()
    $('.step4').show()
    // $('#loading').removeClass('hide')
    //  $('#loading').css('opacity','1')
    // setTimeout(function(){
	// 	$('#loading').addClass('hide')
	// 	$('.step3').hide()
    // 		$('.step4').show()
	// },2000)
    
}
function pickPoker(){
	rNumber = Math.round(Math.random()*53 + 1); 
    rNumber = 'img/poker/poker'+rNumber+'.png';
	$('#chosedPoker').attr('src',rNumber);
	$('.step2').hide()
	$('.step3').show()
    //  $('#loading').removeClass('hide')
    //  $('#loading').css('opacity','1')
	// setTimeout(function(){
	// 	$('#loading').addClass('hide')
	// 	$('.step2').hide()
	//      $('.step3').show()
	// },2000)
    
}
// 选择性别
function choseSex(index){
    step1Sex = index
    $('.step1').hide()
    $('.step2').show()
    pokerone()
    setInterval('pokerone()',5000)
}
// 性别animation
function step1anima(){
    onemin('.step1_man')
    setTimeout("onemin('.step1_women')",1000)
}
// poker animation
function pokerone(){
    onemin('.step2_poker1')
    setTimeout("onemin('.step2_poker2')",1000)
    setTimeout("onemin('.step2_poker3')",2000)
    setTimeout("onemin('.step2_poker4')",3000)
    setTimeout("onemin('.step2_poker5')",4000)
}
// pubulic animation
function onemin(that) {
    $(that).animate(
        {opacity:0},
    ); 
    $(that).animate(
        {opacity:1},
    )              
}
function loading(){
    setTimeout("onemin('.pulse-bubble-1')",500)
	setTimeout("onemin('.pulse-bubble-2')",1000)
	setTimeout("onemin('.pulse-bubble-3')",1500)
}



    
