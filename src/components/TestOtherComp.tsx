import React from 'react';
import { useRemoteCompStatus } from 'hel-micro-react';

function Test() {
  const [name, setName] = React.useState('HelloRemoteReactComp');
  const { Comp, isReady, err } = useRemoteCompStatus('hel-tpl-remote-react-comps-ts', name);
  console.log('isReady', isReady);
  console.log('err', err);

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} style={{ width: '200px' }} />
      <Comp name="ggogo" />
    </>
  );
}

class TestOtherComp extends React.Component {

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    // @ts-ignore
    Test.__isReady = true;
    // @ts-ignore
    console.log(`Test.__isReady`, Test.__isReady);

    return <Test />;
  }
}

export default TestOtherComp;