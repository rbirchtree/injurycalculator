import React, { Component } from 'react';
import SearchForm from './search-form';
//api.openweathermap.org/data/2.5/weather?q=cupertino&APPID=71dd692b6e018b9ef955bdbff87a0067

class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchCity: '524901',
      data: null,
      isLoading: false,
      error: null
    };
  }
  // fetch("http://api.openweathermap.org/data/2.5/weather?zip=94015,us&APPID=71dd692b6e018b9ef955bdbff87a0067")
  // .then( res => res.json()
  //   ).then(
  //   (result) => {
  //     this.setState({
  //       isLoaded: true,
  //       result
  //     })
  //   },
  //   (error) => {
  //     this.setState({
  //       isLoaded: true,
  //       error
  //     });
  //   }
  // );
  //http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
//    "id": 5368381, Los Angeles
//5419384 denver

  componentDidMount(){
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    let {searchCity} = this.state; 
    console.log('passed',searchCity)
    this.setState({ isLoading: false });
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${searchCity }&APPID=${API_KEY}`)
      .then( res => 
        res.json()
      )
      .then( data => {
        this.setState({
          isLoading: false,
          data
        })
      })
      .catch( error => {
        this.setState({error, isLoading: false})
      })

  }
  
  render() {
    const { isLoading } = this.state;
    console.log(this.state);
    console.log(this.state.searchCity);
      if (isLoading) {
        return <p>Loading ...</p>;
     }

    return (
        <div>
            <h1>Weather coming soon</h1>
            <SearchForm onChange={searchCity => this.setState({searchCity})}/>
        </div>
    );
  }
}

export default Weather;
// import React from 'react';

// import SearchForm from './search-form';
// import CharacterList from './character-list';

// export default class LiveSearch extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchTerm: ''
//         }
//     }

//     render() {
//         const characters = this.props.characters.filter(character =>
//             character.name.toLowerCase().includes(
//                 this.state.searchTerm.toLowerCase()
//             )
//         );
//         return (
//             <div className="live-search">
//                 <SearchForm onChange={searchTerm => this.setState({searchTerm})} />
//                 <CharacterList characters={characters} />
//             </div>
//         );
//     }
// }
