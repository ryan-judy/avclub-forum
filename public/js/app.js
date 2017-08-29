
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
      $("#comments").append("<input id='titleinput' name='title' >");
      $("#comments").append("<textarea id='bodyinput' name='body'></textarea>");
      $("#comments").append("<button data-value='" + data._id + "' id='submitComment'>Submit Comment</button>");
      if (data.comment) {
        $("#titleinput").val(data.comment.title);
        $("#bodyinput").val(data.comment.body);
      }
    });
});
$(document).on("click", "#submitComment", function() {
  var thisId = $(this).attr("data-value");
  console.log($("#titleinput").val());
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      title: $("#titleinput").val(),
      body: $("#bodyinput").val()
    }
  })
    .done(function(data) {
      console.log(data)
    });
});