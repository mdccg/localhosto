import firebaseApp from './config/firebase';

import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(firebaseApp);

signOut(auth)
  .then((_) => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userPhoto');

    location.href = 'login.html';
  })
  .catch(error => console.error(error));