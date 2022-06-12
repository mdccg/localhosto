import renderGitHubLoginPanel from './components/GitHubLoginPanel';
import $ from './utils/$';

const token = localStorage.getItem('token');

if (token) {
  location.href = 'home.html';
}

const app = <HTMLDivElement>$('#app');
renderGitHubLoginPanel(app);