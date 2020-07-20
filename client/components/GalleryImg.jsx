import React from 'react'
class GalleryImg extends React.Component {
    componentDidMount() {
        var width = 300;
        var height = 400;
        var json =
            { 
                "attrs": { "width": 300, "height": 400 }, "className": "Stage", "children": [{ "attrs": {}, "className": "Layer", "children": [{ "attrs": { "stroke": "#DF4B26", "strokeWidth": 5, "points": [
                    102.3466796875, 111.5767822265625, 123.25335693359375, 106.35009765625, 133.70669555664062, 101.1234130859375, 149.38668823242188, 98.510009765625, 152.00003051757812, 98.510009765625, 162.45333862304688, 93.283447265625, 167.68002319335938, 93.283447265625, 178.13336181640625, 88.0567626953125, 180.74667358398438, 82.830078125, 191.20001220703125, 82.830078125, 196.42669677734375, 80.2166748046875, 206.88003540039062, 77.6033935546875, 217.33334350585938, 74.9901123046875, 222.56002807617188, 74.9901123046875, 227.78668212890625, 69.763427734375, 230.4000244140625, 69.763427734375, 238.24002075195312, 67.1500244140625, 240.85336303710938, 67.1500244140625, 243.46670532226562, 67.1500244140625, 243.46670532226562, 69.763427734375, 243.46670532226562, 74.9901123046875, 240.85336303710938, 90.6700439453125, 235.62667846679688, 93.283447265625, 225.17337036132812, 108.96337890625, 219.94668579101562, 114.1900634765625, 212.106689453125, 124.6434326171875, 206.88003540039062, 135.0966796875, 201.65335083007812, 140.3233642578125, 191.20001220703125, 153.3900146484375, 178.13336181640625, 166.456787109375, 170.29336547851562, 176.9100341796875, 167.68002319335938, 179.5234375, 162.45333862304688, 184.7501220703125, 157.2266845703125, 192.590087890625, 154.61334228515625, 200.4300537109375, 154.61334228515625, 203.04345703125, 154.61334228515625, 205.65673828125, 152.00003051757812, 210.8834228515625, 154.61334228515625, 210.8834228515625, 159.84002685546875, 210.8834228515625, 183.36001586914062, 210.8834228515625, 196.42669677734375, 208.27001953125, 222.56002807617188, 208.27001953125, 240.85336303710938, 208.27001953125, 261.760009765625, 208.27001953125, 282.66668701171875, 208.27001953125, 306.18670654296875, 208.27001953125, 316.6400146484375, 208.27001953125, 324.48004150390625, 208.27001953125, 327.0933837890625, 208.27001953125, 327.0933837890625, 210.8834228515625, 327.0933837890625, 213.4967041015625, 327.0933837890625, 218.723388671875, 324.48004150390625, 223.9500732421875, 321.86669921875, 226.5633544921875, 319.25335693359375, 229.1767578125, 319.25335693359375, 231.7900390625, 316.6400146484375, 234.4034423828125, 311.41339111328125, 239.630126953125, 311.41339111328125, 247.4700927734375, 295.73333740234375, 255.31005859375, 293.12005615234375, 257.9234619140625, 290.5067138671875, 260.5367431640625
                ] 
            }, 
            "className": "Line" 
            }] }] 
        }
        var stage = Konva.Node.create(this.props.data, this.props.custmId);
 
    }
    render() {
        return (
            <>
                <div className=" Writing-box center">
                    <div id="container">
                        <div id={this.props.custmId} className="container center"></div>
                    </div>
                </div>
            </>
        )
    }
}
export default GalleryImg