import React from 'react'


function Cardd({name, price, description, image}) {
    
  return (
    <>
<h1>{name} </h1>
<h2>{price}</h2>
<p>{description} </p> 
<img src={image}/>
    </>
  )
}

export default Cardd