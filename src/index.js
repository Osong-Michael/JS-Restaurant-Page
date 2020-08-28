import './styles/style.css';
import home from './home';
import menu from './menu';
import contact from './contact';
import navBar from './nav-bar';

const content = document.getElementById('content');
const div1 = document.createElement('div');
div1.innerHTML = home;
const div2 = document.createElement('div');
div2.innerHTML = menu;
const div3 = document.createElement('div');
div3.innerHTML = contact;

function show(e) {
  const child = content.children[1];
  if (e.id === 'tab2') {
    content.removeChild(child);
    content.appendChild(div2);
  }

  if (e.id === 'tab3') {
    content.removeChild(child);
    content.appendChild(div3);
  }

  if (e.id === 'tab1') {
    content.removeChild(child);
    content.appendChild(div1);
  }
}


window.onload = () => {
  content.innerHTML = navBar;
  content.appendChild(div1);

  const tab1 = document.getElementById('tab1');
  const tab2 = document.getElementById('tab2');
  const tab3 = document.getElementById('tab3');

  tab1.addEventListener('click', () => { show(tab1); });
  tab2.addEventListener('click', () => { show(tab2); });
  tab3.addEventListener('click', () => { show(tab3); });
};
