const User = require("../models/user");

module.exports.login = (req, res) => {
  res.render("login", {
    title: "Login | Codial",
  });
};

module.exports.loginRequest = (req, res) => {
  res.send(req.body);
};

module.exports.register = (req, res) => {
  res.render("register", {
    title: "Register | Codial",
  });
};

module.exports.registerRequest = (req, res) => {
  //    Check if password and confirm passoword
  console.log(req.body)
  if (req.body.password == req.body.confirm_password) {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.redirect('back');
        
        if (!user) {
            User.create(req.body).then((value)=>{
                console.log(value)
                return res.redirect('/user/login');
            })
        }
        else{
            console.log('User already registred ',user);
            return res.redirect('back');
        }
            
    })
  }
  else{
    console.log('Password not matched')
    return res.redirect('back');
  }
}
