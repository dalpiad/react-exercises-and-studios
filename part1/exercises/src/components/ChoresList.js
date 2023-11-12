import classes from './ChoresList.module.css'

export default function ChoresList () {
   return  (
      <div>
         <h3 className = {classes.choresHeading}>Chores To Do:</h3>
         <ul className={classes.choresText}>
            <li>Study for LaunchCode</li>
            <li>Complete LaunchCode Exercises</li>
            <li>Work on Graded Assignement 6</li>
         </ul>
      </div>);
}