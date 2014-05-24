　//iframe高度自适应

　　function IFrameReSize(iframename) {

　　var pTar = document.getElementById(iframename);

　　if (pTar) {  //ff

　　if (pTar.contentDocument && pTar.contentDocument.body.offsetHeight) {

　　pTar.height = pTar.contentDocument.body.offsetHeight;

　　} //ie

　　else if (pTar.Document && pTar.Document.body.scrollHeight) {

　　pTar.height = pTar.Document.body.scrollHeight;

　　}

　　}

　　}

　　//iframe宽度自适应

　　function IFrameReSizeWidth(iframename) {

　　var pTar = document.getElementById(iframename);

　　if (pTar) {  //ff

　　if (pTar.contentDocument && pTar.contentDocument.body.offsetWidth) {

　　pTar.width = pTar.contentDocument.body.offsetWidth;

　　}  //ie

　　else if (pTar.Document && pTar.Document.body.scrollWidth) {

　　pTar.width = pTar.Document.body.scrollWidth;

　　}

　　}

　　}

/* template模板工具方法 */

function nano(template, data) {
  return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
    var keys = key.split("."), v = data[keys.shift()];
    for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
    return (typeof v !== "undefined" && v !== null) ? v : "";
  });
}

/*
	顶级菜单点击事件
*/
function goTemplateP(name){
	var data=daohang_data;
	var html='error.html';
	for(var i=0;i<data.length;i++){
		var d=data[i];
		if(d.name==name){
			html=d.html;
		}
	}
	if(html=='' || html=='#'){
		return;
	}else{
		$("#mainDiv").load(html);
	}
}

/* 子菜单的点击事件：生成html根据模板 */
function goTemplate(name){
	var html='#';
	var img={};
	var shuju={dh:[]};
	//解析settings json配置对象
	var data=daohang_data;
	for(var i=0;i<data.length;i++){
		var d=data[i];
		var items=d.items;
		var dh=[]
		dh.push({name:d.name,html:d.html});
		for(var k=0;k<items.length;k++){
			var item=items[k];
			if(item.name==name){
				dh.push({name:item.name,html:item.html});
				shuju.dh=dh;
				shuju.leftMenu=items;
				img=item.img;
				html=item.html;
			}
		}
	}
	//根据模板，生成html
	var mainHtml='<div id="mainDiv"><div class="Topimg"> <img src="{topimg}"> </div>';
	mainHtml+='<div class="mainbj">';
	mainHtml+='  <div class="mian round1">';
	mainHtml+='    <div class="mian2">';
	mainHtml+='      <!--导航-->';
	mainHtml+='      <div class="Topurl">';
	mainHtml+='        <h3> <img src="{titleimg}"></h3>';
	mainHtml+='        <ul>';
	mainHtml+='          <span> ';
	for(var i=0;i<shuju.dh.length;i++){
		var item=shuju.dh[i];
		mainHtml+='<span onclick="goTemplate(\''+item.name+'\');">'+item.name+'</span>';
		if(i<(shuju.dh.length)){mainHtml+='&gt'}
	}
	mainHtml+='</span>';
	mainHtml+='        </ul>';
	mainHtml+='      </div>';
	mainHtml+='      <div class="C_min" id="C_min">';
	mainHtml+='        <div class="CM_left" id="CM_left">';
	mainHtml+='          <div class="CM_Topimg"> <img src="{leftimg}"></div>';
	mainHtml+='          <div class="CM_meun">';
	mainHtml+='            <ul>';
	if(shuju.leftMenu){
		for(var i=0;i<shuju.leftMenu.length;i++){
			var item=shuju.leftMenu[i];
			mainHtml+='              <li style="cursor: pointer;text-align: center;" class="';
			if(item.name==name){mainHtml+='hover';}
			mainHtml+='"><span onclick="goTemplate(\''+item.name+'\');">'+item.name+'</a></span>';
		}
	}
	mainHtml+='            </ul>';
	mainHtml+='          </div>';
	mainHtml+='        </div>';
	mainHtml+='       ';
	mainHtml+='        <div class="CM_right" id="CM_right">';
	mainHtml+='          <div class="CMr_topimg"> <img src="{rightimg}"></div>';
	mainHtml+='          <div class="CMmain">';
	mainHtml+='            　<iframe src="" scrolling="no" frameborder="0" height="100%" id="contentDiv" width="100%" onload=\'IFrameReSize("contentDiv");IFrameReSizeWidth("contentDiv");\'></iframe>';
	mainHtml+='            <div class="CM_Cont" id="contentDiv2">';
	mainHtml+='					<!-- ';
	mainHtml+='					content：jquery  加载html后，直接append到这里。。。';
	mainHtml+='					-->';
	mainHtml+='            </div>';
	mainHtml+='          </div>';
	mainHtml+='        </div>';
	mainHtml+='        <div class="clear1"></div>';
	mainHtml+='      </div>';
	mainHtml+='    </div></div>';
	//根据模板生成页面
	var tempHtml=nano(mainHtml,img);
	//替换掉页面内容，ok
	$("#mainDiv").replaceWith(tempHtml);
	if(html=='' || html=='#'){
		$("#contentDiv").attr('src','error.html');
	}else{
		$("#contentDiv").attr('src',html);
	}
}
/*
下面是:页面导航事件
*/
var nowMenu;
function showChild(n){
	nowMenu=$(n).parent().addClass("hover");	
	$("#childMenu").hide();
	var child=$("#"+$(n).parent().attr("id")+"_1");
	if(child.get(0)){
		$("#childMenu").slideDown(50).find("ul").hide();
		child.show();
	}
}
function hideChild(n){
	$(n).parent().removeClass("hover");
}
function showChildDiv(n){
	nowMenu.addClass("hover");
}
function hideChildDiv(n){
	$(n).slideUp(100);
	nowMenu.removeClass("hover");
}
function overThis(n){
	$(n).find("span").css("color","red");
}
function outThis(n){
	$(n).find("span").css("color","");
}
/*页面导航模板生成*/
$(function(){
		if(daohang_data){
		var menu_parent ='',item_parent='';		
		var menu_parent_template='<li id="{id}"><span style="display: block;height: 47px;line-height: 47px;" ';
		menu_parent_template+='onmouseover="showChild(this);" onmouseleave="hideChild(this);" onclick="goTemplateP(\'{name}\');">{name}</span></li>';
		var item_parent_template='<li style="display: block;"><span style="display: block;height: 47px;line-height: 47px;" ';
		item_parent_template+='onmouseover="overThis(this);" onmouseleave="outThis(this);" onclick="goTemplate(\'{name}\');"><span style="height:45px;line-height:45px;overflow:hidden;font-size:12px; font-weight:bold;">{name}</span></span></li>';
		for(var i=0;i<daohang_data.length;i++){
			var dd=daohang_data[i];
			if(dd.name=='首页'){
				menu_parent+='<li id="{id}"><a style="color:#947458" href="'+dd.html+'">'+dd.name+'</a></li>';
			}else{
				menu_parent+=nano(menu_parent_template,dd);
			}
			var len=dd.items.length;
			for(var k=0;k<len;k++){
				if(k==0){
					item_parent+='<ul id="'+dd.id+'_1">';
				}
				var d=dd.items[k];	
				item_parent+=nano(item_parent_template,d);
				if(k==len-1){
					item_parent+='</ul>';
				}
			}
		}
		var html= '<div class="top mian"><div class="t_left"><a href="index.html"><img id="logoImg" src="assets/logo.png"></a></div><div class="t_right"><div class="tr_top"></div><div class="tr_bottom"></div></div></div><div class="menubj"><div class="menu mian"  style="font-size:18px; font-style:normal; font-weight:bold; " ><ul>';
		html+=menu_parent;					
		html+='</ul></div><div  id="childMenu" onmouseover="showChildDiv(this);" onmouseleave="hideChildDiv(this);"  style="display: none;" class="menubj2"><div class="menub2 mian">';
		html+=item_parent; 
		html+='</div></div>';
		$('#div_top').html(html);
	 }
});	
 
/*
	首页图片轮播效果
*/
$(function(){
	var firstIndex=0;
	var data=shouye_data.flash;
	var imgDiv=$("#flashImg");
	var imgDD=$("#flashDD");
	imgDiv.attr({"src":data[firstIndex].img,"title":data[firstIndex].name});
	var html='';
	ddLen=data.length;
	for(var i=0;i<ddLen;i++){
		var d=data[i];
		var name=d.name;
		var img=d.img;
		html+='<dd  style="background:';
		if(firstIndex==i){
			html+='red';
		}else{
			html+='grey';
		}
		html+='" onclick="showFlashImg(this,\''+name+'\',\''+img+'\',\''+i+'\');"></dd>';
	}
	imgDD.append(html);
	ddSeti=setInterval( function(){
		ddJishu++;
		$("#flashDD").find("dd").get(ddJishu).click();
		if(ddJishu==(ddLen-1)){
			ddJishu=-1;
		};
	},ddTime);
});


var ddJishu=0;
var ddLen;
var ddTime=6000;
var ddSeti;
	
function showFlashImg(n,name,img,i){
	var imgDiv=$("#flashImg").fadeOut(888);
	imgDiv.attr({"src":img,"title":name});
	imgDiv.fadeIn(1888);
	$(n).siblings().css("background","grey").end().css("background","red");
	clearInterval(ddSeti);
	ddJishu=i;
	
		ddSeti=setInterval( function(){
			ddJishu++;
			$("#flashDD").find("dd").get(ddJishu).click();
			if(ddJishu==(ddLen-1)){
				ddJishu=-1;
			};
		},ddTime);
}

/*
	其他模板生成
*/
$(function(){
	//倒数第二行
	var html='';
	html+='<div class="imt_left">';
	html+='<div class="title">';
	html+='<h3 class="no"> <a href="javascript:goTemplate(\'{imTop.left.name}\');"> <img src="assets/images/im.png"/> {imTop.left.name}</a></h3>';
	html+='</div>';
	html+='<ul>';
	html+='<li class="img"><a href="javascript:goTemplate(\'{imTop.left.name}\');"><img src="{imTop.left.img}"></a></li>';
	html+='</ul>';
	html+='</div>';
	html+='<div class="imt_in">';
	html+='<div class="title">';
	html+='<h3 class="no"> <a href="javascript:goTemplate(\'{imTop.center.name}\');"> <img src="assets/images/im.png"/> {imTop.center.name}</a></h3>';
	html+='</div>';
	html+='<ul>';
	html+='<li class="img"><a href="javascript:goTemplate(\'{imTop.center.name}\');"><img src="{imTop.center.img}"></a></li>';
	html+='</ul>';
	html+='</div>';
	html+='<div class="imt_right">';
	html+='<div class="title">';
	html+='<h3 class="no"> <a href="javascript:goTemplate(\'{imTop.right.name}\');"> <img src="assets/images/im.png"/> {imTop.right.name}</a></h3>';
	html+='</div>';
	html+='<ul>';
	html+='<li class="img"><a href="javascript:goTemplate(\'{imTop.right.name}\');"><img src="{imTop.right.img}"></a></li>';
	html+='</ul>';
	html+='</div>';
	var h=nano(html,shouye_data);
	$("#imDiv").append(h);
	//最后一行
	var html='';
	html+='<div class="Ii_on"> <a href="{imBottom.one.gotoo}"> <img src="{imBottom.one.img}"></a></div>';
	html+='<div class="Ii_on"> <a href="{imBottom.two.gotoo}"> <img src="{imBottom.two.img}"></a></div>';
	html+='<div class="Ii_on"> <a href="{imBottom.three.gotoo}"> <img src="{imBottom.three.img}"></a></div>';
	html+='<div class="Ii_right"> <a href="{imBottom.four.gotoo}"> <img src="{imBottom.four.img}"></a></div>';
	var h=nano(html,shouye_data);
	$("#imbDiv").append(h);
	//浮动广告
	var html='';
	html+='<!--漂浮广告 strat-->';
	html+='<style type="text/css">';
	html+='.duilian { position: fixed; /*border: 1px solid #336699; background-color: #EEEEE2;*/ z-index: 999999999; width: 163px; height: 192px; top:93px; }';
	html+='#LeftDiv { left: 5px; }';
	html+='#RightDiv { right: 5px; }';
	html+='.duilian_close { margin: 2px; padding: 10px 5px 2px 2px ; position: absolute; top: 0; right: 0; }';
	html+='.duilian_close a { color: #ff0000; text-decoration: none; font-weight:bold; font-size: 12px; }';
	html+='</style>';
	html+='<div id="LeftDiv" class="duilian">';
	html+='<div align="center"> <a href="#" gotoo="{fdgg.gotoo}" download="{fdgg.download}" target="_blank"> <img src="{fdgg.img}" border="0"></a></div>';
	html+='</div>';
	html+='<!--漂浮广告 and-->';
	var h=nano(html,shouye_data);
	$("#mainDiv").append(h);
	//logo
	$("#logoImg").attr("src",shouye_data.logo);
	//footer
	var html='';
	html+='<ul>';
	html+='<li class="foot_left"><a><span style="height:25px;line-height:25px;overflow:hidden;">'+shouye_data.footer.banquan+'</span></a><a>版权所有</a></li>';
	html+='<li class="foot_right">';
	var qita=shouye_data.footer.qita;
	for(var i=0;i<qita.length;i++){
		var q=qita[i];
		html+='<a href="javascript:goTemplate(\''+q.gotoo+'\');">'+q.name+'</a><span>|</span>';
	}
	html+='</li>';
	html+='</ul>';
	$("#footerDiv").append(html);
})