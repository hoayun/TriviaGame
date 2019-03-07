// Get and array of objects 1 - 5, object will be pages(1-5 index) , values for these will have 4 answers appended with onclick and question string
// if correct is clicked say correct and put correctquestion++ else say wrong (show answer for both)
// start button will start our first question page, last page with score will have a try again button to fire start function.
// each page must display a timer of 10 seconds counting down, if timer is zero fire the wrong and times up.(show answer)
//after correct or incorrect input and real answer shown go to next page after 5 seconds
// use .html("") for clearing between pages


 var pages = [ {
            question:"Whats 10 X 10?",
            answer:["100", "1000", "10000", "10"],
            correctanswer:"100"
        },
        {
            question:"Whats 36 X 36?",
            answer:["1296", "1166", "1290", "1100"],
            correctanswer:"1296"
        },
        {
        question:"The sum of the measures in degrees of the angles of a triangle is?",
            answer:["720", "360", "180", "120"],
            correctanswer:"180"
        },
        {
        question:"The number of degrees of arc in a circle is?",
        answer:["100", "180", "360", "400"],
        correctanswer:"360"
        },
        {
            question:"Is -84 + 5 positive or negative?",
            answer:["positive", "negative", "both", "neither"],
            correctanswer:"negative"
        },
        {
        question:"Express 71/1000 as a decimal?",
        answer:[".71", ".071", ".0071", "7.1"],
        correctanswer:".0071"
        },
        {
        question:"8 is what percent of 40?",
        answer:["10", "15", "20", "25"],
        correctanswer:"20"
        },    
        {
        question:"Consider the following series: 6, 12, 24, 48. What number should come next?",
        answer:["52", "64", "88", "96"],
        correctanswer:"96"
        },
        {
        question:"3 +(35 – 21) x 2?",
        answer:["31", "36", "42", "184"],
        correctanswer:"31"
        },
        {
        question:"What percent chance is it, that today is John's favorite day of the boot camp?",
        answer:["100", "30", "40", "75"],
        correctanswer:"100"
        },

    
    
    
    
    
    
    
    
    
    ];
var correctpoint = 0;
var page = 0;
$(document).ready(function(){
  
   
    

    $(".start").click(function(){
    start();
    });
    console.log(pages[page].question);

    function start(){
        function stop() {
            clearInterval(timer);
          }
          stop();
          $("#timeleft").text("Time left: 20");
        //removes start button
        $(".start").hide();
        $("#timeleft").show();
        
        var counter = 21;
        var timer = setInterval(timeit, 1000);
    function timeit(){
        counter--;
        $("#timeleft").text("Time left: " + counter);
        if (counter == 0){
            $("#correctorincorrect").text("TIME UP!!");
            $("#correctanswer").text(" The right answer was " + pages[page].correctanswer);
            $("#timeleft").hide();
            setTimeout(turnpage, 3000);
            function stop() {
                clearInterval(timer);
              }
              stop();
         };

    };
     
           
            
      


        
        // Displays Question
        $("#question").text(pages[page].question);
        // Displays Possible Answers
        for (i = 0; i < pages[page].answer.length; i++){
            answer = $("<button>");
            
            answer.text(pages[page].answer[i]);
            answer.attr({"answeroutput":pages[page].answer[i]});
            $(".answer"+[i + 1]).append(answer);}

        // On click for Answers
        $("button").click(function(){
            function stop() {
                clearInterval(timer);
              }
              stop();



         var chosen = ($(this).attr("answeroutput"));
         if (chosen === pages[page].correctanswer) {
             console.log("win")
             $("#correctorincorrect").text("CORRECT!!!");
             $("#correctanswer").text(" The right answer was " + pages[page].correctanswer);
             $("#timeleft").hide();
             correctpoint++
           
             setTimeout(turnpage, 3000);
             // ++ correctanswers here
         }
         
         else {
            $("#correctorincorrect").text("INCORRECT!!!");
            $("#correctanswer").text(" The right answer was " + pages[page].correctanswer);
            $("#timeleft").hide();
            setTimeout(turnpage, 3000);
           
         }
        
        })
    }
        
        




    
    function turnpage(){
        page++;
        $("#correctorincorrect").text("");
        $("#correctanswer").text("")
        $("button").detach()
        $("#question").text("")
        if(page === 10){
            $("#question").text("You got "+ correctpoint +" out of 10 questions correct!!");
            reset = $("<button>");
            reset.text(" Try Again ");
            $("#reset").append(reset);
            $("#reset").click(function(){
                page = 0;
                correctpoint = 0;
                start();
                });

            return;}




     
       
        start();


    }
});
//page = 0 on next page display "page" + page