import React,{useState} from 'react'

function Contador() {
    const [contador,setcontador]=useState(1)
    // let numero=0;
    const aunmentar=()=>{
         setcontador( contador+1)            
    }
 

    return (
       <section className='text-center my-5 '>
         <h2>Contador</h2>
          <h2>{contador}</h2>
          <button className='btn btn-primary me-5' onClick={aunmentar}>+1</button>
          <button className='btn btn-warning ' onClick={()=>{setcontador(contador-1)}}>-1</button>
       </section>
    )
}

export default Contador
