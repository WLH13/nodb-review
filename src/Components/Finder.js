import React, {Component} from 'react';
import axios from 'axios';
import Grass from './Grass';

//wildPokemonArr contains the pokemon from the pokeApi request in the grassCtrl.
class Finder extends Component {
    constructor(){
        super()
        this.state = {
            wildPokemonArr: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    //makes the get request to get three random pokemon
    componentDidMount(){
        axios.get('/api/wild-pokemon').then(res => {
            this.setState({
                wildPokemonArr: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        console.log(this.state.wildPokemonArr)
        return(
            <div className="finder">
                {/* map over the wild pokemon for display */}
               {this.state.wildPokemonArr.map((element, index) => {
                   return (
                       <Grass 
                         catchFn={this.props.catchFn}
                         key={index}
                         pokemonData={element}
                         refreshFn={this.componentDidMount}/>
                   )
               })} 
            </div>
        )
    }
}

export default Finder;