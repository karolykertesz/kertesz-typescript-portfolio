return SendUserEmail(email, subject, text, name, (err, data) => {
  if (err) {
    return res.status(400).json({ msg: err });
  } else {
    return res.status(201).json({ msg: "Thank You" });
  }
});
