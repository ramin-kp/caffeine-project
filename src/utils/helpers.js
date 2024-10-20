const swal = require("sweetalert");

const showSwal = (title, icon, buttons) => {
  return swal({ title, icon, buttons });
};
export { showSwal };
