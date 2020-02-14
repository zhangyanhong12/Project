var baseUrl ="http://localhost:3000/";
function music({data,url}){
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
    getHot:()=>{
        return music({
            url:"top/playlist?order=hot"
        })
    },
    getPlaylist:(offset)=>{
        return music({
            url:"top/playlist&limit=30",
            data:{
                offset
            }
        })
    },
    getDj:(offset)=>{
        return music({
            url:"personalized/djprogram&limit=30",
            data:{
                offset
            }
        })
    },
    // getMore:(url)=>{
    //     return music({
    //           url
    //     })
    // }
    getDetail:(id)=>{
        return music({
            url:"playlist/detail",  
            data:{
                id
            }
        })
    },
    getPlay:(id)=>{
        return music({
            url:"song/url",
            data:{
                id
            }
        })
    }
}