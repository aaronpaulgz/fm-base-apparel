$form = document.getElementById("form");
$input = document.getElementById("input");
$error = document.getElementById("error");

$errTxt = document.getElementById("errTxt");

const validateTxt = () => {
  if ($input.value.includes("@")) {
    console.log("Message sent");
  } else {
    $input.style.border = "solid 2px hsl(0, 93%, 68%)";
    $error.style.visibility = "visible";
    $errTxt.innerHTML = "Please provide a valid mail";
  }
};

const focusInput = () => {
  if ($input === document.activeElement) {
    $input.style.border = "";
    $error.style.visibility = "";
    $errTxt.innerHTML = "";
  } else {
  }
};
