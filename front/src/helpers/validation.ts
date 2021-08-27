export const constraints = {
  name: {
    presence: true,
    format: {
      pattern: /^[a-zA-Zs\s]*$/,
      message: "Sorry, invalid Characters",
    },
    length: { minimum: 2 },
  },
  email: {
    presence: true,
    email: true,
    format: {
      pattern: "[^<>{}()]+",
      message: ": Sorry, invalid Characters",
    },
  },
  subject: {
    presence: true,
    format: {
      pattern: "[^<>{}()]+",
      message: ": Sorry, invalid Characters",
    },
  },
  text: {
    presence: true,
    format: {
      pattern: "[^<>{}()]+",
      message: ": Sorry, invalid Characters",
    },
  },
};
