import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  handleChange(term) {
    this.setState({term})
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <div className="sixteen wide column">
        <div className="ui segment secondary">
          <div className="ui huge fluid input">
            <input
              type="text"
              placeholder="Search Youtube..."
              value={this.state.term}
              onChange={event => this.handleChange(event.target.value)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
