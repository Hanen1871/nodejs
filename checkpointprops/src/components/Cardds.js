import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cardds() {
  return (
<Card style={{ width: '18rem',  background: "radial-gradient(circle, rgba(136,127,142,1) 0%, rgba(198,218,173,1) 77%, rgba(141,163,116,1) 100%)"
}} >
      <Card.Img variant="top" src="OIP.jpg" />
      <Card.Body>
        <Card.Title>flower purple</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{borderRadius: "20px"}}>Go somewhere</Button>
      </Card.Body>
    </Card>  )
}
export default Cardds