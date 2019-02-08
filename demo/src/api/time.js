let zero =require('./zero')
export default (d)=>{
    let year=d.getFullYear()
    let month=d.getMonth()
    let day=d.getDate()
    let hour=d.getHours()
    let min=d.getMinutes()
    let sec=d.getSeconds()
    return `${year}年${zero(month)}月${zero(day)}日${zero(hour)}:时${zero(min)}:分${zero(sec)}:秒`
    
}