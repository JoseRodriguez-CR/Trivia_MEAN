$(document).ready(function(){

    //Computer Science Queries
    $.get("https://opentdb.com/api.php?amount=2&category=18&difficulty=easy&type=multiple", function(data1){
        computer = data1.results;
    })   

    $.get("https://opentdb.com/api.php?amount=2&category=15&difficulty=easy&type=multiple", function(data2){
        games = data2.results;
    }) 
    


    //Computer Science Boxes
    $("#a1").click(function(){
        $("#a1").html("<div class='center'><p>"+computer[0].question+"</p><br><p>"+computer[0].incorrect_answers[0]+"</p><p>"+computer[0].incorrect_answers[1]+"</p><p>"+computer[0].correct_answer+"</p><p>"+computer[0].incorrect_answers[2]+"</p></div>");
    })

    $("#a2").click(function(){
        $("#a2").html("<div class='center'><p>"+computer[1].question+"</p><br><p>"+computer[1].incorrect_answers[0]+"</p><p>"+computer[1].incorrect_answers[1]+"</p><p>"+computer[1].correct_answer+"</p><p>"+computer[1].incorrect_answers[2]+"</p></div>");
    })



    //Computer Science Boxes
    $("#b1").click(function(){
        $("#b1").html("<div class='center'><p>"+games[0].question+"</p><br><p>"+games[0].incorrect_answers[0]+"</p><p>"+games[0].incorrect_answers[1]+"</p><p>"+games[0].correct_answer+"</p><p>"+games[0].incorrect_answers[2]+"</p></div>");
    })

    $("#b2").click(function(){
        $("#b2").html("<div class='center'><p>"+games[1].question+"</p><br><p>"+games[1].incorrect_answers[0]+"</p><p>"+games[1].incorrect_answers[1]+"</p><p>"+games[1].correct_answer+"</p><p>"+games[1].incorrect_answers[2]+"</p></div>");
    })
    







})