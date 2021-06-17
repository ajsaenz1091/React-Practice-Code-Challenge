import React, { Fragment, useState, useEffect } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const [idx, setIdx] = useState(0)

  // useEffect(() => {

  // })

  const renderSushiComponents = () =>{
    const sushiSlice = props.sushiItems.slice(idx, idx+4)
    return sushiSlice.map((sushi) => {
      return <Sushi key={sushi.id} budget={props.budget} updateBudget={props.updateBudget} sushi={sushi}/>
    })
  }

  const handleStateIdx = () => {
    setIdx(idx+4)
  }

  return (
    <Fragment>
      <div className="belt">
        { renderSushiComponents() }
        <MoreButton handleStateIdx={handleStateIdx}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer