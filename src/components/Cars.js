import React from "react";

const Car = ({children,color,age}) => {

    const colorInfo = color ? <p> Couleurs: {color} </p> : <p> Couleurs: Néant </p>
    const ageInfo = age ? <p> Age: {age} </p> : <p> Age: Néant </p>

    if(children){
        return(
         <div className="cars">
         <p> Marques: {children}</p>
        {colorInfo}
        {ageInfo}
        </div>
        )
    } else {
       return null
    }
}

export default Car;
