import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onAcceptSuggestion} = props
  const {suggestion} = suggestionDetails
  const chooseSuggestion = () => {
    onAcceptSuggestion(suggestion)
  }
  return (
    <li className="search-suggestion-item">
      <p className="search-suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-icon"
        alt="arrow"
        onClick={chooseSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
