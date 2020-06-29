 let Pizza = "pizza";
 let Burger = "burger";
 let Sushi = "sushi"
 let unavailable = "Sorry Your Order is unavailable";
 let choice = prompt("ما هو  طلبك؟");

 if (choice == "1") {
     console.log(Pizza);
 }
 else if (choice == "2") {
     console.log(Burger);
 }
 else if (choice == "3") {
     console.log(Sushi);
 }else {
     console.log(unavailable)
 }

 //  Calculator


number1 = prompt("ادخل الرقم الاول")
number2 = prompt("ادخل الرقم الثاني")

type = prompt("اختر العمليه الحسابيه (+ - / *)")

let x = parseInt(number1);
let y = parseInt(number2)

let answer = null
if (x && y ) {
    if (type == "*"){
   answer = x * y;
   console.log(answer);
    } 
  else if (type == "+"){
    answer = x + y;
    console.log(answer);
 }
 else if (type == "-"){
    answer = x - y;
    console.log(answer);
 }
 else if (type == "/"){
    answer = x / y;
    console.log(answer);
 }else{
     console.log("العمليه غير صحيحه")
 }
}else {
    console.log("احد الارقام غير صحيحه")
 }














 //   Age
 
 let age = 3
 console.log(age);

 if (age >= 4 && age <= 6) {

 console.log("انت في الروضه")

 }else if (age <= 17 && age >= 7) {

    console.log("انت في المدرسه")
    
    }else if (age < 27 && age >= 18) {

        console.log("انت في الجامعه")
    }else {
        console.log("لا تستوفي الشروط")
    }
    
        
  
    





      
  

     
      
  










