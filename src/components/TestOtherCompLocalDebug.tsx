import React from 'react';
import { useRemoteComp } from 'hel-micro-react';
import lib from 'hel-tpl-remote-lib';

function Loading() {
  return <div>loading</div>;
}

function TestOtherCompLocalDebug() {
  const [num, setNum] = React.useState(0);
  const changeNum = () => {
    setNum(lib.num.random(100));
  };
  const compRef = React.useRef<{ sayHello: () => string }>();
  const compRef2 = React.useRef<number>();
  const HelloRemoteReactComp = useRemoteComp<{ a: number }>('hel-tpl-remote-react-comps-ts', 'HelloRemoteReactComp', {
    custom: {
      host: 'http://localhost:3103',
      // host: 'http://127.0.0.1:8103',
      enable: true,
      extraCssList: [],
    },
    // Skeleton: Loading,
    // Skeleton: () => <Loading />,
    Skeleton: <Loading />,
  });

  return <div>
    <button onClick={() => compRef.current?.sayHello()}>sey hello</button>
    <button onClick={changeNum}>num {num}</button>
    <HelloRemoteReactComp a={1} />
    <HelloRemoteReactComp key={2} a={1} />
    <HelloRemoteReactComp ref={compRef2} key={2} a={1} />
    {/* <HelloRemoteReactComp ref={compRef} key={2} a={1} c={1} />
    <HelloRemoteReactComp ref={compRef} key={2} a={'s'} /> */}
  </div>
}

export default TestOtherCompLocalDebug;
