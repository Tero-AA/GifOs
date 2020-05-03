const body = document.getElementById('body');
const dropdown = document.getElementById('dropdown-menu');
let open = false;

// Change Theme
let changeTheme = theme => {
  body.setAttribute('class', `theme-${theme}`);
};

// Open Dropdown
const openDropdown = () => {
  open = !open;
  if (open) {
    dropdown.setAttribute('style', 'display: flex');
  } else {
    dropdown.setAttribute('style', 'display: none');
  }
};
