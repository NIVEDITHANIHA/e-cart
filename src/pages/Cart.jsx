import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { deleteCart, removeOrder } from '../components/redux/cartSlice';

function Cart() {

  const [datas,setDatas] = useState(0)
  const navigate = useNavigate();

  const data = useSelector((state) => state.cartSlicereducer)
  const CartData = data.state
  console.log(CartData);


  const Totalprice = () => {
    var sum = 0;
    for (var i = 0; i < CartData.length; i++) {
      console.log(CartData[i].price);
       sum = sum + CartData[i].price
       setDatas(sum)
      console.log(sum);

    }
  }

  console.log(datas)


  const orderplaced = ()=>{
    alert('Thanyou....!! Your Order has Placed')
    dispatch(removeOrder());
    navigate('/')
  }

  useEffect(() => {
    Totalprice();
  }, [])
  const dispatch = useDispatch();



  return (
    <div>
      {CartData?.length > 0 ? <div className='row'>
        <div className='col-lg-6 m-5'>
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>SL.NO</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            {CartData?.map((items, index) => (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{items.brand}</td>
                  <td><img width={'100px'} height={'50px'} src={items.thumbnail} alt="No  imag" /></td>
                  <td>{items.price}</td>
                  <td onClick={() => dispatch(deleteCart(items.id))}  ><i class="fa-solid fa-trash text-danger"></i></td>

                </tr>


              </tbody>

            ))}

          </Table>
        </div>

        <div className=' col-lg-4 m-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex  align-items-center justify-content-center'>Cart Summary</Card.Title>
              <Card.Text className='d-flex flex-column align-items-center'>
                <span> Total No of  products : {CartData.length}</span>
                <span>  price : ₹ {datas}</span>
                <button className='bg-success w-100 border border-success text-white mt-2' onClick={()=>orderplaced()}>CheckOut</button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div> :
        <div className='d-flex align-items-center justify-content-center w-100 flex-column' style={{ height: '500px' }}>
          <img src="https://th.bing.com/th/id/R.afa6a28d0ee0b5e7d55b7a5aecdfedec?rik=eOl3Z%2bU0XvmYlw&riu=http%3a%2f%2fiticsystem.com%2fimg%2fempty-cart.png&ehk=0omil1zRH7T3Pb5iTzvueamUQLSSb55vgY7dLFF8Bl8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="No image" style={{ height: '300px' }} />


          <Link to="/" ><i class="fa-solid fa-arrow-left mt-5 text-primary fs-4">back home</i></Link>



        </div>}


    </div>
  )
}

export default Cart