let UserService = {
    init: function () {
        let token = localStorage.getItem("user");
        if (token) {
          window.location.replace("index.html");
        }
        $("#login-form").validate({
          submitHandler: function (form) {
            let entity = Object.fromEntries(new FormData(form).entries());
            console.log(entity)
            UserService.login(entity);
          },
        });
      },
      
      login: function (user) {
          $.ajax({
              url: '/fenms035-lecture/data/users.json',
              type: 'GET',
              dataType: 'json',
              success: function (data) {
                  data.forEach(element => {
                      if (element.email == user.email && element.password == user.password){
                          /*let new_element ={
                            'email': element.email,
                            'admin': element.admin, 
                            'id': element.id
                          }*/
                          delete element.password;

                          localStorage.setItem("user", JSON.stringify(element));
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
}