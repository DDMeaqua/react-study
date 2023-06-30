import React from 'react'
import Meal from './Meal'

export default function Meals(props) {

  return (
    <div>
      {props.mealsData.map(item => <Meal onSub={props.onSub} onAdd={props.onAdd} key={item.id} meal={item} />)}
    </div>
  )
}
