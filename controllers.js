exports.getLocation = (req, res, next) => {
  console.log("we got a request");
  res.status(200).send({ msg: "England" });
};
