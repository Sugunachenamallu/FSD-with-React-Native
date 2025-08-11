var mycards = [
       {
        "Image":"./dog.jpg",
        "price":"1200",
        "Brand":"Aavasa"
       },
        {
        "Image":"./dog.jpg",
        "price":"1300",
       "Brand":"Ajio"
       },
        {
        "Image":"./dog.jpg",
        "price":"1400",
        "Brand":"Myntra"
       },
        {
        "Image":"./dog.jpg",
        "price":"1500",
        "Brand":"flipkart"
       } ,   
       {
        "Image":"./dog.jpg",
        "price":"1500",
        "Brand":"flipkart"
       } ,   
       {
        "Image":"./dog.jpg",
        "price":"1500",
        "Brand":"flipkart"
       },    
       {
        "Image":"./dog.jpg",
        "price":"1500",
        "Brand":"flipkart"
       } ,   
       {
        "Image":"./dog.jpg",
        "price":"1500",
        "Brand":"flipkart"
       } ,   
        {
        "Image":"./dog.jpg",
        "price":"1500",
        "Brand":"flipkart"
       },    
        {
        "Image":"./dog.jpg",
        "price":"1500",
        "Brand":"flipkart"
       }    
]
var cards= mycards.map(ele=>{
           return(` 
            <div class="card">
                <div class="imag_sec">
                    <img src=${ele.Image} />
                </div>
                <div class="content-sec">
                    <div>price:${ele.price} </div>
                    <div>Brand:${ele.Brand} </div>
                </div>
              </div>`)
 });
  cards=cards.join(" ");
  var parent=document.getElementsByClassName("cards_parent")[0];
  parent.innerHTML=cards;


