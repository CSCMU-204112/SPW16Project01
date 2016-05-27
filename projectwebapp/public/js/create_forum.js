/*
* @Author: Admin
* @Date:   2016-05-26 20:14:45
* @Last Modified by:   Admin
* @Last Modified time: 2016-05-26 20:15:24
*/

'use strict';
var createPost = function(currentBlogPost) {
  //check if the title or body is empty
  //if it is, stop the function
  for (var property in currentBlogPost) {
    if (currentBlogPost[property] === "") {
      //the 'return' keyword completely ends
      //a function, no exceptions
      return;
    }
  }

  var titleElement = document.createElement("h2");
  var bodyElement = document.createElement("p");

  titleElement.textContent = currentBlogPost.title;
  bodyElement.textContent = currentBlogPost.body;

  titleElement.className = "title";
  bodyElement.className = "post-body";

  document.querySelector(".posts").appendChild(titleElement);
  document.querySelector(".posts").appendChild(bodyElement);
}

document.querySelector(".submit").onclick = function() {
  var postTitleEl = document.querySelector(".post-title-input");
  var postBodyEl = document.querySelector(".post-body-input");

  createPost({
    title: postTitleEl.value,
    body: postBodyEl.value
  });

  postTitleEl.value = "";
  postBodyEl.value = "";
};