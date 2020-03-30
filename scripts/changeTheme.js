const body = document.getElementById('body');

let changeTheme = theme => {
  body.setAttribute('class', `theme-${theme}`);
};
