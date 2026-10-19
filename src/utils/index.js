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
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2KEXq_tuv-tWgUrADwxXjK2DRaRE2OcWntpwl5oZLmJMGWlA9k__ZNo&s=10",
    start: "5.0",
    message:
      "I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life",
  },
  {
    id: 2,
    name: "James Bond",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQm_uNSBqoydADBgRCUYriYTKC2v2033NhLqAU3qrFnUb3igPadtje3Ze&s=10",
    start: "5.0",
    message:
      "“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”",
  },
  {
    id: 3,
    name: "Michael Jordan",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdRjBfk9jfuViw1YipXbCGsxY5UVKEjYfgYHDDOvPNdc8sUT_Yo6HEwk&s=10",
    start: "5.0",
    message:
      "Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!",
  },
];
