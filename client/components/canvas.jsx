
import React from 'react'


class Canvas extends React.Component {



    // stage = null


    componentDidMount() {
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
                stroke: '#DF4B26',
                strokeWidth: 5,
                globalCompositeOperation:
                    mode === 'brush' ? 'source-over' : 'destination-out',
                points: [pos.x, pos.y],
            });
            layer.add(lastLine);
        });

        this.stage.on('mouseup touchend', () => {
            isPaint = false;
            console.log(this.stage.toJSON())
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
                <div className="flex-center">
                    <button
                        onClick={() => {
                            localStorage.setItem(
                                "drawing", this.stage.toJSON()
                            );
                        }}
                    >Save</button>
                </div>
            </>
        )
    }
}


export default Canvas
