import ReactDOM from 'react-dom/client';
import {App} from './components/routes/App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <BrowserRouter>
  <App />
</BrowserRouter>
);

