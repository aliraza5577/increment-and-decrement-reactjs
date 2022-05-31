import React, { useState } from 'react';




function App(){
    
    const[count,setCount] = useState(0);
    const addNum = () => {
        setCount(count + 1);
    }
    const subNum = () => {
        if(count > 0){
            setCount(count - 1);
        }else{
            alert("Sorry! Zero Limit is Reached.");
            console.log("Value Must be greate than zero");
        }

    }


    return(
        <>
            <div className='mainWrapper'>
            <div className='innerWrapper'>
                <div className='bar'>
                    <h1><span>{count}</span></h1>
                    <button onClick={addNum}>Add Count</button>
                    <button onClick={subNum}>Minus Count</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default App;