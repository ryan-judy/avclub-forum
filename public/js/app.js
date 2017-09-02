
$(document).on("click", "button", function() {
  $("#comments").empty();
  var thisId = $(this).attr("data-value");
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    .done(function(data) {
      console.log(data._id)
      $("#comments").append("<h2>" + data.title + "</h2>");
      $("#comments").append("<form><input class='titleInput' name='title' ><textarea class='bodyInput' name='body'></textarea><button data-id='" + data._id + "' id='savenote'>Save Note</button>");
      if (data.comment) {
        $("#titleinput").val(data.comment.title);
        $("#bodyinput").val(data.comment.body);
      }
    });
});

$(document).on("click", "#savenote", function() {
  var thisId = $(this).attr("data-id");  
  event.preventDefault();
   console.log(thisId)
  var thisinput = $(".bodyInput").val();
  console.log(thisinput)
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: $(".titleInput").val(),
      // Value taken from note textarea
      body: $(".bodyInput").val()
    }
  })
    // With that done
    .done(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $("#comments").empty();
    });
  // Also, remove the values entered in the input and textarea for note entry
  $(".titleinput").val("");
  $(".bodyinput").val("");
});