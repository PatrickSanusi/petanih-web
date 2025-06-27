function postComment() {
    var commentInput = document.getElementById('comment');
    var comment = commentInput.value;
    var forum = document.getElementById('forum-posts');
    var newPost = document.createElement('p');
    newPost.innerHTML = '<b>Patrick:</b> ' + comment;
    forum.appendChild(newPost);
  
    // Kosongkan input
    commentInput.value = '';
  }
  