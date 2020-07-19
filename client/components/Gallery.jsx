import React from 'react'
import { connect } from 'react-redux'
//import { fetchRounds } from '../actions/allRounds'
import { getAllRounds } from "../apis/apis"

class Gallery extends React.Component {
    state = {
        id: this.props.id,
        images: [
            "https://images.unsplash.com/photo-1511694009171-3cdddf4484ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=978&q=80"
        ],
        prompts: [],
        currentIndex: 0
    }

    componentDidMount() {
      getAllRounds(1)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
        //this is where the initial request for the tasks gets sent from. this one is going to actions
      //  this.props.dispatch(fetchRounds())
      }

    onNext = () => {
        let newIndex = this.state.currentIndex + 1
        if (newIndex > this.state.images.length - 1) {
            newIndex = 0
        }

        this.setState({
            currentIndex: newIndex
        })
    }

    onPrev = () => {
        let newIndex = this.state.currentIndex - 1
        if (newIndex < 0) {
            newIndex = this.state.images.length - 1
        }

        this.setState({
            currentIndex: newIndex
        })
    }

    render () {
        const imageToShow = this.props.rounds[this.state.currentIndex]

        const fakePrompt = "cute kittens"
        const fakeUsername = "Marta Farta"
        const displayText = `${this.state.currentIndex + 1} / ${this.props.rounds.length} - ${fakePrompt} by ${fakeUsername}`

        return (
            <div className="gallery-image-container">
                {/* {this.props.tasks.filter(task => !task.completed).map(task => {
              return (
                <form>
                  <label key={task.id}>
                    {task.task}
                    <button type="button" onClick={this.showDetails}>Details</button>
                    {this.state.showForm && <><DetailsForm task={task} /></>}
                  </label>
                  <input onChange={() => this.handleChange(task)} type="checkbox" />
                </form>
              )
            })} */}
                <img className="gallery-image center" src={imageToShow} width="500"/>
                <button className="gallery-image-nav gallery-image-prev" onClick={this.onPrev}>{"<"}</button>
                <button className="gallery-image-nav gallery-image-next" onClick={this.onNext}>{">"}</button>
                <div className="gallery-image-text">{displayText}</div>
            </div>
        )
    }
}

function mapStateToProps(globalState) {
    return {
      rounds: globalState.rounds
    }
  }

export default connect(mapStateToProps)(Gallery)