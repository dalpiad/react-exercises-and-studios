export default function HobbyLinks () {
    let hobbyLinks = ["https://www.microcenter.com/", "https://pcpartpicker.com/"];
    return  (<div style={{border: '2px solid black'}}>
        <a href = {hobbyLinks[0]}>MicroCenter</a> <br></br>
        <a href = {hobbyLinks[1]}>PC Part Picker</a>
        </div>)
 }