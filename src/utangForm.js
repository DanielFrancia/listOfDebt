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
            <tr><td> <input value={this.state.name} onChange={this.setName} type="text" placeholder="Kaibigan"/></td></tr>
            <tr><td> <input value={this.state.amount} onChange={this.setAmount} type="number" placeholder="Magkano?"/></td></tr>
            </table>
            <button className="add" onClick={this.save}>Idagdag sa Listahan</button>
          </div>
        )
    }
}

export default UtangForms