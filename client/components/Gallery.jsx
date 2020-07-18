import React from 'react'

// class Gallery extends React.Component {

//     slideIndex = 1;
// showDivs(slideIndex);

// plusDivs = (n) => {
//   showDivs(slideIndex += n);
// }

// showDivs = (n) => {
//   var i;
//   var x = document.getElementsByClassName("drawings");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }
//     render() {
//         return(
//             <>
//             <h2 className="w3-center">Manual Slideshow</h2>

// <div className="w3-content w3-display-container">
//   <img className="mySlides" src="img_snowtops.jpg" style="width:100%"/>
//   <img className="mySlides" src="img_lights.jpg" style="width:100%"/>
//   <img className="mySlides" src="img_mountains.jpg" style="width:100%"/>
//   <img className="mySlides" src="img_forest.jpg" style="width:100%"/>

//   <button className="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
//   <button className="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
// </div>

//             </>
//         )
//     }
// }

class Gallery extends React.Component {
    state = {
        images: [
            "https://images.unsplash.com/photo-1511694009171-3cdddf4484ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=978&q=80"
        ],
        currentIndex: 0
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
        const imageToShow = this.state.images[this.state.currentIndex]

        const fakePrompt = "cute kittens"
        const fakeUsername = "Marta Farta"
        const displayText = `${this.state.currentIndex + 1} / ${this.state.images.length} - ${fakePrompt} by ${fakeUsername}`

        return (
            <div className="gallery-image-container">
                <img className="gallery-image" src={imageToShow} width="500"/>
                <button className="gallery-image-nav gallery-image-prev" onClick={this.onPrev}>{"<"}</button>
                <button className="gallery-image-nav gallery-image-next" onClick={this.onNext}>{">"}</button>
                <div className="gallery-image-text">{displayText}</div>
            </div>
        )
    }
}

export default Gallery