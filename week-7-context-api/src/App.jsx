import {countAtom} from "./store/atom/count";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
};

function Count() {
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  )
}

function CountRender() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      {count % 2 == 0 ? count : 'Not render'}
    </div>
  );
};

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count => count-1)}> Decrement </button>
      <button onClick={() => setCount(count => count+1)}> Increment </button>
    </div>
  );
};

export default App
