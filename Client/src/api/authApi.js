import $ from 'jquery'

function signup(user) {
    $.ajax({
      url: 'auth/signup',
      dataType: 'json',
      type: 'POST',
      data: user,
      success: function(data) {
        console.log(data);
      },
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }
    });
}

function signIn(user, cb) {
   
   $.ajax({
      url: 'auth/signin',
      dataType: 'json',
      type: 'POST',
      data: user,
      success: function(data) {
        cb(data);
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
}

const AuthApi = { signup, signIn };
export default AuthApi;