module.exports.options = (maxAge = 8.64e7) => ({
  httpOnly: true,
  maxAge,
  sameSite: "None",
  secure: true,
});
