import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let totalBookmark = '';
    let read = 0;

    for (const product of cart) {
        totalBookmark += product.title + '<br>';
    }

    for (const product of cart) {
        read += product.time;
    }

    return (
        <div>
            <div className='cart'>
                <h3 className='spent-time'>Spent time on read: {read} mins</h3>
                <h3>Bookmarked Bloges: {cart.length}</h3>
                <h4 className='bookmark-massage' dangerouslySetInnerHTML={{__html: totalBookmark}}></h4>
            </div>
        </div>
    );
};

export default Cart;
