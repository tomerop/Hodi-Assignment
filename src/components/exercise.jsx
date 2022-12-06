import React,{Component} from "react";

class Exercise extends Component{
    state={
        withStyle:true,
        arr:['hodu','hila','yahli','yarden'],
        type:'button',
    };
    render(){
        return <div>
            <button onClick={this.addMyName}>Push</button>
            {this.state.arr.map((name,index)=> <button key={index} className={this.state.withStyle? this.changeClass( name):''}>{name}</button>)}
            <input placeholder="write and enter" onKeyDown={(e)=>{if (e.key==='Enter'){this.addAny(e)}}} type="text" id='in'/>
            <input checked={this.state.withStyle} type="checkbox" name="check" className="ms-4" id="check" onChange={(ev)=>this.changeStyle(ev)} />
            <label htmlFor="chek">WithStyle?</label>
            <select name="typeo" className="ms-3" onChange={(en)=>this.changeType(en)}>
                <option value="button">button</option>
                <option value="h1">h1</option>
             </select>
             <br />
             {this.state.arr.map((name,index)=>this.generateElement(name,index))}
        </div>
    };
    generateElement(name,index){
        switch(this.state.type){
        case 'button':
            return <button key={index} className={this.state.withStyle? this.changeClass( name):''}>{name}</button>
        case 'h1':
            return <h1 key={index}>{name}</h1>
        }
    }
    changeType=(en)=>{
        this.state.type=en.target.value;
        this.setState({type: this.state.type});
    }
    changeStyle=()=>{
        this.setState({withStyle: !this.state.withStyle});
        
    }
    addMyName=()=>{
        this.state.arr.push('tomer');
        this.setState(this.state.arr);
    };
    addAny=(e)=>{
        console.log(e.target.value);
        console.log(e.target.id);
        this.state.arr.push(e.target.value);
        this.setState({arr:this.state.arr});
        e.target.value=''; 

    };
    changeClass(name){
        let x='btn m-4 btn-';
        return x+=name.includes('a')?'dark':'primary';
    };
};

export default Exercise;