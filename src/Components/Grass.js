import React, {Component} from 'react';
import grass from '../assets/pokemon-grass.png'

//grassClicked toggles the image from grass(in assets folder), to the pokemon image
class Grass extends Component {
    constructor(){
        super()
        this.state = {
            grassClicked: false
        }
    }

    //if grassClicked is false, it switches to true. If grassClicked is true, it runs the catchPokemon function
    checkGrass(){
        if(!this.state.grassClicked){
            return this.setState({grassClicked: true})
        } else {
            this.catchPokemon()
        }
    }

    //invokes the catchFn from props, passing in the body object, sets grassClicked to false, and then invokes refreshFn from props, which gives three new random pokemon to the viewport
    catchPokemon(){
        this.props.catchFn({
            name: this.props.pokemonData.name,
            img: this.props.pokemonData.sprites.front_default
        })
        this.setState({
            grassClicked: false
        })
        this.props.refreshFn()
    }

    render(){
        const {pokemonData} = this.props;
        return(
            <div className="grass">
                <img
                 onClick={() => this.checkGrass()}
                 src={this.state.grassClicked ? pokemonData.sprites.front_default : grass}
                 alt={pokemonData.name}/>
            </div>
        )
    }
}

export default Grass;