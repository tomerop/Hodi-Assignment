import React,{Component} from "react";
class Movie extends Component {
    state = { 
        arr:[
            {name:'Shrek',
            id:1,
            ganre:'scifi',
            time:'2:20',
            },
            {name:'adam project',
            id:2,
            ganre:'scifi',
            time:'1:50',
            },
            {name:'titanic',
            id:3,
            ganre:'scifi',
            time:'2:30',
            },
            {name:'fast 5',
            id:4,
            ganre:'scifi',
            time:'2:20',
            },
            {name:'taken',
            id:5,
            ganre:'action',
            time:'2:20',
            }
        ],
     } 
    render() { 
        return (
            <div>
                <table>
                <tr id="row1">
                    <th>{this.state.arr[0].name}</th>
                    <th>{this.state.arr[0].id}</th>
                    <th>{this.state.arr[0].ganre}</th>
                    <th>{this.state.arr[0].time}</th>
                    <th><button className="btn btn-danger" onClick={this.delete}>delete</button></th>
                </tr>
                <tr id="row1">
                    <th>{this.state.arr[1].name}</th>
                    <th>{this.state.arr[1].id}</th>
                    <th>{this.state.arr[1].ganre}</th>
                    <th>{this.state.arr[1].time}</th>
                    <th><button className="btn btn-danger" onClick={this.delete}>delete</button></th>
                </tr>
                <tr id="row1">
                    <th>{this.state.arr[2].name}</th>
                    <th>{this.state.arr[2].id}</th>
                    <th>{this.state.arr[2].ganre}</th>
                    <th>{this.state.arr[2].time}</th>
                    <th><button className="btn btn-danger" onClick={this.delete}>delete</button></th>
                </tr>
                <tr id="row1">
                    <th>{this.state.arr[3].name}</th>
                    <th>{this.state.arr[3].id}</th>
                    <th>{this.state.arr[3].ganre}</th>
                    <th>{this.state.arr[3].time}</th>
                    <th><button className="btn btn-danger" onClick={this.delete}>delete</button></th>
                </tr>
                <tr id="row1">
                    <th>{this.state.arr[4].name}</th>
                    <th>{this.state.arr[4].id}</th>
                    <th>{this.state.arr[4].ganre}</th>
                    <th>{this.state.arr[4].time}</th>
                    <th><button className="btn btn-danger" onClick={this.delete}>delete</button></th>
                </tr>
                </table>
            </div>
        );
    };
    delete(){
    document.getElementById('row1').remove();
    };
};

export default Movie;