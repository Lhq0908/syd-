$(function(){

	// 新闻动态-二级切换
	$(".new-tab li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(this).index();
		$(".new-list dd").eq(index).addClass("active").show().siblings("dd").removeClass("active").hide();
	}).eq(0).trigger('click');
	// 关于我们-公司简介
	$(".about-tab li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(this).index();
		$(".about-list dd").eq(index).addClass("active").show().siblings("dd").removeClass("active").hide();
	}).eq(0).trigger('click');

	//关于我们-加入我们招聘信息第一条处理
	$(".job").each(function(){
			$(this).find('.jobLi') .eq(0).find('.jobol').addClass('on');
			$(this).find('.jobLi') .eq(0).find(".jobDetail").show();
	});

//关于我们-加入我们信息展开
  $(".jobol").click(function(){
  	if($(this).hasClass("on")){
		$(this).removeClass("on");
		$(this).parents(".jobLi").find(".jobDetail").slideUp();
	}else{
		$(this).addClass("on");
		$(this).parents(".jobLi").find(".jobDetail").slideDown();
	}
});
// 返回顶部
$(window).scroll(function() {
					if ($(window).scrollTop() > 100) {
							$(".nav").addClass("on");
							$(".h90").show();
							$(".c_nav .li1").fadeIn();
					}
					else {
						$(".nav").removeClass("on");
						$(".h90").hide();
						$(".c_nav .li1").fadeOut();
					}
			});
$(".c_nav .li1").click(function() {
		$('body,html').animate({
						scrollTop: 0
				},
				500);
		return false;
});
$(".return").click(function() {
		$('body,html').animate({
						scrollTop: 0
				},
				500);
		return false;
});

//tab切換
$(".slideBar li").click(function(obj){
		//切换title
		document.getElementById('heading-font').innerHTML=obj.currentTarget.innerText;
		// 显示隐藏
		$(".slideBar li").eq($(this).index()).addClass("active").siblings().removeClass("active"),
		$(".container>div").hide().eq($(this).index()).show();
});

// 导航栏点开功能
$(".menu a").click(function(){
	$(".drop-down").show();
});

// 专车
$(".car .know a").click(function(){
	$(".car .know-con").toggle();
	$(".car .fade-modal").toggle();
});
$(".car .various a").click(function(){
	$(".car .various-con").toggle();
	$(".car .fade-modal").toggle();
});
$(".car .bespoke a").click(function(){
	$(".car .bespoke-con").toggle();
	$(".car .fade-modal").toggle();
});

// 特产
$(".specialty .know a").click(function(){
	$(".specialty .know-con").toggle();
	$(".specialty .fade-modal").toggle();
});
$(".specialty .various a").click(function(){
	$(".specialty .various-con").toggle();
	$(".specialty .fade-modal").toggle();
});
$(".specialty .bespoke a").click(function(){
	$(".specialty .bespoke-con").toggle();
	$(".specialty .fade-modal").toggle();
});

// 异业联盟
$(".alliances .know a").click(function(){
	$(".alliances .know-con").toggle();
	$(".alliances .fade-modal").toggle();
});
$(".alliances .various a").click(function(){
	$(".alliances .various-con").toggle();
	$(".alliances .fade-modal").toggle();
});
$(".alliances .bespoke a").click(function(){
	$(".alliances .bespoke-con").toggle();
	$(".alliances .fade-modal").toggle();
});

// 游+
$(".hostel .know a").click(function(){
	$(".hostel .know-con").toggle();
	$(".hostel .fade-modal").toggle();
});
$(".hostel .various a").click(function(){
	$(".hostel .various-con").toggle();
	$(".hostel .fade-modal").toggle();
});
$(".hostel .bespoke a").click(function(){
	$(".hostel .bespoke-con").toggle();
	$(".hostel .fade-modal").toggle();
});

// 赠游币
$(".currency .know a").click(function(){
	$(".currency .know-con").toggle();
	$(".currency .fade-modal").toggle();
});
$(".currency .various a").click(function(){
	$(".currency .various-con").toggle();
	$(".currency .fade-modal").toggle();
});
$(".currency .bespoke a").click(function(){
	$(".currency .bespoke-con").toggle();
	$(".currency .fade-modal").toggle();
});

// 专属导游
$(".guide .know a").click(function(){
	$(".guide .know-con").toggle();
	$(".guide .fade-modal").toggle();
});
$(".guide .various a").click(function(){
	$(".guide .various-con").toggle();
	$(".guide .fade-modal").toggle();
});
$(".guide .bespoke a").click(function(){
	$(".guide .bespoke-con").toggle();
	$(".guide .fade-modal").toggle();
});

//异步加载图片
	var oBtn = document.getElementsByTagName('button')[0];
	var aImages = document.images;
	loadImg(aImages);
	window.onscroll = function(){
	  loadImg(aImages);
	};
	function loadImg(arr){
	  for( var i = 0,len = arr.length; i < len; i++){
	    if(arr[i].getBoundingClientRect().top < document.documentElement.clientHeight && !arr[i].isLoad){
	      arr[i].isLoad = true;
	      arr[i].style.cssText = "transition: ''; opacity: 0;"
	      if(arr[i].dataset){
	        aftLoadImg(arr[i],arr[i].dataset.original);
	      }else{
	        aftLoadImg(arr[i],arr[i].getAttribute("data-original"));
	      }
	      (function(i){
	        setTimeout(function(){
	          arr[i].style.cssText = "transition: 1s; opacity: 1;"
	        },16)
	      })(i);
	    }
	  }
	}
	function aftLoadImg(obj,url){
	  var oImg = new Image();
	  oImg.onload = function(){
	    obj.src = oImg.src;
	  }
	  oImg.src = url;
	}
});
// 合伙人弹窗对应内容替换
function update(key){
	$('#myModal').modal('show');
	if(key==1){
		var carname="提供上万条跨区产品共享全品类产品库，价格及品质满足各类用户需求，支持跨区域全网收客。";
	  document.getElementsByClassName('modal-body')[0].innerHTML=carname;
		document.getElementsByClassName('popup-img')[0].src='img/tp_01.png';
	}else if(key==2){
		var carname="<span class='model-two'>掌握快：</span>无需专业经验，一对一帮扶指导，10分钟玩转合伙人系统；<span class='model-two'>收效快：</span>即刻推广成交即刻有收入；全方位立体培训包含系统培训、产品培训、销售技巧培训、目的地知识培训、微商学院培训等。";
	  document.getElementsByClassName('modal-body')[0].innerHTML=carname;
		document.getElementsByClassName('popup-img')[0].src='img/tp_02.png';
	}else if(key==3){
		var carname="<span class='model-three'>市场前景好</span>旅游无处不在，需求无处不在。";
	  document.getElementsByClassName('modal-body')[0].innerHTML=carname;
		document.getElementsByClassName('popup-img')[0].src='img/tp_03.png';
	}else if(key==4){
		var carname="<span class='model-four'>低门槛零风险</span>与传统直销对比，合伙人实现无风险互联网创业！省游灯合伙人版实时交易；移动化办公提供完善交易系统及配套服务及全面贴心的平台营销模式，省去诸多烦恼。";
	  document.getElementsByClassName('modal-body')[0].innerHTML=carname;
		document.getElementsByClassName('popup-img')[0].src='img/tp_04.png';
	}else if(key==5){
		var carname="<span class='model-five'>强大的线上线下优势</span>特许加盟商、旅游行前体验中心、异业联盟、合伙人会员双轨制，形成完整的旅游产业生态链，省游灯全域旅游联盟，为您创业助力！";
	  document.getElementsByClassName('modal-body')[0].innerHTML=carname;
		document.getElementsByClassName('popup-img')[0].src='img/tp_05.png';
	}else if(key==6){
		var carname="<span class='model-six'>专业联盟网络的形成</span>省游灯环球畅游联盟终端服务商由线下上千个当地优秀旅行社组成，从产品到服务均为直接面向客户销售，专业规范，售后服务体系完备，第一时间解决各类售后、投诉问题。";
	  document.getElementsByClassName('modal-body')[0].innerHTML=carname;
		document.getElementsByClassName('popup-img')[0].src='img/tp_06.png';
	}else if(key==7){
		var carname="<span class='model-seven'>科学合理的盈利模式</span>自主研发的SYD互联网分销系统，可通过大数据分析了解客户消费取向适时推送产品信息；量身定制消费者个性化需求功能板块，为您拓展市场助力。";
	  document.getElementsByClassName('modal-body')[0].innerHTML=carname;
		document.getElementsByClassName('popup-img')[0].src='img/tp_07.png';
	}

}
