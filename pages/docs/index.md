## API

### 通用图标

| 参数           | 说明                                       | 类型                  | 默认值 | 版本 |
| -------------- | ------------------------------------------ | --------------------- | ------ | ---- |
| rotate         | 图标旋转角度（IE9 无效）                   | number                | -      |      |
| spin           | 是否有旋转动画                             | boolean               | false  |      |
| size           | 图标的大小                                 | number                | -      |      |
| style          | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties         | -      |      |
| primaryColor   | 仅适用双色图标。设置双色图标的主要颜色     | string (十六进制颜色) | -      |      |
| secondaryColor | 仅适用双色图标。设置双色图标的次要颜色     | string (十六进制颜色) | -      |      |

其中我们提供了四种种主题的图标，不同主题的 Icon 组件名为图标名加主题做为后缀。

```jsx
import { IconStarOutlined, IconStarFilled, IconStarTwoTone, IconImageColorful } from 'icons-vue3';

<icon-star-outlined />
<icon-star-filled />
<icon-star-twotone primaryColor="#eb2f96" />
<icon-image-colorful primaryColor="#eb2f96" />
```

### SVG 图标

我们使用了 SVG 图标，而不是 font 图标，从而带来了以下优势：

-   完全离线化使用，不需要从 CDN 下载字体文件，图标不会因为网络问题呈现方块，也无需字体文件本地部署。
-   在低端设备上 SVG 有更好的清晰度。
-   支持多色图标。
-   对于内建图标的更换可以提供更多 API，而不需要进行样式覆盖。

所有的图标都会以 `<svg>` 标签渲染，可以使用 `style` 和 `class` 设置图标的大小和单色图标的颜色。例如：

```html
<template>
    <icon-message-outlined :style="{fontSize: '16px', color: '#08c'}" />
</template>
<script>
    import { IconMessageOutlined } from 'icons-vue3';
    import { defineComponent } from 'vue';
    export default defineComponent({
        components: {
            IconMessageOutlined,
        },
    });
</script>
```

### 双色图标主色

对于双色图标，可以通过使用 `Icon.getTwoToneColor()` 和 `Icon.setTwoToneColor(colorString)` 来全局设置图标主色。

```jsx
import { getTwoToneColor, setTwoToneColor } from 'icons-vue3';

setTwoToneColor('#eb2f96');
getTwoToneColor(); // #eb2f96
```

### 使用 Iconfont 图标

我们提供了一个 `createFromIconfont` 方法，方便开发者调用在 [iconfont.cn](http://iconfont.cn/) 上自行管理的图标。

```jsx
import { createFromIconfont } from 'icons-vue3';
import { defineComponent } from 'vue';
const MyIconfont = createFromIconfont({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // 在 iconfont.cn 上生成
});

export default defineComponent({
    setup() {
        return () => <MyIconfont type='dianzan' />; // prefix 默认为 "icon"
    },
});
```

其本质上是创建了一个使用 `<use>` 标签来渲染图标的组件。

`options` 的配置项如下：

| 参数             | 说明                                                        | 类型                                 | 默认值 |
| ---------------- | ----------------------------------------------------------- | ------------------------------------ | ------ |
| extraCommonProps | 给所有的 `svg` 图标 `<Icon />` 组件设置额外的属性           | `{ class, attrs, props, on, style }` | {}     |
| scriptUrl        | [iconfont.cn](http://iconfont.cn/) 项目在线生成的 `js` 地址 | string                               | -      |
| prefix           | iconfont 的前缀                                             | string                               | icon   |

在 `scriptUrl` 都设置有效的情况下，组件在渲染前会自动引入 [iconfont.cn](http://iconfont.cn/) 项目中的图标符号集，无需手动引入。

见 [iconfont.cn 使用帮助](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code) 查看如何生成 `js` 地址。

### ~~使用本地 SVG 图标~~（尚未实现）

```jsx
import { defineComponent } from 'vue';
import IconCustom from 'icons-vue3';

export default defineComponent({
    setup() {
        return () => <IconCustom icon='messageSvg' />; // 默认读取 src/assets/svg 下的图标
    },
});
```

`Icon` 中的 `component` 组件的接受的属性如下：

| 参数   | 说明                                       | 类型          | 默认值 | 版本 |
| ------ | ------------------------------------------ | ------------- | ------ | ---- |
| rotate | 图标旋转角度（IE9 无效）                   | number        | -      |      |
| spin   | 是否有旋转动画                             | boolean       | false  |      |
| size   | 图标的大小                                 | number        | -      |      |
| style  | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | -      |      |
