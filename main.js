import Dropdown from "bootstrap/js/dist/dropdown";
import Modal from "bootstrap/js/dist/modal";

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
});


var myModal = new Modal(document.getElementById('exampleModal'), {
  keyboard: false,
  backdrop: 'static'
});