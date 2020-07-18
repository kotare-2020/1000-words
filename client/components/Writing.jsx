import React from 'react'
import ViewSpace from './ViewSpace'

class Writing extends React.Component {

    handleClick = () => {
        // send input 
        console.log(this.props.JSON)
    }

    Instructions = () => {
        if (this.props.JSON != undefined) {
            return "Describe what you see!"
        } else {
            return "Write anything you can think of!"
        }
    }

    render() {
        console.log(this.props.JSON)
        return (
            <>
                <textarea name="writing" rows="5" cols="80" className="Writing_textInput center">The cat was playing in the garden.</textarea>
                <div className="control-container center">
                <ViewSpace />
                </div>
                <button onClick={this.handleClick} className="Writing_button center">DONE</button>
            </>
        )
    }

}
export default Writing

