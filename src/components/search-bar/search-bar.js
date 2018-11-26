import React, { Component } from 'react'

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
        const { searchTerm } = this.state
        this.props.onSearch({ searchTerm })
        this.setState({
            searchTerm: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Search</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Search: </label>
                        <input value={this.state.searchTerm} onChange={this.onSearchChange} />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar

