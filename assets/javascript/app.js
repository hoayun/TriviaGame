// Get and array of objects 1 - 5, object will be pages(1-5 index) , values for these will have 4 answers appended with onclick and question string
// if correct is clicked say correct and put correctquestion++ else say wrong (show answer for both)
// start button will start our first question page, last page with score will have a try again button to fire start function.
// each page must display a timer of 10 seconds counting down, if timer is zero fire the wrong and times up.(show answer)
//after correct or incorrect input and real answer shown go to next page after 5 seconds
// use .html("") for clearing between pages


 var page1 = {
            question:"Whats 10 X 10?",
            answer:["100", "1000", "10000", "10"],
            correctanswer:"100"
};
var page2 = {
            question:"Whats 36 X 36?",
            answer:["1296", "1166", "1290", "1100"],
            correctanswer:"1296"
};

$(document).ready(function(){

    $(".start").click(function(){
    start();
    });
    

    function start(){
        //removes start button
        $(".start").hide();
        
        var counter = 21;
        setInterval(timeit, 1000);
        function timeit(){
            counter--;
            $("#timeleft").text("Time left: " + counter);
            
            
        if (counter == 0){
            $("#correctorincorrect").text("TIME UP!!");
            $("#correctanswer").text(" The right answer was " + page1.correctanswer);
            $("#timeleft").hide();
         };


        }
        // Displays Question
        $("#question").text(page1.question);
        // Displays Possible Answers
        for (i = 0; i < page1.answer.length; i++){
            answer = $("<button>");
            
            answer.text(page1.answer[i]);
            answer.attr({"answeroutput":page1.answer[i]});
            $(".answer"+[i + 1]).append(answer);}

        // On click for Answers
        $("button").click(function(){
         var chosen = ($(this).attr("answeroutput"));
         if (chosen === page1.correctanswer) {
             console.log("win")
             $("#correctorincorrect").text("CORRECT!!!");
             $("#correctanswer").text(" The right answer was " + page1.correctanswer);
             $("#timeleft").hide();
             // ++ correctanswers here
         }
         
         else {
            $("#correctorincorrect").text("INCORRECT!!!");
            $("#correctanswer").text(" The right answer was " + page1.correctanswer);
            $("#timeleft").hide();
         }
         
        })
        
        




    };
});
//page = 0 on next page display "page" + page