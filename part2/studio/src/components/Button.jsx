import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";

function Button(props) {
  // if (props.saveButton) {
  //   return SaveButton();
  // } else {
  //   return ClickedButton();
  // }
  return props.saveButton ? SaveButton() : ClickedButton();
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 