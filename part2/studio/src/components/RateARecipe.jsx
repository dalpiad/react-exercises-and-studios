let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating() {
    if (props.rating >= 0 && props.rating <= 5) {
      return <h3>{stars[props.rating - 1]}</h3>;
    } else {
      return null;
    }
 }
  return GiveRating();
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js  (props.rating >= 0 && props.rating <= 5) ?  : null
