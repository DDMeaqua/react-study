import React,{useState} from 'react'
import Meals from './Meals'
import Routertest from './Routertest'

const MEAL_DATA = [
  {
    id:'1',
    title:"汉堡",
    desc:'百分百纯牛肉搭配酸爽黄瓜与美味番茄酱',
    price:12,
    img:'/img/1.png'
  },
  {
    id:'2',
    title:"双层吉士堡",
    desc:'百分百纯牛肉搭配双层美味芝士',
    price:15,
    img:'/img/2.png'
  },
  {
    id:'3',
    title:"巨无霸",
    desc:'双层厚牛肉，搭配爽口生菜',
    price:22,
    img:'/img/3.png'
  },
  {
    id:'4',
    title:"板烧鸡腿堡",
    desc:'去骨鸡排嫩滑多汁，搭配香浓烧鸡酱',
    price:20,
    img:'/img/4.png'
  },
]

export default function Shop() {

  const [mealsData,setMealsData] = useState(MEAL_DATA)

  const [car,setCar] = useState({
    item:[],
    totalAmount:0,
    totalPrice:0
  })

  // 添加方法
  const addMealHandler = (meal)=>{
    // meal 要添加进购物车的商品
    const newCar = {...car}
    console.log(newCar);
    // 判断购物车中是否已经有了该商品
    if(newCar.item.indexOf(meal) === -1){
      // 将meal添加进购物车
      newCar.item.push(meal)
      // 设置meal的数量为1
      meal.amount = 1
    }else{
      // meal已经在购物车中，只需要将meal的数量+1
      meal.amount += 1
    }

    //增加总数
    newCar.totalAmount += 1

    //增加总金额
    newCar.totalPrice += meal.price

    // 更新购物车
    setCar(newCar)
  } 

  // 减少方法
  const subMealHandler = (meal)=>{
    const newCar = {...car}
    meal.amount -= 1
    if(meal.amount === 0){
      // 删除该商品
      newCar.item.splice(newCar.item.indexOf(meal),1)
    }
    //增加总数
    newCar.totalAmount -= 1

    //增加总金额
    newCar.totalPrice -= meal.price

    // 更新购物车
    setCar(newCar)
  }



  return (
    <>
      <Meals mealsData={mealsData} onAdd={addMealHandler} onSub={subMealHandler} />

      <Routertest />
    </>
  )
}
