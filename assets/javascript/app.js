//put dataset here in object datatype
var trivia_data = {
    "length":4,
    "question1": ["answer to question 1","fake answer to question1","loloe","hello"],
    "question2": ["answer to question 2","fake answer to question2","bepbop","henlo"],
    "question3": ["answer to question 3","fake answer to question3","bopbee","heler"],
    "question4": ["answer to question 4","fake answer to question4","m00p","heyro"]

};
var answerholder = new Array();

//append the question and answers to the display. make this in such a way
//that the picked answer can be crosse referenced with the real answer
//later on
for(let i=1;i<=trivia_data.length;i++)
{
    
    console.log(Object.entries(trivia_data)[i][0]);
    console.log(Object.entries(trivia_data)[i][1[1]]);
    answerholder.push(Object.entries(trivia_data)[i][1]);
}

//make a timer that can take in variable time amounts
//draw the time to the correct part of the display

//when time==0; fail screen or if some boolean== true move on to next
//question and reset boolean to false.


//
//on click funcitons
//function to check guessed with answerholder[i][0*winning answer*];
//win function() increment win; display stuff; start 5 sec timer for next question
//lose function() increment loss; display stuff; ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
