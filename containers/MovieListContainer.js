/*
 * 电影列表页面
 * */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';

import {
    Text,
    ListView,
    Image,
    Navigator,
    View
} from 'react-native';

import MovieDetailContainer from './MovieDetailContainer.js'

export default class MovieListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            movieListData:[],
            showLoading: true,
        };
    }

    componentDidMount(){
        this.fetch(this.props.movieType)
    }

    fetch=(movieType)=>{
        const _this=this
        let movieListData=[].concat(this.state.movieListData)

        setTimeout(function () {
            const obj={
                "count": 10,
                "start": 6,
                "total": 74,
                "subjects": [
                    {
                        "rating": {
                            "max": 10,
                            "average": 7.3,
                            "stars": "40",
                            "min": 0
                        },
                        "genres": [
                            "剧情",
                            "冒险"
                        ],
                        "title": "北极大冒险",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1233393/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/37010.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/37010.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/37010.jpg"
                                },
                                "name": "达科塔·高尤",
                                "id": "1233393"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1049703/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/13022.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/13022.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/13022.jpg"
                                },
                                "name": "高兰·维斯耶克",
                                "id": "1049703"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1044868/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/23281.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/23281.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/23281.jpg"
                                },
                                "name": "布丽姬·穆娜",
                                "id": "1044868"
                            }
                        ],
                        "collect_count": 107,
                        "original_title": "Midnight Sun",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1014211/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/1361266244.86.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/1361266244.86.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/1361266244.86.jpg"
                                },
                                "name": "罗杰·斯波蒂伍德",
                                "id": "1014211"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1195585/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                    "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                    "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                                },
                                "name": "白兰度·奎利西",
                                "id": "1195585"
                            }
                        ],
                        "year": "2014",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2406911343.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2406911343.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2406911343.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/24752662/",
                        "id": "24752662"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "爱情",
                            "战争"
                        ],
                        "title": "难忘金银滩",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1315295/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1368690901.94.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1368690901.94.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1368690901.94.jpg"
                                },
                                "name": "王一",
                                "id": "1315295"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1360227/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/u0cvWS1zyGUcel_avatar_uploaded1469103826.33.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/u0cvWS1zyGUcel_avatar_uploaded1469103826.33.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/u0cvWS1zyGUcel_avatar_uploaded1469103826.33.jpg"
                                },
                                "name": "翟佳",
                                "id": "1360227"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1364647/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1478846357.88.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1478846357.88.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1478846357.88.jpg"
                                },
                                "name": "濡雪",
                                "id": "1364647"
                            }
                        ],
                        "collect_count": 12,
                        "original_title": "难忘金银滩",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1322850/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1479098028.67.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1479098028.67.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1479098028.67.jpg"
                                },
                                "name": "亮子",
                                "id": "1322850"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2401488210.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2401488210.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2401488210.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/24888081/",
                        "id": "24888081"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "动画",
                            "家庭"
                        ],
                        "title": "冰雪女皇之冬日魔咒",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1013784/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/34284.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/34284.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/34284.jpg"
                                },
                                "name": "伊莎贝拉·弗尔曼",
                                "id": "1013784"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1036300/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/1393386887.76.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/1393386887.76.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/1393386887.76.jpg"
                                },
                                "name": "沙尔托·科普雷",
                                "id": "1036300"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1002683/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/53.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/53.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/53.jpg"
                                },
                                "name": "肖恩·宾",
                                "id": "1002683"
                            }
                        ],
                        "collect_count": 55,
                        "original_title": "Снежная королева 2: Перезаморозка",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1362482/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                    "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                    "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                                },
                                "name": "阿列克谢·特斯蒂斯林",
                                "id": "1362482"
                            }
                        ],
                        "year": "2014",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2381915097.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2381915097.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2381915097.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26108086/",
                        "id": "26108086"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "剧情",
                            "喜剧",
                            "爱情"
                        ],
                        "title": "人鱼校花",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1327487/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/tkt9Jive6AAcel_avatar_uploaded1363769324.21.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/tkt9Jive6AAcel_avatar_uploaded1363769324.21.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/tkt9Jive6AAcel_avatar_uploaded1363769324.21.jpg"
                                },
                                "name": "文卓",
                                "id": "1327487"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1339575/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1402475274.33.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1402475274.33.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1402475274.33.jpg"
                                },
                                "name": "邹杨",
                                "id": "1339575"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1341690/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1464657805.87.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1464657805.87.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1464657805.87.jpg"
                                },
                                "name": "曹曦月",
                                "id": "1341690"
                            }
                        ],
                        "collect_count": 15,
                        "original_title": "人鱼校花",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": null,
                                "avatars": null,
                                "name": "叶茗",
                                "id": null
                            },
                            {
                                "alt": null,
                                "avatars": null,
                                "name": "林云翔",
                                "id": null
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2362854884.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2362854884.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2362854884.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26757794/",
                        "id": "26757794"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "动画"
                        ],
                        "title": "超级幼儿园",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1348782/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                    "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                    "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                                },
                                "name": "丁妍",
                                "id": "1348782"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1348775/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1470558117.44.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1470558117.44.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1470558117.44.jpg"
                                },
                                "name": "王雪沁",
                                "id": "1348775"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1361121/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                    "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                    "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                                },
                                "name": "王辛",
                                "id": "1361121"
                            }
                        ],
                        "collect_count": 10,
                        "original_title": "超级幼儿园",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1361983/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                    "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                    "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                                },
                                "name": "蒋叶峰",
                                "id": "1361983"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2399447078.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2399447078.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2399447078.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26889012/",
                        "id": "26889012"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "喜剧",
                            "奇幻"
                        ],
                        "title": "天降恶邻",
                        "casts": [],
                        "collect_count": 6,
                        "original_title": "天降恶邻",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1341754/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1444471586.73.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1444471586.73.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1444471586.73.jpg"
                                },
                                "name": "田蒙",
                                "id": "1341754"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2406647667.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2406647667.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2406647667.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26696881/",
                        "id": "26696881"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 7.6,
                            "stars": "40",
                            "min": 0
                        },
                        "genres": [
                            "喜剧",
                            "爱情"
                        ],
                        "title": "单身日记：好孕来袭",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1054418/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/591.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/591.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/591.jpg"
                                },
                                "name": "蕾妮·泽尔维格",
                                "id": "1054418"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1031223/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1497.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1497.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1497.jpg"
                                },
                                "name": "科林·费尔斯",
                                "id": "1031223"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1013769/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/15889.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/15889.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/15889.jpg"
                                },
                                "name": "帕特里克·德姆西",
                                "id": "1013769"
                            }
                        ],
                        "collect_count": 9804,
                        "original_title": "Bridget Jones's Baby",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1290729/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/1480994534.86.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/1480994534.86.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/1480994534.86.jpg"
                                },
                                "name": "沙朗·马奎尔",
                                "id": "1290729"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2363268511.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2363268511.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2363268511.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/3868141/",
                        "id": "3868141"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "爱情"
                        ],
                        "title": "我的第二次初恋",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1361619/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/7UxPs5y7wzEcel_avatar_uploaded1472195096.13.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/7UxPs5y7wzEcel_avatar_uploaded1472195096.13.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/7UxPs5y7wzEcel_avatar_uploaded1472195096.13.jpg"
                                },
                                "name": "凌正辉",
                                "id": "1361619"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1361618/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/7UxPs5y7wzEcel_avatar_uploaded1472194485.09.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/7UxPs5y7wzEcel_avatar_uploaded1472194485.09.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/7UxPs5y7wzEcel_avatar_uploaded1472194485.09.jpg"
                                },
                                "name": "庞璐佳",
                                "id": "1361618"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1351645/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/1443946322.86.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/1443946322.86.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/1443946322.86.jpg"
                                },
                                "name": "林路迪",
                                "id": "1351645"
                            }
                        ],
                        "collect_count": 8,
                        "original_title": "我的第二次初恋",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1362242/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/7UxPs5y7wzEcel_avatar_uploaded1473832598.57.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/7UxPs5y7wzEcel_avatar_uploaded1473832598.57.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/7UxPs5y7wzEcel_avatar_uploaded1473832598.57.jpg"
                                },
                                "name": "李杰",
                                "id": "1362242"
                            }
                        ],
                        "year": "2017",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2371762932.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2371762932.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2371762932.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26834059/",
                        "id": "26834059"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 7.8,
                            "stars": "40",
                            "min": 0
                        },
                        "genres": [
                            "动作",
                            "科幻",
                            "奇幻"
                        ],
                        "title": "星球大战外传：侠盗一号",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1013981/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/42373.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/42373.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/42373.jpg"
                                },
                                "name": "菲丽希缇·琼斯",
                                "id": "1013981"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1000248/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/5681.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/5681.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/5681.jpg"
                                },
                                "name": "本·门德尔森",
                                "id": "1000248"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1040529/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/57893.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/57893.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/57893.jpg"
                                },
                                "name": "麦斯·米科尔森",
                                "id": "1040529"
                            }
                        ],
                        "collect_count": 2834,
                        "original_title": "Rogue One: A Star Wars Story",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1310557/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/1351661374.56.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/1351661374.56.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/1351661374.56.jpg"
                                },
                                "name": "加里斯·爱德华斯",
                                "id": "1310557"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img5.doubanio.com/view/movie_poster_cover/ipst/public/p2403049086.jpg",
                            "large": "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2403049086.jpg",
                            "medium": "https://img5.doubanio.com/view/movie_poster_cover/spst/public/p2403049086.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/25894431/",
                        "id": "25894431"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "纪录片",
                            "音乐"
                        ],
                        "title": "一路逆风",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1024723/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/27242.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/27242.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/27242.jpg"
                                },
                                "name": "邓紫棋",
                                "id": "1024723"
                            }
                        ],
                        "collect_count": 126,
                        "original_title": "一路逆风",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": null,
                                "avatars": null,
                                "name": "Nick Wickham",
                                "id": null
                            }
                        ],
                        "year": "2017",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2406829205.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2406829205.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2406829205.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26416774/",
                        "id": "26416774"
                    }
                ],
                "title": "即将上映的电影"
            }

            if(movieListData.length>0){
                movieListData=movieListData.concat(obj.subjects)
            }else{
                movieListData=obj.subjects
            }
            _this.setState({
                dataSource: _this.state.dataSource.cloneWithRows(movieListData),
                movieListData:movieListData,
                showLoading: false,
            });
        },3000)
    }

    onEndReached=()=>{
        this.fetch(this.props.movieType)
    }

// <Text
// onPress={()=>this.props.navigator.push({
//     sceneConfig: Navigator.SceneConfigs.FadeAndroid,
//     component: MovieDetailContainer,
//     params: {
//         name: '电影详细',
//         id:'232323'
//     }
// })}
// >
// 电影详细
// </Text>
    renderLoading=()=>{
        return (
            <View>
                <Text>
                    正在加载数据。。。。。
                </Text>
            </View>
        )
    }

    renderMovie=()=>{
        return (
            <View>
                <ListView
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={1}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovieItem}
                />
            </View>
        );
    }

    renderMovieItem=(movie)=> {
        return (
            <View style={styles.item}>
                <Image
                    source={{uri: movie.images.small}}
                    style={styles.image}
                />
                <View>
                    <Text>{movie.title}</Text>
                    <Text>{movie.year}</Text>
                </View>
            </View>
        );
    }

    render() {
        let renderPage=()=>{}
        if(this.state.showLoading){
            renderPage=this.renderLoading
        }else{
            renderPage=this.renderMovie
        }

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>
                        {this.props.name}
                    </Text>
                </View>
                {renderPage()}
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffd700'
    },
    header:{
        height:30,
        backgroundColor:'lightblue',
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        flexDirection:'row',
        backgroundColor:'#ff7f50'
    },
    image:{
        height:80,
        width:50
    }

});