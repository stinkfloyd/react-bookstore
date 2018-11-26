import React, { Component } from 'react'
import './App.css'
import BookList from '../book-list/book-list'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bookList: [],
    }
  }

  componentDidMount = async () => {
    console.log('Mounted');

    await this.getBookList()
  }

  getBookList = async () => {
    // fetch books
    const bookListJSON = await fetch(`${process.env.REACT_APP_API_URL}/books`)
    let bookList = await bookListJSON.json()

    this.setState({ bookList })
  }

  render() {
    return (
      <div className="App">
        <BookList bookList={this.state.bookList} />
      </div>
    )
  }
}

export default App
