import React, { Fragment, useState } from 'react'

const Sushi = (props) => {
  
  const [boolean, setBoolean] = useState(false)

  const handleClick = () => {
   if(props.sushi.price <= props.budget) {
     setBoolean(true)
     props.updateBudget(props.sushi.price)
    }else{
      alert("You're broke!")
    }
  }
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          boolean ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi