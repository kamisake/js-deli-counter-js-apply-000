var katzDeliLine = []; // Declcares an empty array called katzDeliLine

function takeANumber(katzDeli, name) { //I'm creating a function called takeANumber with katzDeli and name as their value
   katzDeli.push(name) //Pushes element to the end of the array
   return `Welcome, ${name}. You are number ${katzDeli.length} /* When I call the function it will return the name and counts the array number in katzDeliLine */ in line.`;
}

   function nowServing(katzDeli) {
  if (katzDeli.length > 0) { //In this case 2
    var nowServing = katzDeli[0]; // Grabs the first index/name Ada
    katzDeli.shift(); // Removes Ada from the katzDelinLine array
    return `Currently serving ${nowServing}.`; // Returns "Currently serving Ada."
  } else { // If katzDeliLine array is empty it returns
    return `There is nobody waiting to be served!`;
  }
// nowserving(katzDeliLine) returns "Currently serving Ada."
// katzDelinLine is now "Steve" because this function shifts out "Ada"

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {

    for (var i = 0; i < line.length; i++) {
      array.push(` ${i+1}. ${line[i]}`);
    }
    return `The line is currently:` + array;
  }
}
// Calling the currentLine(katzDeliLine) function checks the line lengh index in the katzDeliLine array
