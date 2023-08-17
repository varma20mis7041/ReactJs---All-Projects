import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    currentSelectedCountry: countryAndCapitalsList[0].id,
  }

  getCountryName = () => {
    const {currentSelectedCountry} = this.state
    console.log('currentStateId', currentSelectedCountry)
    const country = countryAndCapitalsList.filter(
      eachOption => eachOption.id === currentSelectedCountry,
    )
    console.log('CountryList :', country)

    console.log('final_country', country[0].country)
    return country[0].country
  }

  onOptionChange = event => {
    this.setState({currentSelectedCountry: event.target.value})
  }

  render() {
    const displayCountry = this.getCountryName()
    console.log(displayCountry)
    return (
      <div className="countries_and_capitals_background_container">
        <div className="countries_and_capitals_card_container">
          <h1 className="page_main_heading">Countries And Capitals</h1>
          <select
            name="capitals_list"
            size="1"
            id="selectCapital"
            className="select_element"
            onClick={this.onOptionChange}
          >
            {countryAndCapitalsList.map(eachOptionItem => (
              <option value={eachOptionItem.id} key={eachOptionItem.id}>
                {eachOptionItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <label
            htmlFor="selectCapital"
            className="select_option_label_element"
          >
            is capital of which country?
          </label>
          <h1 className="country_element">{displayCountry}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
