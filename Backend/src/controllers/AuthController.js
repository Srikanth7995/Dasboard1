exports.login = (req, res) => {
  const user = { id: 1, username: "srikanth" };
  const token = generateToken(user);
  res.json({ token });
};

function generateToken(user) {
  return "your_generated_token";
}
