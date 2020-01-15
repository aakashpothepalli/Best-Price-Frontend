import React from 'react';

function CartItem(props) {
    return (
        <div className='card'  style={{margin:20}}>
        <div className="card-body">
            <div className='card-title '>
                {props.name}</div>
            <button className='btn btn-primary' >Remove</button>
        </div>

    </div>
    );
}

export default CartItem;