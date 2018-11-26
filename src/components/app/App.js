import React, { Component } from 'react'
import './App.css'
import BookList from '../book-list/book-list'
import SearchBar from '../search-bar/search-bar'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bookList: [],
    }
  }

  componentDidMount = async () => {
    await this.getBookList()
  }

  getBookList = async () => {
    // fetch books
    const bookListJSON = await fetch(`${process.env.REACT_APP_API_URL}/books`)
    let bookList = await bookListJSON.json()

    this.setState({ bookList })
  }

  onSearch = ({ searchTerm }) => {
    //this needs to search for the book by the term
    console.log(searchTerm);

  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.onSearch} />
        <BookList bookList={this.state.bookList} />
      </div>
    )
  }
}

export default App
