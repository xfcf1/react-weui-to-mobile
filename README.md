# WeUI 修改版
<li>修改样式为IPhone(sui mobile的样式)
<li>添加导航插件
<li>添加手机相关[Icon](http://m.sui.taobao.org/components/#icons)


# API参见

[https://github.com/weui/weui](https://github.com/weui/weui)

# 样式参见
[http://m.sui.taobao.org/components/](http://m.sui.taobao.org/components/)

#安装
```sh
npm i -save react-weui-to-mobile
```
已把样式引入，不需要再引入 ```weui.css```

#自开发

```sh
npm install
npm start
```
启动端口为8000

```sh
npm build
```
src为插件目录
example为例子目录
编译插件输出目录为./lib

#使用
```js
import weui from 'react-weui-to-mobile';
```

api使用方法参见原weui使用方法，这里只写明修改过的api

-
###Icon
原用法

```js
import { Icon } from 'react-weui-to-mobile';
...
<Icon value='success'>
...
```
添加type属性为新加的icon

例如sui上的icon class为

```html
<span class="icon icon-app"></span>
```

只需要取icon-app后面的 ```app```部分

```js
import { Icon } from 'react-weui-to-mobile';
...
<Icon type='icon' value='app'>
...
```

-
###导航

```js
import { Nav } from 'react-weui-to-mobile';

<Nav><h1 className="title">标题</h1></Nav>
```

```js
import { Nav } from 'react-weui-to-mobile';

<Nav type="button">
    <Button className="left" type="primary" plain size="small">按钮</Button>
    <Button className="right" type="primary" plain size="small">按钮</Button>
    <h1 className="title">标题</h1>
</Nav>
```

```js
import { Nav } from 'react-weui-to-mobile';


<Nav>
    <a className="left" href="#tab"><Icon type="icon" value="left"/>返回</a>
    <a className="right" href="#tab">刷新<Icon type="icon" value="refresh"/></a>
    <h1 className="title">标题</h1>
</Nav>
```
###样式查看
![qrcode](https://raw.githubusercontent.com/xfcf1/react-weui-to-mobile/master/docs/qrcode.png)
