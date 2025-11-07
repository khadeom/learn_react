import React, { useContext } from 'react';
import Child1 from './Child1';
import { MyContext } from '../day5/Context'

export const Parent1 = () => {

    const contextValue = useContext(MyContext) 
    console.log("contextValue in Parent1:", contextValue);
  return (
    <div>
        <h1>Parent1 Component</h1>
        <Child1 />
    </div>
  )
}
