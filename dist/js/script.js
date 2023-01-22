function Register() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let repassword = document.getElementById("repassword").value;
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!name || name.length > 30) {
    document.getElementById("errorname").innerHTML =
      "<i># Nama wajib di isi dan memiliki maksimal 30 karakter</i>";
    document.getElementById("errorname").style = "color: red;";
  } else {
    document.getElementById("errorname").innerHTML = "";
  }

  if (!password || password.length < 8) {
    document.getElementById("errorpassword").innerHTML =
      "<i># Pasword wajib di isi dan memiliki minimal 8 karakter</i>";
    document.getElementById("errorpassword").style = "color: red;";
  } else {
    document.getElementById("errorpassword").innerHTML = "";
  }

  if (!repassword || repassword != password) {
    document.getElementById("errorrepassword").innerHTML =
      "<i># Re-Pasword wajib di isi dan harus sama dengan password</i>";
    document.getElementById("errorrepassword").style = "color: red;";
  } else {
    document.getElementById("errorrepassword").innerHTML = "";
  }
  if (!email || !email.match(emailFormat)) {
    document.getElementById("erroremail").innerHTML =
      "<i># email wajib di isi dan menggunakan format email (email@example.com)</i>";
    document.getElementById("erroremail").style = "color: red;";
  } else {
    document.getElementById("erroremail").innerHTML = "";
  }
  if (name.length < 30 && password >= 8 && repassword == password) {
    Swal.fire({
      title: "<strong>Anda berhasil Register!</strong>",
      icon: "success",
      text: "Anda akan kami bawa ke halaman utama!",
      showConfirmButton: false,
      timer: 1500,
      html: '<meta http-equiv="refresh" content="1; url=beranda.html">',
    });
  }
}
function Login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!password || password.length < 8) {
    document.getElementById("errorpassword").innerHTML =
      "<i># Pasword wajib di isi dan memiliki minimal 8 karakter</i>";
    document.getElementById("errorpassword").style = "color: red;";
  } else {
    document.getElementById("errorpassword").innerHTML = "";
  }
  if (!email || !email.match(emailFormat)) {
    document.getElementById("erroremail").innerHTML =
      "<i># email wajib di isi dan menggunakan format email (email@example.com)</i>";
    document.getElementById("erroremail").style = "color: red;";
  } else {
    document.getElementById("erroremail").innerHTML = "";
  }
  if (email == "admin@admin.com" && password == "admin1234" && password.length >= 8 && email.match(emailFormat)) {
    Swal.fire({
      title: "<strong>Anda berhasil Login!</strong>",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      html: '<meta http-equiv="refresh" content="1; url=beranda.html">',
    });
  } else {
    Swal.fire({
      title: "<strong>Error!</strong><br>email atau password anda salah!",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
      html: '<meta http-equiv="refresh" content="1; url=index.html">',
    });
  }
}
