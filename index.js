function scuberGreetingForFeet(someValue){
  // Write your code here!

  if ( 400 >= someValue){
    return "This one is on me!"
  }
  else if  (2000 <= someValue && 2500 >= someValue){
return "I will gladly take your thirty bucks."
  }
  else {
    return  "No can do."
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  let result = city === "NYC" ? "Ok, sounds good." : "No go.";
  return result;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous":return "Thank you so much."
    break;
    case "not as generous" : return "Thank you."
    break;
    default: return 'Bye.'
  }

}