import { useRemoteCompAndSubVal } from 'hel-micro-react';
import { Lib } from 'hel-tdesign-react';
import tdesignCssVar from './tdesignCssVar';

export default function useTdesignComp<Name extends keyof Lib>(compName: Name): Lib[Name] {
  const { Comp, getSubVal } = useRemoteCompAndSubVal('hel-tdesign-react', compName, {
    shadow: true,
    // tdesign 有一些自己的css变量定义，这些定义未参与css打包，此处人工补偿一下
    handleStyleStr: (str: string) => `${tdesignCssVar} ${str}`,
    ignoreHelContext: true,
  });
  // 补偿 TabPanel 下挂载的子组件对象，因Comp 是一个经shadow 包裹后的组件，取一些子组件是取不到的
  // 如下例子：
  // const Tabs = useTdesignComp('Tabs');
  // TabPanel = Tabs.TabPanel; // 不做补偿的话，TabPanel 为 undefined
  if (compName === 'Tabs') {
    Comp.TabPanel = getSubVal<Lib['Tabs']['TabPanel']>('TabPanel');
  }
  return Comp as Lib[Name];
}