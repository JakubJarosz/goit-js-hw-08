const form = document.querySelector("form");
const emailInput = document.querySelector("input");
const messageInput = document.querySelector('textarea');    


form.addEventListener("input", (event) => {
    const {
        elements: { email, message
        }
    } = event.currentTarget;
    const data = {};
    data.email = email.value;
    data.message = message.value;
    window.localStorage.setItem(
        'feedback-form-state',
        JSON.stringify(data)
    );
})

const dataJson = JSON.parse(window.localStorage.getItem('feedback-form-state'));
emailInput.value = dataJson.email;
messageInput.value = dataJson.message;


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, message }
    } = event.currentTarget;
    if (email.value === "" || message.value === "") {
        return console.log('Please fill in all the fields!');
    }
    const dataJsonV2 = JSON.parse(
      window.localStorage.getItem('feedback-form-state')
    );
    console.log(dataJsonV2);
    dataJsonV2.email = "";
    dataJsonV2.message = "";
    window.localStorage.setItem('feedback-form-state', JSON.stringify(dataJsonV2));
    emailInput.value = dataJson.email;
    messageInput.value = dataJson.message;

}