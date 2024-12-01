<img src="https://user-images.githubusercontent.com/19279756/106659815-3d84ad00-65c5-11eb-97de-369b2d77de45.png" width="500">

# React Native Untitled Icon
React native implementation for the popular [UntitledIcon](https://untitled-ui.com) open source library.

### Install
Using yarn
```bash
yarn add react-native-untitled-icon
```

Using npm

```bash
npm install react-native-untitled-icon
```

This library relies on the `react-native-svg` package to render svg icons. Install the `react-native-svg` package,

```bash
yarn add react-native-svg
```
or
```bash
npm install react-native-svg
```


### Usage
```javascript
import Icon from 'react-native-untitled-icon';
```

```javascript
<Icon name="home-fill" size="48" color="red">
```

### Props
|Prop|Default|Description|
|----|-----|-----|
|name|`home-01`| Name of the icon. Explore the [untitledicon](https://untitledui-icon.com) library for all valid icon names|
|size|`24`|Size of the icon|
|color| `black`| Color of the icon|
