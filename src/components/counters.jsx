import React,{Component} from "react";
import Counter from './counter';
class Counters extends Component {
    state = { 
        arr:[
            {id:1},
            {id:2},
            {id:3},
            {id:4},
            {id:5},
        ],
     } 
    render() { 
        return (
            <div>
                <tr>
                    <Counter></Counter>
                </tr>
            </div>
        );
    }
}
 
export default Counters;