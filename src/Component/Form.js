import React, { Component } from 'react'

const initialState = {
    name: ''
}

export default class Form extends Component {

    state = initialState

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addGoodDog(this.state)

        this.setState(initialState)
    }

    handleNewName(event){
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Who else is a good dog?</h3>
                <label>Dogs Name: </label>
                <input name="name" 
                value={this.state.name}
                onChange={(event) => this.handleNewName (event)}
                />
                <input type="submit" value="Add New Good Dog"/>
            </form>
        )
    }
}
