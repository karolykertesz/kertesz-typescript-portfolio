const Joi = require("joi");
const schema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  subject: Joi.string().pattern(new RegExp("^[a-zA-Z0-9 ! ?@#$%&*_{|}]{3,30}$")),
  text: Joi.string().pattern(new RegExp("^[a-zA-Z0-9 ! ?@#$%&*_{|}]{3,30}$")),
  name: Joi.string().min(3).max(30).required(),
});
module.exports = validate = (email, subject, text, name) => {
  try {
    const { error, value } = schema.validate({
      email,
      subject,
      text,
      name,
    });
    if (error) {
      return error.details[0];
    }
    return;
  } catch (err) {
    console.log(err);
  }
};
