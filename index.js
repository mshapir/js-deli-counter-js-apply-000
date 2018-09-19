function takeANumber(people, name){
  people.push(name) 
  var spot = people.length 
  
return `Welcome, ${name}. You are number ${spot} in line.`
}
function nowServing(katzDeliLine){ // katsDeliLine = ["Nicole"]
 if(katzDeliLine.length > 0){
   var shift = katzDeliLine.shift()
   return `Currently serving ${shift}.`
 }else{
   return "There is nobody waiting to be served!"
 }
  
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty." 
  } else{
    var stringLine = "The line is currently: "
    for(var i=0; i<line.length; i++){
      stringLine = stringLine + (i+1) + ". " + line[i] 
      if(i< line.length - 1){
        stringLine = stringLine + ", "
      }
    } 
    return stringLine
  }
  
}