
import React from 'react'


class Canvas extends React.Component {



    // stage = null


    componentDidMount() {
        var select = document.getElementById('tool');
        console.log(select)
        select.addEventListener('change', function () {
            mode = select.value;
        });
        var width = 500 ;
        var height = 500 ;
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
        this.stage.on('mousemove touchmove',  () => {
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

                Tool:
                <select id="tool">
                    <option value="brush">Brush</option>
                    <option value="eraser">Eraser</option>
                </select>
                <button
                    onClick={() => {
                        localStorage.setItem(
                            "drawing", this.stage.toJSON()
                        );
                    }}
                >
                    Save
          </button>
          <div className="control-container center">
          <div id="container" className="center"></div>
          </div>
            </>
        )
    }
}


export default Canvas
