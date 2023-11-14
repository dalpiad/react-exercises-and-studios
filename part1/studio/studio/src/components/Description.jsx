import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor () {
    let authorLink = "https://www.pinterest.com/pin/516084438582305490/";
    let authorPhoto = "https://i.pinimg.com/280x280_RS/31/96/56/3196569849eab9e739a39c9134fc6cde.jpg";
    let authorName = "Kristen Whitby";
    
    return  (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Author Kristen Whitby" className={styles.imageAuthorUpdates} />
        <div>
           <h3>{authorName}</h3>
           <a href={authorLink}>Recipe from ellaclaireinspired.com</a> 
        </div>
        </div>
    )};

class RecipeDescription extends React.Component {
    render() {
        return (
        <div> 
            <div>
                <h1>Butter Pecan Snowball Meltaways</h1>
                <p>The BEST Snowball Cookies for Christmas</p>
            </div>
        <RecipeAuthor />
        </div>
    )}
};

export default RecipeDescription;