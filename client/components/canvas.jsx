
import React from 'react'


class Canvas extends React.Component {


    

    componentDidMount(){
        var select = document.getElementById('tool');
        console.log(select)
    }
    
    // select.addEventListener('change', function () {
    //     mode = select.value;
    // });


    render() {
        
        var width = window.innerWidth;
    var height = window.innerHeight - 25;
    // first we need Konva core things: stage and layer
    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height,
    })

    var layer = new Konva.Layer();
    stage.add(layer);

    var isPaint = false;
    var mode = 'brush';
    var lastLine;

    stage.on('mousedown touchstart', function (e) {
        isPaint = true;
        console.log(stage.toJSON())
        var pos = stage.getPointerPosition();
        lastLine = new Konva.Line({
            stroke: '#DF4B26',
            strokeWidth: 5,
            globalCompositeOperation:
                mode === 'brush' ? 'source-over' : 'destination-out',
            points: [pos.x, pos.y],
        });
        layer.add(lastLine);
    });

    stage.on('mouseup touchend', function () {
        isPaint = false;
    });

    // and core function - drawing
    stage.on('mousemove touchmove', function () {
        if (!isPaint) {
            return;
        }
        const pos = stage.getPointerPosition();
        var newPoints = lastLine.points().concat([pos.x, pos.y]);
        lastLine.points(newPoints);
        layer.batchDraw();
    });
    
    return (
        <>

            Tool:
            <select id="tool">
                <option value="brush">Brush</option>
                <option value="eraser">Eraser</option>
            </select>
            {/* <div id="container"></div> */}

        </>
    )
    }
}


export default Canvas
