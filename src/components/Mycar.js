import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  
state = {
    voitures: [
        {name: 'Ford', color: 'red',annee: 2000},
        {name: 'Mercedes', color: 'yellow',annee: 2004},
        {name: 'Renault', color: 'green',annee: 2007},
    ]}
    
  
    addTen =() => {
       const add = this.state.voitures.map((param) => {
           return param.annee -= 10;
        });
       this.setState({
           add
       })
    }
    

    render(){
        const date = new Date().getFullYear();
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.addTen}>Ajouter dix ans</button>
                {
                this.state.voitures.map((voiture,index) =>{
                    return (<Car key={index} color={voiture.color} age={date - voiture.annee + " ans"}>{voiture.name}</Car>
                )
                })
                }  
      </div> 
      )
    } 
}

export default Mycars;