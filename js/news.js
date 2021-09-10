$(function(){
    // 给时间补零的函数
    function padZero(n){
        if(n < 10) {
            return '0' + n
        }else {
            return n
        }
    
    }
    // 定义格式化时间的过滤器
    template.defaults.imports.dataFormat = function(dtStr){
let dt = new Date(dtStr)
 let y = padZero(dt.getFullYear())
 let m = padZero(dt.getMonth() + 1)
 let d = padZero(dt.getDate())
 let hh =padZero(dt.getHours())
 let mm =padZero(dt.getMinutes())
 let ss =padZero(dt.getSeconds())
 return y + '-'+ m +'-'+ d +' '+hh+':'+ mm +':'+ss
    }
    // 获取新闻列表的函数
    function getNewsList() {
     $.get('http://www.liulongbin.top:3006/api/news',
     function(res){
         if(res.status !== 200) return alert('获取失败')
        //  console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
            // 把每一项的tags属性，从字符串改造成字符串的数组
             res.data[i].tags = res.data[i].tags.split(',')
        }
        console.log(res);
      let htmlStr = template('tol_news',res)
      $('#news-list').html(htmlStr)

     })
    }
    getNewsList()
})