function callFun(name,sex){
  console.log(`city:${this.city} name:${name} sex:${sex}`)
}
const city = {city:'chengde'}
const util = {
  city:'beijing',
  call(){
    callFun.apply(city,['hayho','man'])
  }
}
util.call()