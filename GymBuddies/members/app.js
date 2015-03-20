var user;

function login(){
  var auth = {
    email: $('#login-email').val(),
    password: $('#login-password').val()
  }
  $.ajax({
    type: 'POST',
    url: 'login',
    data: auth,
    success: function(user){
      setUser(user);
      getPosts();
    },
    error: function(responseText){
      console.log(responseText);
    }
  })
}

function register(){
  var auth = {
    name: $('#signup-username').val(),
    email: $('#signup-email').val(),
    password: $('#signup-password').val()
  }
  $.ajax({
    type: 'POST',
    url: 'register',
    data: {user: auth},
    success: function(responseText){
      setUser(responseText);
      getPosts();
    },
    error: function(responseText){
      console.log(responseText);
    }
  })
}

function setUser(user){
  if(user){
    localStorage.setItem('user', JSON.stringify(user));
  }
}


function getUser(){
  user = localStorage.getItem('user');
  if(user){
    user = JSON.parse(user);
    return user;
  }
  return false;
}

$('#postForm').submit(function(e){
  e.preventDefault();
  var user = getUser()
  if(!user){
    return 'you must login';
  }
  var post = {
    title: $('#cd-title').val(),
    body: $('#cd-body').val(),
    share: $('#cd-share').val(),
    email: user.email
  }
  $.ajax({
    type: 'POST',
    url: 'post/create',
    data: {post: post},
    success: function(responseText){
      console.log(responseText);
      getPosts();
    },
    error: function(responseText){
      console.log(responseText);
    }
  });
});

function getPosts (){
  var user = getUser()
  if(!user){
    return 'you must login';
  }
  $.ajax({
    type: 'GET',
    url: '/api/posts',
    success: function(posts){
      showPosts(posts);
    },
    error: function(responseText){
      console.log(responseText);
    }
  });
}

function showPosts (posts){
  posts = posts.reverse();
  $('#cd-timeline').empty();
  for (var i = 0; i < posts.length; i++) {
    var postTemplate = '<div class="cd-timeline-block"><div class="cd-timeline-img"><img src="assets/img/Gym-Buddies-Logo-128.png" alt="Picture"></div><div class="cd-timeline-content"><h2>'+String(posts[i].title)+'</h2><p>'+String(posts[i].body)+'</p><p><small>'+String(posts[i].author.name)+'</small></p><a href="#0" class="cd-read-more">Read more</a><span class="cd-date">'+String(posts[i].posted)+'</span></div></div>';
    $('#cd-timeline').append(postTemplate);
  };
}

function showForm (){
  var user = getUser()
  if(!user){
    return $('#authContent').hide();
  }
    $('#authContent').show('fast');
}

getPosts();