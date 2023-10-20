  
            //limiting the year to select from
            let userInput = document.getElementById("date");
            userInput.max = new Date().toISOString().split("T")[0];
            
            let result = document.getElementById("result"); 
            function calculateAge(){
             //take data and separate Y-M-D
             let birthday = new Date(userInput.value);
             let d1 = birthday.getDate();
             let m1 = birthday.getMonth() + 1;
             let y1 = birthday.getFullYear();
    
                //data of todo
    
            let today = new Date();
            let d2 = today.getDate();
            let m2 = today.getMonth() + 1; //month start from zero that why we +1
            let y2 = today.getFullYear()
    
            //getting the difference
            let d3,m3,y3;
    
            y3 = y2 - y1;
             
            //calculating the month
            if(m2 >= m1 ){
                m3 = m2 -m1
            }
            else {
                y3--;
                m3 = 12+m2 - m1;
            }
    
            //calculating the days remaining
    
            if( d2 >= d1){
                d3 = d2 - d1;
            }
            else{
                m3--;
                d3 = 31 + d2 - d1;
            }
            //if m3 is negative we should 
            if(m3 < 0){
                m3 = 11;
                y3--;
            }
            result.innerHTML = `<h1>${y3}</h1> || ${m3} || ${d3}`
           }
            //getting days in moth
            function getDataInMonth(year , month){
                return new Date(year, month , 0).getDate(); //last day of the month of the date we are in
            }