import { Outlet, useNavigation } from 'react-router-dom';

import Loader from './Loader';
import Navigation from './Navigation';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className='layout'>
      {isLoading && <Loader />}

      <Navigation />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
