import React, { Component } from 'react'
import './search-bar.css'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    onSearchChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            searchTerm: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const searchType = e.target.searchType.value
        const { searchTerm } = this.state

        this.props.onSearch({ searchTerm, searchType })
        this.setState({
            searchTerm: ''
        })
    }

    render() {
        return (
            <div className="col-sm-12" id="searchBar">
                <h3>Search</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Search: </label>
                        <input value={this.state.searchTerm} name="searchTerm" onChange={this.onSearchChange} required />
                    </div>
                    <div className="radio">
                        <label>Author<input type="radio" name="searchType" value="author" defaultChecked /></label>
                        <label>Title<input type="radio" name="searchType" value="title" /></label>
                    </div>
                    <div id="buttonRow">
                        <input type="submit" className="btn btn-primary" />
                        <button type="button" className="btn btn-primary" onClick={this.props.onReset}>Reset Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar

