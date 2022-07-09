import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './syle.css'

import { Button, Container, Card } from 'react-bootstrap';

function App() {

  return (
    <>
      <Container className='container'>
        <Card className='mb-3'>
          <Card.Img src="https://picsum.photos/200/100" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>Card text</Card.Text>
            <Button variant="btn btn-outline-success">Button</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default App
