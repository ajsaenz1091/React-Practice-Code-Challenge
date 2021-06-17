import React, { useEffect, useState } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
const App = () => {

  const [sushiItems, setSushiItems] = useState([])
  const [budget , setBudget] = useState(100)
  // const [eaten, setEaten] = useState(false)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setSushiItems(data))
  },[])

    const updateBudget = (price) => {
      setBudget(budget - price )
    }

    return (
      <div className="app">
        <SushiContainer updateBudget={updateBudget} budget={budget} sushiItems={sushiItems}/>
        <Table budget={budget} />
      </div>
    );
}

export default App;