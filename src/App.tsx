import { UserDetailsProvider } from './context/userContext';
import { RouterProvider } from 'react-router';
import { routes } from './routes';

function App() {
  return (
    <div className='App'>
      <UserDetailsProvider>
        <RouterProvider router={routes} />
      </UserDetailsProvider>
    </div>
  );
}

export default App;
