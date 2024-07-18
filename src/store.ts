import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import userReducer from './features/user/userSlice';

// store 생성
// 기본설정을 단순화하고, 미들웨어, DevTools, 리듀서 결합 등을 추쉽게 할 수 있게 해줌
export const store = configureStore({
  // 배열에서 reduce는 누적 값을 계산하는 메서드
  // 따라서 reducer는 액션을 통해 상태의 변경을 누적 계산해서 새로운 상태를 생성하는 것이다.
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

// ReturnType은 함수의 반환값을 가져올 수 있게 해주는 유틸리티 타입
// RootState는 리덕스 스토어의 상태 타입
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch는 dispatch 함수의 타입
export type AppDispatch = typeof store.dispatch;
