
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


const AuthApi = { signup };
export default AuthApi;