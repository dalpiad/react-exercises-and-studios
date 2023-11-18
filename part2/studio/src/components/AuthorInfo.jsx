import recipedata from "./recipe.json";

function AuthorInfo() {
  let recipeAuthorImage = (<div>
    <img src={recipedata[0].authorImage} className="authorImage" alt={recipedata[0].author}/>
  </div>);
  let recipeAuthor  = (<div key={recipedata.name}>
    {recipedata[0].author}
  </div>);
  let recipeWebsite = <a>{recipedata[0].website}</a>;
  
   return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 