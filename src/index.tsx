import helMicro from 'hel-micro';
// import React from 'react';
// import ReactDOM from 'react-dom';

// helMicro.bindReactRuntime({ React, ReactDOM });

async function main() {
  // custom.enable 可根据情况自己设定，此处表示处于本地调试开发时 custom 配置才生效
  // 解开下面注释，需要 clone 以下两个项目并启动起来
  // const enableCustom = !!window.location.port;

  await Promise.all([
    helMicro.preFetchLib('hel-tpl-remote-lib'),
    helMicro.preFetchLib('hel-tdesign-react'),
  ]);

  await import('./loadApp');
  console.log('loadApp');
}

main().catch((err: any) => {
  alert(`Oops, something must he wrong! ${err.message}`);
  console.error(err);
});
