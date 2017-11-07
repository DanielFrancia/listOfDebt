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

  burahin=(index)=>{
    this.setState({
      listahan:this.state.listahan.slice(0,index).concat(this.state.listahan.slice(index+1))
    })
  }

  render() {
    var list=[]
    var total=0
    this.state.listahan.forEach(utang=>{
      total+=utang.amount
      list.push(
        <ListItem
          name={utang.name}
          amount={utang.amount}/>
      )
    })
    return (
     <div className="container">
       <div className="con">
     <UtangForms addUtang={this.addUtang}/>
   </div> 
   <br/>
   <div>
   <table className="table">
   <tr>
      <th>Tropang Umutang</th>
      <th>Halaga</th>
   </tr>
     <tbody>
     {list}
     <tr>
       <td>Total:</td>
         <td>{total}</td>
         </tr>
         </tbody>
     </table>
    </div>
    </div>
    )
  }
}

class ListItem extends Component{
  
  render(){
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.amount}<button onClick={this.burahin}>Paid</button></td>
      </tr>
    )
  }
}


export default App;
