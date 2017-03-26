// JavaScript Document



$(document).ready(function(){
	
  	$(".brand_con1_3").height($(".brand_con1_4").height());
	$(window).resize(function() {
		$(".brand_con1_3").height($(".brand_con1_4").height());
	});
	$(window).load(function() {
		$(".brand_con1_3").height($(".brand_con1_4").height());
	});
	
/*	
	var length=$(".brand_con2_con").length;
	for(i=0;i<length;i++){
		(function(){
			$(".brand_con2_con").eq(i).hover(function(){
				$(this).find("div").css({"display":"block","opacity":"0"}).animate({"opacity":"1"});
			},function(){
				$(this).find("div").animate({"opacity":"0"},function(){
					$(this).css({"display":"none"});
				});
			})
		})()
	}
	*/

});




