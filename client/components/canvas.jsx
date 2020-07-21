import { connect } from 'react-redux'
import React from 'react'
import { getRoundDataApi } from '../apis/apis'


class Canvas extends React.Component {

    state = {
        canvas: "",
        // writing: ""
    }

    // stage = null

    
    componentDidMount() {

            // const findPlayerToSendTo = () => {
            //     let positionNumber = this.props.playerPosition + (this.props.currentRound - 1)
            //     if (positionNumber >= this.props.playerIdList.length) {
            //         return this.props.playerIdList[positionNumber - (this.props.playerIdList.length)]
            //     } else {
            //         return this.props.playerIdList[positionNumber]
            //     }
            // }
    
            // console.log("this is the player", findPlayerToSendTo())
    
            // getRoundDataApi(findPlayerToSendTo(), this.props.currentRound - 1, this.props.gameId)
            //     .then(res => {
            //         let drawing = res[0].round2.replace("\\", "")
            //         console.log("inside ", drawing)
            //         this.setState({
            //             writing: res[0].round2
            //         })
            //         return res[0].round2
            //     })
    
        
        
        const findPlayerToSendTo = () => {
            // console.log('playerPosition: ', this.props.playerPosition)
            let positionNumber = this.props.playerPosition + (this.props.currentRound - 1)
            // console.log('positionNumber:', positionNumber)
            // console.log(positionNumber, 'vs', this.props.playerIdList.length);
            if (positionNumber >= this.props.playerIdList.length) {
                // console.log('wrap');
                return this.props.playerIdList[positionNumber - (this.props.playerIdList.length)]
            } else {
                // console.log('dont wrap')
                return this.props.playerIdList[positionNumber]
            }
        }

        var json = getRoundDataApi(findPlayerToSendTo(), this.props.currentRound, this.props.gameId)

        var width = 300;
        var height = 400;
        // first we need Konva core things: stage and layer

        //stage is our drawing space
        this.stage = new Konva.Stage({
            container: 'container',
            width: width,
            height: height,
        })

        //layer is our drawing layer on top of stage
        var layer = new Konva.Layer();
        this.stage.add(layer);

        var isPaint = false;
        var mode = 'brush';
        var lastLine;

        this.stage.on('mousedown touchstart', (e) => {
            isPaint = true;
            var pos = this.stage.getPointerPosition();
            lastLine = new Konva.Line({
                stroke: '#000000',
                strokeWidth: 5,
                globalCompositeOperation:
                    mode === 'brush' ? 'source-over' : 'destination-out',
                points: [pos.x, pos.y],
            });
            layer.add(lastLine);
        });

        this.stage.on('mouseup touchend', () => {
            isPaint = false;
            // console.log(this.stage.toJSON()) // this will be where the change is
            this.props.saveDrawing(this.stage.toJSON())
        });

        // and core function - drawing
        this.stage.on('mousemove touchmove', () => {
            if (!isPaint) {
                return;
            }
            const pos = this.stage.getPointerPosition();
            var newPoints = lastLine.points().concat([pos.x, pos.y]);
            lastLine.points(newPoints);
            layer.batchDraw();
        });
    }



    render() {


        return (
            <>
                <div className="control-container center">
                    <div id="container" className="center"></div>
                </div>
                {/* <div className="flex-center">
                    <button className="Canvas-SaveButton"
                        onClick={() => {
                            localStorage.setItem(
                                "drawing", this.stage.toJSON()
                            );
                        }}
                    >Save</button>
                </div> */}
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        players: state.players,
        playerId: state.playerId,
        gameId: state.game,
        roundNumber: state.currentRound,
        currentRound: state.currentRound,
        playerIdList: state.playerIdList
    }
}

export default connect(mapStateToProps)(Canvas)