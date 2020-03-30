const body = document.getElementById('body');

let changeTheme = theme => {
  // body.removeAttribute('class');
  body.setAttribute('class', `theme-${theme}`);
};
