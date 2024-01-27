import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';


function Header() {

    
        const data = useSelector((state)=>state.wiishlistreducer)
        console.log(data.state.length);


        const cartData = useSelector((state)=>state.cartSlicereducer)
        console.log(cartData);


    return (

        <Navbar expand="lg" className="bg-primary " style={{ height: '110px' }}>
            <Container >
                <Navbar.Brand className='text-light fs-1' ><i class="fa-solid fa-cart-shopping  fa-1x p-2"></i>
                    E- CART</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" >
                        <Link className="p-2" style={{ textDecoration: 'none', color: 'white' }} to={'/'}><i class="fa-solid fa-house p-1"></i>Home</Link>
                        <Link className="p-2" style={{ textDecoration: 'none', color: 'white',border:'1px solid white' ,borderRadius:'10px',height:'45px' }}  to={'Cart'}><i class="fa-solid fa-cart-shopping p-1"></i>Cart <Badge text="light">{cartData.state.length}</Badge> </Link>
                        
                        <Link className="p-2 ms-2" style={{ textDecoration: 'none', color: 'white',border:'1px solid white' ,borderRadius:'10px',height:'45px' }} to={'WishList'}><i class="fa-solid fa-heart p-1 "></i>WishList <Badge text="light">{data.state.length}</Badge></Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header