const User = require("../models/user");

// User Profile
module.exports.profile = (req,res)=>{
    User.findById({'_id' : req.cookies.user_id},(error,user)=>{
        if(error) return res.redirect('/user/login');
        if(user){
           return res.render("profile", {
                title: "Profile | Codial",
                user: user
              });
        }
        else{
            console.log('Login first');
            return res.redirect('/user/login');
        }
    });
    
}



module.exports.login = (req, res) => {
  res.render("login", {
    title: "Login | Codial",
  });
};

// handle Login and create session
module.exports.loginRequest = (req, res) => {
//   Find the user
    User.findOne({email : req.body.email},(error,user)=>{
        if(error) return;

        if(!user){
            console.log('User Not registred');
            return res.redirect('back');
        }
        else{
            // Creating session
            if(user.password == req.body.password){
                console.log("Logged in");
                res.cookie('user_id',user.id);
                return res.redirect('/');
            }
            console.log('Password is not correct');
            return res.redirect('back');
        }
    })
    
};

module.exports.register = (req, res) => {
  res.render("register", {
    title: "Register | Codial",
  });
};

module.exports.registerRequest = (req, res) => {
  //    Check if password and confirm passoword
  console.log(req.body);
  if (req.body.password == req.body.confirm_password) {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) return res.redirect("back");

      if (!user) {
        User.create(req.body).then((value) => {
          console.log(value);
          return res.redirect("/user/login");
        });
      } else {
        console.log("User already registred ", user);
        return res.redirect("back");
      }
    });
  } else {
    console.log("Password not matched");
    return res.redirect("back");
  }
};
