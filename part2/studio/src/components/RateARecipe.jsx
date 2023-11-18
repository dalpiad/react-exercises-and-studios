function RateARecipe() {
  let rating = props.rating;
  function GiveRating() {
    let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];
    if (rating >= 0 && rating <= 5) {
      return <h3>{stars[rating - 1]}</h3>;
    } else {
      return null;
    }
 }
  return GiveRating;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js  (props.rating >= 0 && props.rating <= 5) ?  : null
