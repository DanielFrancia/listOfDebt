import React, {Component} from 'react'


class UtangForms extends Component{
    state={
        name:"",
        amount:"",
 
    }

    setName=(v)=>{
        this.setState({name:(v.target.value)})
    }

    setAmount=(v)=>{
        this.setState({amount:parseFloat(v.target.value)})
    }

    save=()=>{
        this.props.addUtang(this.state)
        this.setState({
            name:"",
            amount:"",
        })
    }

    render(){
        return(
            <div>
            <table>
            <tr><td> <input value={this.state.name} onChange={this.setName} type="text" placeholder="Name"/></td></tr>
            <tr><td> <input value={this.state.amount} onChange={this.setAmount} type="number" placeholder="Amount"/></td></tr>
            </table>
            <button className="add" onClick={this.save}>Add to list</button>
          </div>
        )
    }
}

export default UtangForms