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
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                name: '交响音乐会(新闻)',
                html: 'gsxw_music.html'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                name: '抵制雾霾行动（新闻）',
                html: 'gsxw_wumai.html'
            }
        ]
    },
    {
        id: 'ctl00_businessLi',
        name: '公司业务',
        html: '#',
        items: [
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: '#',
                name: '麦岛家园'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: '#',
                name: '潍坊房地产'
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
                html: '#',
                name: '人才理念'
            },
            {
                img: {
                    topimg: 'assets/images/topimg.png',
                    titleimg: 'assets/images/title.png',
                    leftimg: 'assets/images/leftimg.png',
                    rightimg: 'assets/images/right_Cont_img.jpg'
                },
                html: '#',
                name: '社会招聘'
            }
        ]
    },
    {
        id: 'ctl00_contactLi',
        name: '联络恒川海',
        html: '#',
        /*跨域了，不可以额*/
        items: []
    }
];
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------下面是首页配置
var shouye_data = {
    logo: 'assets/images/logo.png',
    /*logo配置位置*/
    flash: [
        {
            /*首页大图配置*/
            name: '',
            /*标题，不会显示到页面上，不配置也可以*/
            img: 'assets/images/shouye/tu/1.jpg' /*图片存储路径*/
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/3.jpg'
        },
        {
            name: 'sss',
            img: 'assets/images/shouye/tu/2.jpg'
        },
        {
            name: '',
            img: 'assets/images/shouye/tu/17.jpg'
        }
    ],
    imTop: {
        /*倒数第二行图片和链接配置*/
        left: {
            name: '麦岛家园',
            /*标题，将会显示在图片上面，此标题可以与gotoo属性一致*/
            img: 'assets/images/top_03.jpg',
            /*自定义图片*/
            gotoo: '公司概况' /*指定daohang_data中的某一个name属性的值*/
        },
        center: {
            name: '暂无',
            img: 'assets/images/top_03.jpg',
            gotoo: '暂无'
        },
        right: {
            name: '暂无',
            img: 'assets/images/top_03.jpg',
            gotoo: '暂无'
        }
    },
    imBottom: {
        /*最后一行图片和链接配置*/
        one: {
            img: 'assets/images/index_01.jpg',
            gotoo: '公司概况'
        },
        two: {
            img: 'assets/images/index_02.jpg',
            gotoo: '主席致辞'
        },
        three: {
            img: 'assets/images/index_03.jpg',
            gotoo: ''
        },
        four: {
            img: 'assets/images/index_04.jpg',
            gotoo: ''
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
