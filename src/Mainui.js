import React, { useState } from 'react'
import './Mainui.css'
export default function Mainui() {

const [inputlist,setinputlist]=useState("");
const [Item,addItem]=useState([]);


const itemEvent=(event)=>{
setinputlist(event.target.value);
};


const clear=()=>{
 
  addItem([]);

}

const deleteItem=(id)=>{

console.log("Item Deleted"+id);

const updateditems=Item.filter((elem,index)=>{
  return index!=id;
})

addItem(updateditems);

}


const setItem=(event)=>{ 
addItem([...Item,inputlist]);
}  
  return (

    <>
<div className='root'>

<h1 className='heading-1'> WHAT IS UP..? </h1>
    <div className="main">

    <div className='container'>
        <div  className="heading">
        <h1>SO WHAT'S THE PLAN TODAY?</h1>
        </div>
        <div className="datainput">

        <input type="text" className="workinput" placeholder="Add Items" onChange={itemEvent} />
       <button className='add' onClick={setItem} ><b>+</b></button>
              
        </div>
        

        <ul className="list">
           
    
          
    
      {
Item.map((Itemval,index)=>{
return ( <li className='items' key={index}> {Itemval}  <button className='cancel' onClick={()=>{deleteItem(index)}}>X</button></li>            

)
})
}
    
            
              
          
          
          
       </ul>
       
<button className='clear' onClick={clear}>CLEAR ALL</button>
       
    </div>
    </div>
</div>
    </>

  )
}
