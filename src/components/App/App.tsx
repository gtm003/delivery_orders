import './App.css';
import 'react-reflex/styles.css';

import Map from '../Map/Map';
import RequestsTable from '../Table/Table';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { useRef, useCallback } from 'react';

function App() {
  const currentOrder = useAppSelector((state) => state.order);
  console.log(currentOrder);

  const mapRef = useRef<L.Map>(null);
  console.log('render App');
  const onMapContainerResize = useCallback(() => {
      mapRef.current?.invalidateSize();
  }, []);

  return (
    <ReflexContainer className="app-container" orientation="vertical">
      <ReflexElement minSize={300} size={700}>
        <RequestsTable />
      </ReflexElement >
      <ReflexSplitter propagate={true}/>
      <ReflexElement minSize={400} onResize={onMapContainerResize}>
        <Map ref={mapRef}/>
      </ReflexElement>
    </ReflexContainer>
  );
}

export default App;
