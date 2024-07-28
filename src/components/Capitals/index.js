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
  state = {activeState: countryAndCapitalsList[0].id}
   onChangeCapital = event => {
    this.setState({activeState: event.target.value})
  }
  getCountry=()=>{
     const {activeState} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(eachCapital=>eachCapital.id===activeState)
    return activeCountryAndCapital.country
  }
  render() {
    const {activeState} = this.state
    const country = this.getCountry(activeState)
    return (
      <div className="bg-container">
        <div className="mini-container">
          <h1>Countries And Capitals</h1>
          <select value={activeState} onChange={this.onChangeCapital} id="capitals">
             {countryAndCapitalsList.map(eachCountry=>(
              <option key={eachCountry.id} value={eachCountry.id}>
                 {eachCountry.capitalDisplayText}
              </option>
             ))}
          </select>
          <label htmlFor="capitals"> is capital of which country?</label>
          <p>{country}</p>
        </div>
        
      </div>
    )
  }
}
export default Capitals
