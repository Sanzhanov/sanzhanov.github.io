function hello() {
  alert("You are going to visit the web-page of Alex Sanzhanov.");
}

//hello()

document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector("#submit-message");
  const newMessage = document.querySelector("#user-message");

  submit.disabled = true;

  newMessage.onkeyup = () => {
    if (newMessage.value.length > 0) {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  };

  document.querySelector(".user-message").onsubmit = () => {
    const firstName = document.querySelector("#user-firstName").value;
    const lastName = document.querySelector("#user-lastName").value;
    const country = document.querySelector("#user-country").value;
    const phone = document.querySelector("#user-phone").value;

    alert(`Dear ${firstName} ${lastName}, thanks for your message!`);

    const message = newMessage.value;
    const messageTG = `New message from ${firstName} ${lastName}, from ${country}, phone: ${phone}, text: ${message}`;

    console.log(message);

    const TOKEN = `${ process.env.TOKEN }`;
    const CHAT_ID = `${ process.env.CHAT_ID }`;

    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${messageTG}`;

    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    newMessage.value = "";
    firstName = "";

    submit.disabled = true;

    return false;
  };
});
