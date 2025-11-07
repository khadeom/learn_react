import React, { useMemo, useState } from 'react'
import { Button } from "@salt-ds/core";
import { ReactElement } from "react";

export const MemoComp = () => {
    const [count, setCount] = useState(1)
    const [name, setName] = useState("")

    function HighCompute(count){
        //this is high compute
        console.log('Computing')
        return count+1
    }
    // const abc = HighCompute(count)
    const abc = useMemo(()=>HighCompute(count), [count])

  return (
    <div>
        <h1>MemoComp</h1>
        <h1>Count {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>Name: {name}</h1>
        <input type='text' onChange={(event)=>setName(event.target.value)}></input>
        <Button sentiment="accented" appearance="solid">
        Submit
        </Button>

    </div>
  )
}



// export const Accented = (): ReactElement => (
//   <>
//     <Button sentiment="accented" appearance="bordered">
//       Bordered
//     </Button>
//     <Button sentiment="accented" appearance="transparent">
//       Transparent
//     </Button>
//   </>
// );
