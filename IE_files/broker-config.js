var _Freq=false;
var _halt=false; 
var _NavHalt = false;
var MSNavChannel=false;
var _newProjWeight = 100, _oldProjWeight = 0; //Default weights
var _surl = document.location.toString();
var A=document.getElementsByName("MS.Nav.Channel");
if(typeof(A[0])!="undefined"&&A[0]!=null){
 MSNavChannel="MS.Nav.Channel="+A[0].getAttribute("content");
   //var _t =  var _t = COMSCORE.SiteRecruit.Broker.findPageMapping(); 
   //if(typeof(_t)!="undefined" && _t !=null && typeof(_t.prereqs)!="undefined" && _t.prereqs!=null){	
 if(/windows\.microsoft\.com\/en-us/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0288;
		}
	}else if(/windows\.microsoft\.com\/en-ca/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0322; 
		}
	}else if(/windows\.microsoft\.com\/en-gb/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0084;
		}
	}else if(/windows\.microsoft\.com\/en-au/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0466;
		}
	}else if(/windows\.microsoft\.com\/ja-jp/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0588; 
		}
	}else if(/windows\.microsoft\.com\/de-de/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0088; 
		}
	}else if(/windows\.microsoft\.com\/fr-fr/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0067; 
		}
	}else if(/windows\.microsoft\.com\/zh-cn/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0355;  
		}
	}else if(/windows\.microsoft\.com\/ko-kr/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0225; 
		}
	}else if(/windows\.microsoft\.com\/ru-ru/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0068; 
		}
	}else if(/windows\.microsoft\.com\/pt-br/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0460; 
		}
	}else if(/windows\.microsoft\.com\/es-mx/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.4413; 
		}
	}else if(/windows\.microsoft\.com\/it-it/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0166;
		}
	}else if(/windows\.microsoft\.com\/tr-tr/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0409;
		}
	}else if(/windows\.microsoft\.com\/nl-nl/i.test(_surl)){
		if(/(home|Meet|Download-Shop|How-To|Support)/i.test(MSNavChannel)){
			_Freq=0.0263;
		}
	}
 }else{MSNavChannel=false;}
 if(/(zh-cn|pt-br)\/windows\-8\/features/i.test(_surl)){_NavHalt=false;}else if(!_Freq){ _NavHalt=true; }
COMSCORE.SiteRecruit.Broker.config={version:"5.0.3",testMode:false,cookie:{name:"msresearch",path:"/",domain:".microsoft.com",duration:90,rapidDuration:0,expireDate:""},thirdPartyOptOutCookieEnabled:false,prefixUrl:"",Events:{beforeRecruit:function(){}},mapping:[{m:"//[\\w\\.-]+/de-de",c:"inv_c_p176052898-DE-DE.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/en-au",c:"inv_c_p176052898-EN-AU.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/en-ca",c:"inv_c_p176052898-EN-CA.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/en-gb",c:"inv_c_p176052898-EN-GB.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/en-us/",c:"inv_c_p176052898-US.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/en-us/internet-explorer/products/ie-9/welcome$|welcome\\-upgrade|welcome\\-upgrade2",c:"inv_c_blank.js",f:0,p:0,halt:true},{m:"//[\\w\\.-]+/en-US/windows/all-pcs",c:"inv_c_p178132240-all-pcs.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows/desktops",c:"inv_c_p178132240-desktops.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows/download-shop",c:"inv_c_p178132240-dl-shop.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows/laptops",c:"inv_c_p178132240-laptops.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows/laptops-convertibles",c:"inv_c_p178132240-laptops-conv.js",f:0.3494,p:3},{m:"//[\\w\\.-]+/en-US/windows/pc-selector",c:"inv_c_p178132240-pc-selector.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows/tablets-computers",c:"inv_c_p178132240-tab-comp.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows/tablets-convertibles",c:"inv_c_p178132240-tablets-convert.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-us/windows7/(products/anytime-upgrade-(reg|none|change-settings|n)|sync-providers|search)",c:"inv_c_blank.js",f:0,p:0,halt:true},{m:"//[\\w\\.-]+/en-US/windows-8/apps",c:"inv_c_p178132240-apps.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows-8/compare",c:"inv_c_p178132240-compare.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows-8/features",c:"inv_c_p178132240-features.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows-8/meet",c:"inv_c_p178132240-meet.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows-8/new-look",c:"inv_c_p178132240-new-look.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows-8/new-pcs",c:"inv_c_p178132240-new-pcs.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows-8/tablets",c:"inv_c_p178132240-tablets.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/en-US/windows-8/work-play",c:"inv_c_p178132240-work-play.js",f:0.3494,p:2},{m:"//[\\w\\.-]+/es-mx",c:"inv_c_p176052898-ES-MX.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/es-mx/windows/all-pcs",c:"inv_c_p178132240-ES-MX-all-pcs.js",f:0.5,p:2},{m:"//[\\w\\.-]+/es-mx/windows/desktops",c:"inv_c_p178132240-ES-MX-desktops.js",f:0.5,p:2},{m:"//[\\w\\.-]+/es-mx/windows/download-shop",c:"inv_c_p178132240-ES-MX-dl-shop.js",f:0.5,p:2},{m:"//[\\w\\.-]+/es-mx/windows/laptops",c:"inv_c_p178132240-ES-MX-laptops.js",f:0.5,p:2},{m:"//[\\w\\.-]+/es-mx/windows/laptops-convertibles",c:"inv_c_p178132240-ES-MX-laptops-conv.js",f:0.5,p:3},{m:"//[\\w\\.-]+/es-mx/windows/tablets-computers",c:"inv_c_p178132240-ES-MX-tablets-comp.js",f:0.5,p:2},{m:"//[\\w\\.-]+/es-mx/windows/tablets-convertibles",c:"inv_c_p178132240-ES-MX-tablets-convert.js",f:0.5,p:2},{m:"//[\\w\\.-]+/es-mx/windows-8/apps",c:"inv_c_p178132240-ES-MX-apps.js",f:0.5,p:2},{m:"//[\\w\\.-]+/es-mx/windows-8/compare",c:"inv_c_p178132240-ES-MX-compare.js",f:0.5,p:2},{m:"//[\\w\\.-]+/es-mx/windows-8/features",c:"inv_c_p178132240-ES-MX-feature.js",f:0.5,p:2},{m:"//[\\w\\.-]+/es-mx/windows-8/meet",c:"inv_c_p178132240-ES-MX-meet.js",f:0.5,p:2},{m:"//[\\w\\.-]+/es-mx/windows-8/tablets",c:"inv_c_p178132240-ES-MX-tablets.js",f:0.5,p:2},{m:"//[\\w\\.-]+/fr-fr",c:"inv_c_p176052898-FR-FR.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/it-it",c:"inv_c_p176052898-IT-IT.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/ja-jp",c:"inv_c_p176052898-JA-JP.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/ja-jp/windows/all-pcs",c:"inv_c_p178132240-JA-JP-all-pcs.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ja-jp/windows/desktops",c:"inv_c_p178132240-JA-JP-desktops.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ja-jp/windows/download-shop",c:"inv_c_p178132240-JA-JP-download-shop.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ja-jp/windows/laptops",c:"inv_c_p178132240-JA-JP-laptops.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ja-jp/windows/laptops-convertibles",c:"inv_c_p178132240-JA-JP-laptops-conv.js",f:0.5,p:3},{m:"//[\\w\\.-]+/ja-jp/windows/pc-selector",c:"inv_c_p178132240-JA-JP-pc-selector.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ja-jp/windows/tablets-computers",c:"inv_c_p178132240-JA-JP-tables-computers.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ja-jp/windows/tablets-convertibles",c:"inv_c_p178132240-JA-JP-tables-conv.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ja-jp/windows-8/apps",c:"inv_c_p178132240-JA-JP-apps.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ja-jp/windows-8/compare",c:"inv_c_p178132240-JA-JP-compare.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ja-jp/windows-8/features",c:"inv_c_p178132240-JA-JP-features.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ja-jp/windows-8/meet",c:"inv_c_p178132240-JA-JP-meet.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ja-jp/windows-8/tablets",c:"inv_c_p178132240-JA-JP-tablets.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ko-kr",c:"inv_c_p176052898-KO-KR.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/nl-nl",c:"inv_c_p176052898-NL-NL.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/pt-br",c:"inv_c_p176052898-PT-BR.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/pt-BR/windows/all-pcs",c:"inv_c_p178132240-PT-BR-all-pcs.js",f:0.5,p:2},{m:"//[\\w\\.-]+/pt-BR/windows/desktops",c:"inv_c_p178132240-PT-BR-desktops.js",f:0.5,p:2},{m:"//[\\w\\.-]+/pt-BR/windows/download-shop",c:"inv_c_p178132240-PT-BR-dl-shop.js",f:0.5,p:2},{m:"//[\\w\\.-]+/pt-BR/windows/laptops",c:"inv_c_p178132240-PT-BR-laptops.js",f:0.5,p:2},{m:"//[\\w\\.-]+/pt-BR/windows/laptops-convertibles",c:"inv_c_p178132240-PT-BR-laptops-conv.js",f:0.5,p:2},{m:"//[\\w\\.-]+/pt-BR/windows/pc-selector",c:"inv_c_p178132240-PT-BR-pc-selector.js",f:0.5,p:2},{m:"//[\\w\\.-]+/pt-BR/windows/tablets-computers",c:"inv_c_p178132240-PT-BR-tab-comp.js",f:0.5,p:2},{m:"//[\\w\\.-]+/pt-BR/windows/tablets-convertibles",c:"inv_c_p178132240-PT-BR-tablets-convert.js",f:0.5,p:2},{m:"//[\\w\\.-]+/pt-BR/windows-8/apps",c:"inv_c_p178132240-PT-BR-apps.js",f:0.5,p:2},{m:"//[\\w\\.-]+/pt-BR/windows-8/compare",c:"inv_c_p178132240-PT-BR-compare.js",f:0.5,p:2},{m:"//[\\w\\.-]+/pt-BR/windows-8/features",c:"inv_c_p178132240-PT-BR-features.js",f:0.5,p:2},{m:"//[\\w\\.-]+/pt-BR/windows-8/meet",c:"inv_c_p178132240-PT-BR-meet.js",f:0.5,p:2},{m:"//[\\w\\.-]+/pt-BR/windows-8/tablets",c:"inv_c_p178132240-PT-BR-tablets.js",f:0.5,p:2},{m:"//[\\w\\.-]+/ru-ru",c:"inv_c_p176052898-RU-RU.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/tr-tr",c:"inv_c_p176052898-TR-TR.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/zh-cn",c:"inv_c_p176052898-ZH-CN.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/zh-cn/windows/all-pcs",c:"inv_c_p178132240-ZH-CN-all-pcs.js",f:0.5,p:2},{m:"//[\\w\\.-]+/zh-cn/windows/desktops",c:"inv_c_p178132240-ZH-CN-desktops.js",f:0.5,p:2},{m:"//[\\w\\.-]+/zh-cn/windows/download-shop",c:"inv_c_p178132240-ZH-CN-dl-shop.js",f:0.5,p:2},{m:"//[\\w\\.-]+/zh-cn/windows/laptops",c:"inv_c_p178132240-ZH-CN-laptops.js",f:0.5,p:2},{m:"//[\\w\\.-]+/zh-cn/windows/laptops-convertibles",c:"inv_c_p178132240-ZH-CN-laptops-conv.js",f:0.5,p:2},{m:"//[\\w\\.-]+/zh-cn/windows/pc-selector",c:"inv_c_p178132240-ZH-CN-PC-Sel.js",f:0.5,p:2},{m:"//[\\w\\.-]+/zh-cn/windows/tablets-computers",c:"inv_c_p178132240-ZH-CN-tab-comp.js",f:0.5,p:2},{m:"//[\\w\\.-]+/zh-cn/windows/tablets-convertibles",c:"inv_c_p178132240-ZH-CN-tablets-convert.js",f:0.5,p:2},{m:"//[\\w\\.-]+/zh-cn/windows-8/apps",c:"inv_c_p178132240-ZH-CN-apps.js",f:0.5,p:2},{m:"//[\\w\\.-]+/zh-cn/windows-8/compare",c:"inv_c_p178132240-ZH-CN-compare.js",f:0.5,p:2},{m:"//[\\w\\.-]+/zh-cn/windows-8/features",c:"inv_c_p178132240-ZH-CN-features.js",f:0.5,p:2},{m:"//[\\w\\.-]+/zh-cn/windows-8/meet",c:"inv_c_p178132240-ZH-CN-meet.js",f:0.5,p:2},{m:"//[\\w\\.-]+/zh-cn/windows-8/tablets",c:"inv_c_p178132240-ZH-CN-tablets.js",f:0.5,p:2},{m:"[\\w\\.-]+/[\\w-]+/((internet-explorer/products/ie-9/(welcome|welcome-upgrade|welcome-upgrade2))|(windows7/(products/anytime-upgrade-(reg|none|change-settings|n)|sync-providers|search)))",c:"inv_c_blank.js",f:0,p:5,halt:true},{m:"/((es-es)|(it-it)|(tr-tr)|(nl-nl))/((internet-explorer/products/ie-9/(welcome|welcome-upgrade|welcome-grade2))|(windows7/(products/anytime-upgrade-(reg|none|change-settings|n)|sync-providers|search)))",c:"inv_c_blank.js",f:0,p:0,halt:true}]};
COMSCORE.SiteRecruit.Broker.run();