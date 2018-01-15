var number = 7;
var guess = prompt("Guess a number :");

if(number == guess)
{
	alert("Yahooo ! You Guess The Number ");

}
else if( number > guess)
{
	alert("Hint :  High");
}
else if (number < guess)
{
	alert("High : Low ");
}