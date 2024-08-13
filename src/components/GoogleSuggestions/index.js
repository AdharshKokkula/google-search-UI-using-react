import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    const {suggestionsList} = props
    console.log(suggestionsList)
    this.state = {
      searchInput: '',
      searchSuggestionsList: suggestionsList,
    }
  }

  onChangeSearchInput = event => {
    const {suggestionsList} = this.props
    const updatedSearchInput = event.target.value
    const searchSuggestionsUpdatedList = suggestionsList.filter(eachItem =>
      eachItem.suggestion
        .toLowerCase()
        .includes(updatedSearchInput.toLowerCase()),
    )
    this.setState({
      searchInput: updatedSearchInput,
      searchSuggestionsList: searchSuggestionsUpdatedList,
    })
  }

  onAcceptSuggestion = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput, searchSuggestionsList} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="logo"
            alt="google logo"
          />
          <div className="search-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              className="search-bar"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <ul className="search-suggestions-container">
              {searchSuggestionsList.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  suggestionDetails={eachItem}
                  onAcceptSuggestion={this.onAcceptSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
