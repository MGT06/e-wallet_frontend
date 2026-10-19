export const upperCaseResponse = (payload) => {
  const message = [...payload.message];
  message[0] = message[0].toUpperCase();
  const fixMessage = message.join("");

  return fixMessage;
};

export const testimonials = [
  {
    id: 1,
    name: "Sherina Claw",
    start: "5.0",
    message:
      "“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”",
  },
];
