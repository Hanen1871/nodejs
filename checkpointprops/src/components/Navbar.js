import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Navbar() {
  return (
    <div style={{display: 'flex' , justifyContent:'space-around', background: 'radial-gradient(circle, rgba(174,210,169,1) 0%, rgba(141,154,125,1) 77%, rgba(141,163,116,1) 100%)'}}>
    <div style={{margin:6, padding:10}}>About</div>
    <div style={{margin:6, padding:10}}>Contact</div>
    <div style={{margin:6, padding:10}}>Home</div>
   <div style={{display:'flex', justifyContent:'right'}} ><Form className="d-flex" style={{margin:10, padding:0, borderRadius:4}}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-4"
            aria-label="Search"
            
          />
          <Button variant="outline-success">Search</Button>
        </Form></div>
    
    
         </div>
  )
}

export default Navbar