import classes from './ChoresList.module.css'

export default function ChoresList () {
   return  (
      <div style={{backgroundColor:  "rgb(0, 50, 55)"}}>
         <h3 className = {classes.choresHeading}>Chores To Do:</h3>
         <ul className={classes.choresText}>
            <li>Study for LaunchCode</li>
            <li>Complete LaunchCode Exercises</li>
            <li>Work on Graded Assignement 6</li>
         </ul>
      </div>);
}