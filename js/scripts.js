$(document).ready(function() {
  $("#formOne").submit(function(event){
    var person1Input = $("#person1").val();
    var animal1Input = $("#animal1").val();
    var animal2Input = $("#animal2").val();
    var animal3Input = $("#animal3").val();
    var noun1Input = $("#noun1").val();
    var noun2Input = $("#noun2").val();
    var noun3Input = $("#noun3").val();
    var noun4Input = $("#noun4").val();
    var noun5Input = $("#noun5").val();
    var adjective1Input = $("#adjective1").val();
    var adjective2Input = $("#adjective2").val();
    var adjective3Input = $("#adjective3").val();
    var adverb1Input = $("#adverb1").val();
    var celebrity1Input = $("#celebrity1").val();
    var celebrity2Input = $("#celebrity2").val();
    var celebrity3Input = $("#celebrity3").val();
    var groupInput = $("#group").val();
    var bodyPart1Input = $("#body-part1").val();
    var bodyPart2Input = $("#body-part2").val();
    var beastInput = $("#beast").val();
    var aspiration1Input = $("#aspiration1").val();

    $(".person1").text(person1Input);
    $(".animal1").text(animal1Input);
    $(".animal2").text(animal2Input);
    $(".animal3").text(animal3Input);
    $(".noun1").text(noun1Input);
    $(".noun2").text(noun2Input);
    $(".noun3").text(noun3Input);
    $(".noun4").text(noun4Input);
    $(".noun5").text(noun5Input);
    $(".adjective1").text(adjective1Input);
    $(".adjective2").text(adjective2Input);
    $(".adjective3").text(adjective3Input);
    $(".adverb1").text(adverb1Input);
    $(".celebrity1").text(celebrity1Input);
    $(".celebrity2").text(celebrity2Input);
    $(".celebrity3").text(celebrity3Input);
    $(".group").text(groupInput);
    $(".body-part1").text(bodyPart1Input);
    $(".body-part2").text(bodyPart2Input);
    $(".beast").text(beastInput);
    $(".aspiration1").text(aspiration1Input);

    $("#story").show();

    event.preventDefault();
  });
});
