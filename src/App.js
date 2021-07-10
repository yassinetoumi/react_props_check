import './App.css';
import Component from  './profie/Component.js';
import picture from './picture.gif';
    const App = () => {
      const alertMyInput = button => alert(button);
      return (
        <div>
       
                <Component fullname="Toumi Yassine is a React Developer also Adaptive ,Creatif and Hard Worker"
                 alertMyInput={alertMyInput}version='16'>
   <Component > < img src={picture} alt="profil image" /> </Component >

   </Component >
      </div>
     );
  
      }

export default App;
