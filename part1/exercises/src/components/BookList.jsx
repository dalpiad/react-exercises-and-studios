export default function BookList() {
   let pageTitle = "Recommended Books";
   let book1 = "https://img.thriftbooks.com/api/images/i/m/D34191CC5B46D28CB963AB86D8B0B303482EED1C.jpg";
   let book2 = "https://ebooksz.net/wp-content/uploads/2017/02/1942130.jpg";
   let book3 = "https://i.ebayimg.com/images/g/JfcAAOSwEhdePLcA/s-l500.jpg";

   return (
      <div style={{border: '2px solid black'}}>
         <h3>{pageTitle}</h3>
         <img src={book1} height="300" alt="Learning How to Learn: How to Succeed in School Without Spending All Your Time Studying" />
         <img src={book2} height="300" alt="HTML5 Programming with JavaScript For Dummies" />
         <img src={book3} height="300" alt="Yay You! Moving Up and Moving On" />
      </div>      
   );
}