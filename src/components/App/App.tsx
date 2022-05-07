import './App.css';
import 'react-reflex/styles.css';

import Map from '../Map/Map';
import RequestsTable from '../Table/Table';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { useRef, useCallback, useEffect } from 'react';
import { Spin, notification } from 'antd';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { resetError } from '../../store/oder/orderSlice';

function App() {
  const isRouteLoading = useAppSelector((state) => state.order.isRouteLoading);
  const isErrorOccured = useAppSelector((state) => state.order.isErrorOccured);
  const mapRef = useRef<L.Map>(null);
  const dispatch = useAppDispatch()
  const onMapContainerResize = useCallback(() => {
    mapRef.current?.invalidateSize();
  }, []);

  useEffect(() => {
    if (isErrorOccured) {
      notification.error({
        message: `Ошибка построения маршрута`,
        description: 'Сервис сейчас не доступен. Попробуйте позже.',
      });
      dispatch(resetError());
    }
  }, [isErrorOccured, dispatch]);

  return (
    <ReflexContainer className="app-container" orientation="vertical">
      <ReflexElement minSize={300} size={700}>
        <RequestsTable />
      </ReflexElement>
      <ReflexSplitter propagate={true} />
      <ReflexElement minSize={400} onResize={onMapContainerResize}>
        <Map ref={mapRef} />
        {isRouteLoading && (
          <Spin size="large" tip="Loading..." className="spin" />
        )}
      </ReflexElement>
    </ReflexContainer>
  );
}

export default App;
