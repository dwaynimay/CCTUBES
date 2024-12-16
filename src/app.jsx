// eslint-disable-next-line perfectionist/sort-imports
import 'src/global.css';

import React from 'react';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';



function App() {
  useScrollToTop();

  

  return (
    <ThemeProvider>
      <div>
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
