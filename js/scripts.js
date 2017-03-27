$(document).ready(function() {

  $("#formOne").submit(function(event){

    var blanks = ["person1" , "animal1" , "animal2" , "animal3" , "noun1" , "noun2" , "noun3" , "noun4" , "noun5" , "adjective1" , "adjective2" , "adjective3" , "adverb1" , "celebrity1" , "celebrity2" , "celebrity3" , "group" , "body-part1" , "body-part2" , "beast" , "aspiration1" ];

    console.log(blanks);

    blanks.forEach(function(blankTemp) {
      var input = $("#" + blankTemp).val();
      $("." + blankTemp).text(input);
    });

    $("#story").show();

    event.preventDefault();
  });
});
