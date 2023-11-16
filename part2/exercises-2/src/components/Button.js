import './styles.css';

function Button() {

   function onLearnMore() {
      alert("I'm on a boat!!! I got my flippy floppies");
   }

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;