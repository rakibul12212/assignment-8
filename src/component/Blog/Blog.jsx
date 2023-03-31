import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Blog.css';
const Blog = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data=>setProducts(data))

    },[])

    const bookmark = (product)=>{
        const newCart =[...cart,product];
        setCart(newCart)
    }


    const read = (product)=>{
        const newCart =[...cart,product];
        setCart(newCart)
    }
    
    return (
        <div className='blog-container'>
            <div className='peoducts-container'>
              {
                products.map(product=> <Product
                  key={product.id}
                  product={product}
                  read={read}
                  bookmark={bookmark}
              
                  
                ></Product>)
              } 

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>
            <div className='QA'>
               <div className="q1">
               <h3>What is the difference between 'props' and 'state'?</h3>
               <p>The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child. </p>
               </div>
               <div className="q2">
               <h3>How 'useState' works?</h3>
               <p>useState  allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.</p>
               </div>
              <div className="q3">
              <h3>Purpose of useEffect other than fetching data?</h3>
               <p>The useEffect Hook allows you to perform side effects in your components.
               Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional.</p>
              </div>
               <div className="q4">
               <h3>How Does React work?</h3>
               <p>React is a JavaScript library that creates UI in a predictable and efficient way using declarative code. we can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.</p>
               </div>
            </div>
            
        </div>
    );
};

export default Blog;