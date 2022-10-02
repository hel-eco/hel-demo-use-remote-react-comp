import React from 'react';
import helMicro from 'hel-micro';
import lib from 'hel-tpl-remote-lib';
import logo from '../logo.svg';
import t, { Button, DatePicker } from 'hel-tdesign-react';


// MyDatePicker (preFetch(remote-tdesign-react))
// DatePicker

function PreLoadDemo() {
  const [num, setNum] = React.useState(0);
  const changeNum = () => {
    setNum(lib.num.random(666));
  };

  const test = async () => {
    // 懒加载 zk-libtest 库
    const lib = await helMicro.preFetchLib('zk-libtest');
    console.log('lib result', lib.num.random(333));
  };

  const testRemoteLibTpl = async () => {
    // 调用预加载好的 hel-lodash 库方法
    setNum(lib.num.random(888));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={testRemoteLibTpl}>test remote-lib-tpl {num}</button>
        <button onClick={test}>test zk-libtest and see log</button>
        {/* <Test /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <t.Button theme="danger">prefetched remote tdesign button 1 </t.Button>
        <t.Divider />
        <DatePicker />
        <Button theme="danger">prefetched remote tdesign button 2 </Button>
        <t.Divider />
        <Button theme="danger" onClick={changeNum}> call remote fn get result {num} </Button>
      </header>
    </div>
  );
}

export default PreLoadDemo;
