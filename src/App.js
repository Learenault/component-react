import React, {Component} from 'react';
import Mycars from './components/Mycar';
import './App.css';

class App extends Component {

  state = {
    titre : "Mon catalogue de voitures"
  }

  change = () => {
    this.setState({
      titre : "Nouveau titre"
    })
  }
 

  render(){
    return(
    <div className="App">
     <Mycars title = {this.state.titre}></Mycars>
     <button onClick={this.change}>Changement en dure</button>
    </div>

  )}};
  


export default App;
