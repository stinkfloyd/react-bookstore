import React from 'react'
import './book.css'

const Book = (props) => {
    let date = new Date(props.book.published)
    return (
        <div className="list-group-item book">
            <div className="row">
                <div id="title"><strong>{props.book.title}</strong></div>
            </div>
            <div className="row">
                <div id="subtitle">{props.book.subtitle}</div>
            </div>
            <div className="row">
                <div id="description"><strong>Description: </strong>{props.book.description}</div>
            </div>
            <div className="row">
                <div id="publisherInfo">
                    <strong>Publisher: </strong>{props.book.publisher} <strong>Published: </strong>{date.toDateString()} <strong>Pages: </strong>{props.book.pages} <a href={props.book.website} id="website">Visit Webpage</a>
                </div>
            </div>
        </div>
    )
}

export default Book