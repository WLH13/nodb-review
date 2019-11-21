import React, {Component} from 'react';

class Pokemon extends Component {
    constructor(){
        super()
        this.state = {
            //toggleRename allows for conditional rendering between the pokemon name, and an input box for editing that name.
            toggleRename: false,
            renameInput: ''
        }
    }

    //Toggles view from h3 to input and back
    toggleEdit(){
        this.setState({toggleRename: !this.state.toggleRename})
    }

    //Captures user input
    handleInput(val){
        this.setState({
            renameInput: val
        })
    }

    //invokes the save function from props, passing in the id as params, and an object as the body. Then toggles the view
    saveButton(){
        this.props.saveFn(this.props.id, {newName: this.state.renameInput || this.props.name})
        this.toggleEdit()
    }

    render(){
        return(
            <div>
                {/* conditional rendering based on toggleRename */}
                {this.state.toggleRename ? (
                    <div>
                        <input onChange={(e) => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.saveButton()}>Save</button>
                    </div>
                ) : (
                    <h3 onDoubleClick={() => this.toggleEdit()}>{this.props.name}</h3>
                )}
                <img src={this.props.img} alt={this.props.name} />
                {/* invoke releaseFn from props, passing in props.id */}
                <button onClick={() => this.props.releaseFn(this.props.id)}>Release</button>
            </div>
        )
    }
}

export default Pokemon;