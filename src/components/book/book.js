import React from 'react'
import './book.css'

const Book = (props) => {
    console.log('Book', props);
    let date = new Date(props.book.published)
    return (
        <div className="list-group-item book">
            <div className="row">
                <div id="title">{props.book.title}</div>
            </div>
            <div className="row">
                <div id="subtitle">{props.book.subtitle}</div>
            </div>
            <div className="row">
                <div id="description">{props.book.description}</div>
            </div>
            <div className="row">
                <a href={props.book.website} id="website">Visit Webpage</a>
            </div>
            <div className="row">
                <div id="publisher">Publisher: {props.book.publisher}</div>
                <div id="publisher"> Published: {date.toDateString()}</div>
            </div>
        </div>
    )
}

export default Book