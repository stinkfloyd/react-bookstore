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


  onSearch = async ({ searchTerm, searchType }) => {
    //this needs to search for the book by the term
    console.log(`Search term: ${searchTerm}, Search type: ${searchType}`)
    const bookListJSON = await fetch(`${process.env.REACT_APP_API_URL}/books`)
    let bookList = await bookListJSON.json()
    let result
    switch (searchType) {
      case 'title':
        result = bookList.filter((book) => {
          return (book.title.includes(searchTerm))
        })
        this.setState({
          bookList: result
        })
        break
      case 'author':
        result = bookList.filter((book) => {
          return (book.author.includes(searchTerm))
        })
        this.setState({
          bookList: result
        })
        break
      default:

    }


  }

  render() {
    return (
      <div className="App container">
        <SearchBar onSearch={this.onSearch} onReset={this.getBookList} />
        <div className="row">
          <div className="col-sm-6">
            <BookList bookList={this.state.bookList} />
          </div>
          <div className="col-sm-6">
            <h1>Cart</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default App
