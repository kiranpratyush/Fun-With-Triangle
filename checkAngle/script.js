const inputangl1 = document.querySelector("#length1");
const inputangl2 = document.querySelector("#length2");
const inputangl3 = document.querySelector("#length3");
const btnSubmit = document.querySelector(".submit");
const result = document.querySelector(".result");

function calcAngle(angle1, angle2, angle3) {
  if (angle1 + angle2 + angle3 === 180) {
    return true;
  } else {
    return false;
  }
}

btnSubmit.addEventListener("click", function () {
  angl1 = inputangl1.value;
  angl2 = inputangl2.value;
  angl3 = inputangl3.value;
  let triangle = calcAngle(Number(angl1), Number(angl2), Number(angl3));
  if (triangle) {
    result.textContent = "Yes It is a Triangle";
  } else {
    result.textContent = "It will not form a Triangle";
  }
});
