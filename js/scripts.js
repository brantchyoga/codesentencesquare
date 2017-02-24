var result = (function(sentence){
  var square = Math.sqrt(sentence.length);
  var row = Math.round(square);
  var column = Math.ceil(square);
  console.log(row);
  console.log(sentence);
  var newArray =[]
  var count = 0
for(var i=1;i<column;i++){
        for(var j=count;j<sentence.length; j+=row){
          newArray.push(sentence[j]);}
          var count= count+1;
        }

            // for(var j=1;j<sentence.length; j+=row){
            //   newArray.push(sentence[j])}
            //
            //     for(var j=2;j<sentence.length; j+=row){
            //       newArray.push(sentence[j])
            //   }  for(var j=3;j<sentence.length; j+=row){
            //       newArray.push(sentence[j]);}
            //
            //         for(var j=4;j<sentence.length; j+=row){
            //           newArray.push(sentence[j])}
            //
            //             for(var j=6;j<sentence.length; j+=row){
            //               newArray.push(sentence[j])
            //           }

      console.log(newArray);
    });

$(function(){
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#inputSentence").val().split(" ").join("").split("");
    var final = result(userInput)
    // console.log(userInput);
    console.log(final);




  });
});
