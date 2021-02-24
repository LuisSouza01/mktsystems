import React from 'react';

import GlobalStyles from './styles/global';

import Menu from './components/Menu';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div>
      <Menu />
      <SignIn />
      <GlobalStyles />
    </div>
  );
}

export default App;
