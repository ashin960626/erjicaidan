$(function(){
	$.post("json/data.json",function(data){
		var _html="";
		for(var i=0;i<data.length;i++){
			_html+="<li><div class=\"item\">";
			for(var j=0;j<data[i]["name"].length;j++){
				if(j==data[i]["name"].length-1){
					_html+="<a href=\"#\">"+data[i]["name"][j]+"</a>";
				}else{
					_html+="<a href=\"#\">"+data[i]["name"][j]+"</a>/";
				}
			}
			_html+="</div><div class=\"content1\" style=\"display:none\">";
			for(var j=0;j<data[i]["category"].length;j++){
				_html+="<dl class=\"content11\"><dt><a href=\"#\">"+data[i]["category"][j]["name"]+"</a></dt><dd>";
				for(var m=0;m<data[i]["category"][j]["nameCon"].length;m++){
					if(m==data[i]["category"][j]["nameCon"].length-1){
						_html+="<a href=\"#\">"+data[i]["category"][j]["nameCon"][m]+"</a>";
					}else{
						_html+="<a href=\"#\">"+data[i]["category"][j]["nameCon"][m]+"</a>|";
					}
				}
				_html+="</dd></dl>";
			}
			_html+="</div></li>";
		}
		$(".nav_Menu").html(_html);

		for(var i=0;i<$(".nav_Menu").children().length;i++){
			$(".nav_Menu").children().eq(i)[0].id="navmenuli"+parseInt(i+1);
		}

		function navclassific(){
			$(".classification").mouseover(function(){
				$(".classification .navMenu").show();
				$(".classification .navMenu .nav_Menu li").mouseover(function(){
					$(this).children().show();
					$(this).mouseout(function(){
						$(this).children(".content1").hide();
					});
				});

				$(".classification .navMenu .adBox").mouseover(function(){
					$(".classification .navMenu .nav_Menu li .content1").hide();
				});
			});

			$(".classification").mouseout(function(){
				$(".classification .navMenu").hide();
			});
		}
		navclassific();
	},"json");
})