// JavaScript Document

$(document).ready(function(e) {
	$(window).load(function(e){
		$(".col_right").height($(".col_mid").height());
		//$(".col_left").height($(".col_mid").height());
		$(".bannerls").height($(".ban_r").height())
		$(".swiper-container").height($(".col_one img").height())
		$(".sec3-col .col-lg-8").height($(".sec3-col .col-lg-4").height());
		$(".swiper-slide .col-lg-4 .col-lg-12").height(($(".col_one img").height())*0.5);
		
		
		var margin=$(".section1 .col_mid img").height()-($(".section1 .col_left .ban_r_1 img").height()*2);
		$(".section1 .col-lg-4 .ban_r_2").css({"margin-top":margin});
		$(".section2 .col-lg-8").height($(".section2 .col-lg-4 img").height());
		var height=$(".section2 .col-lg-4 img").height()-20;
		$(".section2 .col-lg-12").height(height*0.5);


		
	})
	$(window).resize(function(e) {
        $(".col_right").height($(".col_mid").height());
		//$(".col_left").height($(".col_mid").height());
		$(".swiper-wrapper").height($(".col_one img").height())
		$(".swiper-container").height($(".col_one img").height())
		$(".sec3-col .col-lg-8").height($(".sec3-col .col-lg-4").height());
		$(".swiper-slide .col-lg-4 .col-lg-12").height(($(".col_one img").height()-4)*0.5);
		
		
		var margin=$(".section1 .col_mid img").height()-($(".section1 .col_left .ban_r_1 img").height()*2);
		$(".section1 .col-lg-4 .ban_r_2").css({"margin-top":margin});
		$(".section2 .col-lg-8").height($(".section2 .col-lg-4 img").height());
		var height=$(".section2 .col-lg-4 img").height()-20;
		$(".section2 .col-lg-12").height(height*0.5);
    });
	
	
	//G menu
	$(".header .top_nav>li").on({
		"mouseenter":function(){
			$(this).find(".submenu").addClass("on");
		},
		"mouseleave":function(){
			$(this).find(".submenu").removeClass("on");
		}
	})
	
});

