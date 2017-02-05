// JavaScript Document
$(document).ready(function() {
	$('#fullpage').fullpage({
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', 'lastPage'],//定义各个FullPage
				menu: '#menu',//定义菜单
				loopTop: true,
				loopBottom: true,//到底后返回首页
				easingcss3: 'cubic-bezier(0.25, 0.1, 0.25, 1.1)',//回弹效果
				scrollOverflow: true, //页面变长时可下拉
				// sectionsColor: ['#F0F8FF', '#F0F8FF', '#F0F8FF', '#F0F8FF', '#F0F8FF', '#F0F8FF'], 
				'slidesNavigation': true,//定义Slide的导航小点点
				'onLeave': function(index, nextIndex){ //Callback，到达第一页时使返回首页的按钮消失，非第一页则显示按钮
					if(nextIndex == 1){
						$('div.returntop').hide();
					}else{
						$('div.returntop').show();
						$('div.slideDown').css('height','300px');
					}
				},
				'afterLoad': function(anchorLink, index){ //Callback，到达某页时执行某页的动画
						$('div.slideDown').css('height','300px');//再设置一次，以防快速换页时出bug
						$('div.slideDown').animate({
							height:'-=150px',
						});
					},
				});
	//首页第一次载入的动画
	$('#proverb').animate({
		width:'400px',
	});
});