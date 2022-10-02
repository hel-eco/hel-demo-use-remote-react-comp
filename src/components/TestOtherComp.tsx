import { useRemoteComp } from 'hel-micro-react';

function TestOtherComp() {
  const HelloRemoteReactComp = useRemoteComp('hel-tpl-remote-react-comps-ts', 'HelloRemoteReactComp');

  return <HelloRemoteReactComp />
}

export default TestOtherComp;