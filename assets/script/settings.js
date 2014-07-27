/*
注意事项（不予遵守，页面将会无法展示）
1：每个}前都没有，
2：除了name属性可以起中文名称，其余都必须为英文
3：数字不可以作为名字的第一个字母
4：请使用英文标点符号
5：html属性如果没有对应的页面，则值必须为#
6：系统暂时支持两级动态菜单，第二级菜单下再有items属性，则暂不予支持
7：html属性的值不能是跨域url。比如：http://www.baidu.com这样的链接是不可以的，因为baidu.com是另一个域名
7：word生成好的html页面必须放到根目录下（index.html文件存在的那个目录额），然后再运行sync.bat。
 */

var daohang_data = [{
		/*第一层大括号{}表示顶级菜单*/
		id : 'mainPage',
		name : '首页',
		/*name表示的是菜单的名字*/
		html : 'index.html',
		items : []/*items中盛放的是顶级菜单下的第二级菜单，没有二级菜单时就这么写*/
	}, {
		id : 'ctl00_aboutLi',
		/*id，随便起名字就行，*/
		name : '关于恒川海',
		html : '#',
		/*#表示用户点击“关于恒川海”菜单时没有任何响应*/
		items : [{
				img : {
					/*这些图片配置，美工可以做一个相同大小的图给替换掉，可以做到每个模块都不一样额*/
					topimg : 'assets/images/topimg.png',
					titleimg : 'assets/images/title.png',
					leftimg : 'assets/images/leftimg.png',
					rightimg : 'assets/images/right_Cont_img.jpg'
				},
				html : 'zxzc.htm',
				/*会word的办公室文员们，可以利用word，编辑文档，生成html，word有很强大的图文编辑功能额*/
				name : '主席致辞' /*这里是菜单名称，注意额，每个大括号}前面都没有逗号，额！*/
			}, {
				img : {
					topimg : 'assets/images/topimg.png',
					titleimg : 'assets/images/title.png',
					leftimg : 'assets/images/leftimg.png',
					rightimg : 'assets/images/right_Cont_img.jpg'
				},
				name : '投资者关系',
				html : 'tzzgx.htm'
			},{
				img : {
					topimg : 'assets/images/topimg.png',
					titleimg : 'assets/images/title.png',
					leftimg : 'assets/images/leftimg.png',
					rightimg : 'assets/images/right_Cont_img.jpg'
				},
				name : '公司新闻',
				html : '#'
			}
		]
	}, {
		id : 'ctl00_businessLi',
		name : '公司业务',
		html : '#',
		items : [{
				img : {
					topimg : 'assets/images/topimg.png',
					titleimg : 'assets/images/title.png',
					leftimg : 'assets/images/leftimg.png',
					rightimg : 'assets/images/right_Cont_img.jpg'
				},
				html : '#',
				name : '麦岛家园'
			}, {
				img : {
					topimg : 'assets/images/topimg2.png',
					/*最上部的图片*/
					titleimg : 'assets/images/title.png',
					/*上面导航 条上的图片*/
					leftimg : 'assets/images/leftimg.png',
					/*左侧导航栏上部的图片*/
					rightimg : 'assets/images/right_Cont_img.jpg' /*右侧“内容区”上部的图片*/
				},
				html : 'gsgk.htm',
				name : '公司概况'
			}, {
				img : {
					topimg : 'assets/images/topimg.png',
					titleimg : 'assets/images/title.png',
					leftimg : 'assets/images/leftimg.png',
					rightimg : 'assets/images/right_Cont_img.jpg'
				},
				html : '#',
				name : '潍坊房地产'
			}
		]
	}, {
		id : 'ctl00_hrLi',
		name : '人力资源',
		html : '#',
		items : [{
				img : {
					topimg : 'assets/images/topimg.png',
					titleimg : 'assets/images/title.png',
					leftimg : 'assets/images/leftimg.png',
					rightimg : 'assets/images/right_Cont_img.jpg'
				},
				html : '#',
				name : '人才理念'
			}, {
				img : {
					topimg : 'assets/images/topimg.png',
					titleimg : 'assets/images/title.png',
					leftimg : 'assets/images/leftimg.png',
					rightimg : 'assets/images/right_Cont_img.jpg'
				},
				html : '#',
				name : '社会招聘'
			}
		]
	}, {
		id : 'ctl00_contactLi',
		name : '联络恒川海',
		html : '#',
		/*跨域了，不可以额*/
		items : []
	}
];

var shouye_data = {
	logo : 'assets/images/logo.png',
	/*logo配置位置*/
	flash : [{
			/*首页大图配置*/
			name : '',
			/*标题，不会显示到页面上，不配置也可以*/
			img : 'assets/images/shouye/flash/1.jpg' /*图片存储路径*/
		}, {
			name : '',
			img : 'assets/images/shouye/flash/3.jpg'
		}, {
			name : 'sss',
			img : 'assets/images/shouye/flash/2.jpg'
		}, {
			name : '',
			img : 'assets/images/shouye/flash/4.jpg'
		}, {
			name : '',
			img : 'assets/images/shouye/flash/5.jpg'
		}, {
			name : '',
			img : 'assets/images/shouye/flash/6.jpg'
		}
	],
	imTop : {
		/*倒数第二行图片和链接配置*/
		left : {
			name : '麦岛家园',
			/*标题，将会显示在图片上面，此标题可以与gotoo属性一致*/
			img : 'assets/images/top_03.jpg',
			/*自定义图片*/
			gotoo : '主席致辞' /*指定daohang_data中的某一个name属性的值*/
		},
		center : {
			name : '公司概况',
			img : 'assets/images/top_03.jpg',
			gotoo : '公司概况'
		},
		right : {
			name : '主席致辞',
			img : 'assets/images/top_03.jpg',
			gotoo : '主席致辞'
		}
	},
	imBottom : {
		/*最后一行图片和链接配置*/
		one : {
			img : 'assets/images/index_01.jpg',
			gotoo : '公司概况'
		},
		two : {
			img : 'assets/images/index_02.jpg',
			gotoo : '主席致辞'
		},
		three : {
			img : 'assets/images/index_03.jpg',
			gotoo : ''
		},
		four : {
			img : 'assets/images/index_04.jpg',
			gotoo : ''
		}
	},
	fdgg : {
		/*暂时支持一个图片广告*/
		gotoo : '',
		/*指定daohang_data中的某一个name属性的值*/
		download : '',
		/*用户点击广告图片后，下载的文件的相对路径*/
		img : 'assets/images/20130503010101.jpg' /*图片路径*/

	},
	footer : {
		/*页面最下面部分配置*/
		banquan : '恒川海投资有限公司',
		/*版权所有者*/
		qita : [{
				name : '法律声明',
				gotoo : '法律声明'
			}, {
				name : '联络我们',
				gotoo : '联络我们'
			}
		]
	}
};
