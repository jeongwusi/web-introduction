const $form = document.querySelector(".form");
const $inputName = document.querySelector(".inputName");
const $checkBox = document.querySelectorAll(".movieTitle");

function reset() {
  console.log("s");
}

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputNameValue = $inputName.value;
  let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
  $inputName.value = "";
  for (let i = 0; i < $checkBox.length; i++) {
    $checkBox[i].checked = false;
  }
  alertInput(inputNameValue, checkbox.length);
});

const alertInput = (input, number) => {
  return alert(`${input}님, 저와 ${number}개의 취향이 같으시네요!`);
};
