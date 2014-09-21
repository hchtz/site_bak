//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------下面是导航配置
var daohang_data = [
    {
        /*第一层大括号{}表示顶级菜单*/
        id: 'mainPage',
        name: '首页',
        /*name表示的是菜单的名字*/
        html: 'index.html',
        items: []/*items中盛放的是顶级菜单下的第二级菜单，没有二级菜单时就这么写*/
    },
    {
        id: 'ctl00_aboutLi',
        /*id，随便起名字就行，*/
        name: '关于恒川海',
        html: '#',
        /*#表示用户点击“关于恒川海”菜单时没有任何响应*/
        items: [
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/pages/gsgk/hchmq.jpg',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: 'gsgk.html',
                name: '公司概况'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/pages/gsxw/dzwm/paizi.jpg',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                name: '公司新闻',
                html: 'gsxw.html'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/pages/gsxw/dzwm/paizi.jpg',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                name: '员工风采',
                html: 'ygfc.html'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/pages/gsxw/dzwm/paizi.jpg',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                name: '商业活动',
                html: 'syhd.html'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/pages/gsxw/dzwm/paizi.jpg',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                name: '联络恒川海',
                html: 'llhch.html'
            }
        ]
    },
    {
        id: 'ctl00_businessLi1',
        name: '麦岛广场',
        html: '#',
        items: [
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: 'mdgc_desc.html',
                name: '简介'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: 'zsxx.html',
                name: '招商信息'
            }
        ]
    },
    {
        id: 'ctl00_businessLi2',
        name: '富春江置业',
        html: '#',
        items: [
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: 'fcjzy_desc.html',
                name: '富春江置业简介'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: 'chwy_gsjj.html',
                name: '川化物业子公司'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: 'chwy_qywh.html',
                name: '企业文化'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: 'chwy_fwbz.html',
                name: '物业服务标准'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: 'chwy_zgxm.html',
                name: '在管项目'
            }
        ]
    },
    {
        id: 'ctl00_businessLi3',
        name: '海滨化工',
        html: '#',
        items: [
            {
                img: {
                    topimg: 'assets/images/pages/hbhg/topbar.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: 'schbhg_desc.html',
                name: '海滨化工简介'
            }
        ]
    },
    {
        id: 'ctl00_hrLi',
        name: '人力资源',
        html: '#',
        items: [
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: 'rlzy_rcln.html',
                name: '人才理念'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: 'shzp.html',
                name: '社会招聘'
            }
        ]
    }
];
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------下面是首页配置
var shouye_data = {
    logo: 'assets/images/logo.png',
    /*logo配置位置*/
    flash: [
        {
            name: '牛肉面餐馆，很火爆，食客屋里装不下，都在门前支起了帐篷',
            img: 'assets/images/shouye/tu/1.jpg' /*图片存储路径*/
        },
        {
            name: '民以食为天，餐饮行业的槛是最低的，资金回收也是最快的',
            img: 'assets/images/shouye/tu/2.jpg'
        },
        {
            name: '平娃三宝，最火爆的餐馆',
            img: 'assets/images/shouye/tu/3.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/4.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/5.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/6.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/7.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/8.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/9.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/10.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/11.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/12.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/13.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/14.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/15.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/16.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/17.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/18.jpg'
        },
        {
            name: '链家地产来了',
            img: 'assets/images/shouye/tu/19.jpg'
        }
    ],
    imTop: {
        /*倒数第二行图片和链接配置*/
        left: {
            name: '麦岛广场',
            /*标题，将会显示在图片上面，此标题可以与gotoo属性一致*/
            img: 'assets/images/shouye/project/mdgc.jpg',
            /*自定义图片*/
            gotoo: '简介' /*指定daohang_data中的某一个name属性的值*/
        },
        center: {
            name: '富春江置业',
            img: 'assets/images/shouye/project/fcjzy.jpg',
            gotoo: '富春江置业简介'
        },
        right: {
            name: '海滨化工',
            img: 'assets/images/shouye/project/schbhg.jpg',
            gotoo: '海滨化工简介'
        }
    },
    imBottom: {
        /*最后一行图片和链接配置*/
        one: {
            img: 'assets/images/index_01.jpg',
            gotoo: '#'
        },
        two: {
            img: 'assets/images/index_02.jpg',
            gotoo: '人才理念'
        },
        three: {
            img: 'assets/images/index_03.jpg',
            gotoo: '#'
        },
        four: {
            img: 'assets/images/index_04.jpg',
            gotoo: '#'
        }
    },
    fdgg: {
        /*暂时支持一个图片广告*/
        gotoo: '',
        /*指定daohang_data中的某一个name属性的值*/
        download: '',
        /*用户点击广告图片后，下载的文件的相对路径*/
        img: 'assets/images/20130503010101.jpg' /*图片路径*/

    },
    footer: {
        /*页面最下面部分配置*/
        banquan: '恒川海投资有限公司',
        /*版权所有者*/
        qita: [
            {
                name: '法律声明',
                gotoo: '法律声明'
            },
            {
                name: '联络我们',
                gotoo: '联络我们'
            }
        ]
    }
};
