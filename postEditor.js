// get job post by id 
function getPost() { 
    var keyword=document.getElementById("save").value
};

// update post title, timeframe, and/or description to db and route to users.html
function updatePost() {     
    $.ajax({
    method: "PUT",
    url: "/api/posts",
    data: post
  })
    .then(function() {
      window.location.href = "/blog";


}

};
