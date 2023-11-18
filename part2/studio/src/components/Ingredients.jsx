import recipedata from "./recipe.json";

function IngredientList() {
  let ingredients = recipedata[0].ingredients
   return (
    <div>
      <h3>Ingredients</h3>
        <ul> {ingredients.map((item, id) => {
          return <li key={[id]}>{item}</li>})}
        </ul>
    </div>);
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 