import { decrement, increment, incrementByAmount } from '@/features/counter/counterSlice';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export default function Counter() {
  // useSelector는 스토어의 상태를 가져오는 훅
  // 상태의 특정 부분만 선택할 수 있어서, 필요한 상태만 컴포넌트에 제공할 수 있음
  // useSelector로 선택한 상태가 변경되면 자동으로 컴포넌트가 리렌더링됨
  // 메모이제이션으로 최적화되어 있어서, 상태가 변경되지 않으면 리렌더링되지 않음
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 400px;
`;
