module.exports.options = (maxAge = 8.64e7) => ({
  sameSite: "None",
  httpOnly: true,
  secure: true,
  maxAge,
});
