$(document).ready(function () {
  $(".modal").modal();
});

function modalAdd() {
  const instance = M.Modal.getInstance($("#modal-add"));
  instance.open();
}

function modalEdit() {
  const instance = M.Modal.getInstance($("#modal-edit"));
  instance.open();
}
