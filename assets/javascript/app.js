//put dataset here in object datatype
var trivia_data = {
    "length":4,
    "what is a group of turtles called?": ["a bale","a shell","a flock","a school"],
    "this mammal is known for its sharp, venemous stinger": ["platypus","rhinocerous","unicorn","wasp"],
    "how much wood does a woodchuck chuck?": ["a woodchuck doesn't chuck wood","7","100","over 9000"],
    "this bird is known to mimic other birds songs in an attempt to lure and eat them": ["mocking bird","finch","penguin","raven"]
    
};
var answerholder = new Array();
var question =0;
var time=30;
var gamescreen = true;
var clockrunning= false;
var wins=0;
var losses=0;

//append the question and answers to the display. make this in such a way
//that the picked answer can be crosse referenced with the real answer
//later on
function calculate_percentage(losses,total) 
{   return ((losses*100)/total);}
function coin()
{
    return Math.floor(Math.random()*2);
}

for(let i=1;i<=trivia_data.length;i++)
{
    
    console.log(Object.entries(trivia_data)[i][0]);
    console.log(Object.entries(trivia_data)[i][1[1]]);
    answerholder.push(Object.entries(trivia_data)[i][1]);
}

//draw choices function
function draw_choices()
{   for(let i=0;i<answerholder[question].length;i++)
     {   var ansdiv = $("<div>");
         let temp = answerholder[question][i];
         ansdiv.addClass("ansdiv");
         ansdiv.attr("data-number",i);
         ansdiv.html(temp);
         if(coin())
         {$("#gamebox").append(ansdiv);}
         else{$("#gamebox").prepend(ansdiv);}
     }
}

function draw_title()
{   titlediv=$("<div>");
    titlediv.html('<h3 id="title">TRIVIA</h3>');
    $("#gamebox").prepend(titlediv);
}

function start_game()
{
    time=30; 
    $("#gamebox").empty();
    draw_choices();
    draw_time();
    draw_question();
    draw_title();
    if(!clockrunning){run();clockrunning=true;}
gamescreen=true;

create_clickevent();
}

start_game();
function endscreen()
{   $("#gamebox").empty();
    endgame=$("<div>");
    endgame.addClass("endgame");
    gamescreen=false;
    let temp = "<h3>game over</h3><br><br><h4>wins: "+wins+"</h4><br><h4>losses: "+losses+"</h4><br><h4>"+calculate_percentage(wins,trivia_data.length)+"%</h4>";
    endgame.html(temp);
    $("#gamebox").append(endgame);

    let ansdiv = $("<div>");
    ansdiv.addClass("ansdiv");
    ansdiv.text("play again?");
    $("#gamebox").append(ansdiv);

    $(".ansdiv").on("click",function(){
        time=30;
        question=0;
        wins=0;
        losses=0;
        start_game();
    });

}
//draw questions function
function draw_question(){
    var qdiv = $("<div>");
    qdiv.addClass("qdiv");
    qdiv.text(Object.entries(trivia_data)[question+1][0]);
    $("#gamebox").prepend(qdiv);
}

//make a timer that can take in variable time amounts
function run()
{   interval=setInterval(function(){
    $(".timediv").html(--time);
    if(time==0){
        if(question==trivia_data.length-1){if(gamescreen==true){losescreen();}else{
            endscreen();}}
            else{
                if(gamescreen==true){
                losescreen();}else{
                    question++;start_game();}
}}},1000)

}

//draw the time to the correct part of the display
function draw_time()
{   timediv=$("<div>");
    timediv.addClass("timediv");
    timediv.html(time);
    $("#gamebox").prepend(timediv);

}   


//when time==0; fail screen or if some boolean== true move on to next
//question and reset boolean to false.
function losescreen()
{   time=6;
    gamescreen=false;
    $("#gamebox").empty();
    $("#gamebox").html("<h3>TIMEOUT</h3>");
    losses++;

}



//
//on click funcitons
//function to check guessed with answerholder[i][0*winning answer*];
//win function() increment win; display stuff; start 5 sec timer for next question
//lose function() increment loss; display stuff; ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function create_clickevent(){
$(".ansdiv").on("click",function(){
    guess= this.getAttribute("data-number")
    if(guess==0){win();}else{lose();}
    console.log(guess);

});
}



function win()
{   gamescreen=false;
    $("#gamebox").empty();
    $("#gamebox").html('<br><br><br><h4 class="winlose">CORRECT</h4>');
    draw_title();
    time=6;
    wins++;
}

function lose()
{   
    gamescreen=false;
    $("#gamebox").empty();
    let temp = '<br><br><br><h4 class="winlose">INCORRECT<br><br>THE ANSWER WAS: '+answerholder[question][0]+'<br></h4>';
    $("#gamebox").html(temp);
    draw_title();
    time=6;
    losses++;

}

//if question>#ofquestions {display endgame}
