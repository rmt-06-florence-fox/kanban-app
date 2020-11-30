class UserController {
  static signup(req, res, next) {
    res.send('signup')
  }

  static signin(req, res, next) {
    res.send('signin')
  }

  static googleSignIn(req, res, next) {
    res.send('google')
  }

}

module.exports = UserController