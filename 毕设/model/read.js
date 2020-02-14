var baseUrl="http://api.zhuishushenqi.com/";
function read({data,url}){
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
    getRead:()=>{
        return read({
            url:"ranking/54d43437d47d13ff21cad58b"
        })
    }
}