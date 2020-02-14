const movies =require('./movies')
class movie extends movies{
    static getInTheaters(){
        return this.request({
            url:"in_theaters"
        })
    }
    static getComingSoon(){
        return this.request({
            url:"coming_soon"
        })
    }
    static getTop250(){
        return this.request({
            url:"top250"
        })
    }
    static getDetail(id){
        return this.request({
            url:"/subject/"+id
        })
    }
}
module.exports=movie;