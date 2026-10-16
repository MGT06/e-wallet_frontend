export const upperCaseResponse = (payload) => {
  const message = [...payload.message];
  message[0] = message[0].toUpperCase();
  const fixMessage = message.join("");

  return fixMessage;
};
