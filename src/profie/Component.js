import React from 'react';
import picture from '../picture.gif';
import PropTypes from 'prop-types';

const Component = props =>{

    

     return (
        <div>
             {props.fullname!=' ' ? (
       <h1 style={{color: "red"}}> {props.fullname} </h1>
     ) : (
       <h1> we need that props</h1>
     )}
        <h2>   {props.children}</h2>
        <button onClick={() => props.alertMyInput(`Here is Toumi Yassine`)}>
          ClickMe
        </button>
        <h3>React {props.version} </h3>
          </div>
        )
     }
        Component.propTypes = {
      stringProp: PropTypes.string,
     };
    export default Component;
   