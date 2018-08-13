/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */
//loops through each day in the days array
//capitalizes the first letter of the day
//and prints the day out to the console
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for (const day of days){
	
	console.log(`${day[0].toUpperCase()}${day.substr(1)}`);
}