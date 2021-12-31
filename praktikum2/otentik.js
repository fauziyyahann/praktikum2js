let uname, pw;
uname = document.getElementById("uname")
pw = document.getElementById("pw")

key = {
    username : "ahmad2017",
    password : "integrity"
}

function process () {
    if(uname.value == key.username && pw.value == key.password) {
        alert("Login Sukses")
        document.write("<h1>Login Sukses</h1>")
    }
    else {
        alert("Login Gagal")
    }
}
