import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div class="border-top  bg-primary" >


            <div class="container text-center mt-5 text-light">
                <div class="row">
                    <div class="col">
                        <div class="d-flex">
                        <i class="fa-solid fa-cart-shopping  fa-2x p-2"></i>
                            <h5>E-CART</h5>
                        </div>
                        <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur itaque consequuntur dolore hic accusamus perspiciatis voluptatibus quia exercitationem. Architecto aperiam accusantium laborum autem expedita magnam optio, fugit eius vel. Asperiores.</p>

                    </div>
                    <div class="col d-flex flex-column">
                        <h5>LINK</h5>

                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/Cart'}>Cart</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/Home'}>Home</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/WishList'}>WishList</Link>


                    </div>
                    <div class="col d-flex flex-column">
                        <h5>GUIDES</h5>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'https://react.dev/'}>React</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'https://react-bootstrap.github.io/'}>React Bootstarp</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'https://bootswatch.com/'}>React Bootwatch</Link>


                    </div>
                    <div class="col ">
                        <h5>CONTACT</h5>
                        <div class="d-flex " >
                            <input type="text" placeholder='Enter Email' class="form-control me-2" />
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mt-4 ">
                            <Link style={{ textDecoration: 'none', color: 'white' }}> <i class="fa-brands fa-instagram fs-3 me-3"></i></Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }} > <i class="fa-brands fa-twitter fs-3 me-3"></i></Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }}> <i class="fa-brands fa-facebook fs-3 me-3"></i></Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={'https://www.linkedin.com/login'}> <i class="fa-brands fa-linkedin fs-3 me-3"></i></Link>

                        </div>
                    </div>
                </div>
                <div>
                    <p>Copyrights@2023 E-CART React</p>
                </div>
            </div>
        </div>
    )
}

export default Footer