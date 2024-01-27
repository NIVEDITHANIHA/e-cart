import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlist } from '../components/redux/ecartSlice'
import { Link } from 'react-router-dom'
import { addCart } from '../components/redux/cartSlice'

function Wishlist() {
  const dispatch = useDispatch()
  const values = useSelector((state) => state.wiishlistreducer)
  const array = values.state
  console.log(array);

  const handlecart = (items)=>{
    dispatch(addCart(items))
    dispatch(removeWishlist(items.id))

  }
  return (
    <div className='d-flex  align-items-center justify-content-center m-5'>

      <Row>
        {array?.length > 0 ? array.map((items) => (
          <Col sm={12} md={6} lg={4} xl={3} className='d-flex mt-5' style={{ width: '20rem', height: '24rem' }}>
            <Card style={{ width: '18rem', height: '24rem' }}>
              <Card.Img variant="top" src={items.thumbnail} style={{ width: '100%', height: "10rem" }} />
              <Card.Body>
                <Card.Title>{items.brand}</Card.Title>
                <Card.Text>
                  {items.description.slice(0, 80)}......
                </Card.Text>
                <div className='d-flex align-iitems-center  justify-content-between'>
                  <Button variant="danger" onClick={() => dispatch(removeWishlist(items.id))}><i class="fa-solid fa-trash"></i></Button>
                  <Button variant="success" onClick={()=>handlecart(items)}><i class="fa-solid fa-cart-plus"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>)) :


          <div className='d-flex align-items-center justify-content-center w-100 flex-column' style={{ height: '500px' }}>
            <img src="https://th.bing.com/th/id/R.afa6a28d0ee0b5e7d55b7a5aecdfedec?rik=eOl3Z%2bU0XvmYlw&riu=http%3a%2f%2fiticsystem.com%2fimg%2fempty-cart.png&ehk=0omil1zRH7T3Pb5iTzvueamUQLSSb55vgY7dLFF8Bl8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="No image" style={{ height: '300px' }} />


            <Link to="/" ><i class="fa-solid fa-arrow-left mt-5 text-primary fs-4">back home</i></Link>



          </div>
        }


      </Row>
    </div>
  )
}

export default Wishlist