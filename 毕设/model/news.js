var baseUrl="https://www.jsanai.com/api/selfnews/"
function news({data,url}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            data,
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            fail: (err)=>{
                reject(err)
            },
            
        });
    })
}
module.exports={
    getNews:()=>{
        return news({
            url:'newslist'
        })
    },
    getNewsDetail:(id)=>{
        return news({
            url:"newsd",
            data:{
                id
            }
        })
    }
}