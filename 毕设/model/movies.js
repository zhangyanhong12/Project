var baseUrl="https://douban.uieee.com/v2/movie/"
class movies{
    static request({data,url}){
        return new Promise((resolve,reject)=>{
            wx.request({
                url: baseUrl+url,
                data,
                header: {'content-type':'json'},
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
}
module.exports=movies