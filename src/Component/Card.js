import React, { Component } from 'react'

export default class Card extends Component{

    state = {isClicked: false}
    render(){
        return (
            <div className="Card">
                <img 
                src={this.props.dogs}
                alt={"Random Dog Displays Here"}
                onClick ={ () => this.setState({isClicked: !this.state.isClikced})}
                />
                {  this.state.isClicked
                    ? <>
                        <h2>Whose a good dog!</h2>
                        <p> you're a good dog!</p> 
                    </>
                    : null 
                }
            </div>
        )
    }

}