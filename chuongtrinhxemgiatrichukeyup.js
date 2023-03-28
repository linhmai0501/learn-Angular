var student = {
  "id" : 1,
  "name" : ""
};

document.addEventListener("DOMContentLoaded" , ContentLoaded);

function ContentLoaded(e) {
  document.getElementById('name').addEventListener("keyup",keyUp);
};

function keyUp(e) {
  caculatorNumeric();
};

function caculatorNumeric() {
  student.name = document.getElementById('name').value;
  var initNumeric = 0;
  for (var i = 0; i < student.name.length; i++) {
    initNumeric += student.name.charCodeAt(i);
  };

  var output = "Tổng số từ chữ bàn phím là  : " + initNumeric;
  document.getElementById('output').innerHTML = output;

};
