import './styles/style.css';
import homeDiv from './home';
import menuDiv from './menu';
import contactDiv from './contact';
import navBar from './nav-bar';

const content = document.getElementById('content');

function show(e) {
  const child = content.children[1];
  if (e.id === 'tab2') {
    content.removeChild(child);
    content.appendChild(menuDiv());
  }

  if (e.id === 'tab3') {
    content.removeChild(child);
    content.appendChild(contactDiv());
  }

  if (e.id === 'tab1') {
    content.removeChild(child);
    content.appendChild(homeDiv());
  }
}


window.onload = () => {
  content.innerHTML = navBar();
  content.appendChild(homeDiv());

  const tab1 = document.getElementById('tab1');
  const tab2 = document.getElementById('tab2');
  const tab3 = document.getElementById('tab3');

  tab1.addEventListener('click', () => { show(tab1); });
  tab2.addEventListener('click', () => { show(tab2); });
  tab3.addEventListener('click', () => { show(tab3); });
};
