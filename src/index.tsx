import helMicro from 'hel-micro';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactIs from 'react-is';

helMicro.bindReactRuntime({ React, ReactDOM, ReactIs });

async function main() {
  // custom.enable 可根据情况自己设定，此处表示处于本地调试开发时 custom 配置才生效
  // 解开下面注释，需要 clone 以下两个项目并启动起来

  await Promise.all([
    helMicro.preFetchLib('hel-tpl-remote-lib'),
    helMicro.preFetchLib('hel-tdesign-react'),
  ]);

  await import('./loadApp');
}

main().catch((err: any) => {
  alert(`Oops, something must he wrong! ${err.message}`);
  console.error(err);
});
