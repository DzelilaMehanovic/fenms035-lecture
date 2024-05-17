var UserService = {
    init: function () {
      var token = localStorage.getItem("user_token");
      if (token) {
        window.location.replace("index.html");
      }
      $("#login-form").validate({
        submitHandler: function (form) {
          var entity = Object.fromEntries(new FormData(form).entries());
          UserService.login(entity);
        },
      });
    },
    
    login: function (user) {
        console.log(user)
        $.ajax({
            url: '/fenms035-lecture - priprema/data/users.json', // Replace 'data.json' with the path to your JSON file
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                data.forEach(element => {
                    if (element.email == user.email && element.password == user.password){
                        localStorage.setItem("user", JSON.stringify(user));
                        window.location.replace("index.html");
                    }                    
                });
                toastr.error('Invalid credentials');
            },
            error: function (xhr, status, error) {
                console.error('Error fetching data from file:', error);
            }
        });
     },
  
    logout: function () {
      localStorage.clear();
      window.location.replace("login.html");
    },
  };
  