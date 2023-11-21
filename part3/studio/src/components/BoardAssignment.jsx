import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label:"Cookies", value:"https://www.cookiesandmore.com/fake"}, {label:"Christman Treats", value:"https://www.allthingschristmastreats.com/fake"}, {label:"Holiday Favorites", value:"https://www.holidayrecipesevenyoucanmake.com/fake"}];
   const [boardName, setName] = useState('no boards yet!');

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>{boards.map((item, id) => {
          return (<option value={item.value} key={id}>{item.label}</option>)})}
      </select>
      <p>Saved to {boardName}!</p>
      </div>
   );
}
