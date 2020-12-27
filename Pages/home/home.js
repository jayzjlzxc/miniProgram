// Pages/home/home.js
Page({
  data: {
  name:"hao",
  age:18,
  time:0,
  pc:[
    {age:11,name:'联想'},
    {age:12,name:'戴尔'}
  ]
  },
  clickUp(){
    this.setData({
      time:this.data.time+1
    })
  },
  clickLow(){
    this.setData({
      time:this.data.time-1
    })
  }
})
