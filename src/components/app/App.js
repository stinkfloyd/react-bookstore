import React, { Component } from 'react'
import './App.css'
import BookList from '../book-list/book-list'
import CartList from '../cart-list/cart-list'
import SearchBar from '../search-bar/search-bar'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bookList: [],
      cartList: [],
      total: 0
    }
  }

  componentDidMount = async () => {
    await this.getBookList()
  }

  getBookList = async () => {
    // fetch books
    const bookListJSON = await fetch(`${process.env.REACT_APP_API_URL}/books`)
    let bookList = await bookListJSON.json()

    this.setState({
      ...this.state,
      bookList
    })
  }

  addToCart = async (ev) => {
    let id = ev.target.id
    const bookListJSON = await fetch(`${process.env.REACT_APP_API_URL}/books`)
    let bookList = await bookListJSON.json()
    let bookToAdd = bookList.filter((book) => {
      return (book.id == id)
    })
    bookToAdd[0].inCart = true
    let result = bookList.filter((book) => {
      return (book.inCart)
    })
    console.log(result);
    this.setState({
      ...this.state,
      cartList: this.state.cartList.concat(result),
      total: (this.state.cartList.length + 1) * 5
    })
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
          ...this.state,
          bookList: result
        })
        break
      case 'author':
        result = bookList.filter((book) => {
          return (book.author.includes(searchTerm))
        })
        this.setState({
          ...this.state,
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
            <BookList bookList={this.state.bookList} addToCart={this.addToCart} />
          </div>
          <div className="col-sm-6">
            <CartList cartList={this.state.cartList} total={this.state.total} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
