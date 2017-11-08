import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UtangForms from './utangForm';

class App extends Component {
  state={
    listahan:[]
  }
  addUtang=(utang)=>{
    this.setState({
      listahan:[...this.state.listahan,utang]
    })
  }

  bura=(index)=>{
    this.setState({
    listahan:this.state.listahan.slice(0,index).concat(this.state.listahan.slice(index+1))
  })}

  render() {
    var list=[]
    this.state.listahan.forEach((utang, i) =>{
      list.push(
        <ListItem
          bura={this.bura}
          index={i}
          name={utang.name}
          amount={utang.amount}/>
      )
    })
    return (
     <div>
       <nav>
          <ul>
          <li><img src="https://www.choicenotchance.org.nz/files/wallet-green-x2.png" width="180" height="80" alt="wallet logo"></img></li>
          <li className="navtitle">Debt Collector's List</li>
          </ul>
      </nav>
      <div className="form"> 
      <UtangForms addUtang={this.addUtang}/>
      </div>
    
        <div>
          <table className="table">
          <tr>
              <th>Name</th>
              <th>Amount</th>
              <th></th>
          </tr>
            <tbody>
            {list}
            </tbody>
            </table>
          </div>
      </div>
    )
  }
}

class ListItem extends Component{
  bura=()=>{
    this.props.bura(this.props.index)
  }
  render(){
    return(
      <tr >
        <td>{this.props.name}</td>
        <td>{this.props.amount}</td>
        <td><button className="bayad" onClick={this.bura}>Paid</button></td>
      </tr>
    )
  }
}


export default App;

