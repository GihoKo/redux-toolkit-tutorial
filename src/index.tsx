import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 추가
import { Provider } from 'react-redux';
import { store } from './store';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      {/* 
      1. Provider는 앱에 Redux 스토어를 공급하는 역할을 한다
      2. store를 props로 전달하면 모든 하위 컴포넌트에서 store에 접근할 수 있다
      3. store는 다음과 같은 역할을 한다
        - 상태 보관
        - 상태에 접근(getState())
        - 상태가 변경(dispatch(action))
        - 구독관리(subscribe(listener))
      */}
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}
