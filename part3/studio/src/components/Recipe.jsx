import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.pinterest.com/pin/516084438582305490/";
   let authorPhoto = "https://i.pinimg.com/280x280_RS/31/96/56/3196569849eab9e739a39c9134fc6cde.jpg";
   let authorName = "Author Kristen Whitby";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["flour", "pecans-chopped", "powdered-sugar", "salted butter", "vanilla"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul className='recipeItems'>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Butter Pecan Snowball Meltaways</h1>
            <p>The BEST Snowball Cookies for Christmas.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.ellaclaireinspired.com/wp-content/uploads/2020/12/snowball-cookies-in-front-of-lights-scaled.jpg" alt="Butter Pecan Snowball Meltaways" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
