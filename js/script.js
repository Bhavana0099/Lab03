var score1;
var score2;
var score3;
var total = 0;
var average;

score1 = prompt('What is the first score?');
total += parseInt(score1);
score2 = prompt('What is the second score?');
total += parseInt(score2);
score3 = prompt('What is the third score?');
total += parseInt(score3);

average = parseInt(total / 3);

document.write('<h1>Test Scores Application</h1>');
document.write('The first score is:' + String(score1), "<br>");
document.write('The second score is:' + String(score2), "<br>");
document.write('The third score is:' + String(score3), "<br>");
document.write('The average of three scores is:' + String(average));