'use strict';



$(document).ready(function() {
   var commentButton = document.getElementById("btn-comment");
   var name = document.getElementById("user-name");
   name = name.innerHTML;
   var input = document.getElementById("comment-input");
   var like_counter = $("#like-counter").text();
   var share_counter = $("#share-counter").text();
   var comment_counter = $("#comment-counter").text();
  // LIKE BUTTON CLICKED
  $("#like").click(function() {
     if($("#like-content").text() == "Like") {
       $("#like").addClass("liked");
       $("#like-content").html("Liked");
       $("#like-counter").html(++like_counter);
       if(like_counter == 1) {
         $("#like-word").html(like_counter + " like");
       }
       else $("#like-word").html(like_counter + " likes");
       $("#like-word").css("color", "#E74C3C");
     }
     else {
       $("#like").removeClass("liked");
       $("#like-content").html("Like");
       $("#like-counter").html(--like_counter);
       $("#like-word").html(like_counter + " likes");
       $("#like-word").css("color", "#7F8C8D");
     }
   });
  
  // SHARE BUTTON CLICKED
  $("#share").click(function() {
     if($("#share-content").text() == "Share") {
       $("#share").addClass("shared");
       $("#share-content").html("Shared");
       $("#share-counter").html(++share_counter);
       $("#share-word").css("color", "#F39C12");
     }
     else {
       $("#share").removeClass("shared");
       $("#share-content").html("Share");
       $("#share-counter").html(--share_counter);
       $("#share-word").css("color", "#7F8C8D");
     }
   });
  // COMMENT
  $("#comment-input").keypress(function(event){
    if(event.keyCode == 13){
      event.preventDefault();
      commentButton.click();
      $("#comment-input").val("");
    }
  });
  
  commentButton.onclick = function() {
    if(input.value == "") { alert("Enter something."); }
    else {
      var text = input.value;
      var ul = document.getElementById("comment-list");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(name + " " + text));
      ul.appendChild(li);
      input.value = "";
    }
  }
  
});