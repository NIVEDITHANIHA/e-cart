import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { addWishlist } from '../components/redux/ecartSlice';
import { addCart } from '../components/redux/cartSlice';

function Home() {
  const data = useFetch('https://dummyjson.com/products')

  const dispatch = useDispatch()

  return (
    <div className='m-5 d-flex'>






      <Container>
        <Row>
          {data?.length > 0 ? data?.map((items) => (
            <Col sm={12} md={6} lg={4} xl={3}>  <Card className='me-3 mt-3 mb-4' style={{ width: '16rem', height: '24rem' }}>
              <Card.Img variant="top" className='w-100' src={items.thumbnail} style={{ height: '9rem' }} />
              <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text >
                  {items.description.slice(0, 70)}.....
                </Card.Text >
                <div className=' d-flex align-items-center justify-content-between'>
                  <Button variant="danger" onClick={() => dispatch(addWishlist(items))}><i class="fa-solid fa-heart-circle-check"></i></Button>
                  <Button variant="success" onClick={()=>dispatch(addCart(items))}  ><i class="fa-solid fa-cart-plus"></i></Button>
                </div>
              </Card.Body>
            </Card></Col>
          )) : <p>nothing else</p>

          }
        </Row>

      </Container>



    </div>

  )
}

export default Home