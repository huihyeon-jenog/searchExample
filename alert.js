function alertToggle() {
  const modal = document.querySelector(".modalWrap");

  const checkCount = document.querySelectorAll(
    ".contentTable tbody [type=checkbox]:checked"
  );
  if (checkCount.length > 1) {
    alert(checkCount.length + "건 삭제");
  } else {
    modal.style.display = "block";
  }
}

function closeModal() {
  const modal = document.querySelector(".modalWrap");
  modal.style.display = "none";
}
