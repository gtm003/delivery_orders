import './App.css';
import 'react-reflex/styles.css';

import Map from '../Map/Map';
import RequestsTable from '../Table/Table';
import { useAppSelector } from '../../hooks/useAppSelector';

function App() {
  const currentOrder = useAppSelector((state) => state.order);
  console.log(currentOrder);

  return (
    <div className="app-container">
      <RequestsTable />
      <Map />
    </div>
  );
}

export default App;
