const SessionsController = {
  create: (req, res) => {
    res.json({ id: req.user.id, email: req.user.email });
  },
  destroy: (req, res) => {
    const { id, email } = req.user;
    req.logout();
    res.json({ id, email, signedIn: false });
  }
};

module.exports = SessionsController;