import React from 'react'
import './book.css'

const Book = (props) => {
    return (
        <div className="list-group-item book">
            <div className="row">
                <div id="title"><strong>{props.book.title}</strong></div>
            </div>
            <div className="row">
                <div id="subtitle">{props.book.subtitle}</div>
            </div>
            <div className="row">
                <div id="author"><strong>Author: </strong>{props.book.author}</div>
                <div id="description"><strong>Description: </strong>{props.book.description}</div>
            </div>
            <div className="row">
                <div id="publisherInfo">
                    <div className="row" id="moreOptions">
                        <strong>Price: </strong>${props.book.price}.00
                        <button onClick={props.addToCart} id={props.book.id}>Add to Cart</button>
                        <a href={props.book.website} id="website">Visit Webpage </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book