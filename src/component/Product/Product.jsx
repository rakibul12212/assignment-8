import React from 'react';
import './Product.css'

const Product = (props) => {
   

    const{id,name,user,cover,date,title,tag,time}=props.product;
    const read=props.read;
    const bookmark=props.bookmark;
    
   

    return (
        <div className='product'>
            <img src={cover} alt='cover'     className='cover'/>
            <div className='user-details'>
               <img src={user}alt='user' className='user-img'/>
               <div className='user-name'>
                 <h3 className='user-name'>{name}</h3>
                 <p className='time'><small>{date}</small></p>
                </div> 
                <div className='bookmark'>
                 <p >{time} min read</p> 
                 <div>
                 <svg onClick={()=>bookmark(props.product)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="20" height="20"
                  viewBox="0 0 50 50">
                  <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z" ></path>
                  </svg>
                 </div>

                </div>
            </div>
            <div className='title'>
               <h3 className='title'>{title}</h3>
                <p>{tag}</p>
                <p onClick={()=> read(props.product)} href='read'>Mark as read </p>
            </div>
        </div>
    );
};

export default Product;