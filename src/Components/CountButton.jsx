import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CountButton = () => {
    const [value, setValue] = useState(0)
     
    const increasesValue = ()=>{

        if (value < 10){
            setValue(value+1)
            if (value == 4){
                toast.info("You cross half")
            }
             
        }
    
        else{

             
            toast.success("Congratulations reached to 10");
        }
    }

    const decreaseValue = ()=>{

        if (value  > 0 ) {
        setValue(value-1)
        }
        else{
            toast.error("Value cannot be negative")
        }
     
    }

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-cols" onClick={increasesValue}>
        Increase
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={decreaseValue}>
        Decrease
      </button>
      <h1 className="text-3xl font-bold text-center text-gray-900">{value}</h1>
      <ToastContainer autoClose={800}/>
    </div>
  )
}

export default CountButton
