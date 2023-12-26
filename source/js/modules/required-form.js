const phone = document.querySelector('[data-input-phone]');
const email = document.querySelector('[data-input-email]');
const phoneInput = phone.querySelector('input');
const emailInput = email.querySelector('input');
const CLASS_VALID = 'is-valid';

const addAttrRequired = (el) => {
  el.setAttribute('data-required', 'data-required');
};

const removesAttrRequired = (el) => {
  el.removeAttribute('data-required');
};

const initForm = () => {
  addAttrRequired(phone);
  addAttrRequired(email);
};

const requiredInput = () => {
  initForm();

  phoneInput.onchange = function () {
    if (phone.classList.contains(CLASS_VALID)) {
      removesAttrRequired(email);
    }
  };

  emailInput.onchange = function () {
    removesAttrRequired(phone);
  };
};

export {requiredInput};
