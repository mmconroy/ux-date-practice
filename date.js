/*
    Date Practice

    These are all common problems you may encounter when using Date for a website.

    Complete each of the following functions according to the description in the comment
    above them.

    Hint: Working with Dates in JavaScript kind of sucks! It's much more complicated than it
    really should be.  So for all three of these problems.  Feel free to google the answer!
    Chances are, if you are working with a date in JavaScript then someone has solved the problem
    before you.  Google is your friend, and it can save you a lot of time and pain. 

    Just make sure you understand the code you are writing, any why it works!

*/

/**
 * getDayOfTheWeek
 * @param {Date} date - a date object
 * 
 * This returns the name of the day of the week for the given date.
 * Sunday, Monday, Tuesday, etc...
 * 
 * Hint: The getDay() function essentially returns the index of the day of the week.  
 * You will have to manually create the array that this is indexing into.
 * Hint2: In the United States, the week officially starts on Sunday and ends on Saturday.
 * That is how they are indexed.
 * 
 * If you are stumped, google it! This is a problem that has been solved many times over.
 */
function getDayOfTheWeek(date) {
    // Your Code Here!
    return "";
}





"1/13/20 - 11:13am"
/**
 * getFormattedDate
 * @param {Date} date - a Date object
 * 
 * This should return a formatted string representing the given date.
 * It should follow the format
 * M/D/YY - hh:mmaa
 * 
 * This is using the standard way to represent a Date Format.  
 * The letters represent a part of the date.
 * 
 * Month/day/year - hours:minutes am or pm
 * 
 * For example this format should look like:
 * "1/13/20 - 11:13am"
 * "10/1/20 - 1:52pm"
 * etc..
 * 
 * Create variables for each part of the date, and then put them together in a string using
 * a string template.
 * 
 * Hint: getting am or pm is kind of strange!  There is no function to just get that.
 * But, when you do getHours(), this returns 0-23. 24-hour time.
 * You will need to convert this to 12 hour time.
 * So the hours 0-11 are am, 12-23 are pm.
 * 
 * You can use the remainder operator % to convert to 12 hour time.
 * hours % 12 
 * Just remember that there is no 0 o'clock!  It's 12 o'clock :) 
 * 
 */
function getFormattedDate(date) {
    // Your Code Here!
    return "";
}








"Today"
"Yesterday"
"15 days ago"

/**
 * getDaysAgoString
 * @param {Date} date 
 * 
 * This should return a string representing how many days ago the given date was.
 * 
 * If the date is today, return "Today"
 * if the date was yesterday, return "Yesterday"
 * Otherwise return "x days ago" 
 * 
 * Hint: The real challenge here is computing the number of days between a date and now.
 * So how do you do that?
 * The easiest way is to first find the difference between the two timestamps.
 * So get the timestamp for now and subtract the timestamp for the given date.
 * Now you have the milliseconds between now and then. 
 * Then you can divide the milliseconds by the number of milliseconds in a day to get 
 * the number of days.
 * How many milliseconds are in a day? (Hint: milli means 1000, so 1000 in a second, 
 * 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day.)  
 * Multiply all those together and you get the number of milliseconds in a day.
 * 
 * Remember that dividing two numbers can give you a decimal point answer.
 * You should use Math.floor() to get rid of the decimal point. 
 * If you haven't used Math.floor() before, look it up! 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
 * 
 */
function getDaysAgoString(date) {
    // Your Code Here!
    return "";
}


/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/

{
    console.log("-----Tests for getDayOfTheWeek-----");

    {
        let date = new Date("Sun Apr 05 2020 13:40:31 GMT-0700 (Pacific Daylight Time)");
        console.log("* Can get Sunday");
        console.log(getDayOfTheWeek(date) === "Sunday");
        console.log("* Can get Monday");
        date.setDate(date.getDate() + 1);
        console.log(getDayOfTheWeek(date) === "Monday");
        console.log("* Can get Tuesday");
        date.setDate(date.getDate() + 1);
        console.log(getDayOfTheWeek(date) === "Tuesday")
        console.log("* Can get Wednesday");
        date.setDate(date.getDate() + 1);
        console.log(getDayOfTheWeek(date) === "Wednesday")
        console.log("* Can get Thursday");
        date.setDate(date.getDate() + 1);
        console.log(getDayOfTheWeek(date) === "Thursday")
        console.log("* Can get Friday");
        date.setDate(date.getDate() + 1);
        console.log(getDayOfTheWeek(date) === "Friday")
        console.log("* Can get Saturday");
        date.setDate(date.getDate() + 1);
        console.log(getDayOfTheWeek(date) === "Saturday")
    }

    console.log("-----Tests for getFormattedDate-----");

    {
        let date = new Date("Sun Apr 05 2020 13:40:31 GMT-0700 (Pacific Daylight Time)");
        console.log("* Can get pm");
        let result = getFormattedDate(date);
        console.log(result)
        console.log(result === "4/5/20 - 1:40pm");
        console.log("* Can get midnight am");
        date.setHours(0);
        result = getFormattedDate(date);
        console.log(result)
        console.log(getFormattedDate(date) === "4/5/20 - 12:40am");
        console.log("* Can get noon pm");
        date.setHours(12);
        result = getFormattedDate(date);
        console.log(result)
        console.log(getFormattedDate(date) === "4/5/20 - 12:40pm");
    }

    console.log("-----Tests for getDaysAgoString-----");

    {
        console.log("* Can get Today");
        let date = new Date();
        let result = getDaysAgoString(date);
        console.log(result)
        console.log(result === "Today");

        console.log("* Can get Yesterday");
        let yesterday = Date.now() - (1000 * 60 * 60 * 24);
        result = getDaysAgoString(new Date(yesterday));
        console.log(result)
        console.log(result === "Yesterday");

        console.log("* Can get 7 days ago");
        let sevenDaysAgo = Date.now() - (1000 * 60 * 60 * 24 * 7);
        result = getDaysAgoString(new Date(sevenDaysAgo));
        console.log(result)
        console.log(result === "7 days ago");
    }
}

