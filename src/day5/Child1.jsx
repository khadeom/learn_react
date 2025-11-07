import React, { useContext } from 'react';

import { MyContext } from '../day5/Context'


const Child1 = () => {
    const contextValue = useContext(MyContext) 
    console.log("contextValue in Child1:", contextValue);
  return (
    <div>
        <h2>Child1 Component ID: {contextValue?.id}, Name: {contextValue?.name}</h2>

    </div>
  )
}

export default Child1
