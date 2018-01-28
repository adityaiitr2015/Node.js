function average(scores)
{
	var temp=0;
	var result=0;
	for(var i=0;i<scores.length;i++)
	{
		temp+=scores[i];
	}
	result=temp/scores.length;
	return result;
}
var scores= [100, 12, 93, 78, 72, 28];
console.log("Average score is :");
console.log(average(scores));