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
                <div id="publisherInfo">
                    <strong>Publisher: </strong>{props.book.publisher} <strong>Published: </strong>{date.toDateString()}
                </div>
            </div>

            <div className="row">
                <div id="pages"><strong>Pages: </strong>{props.book.pages}</div>
            </div>
            <div className="row">
                <a href={props.book.website} id="website">Visit Webpage</a>
            </div>
        </div>
    )
}

export default Book