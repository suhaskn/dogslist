import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogsList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>
    <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
  </li>
  }

  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        { !dogBreeds && 'Loading...' }

        {
          dogBreeds &&
          <ul>{ dogBreeds.map(this.renderDogBreed) }</ul>
        }
      </div>
    )
  }
}

//Below code is modified and made into container DogsLish and DogsListContainer

// import React, {Component} from 'react'
// import * as request from 'superagent'

// export default class DogsList extends Component {

//   state = { dogBreeds: null }
  
//   componentDidMount() {
//     request
//       .get('https://dog.ceo/api/breeds/list/all')
//       .then(response => this.updateBreeds(Object.keys(response.body.message)))
//       .catch(console.error)
//   }
//   updateBreeds(breeds) {
//     this.setState({
//       dogBreeds: breeds
//     })
//   }

//   render() {
//     return (
//         <div className="dogs-list">
//         <h1>Dogs List</h1>
//         {/* if state dogbreeds is null, display 'Loading' */}
//         { this.state.dogBreeds === null ? 'Loading...' :
//         <ul>
//              {this.state.dogBreeds.map(breed => <li key={breed}>{breed}</li>)}
//          </ul>}
//       </div>
//     )
//  }  
// }