import React from 'react'
import Book from '../book/book'

const BookList = (props) => {
    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {props.bookList.map(
                    (book, idx) => {
                        return <Book key={idx} book={book} />
                    }
                )}
            </ul>
        </div>
    )
}

export default BookList