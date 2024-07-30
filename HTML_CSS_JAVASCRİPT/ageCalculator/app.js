function age(){
    const date = document.getElementById("date").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
   
   let todayDate = new Date();
   let todayDay = todayDate.getDate();
   let todayMonth = 1 + todayDate.getMonth();
   let todayYear = todayDate.getFullYear();

   const month2 =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   if (date > todayDay){
    todayDay = todayDay + month2[todayMonth - 1];
    todayMonth = todayMonth - 1 ;
   }

   if (month > todayMonth){
    todayMonth = todayMonth + 12;
    todayYear = todayYear -1 ;
   }

   let d = todayDay - date ;
   let m = todayMonth - month;
   let y = todayYear - year;

   document.getElementById("age_result").innerHTML = "Your age is "+ y + " Years "+ m +" Month " + d + "Days";


}