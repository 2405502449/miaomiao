let movie = {
    "movies" : {
        "list" : [
            {
            "cat": "剧情，犯罪",
            "dir": "小小之",
            "dur": 108,
            "enm": "nuhuo",
            "fra": "美国",
            "rt": "2018-11-16",
            "globalReleased": true,
            "id": 121215,
            "img": "https://p1.meituan.net/moviemachine/51b193283628a62b85ba31ddc818ffde1560410.jpg",
            "nm" :"怒火·重案"
            },
            {
              "cat": "剧情",
              "dir": "小小之",
              "dur": 108,
              "enm": "yiquan",
              "fra": "美国",
              "rt": "2019-11-16",
              "globalReleased": true,
              "id": 121218,
              "img": "https://p0.meituan.net/movie/ead19e73133e6a8a44c5325e46803c30117559.jpg",
              "nm" :"一拳超人"
              }
           
            ]
        
    }
        
}    


export default {
'get|/parameter/query':  option => {
return {
  status: 200,
  message: 'ok',
  data: movie
};
}
}