import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
ReactDOM.render(
  <StrictMode>
  <App />
</StrictMode>,
  // <App />,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// const root = document.getElementById('root');
// const rootElement = React.createRoot(root);

// // Use createRoot to render your app
// rootElement.render(<App />);
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './index.css';

// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App  />);

