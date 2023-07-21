
document.querySelector('#getresult').addEventListener('click', run)


function run(){
    
    //The block of code below prevents the form submission until the input values are valid
    //The runform function also prevents page auto refresh
    const Form = document.querySelector('#myform')
    Form.addEventListener('submit', runform)

     function runform(event){
      event.preventDefault();
    }

    let yourYear
    let yourMonth
    let yourDay

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;  
    const currentDay = currentDate.getDate();

    let Day = document.querySelector('#day').value 
    let Month = document.querySelector('#month').value  
    let Year = document.querySelector('#year').value

    //The logic of the app
    yourYear = currentYear - Number(Year)
     //Assuming  your birth date is 18 may 1999 and the current date is 24 june 2023
     //Since MAY(05) is less than JUNE(06) and it's been more than a month since
     //your birth day since you celebrated thus from 18 May to 24 June
     //The first if statement runs
    if((Number(Month)<=currentMonth) && ((Number(Day) - currentDay)<0)){
        yourYear = currentYear - Number(Year)
        yourMonth = currentMonth - Number(Month) 
    //Assuming your birth date is 26 May 1999 and the current day is 24 june 2023
    //It's not been a month since you celebrated your birth day hence the "month = 0"  
    //the else if statement below runs 
    }else if((Number(Month)<=currentMonth) && ((Number(Day)-currentDay)>0)){
        yourMonth = 0
     //Assuming  your birth date is 18 September 1999 and the current date is 24 june 2023
     //Since September is greater than JUNE(06) and it means you are yet to celebrate your birth day 
     //hence the is one less till the current date becomes 18 September 2023
    }else if((Number(Month)>currentMonth) && ((Number(Day)-currentDay))){
         yourYear = yourYear - 1
         yourMonth =  Number(Month) - currentMonth 
    }else{
        alert('YOUR AGE CANT BE CALCULATED');
    }

    //This part of the code manipulates the days component of the result
    if(Number(Day) > currentDay){ 
        let daysDiff = (Number(Day) + 29) - currentDay
        let diff = Number(Day) - currentDay
        yourDay = daysDiff - diff  
    
    }else{
        yourDay = currentDay - Number(Day)
    }
     
    //Validates the form to ensure that the app runs only if the inputs entered are valid
    let isValid = true;
    
    if(Day < 1 || Day > 31){
        isValid = false;
        alert('invalid day')
    }

    if(Month < 1 || Month > 12){
        isValid = false;
        alert('invalid month')
    }
    if(Year < 1900 || Year > currentYear){
        isValid = false;
        alert('invalid year')
    }
 
    
    if(isValid){
        document.querySelector('#placehere1').innerText += `${yourYear} YEARS` 
        document.querySelector('#placehere2').innerText += `${yourMonth} MONTHS`
        document.querySelector('#placehere3').innerText += `${yourDay} DAYS`
    }


  }
