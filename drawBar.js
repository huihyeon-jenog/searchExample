function checkCounter(e) {
  e.id === "allCheck" ? allCheck(e) : null;

  const checkCount = document.querySelectorAll(
    ".contentTable tbody [type=checkbox]:checked"
  );
  const showDisplay = document.querySelector(".drawBarWrap");
  const count = document.querySelector(".count");

  count.innerText = `${checkCount.length}건`;
  showDisplay.style.display = checkCount.length > 1 ? "flex" : "none";
}

function allCheck(checkValue) {
  const allCheckBox = document.querySelectorAll(
    ".contentTable [type=checkbox]"
  );

  allCheckBox.forEach(function (element) {
    element.checked = checkValue.checked;
  });
}

function checkDelete() {
  const checkCount = document.querySelectorAll(
    ".contentTable tbody [type=checkbox]:checked"
  );

  alert(checkCount.length + "건 삭제");
}
