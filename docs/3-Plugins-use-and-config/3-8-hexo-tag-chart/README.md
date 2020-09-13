---
title: hexo-tag-chart
---

# hexo-tag-chart <Badge text="@Shen-Yu"/>  <Badge text="Finish"/>  <Badge text="v1.0.7"/>

![npm](https://img.shields.io/npm/v/hexo-tag-chart)
![npm](https://img.shields.io/npm/dt/hexo-tag-chart)

在 Hexo 站点中插入 [Chartjs](https://www.chartjs.org/) 动态图表

## 简介

Chartjs 是一款简单优雅的数据可视化工具，对比其他图表库如 `echarts` 、 `highcharts` 、 `c3` 、 `flot` 、 `amchart` 等，它的画面效果、动态效果都更精致，它的 [文档首页](https://chartjs.bootcss.com/) 就透出一股小清新，基于 HTML5 Canvas，它拥有更好的性能且响应式，基本满足了一般数据展示的需要，包括折线图，条形图，饼图，散点图，雷达图，极地图，甜甜圈图等。

## 安装 

```bash
$ npm install hexo-tag-chart --save
```

## 用法

```
{% chart [width] [height] %}
\\ 这里填写 Chartjs 配置
{% endchart %}
```

|  Name   | Type  | Default  | Description  |
|  ----  | ----  | ----  | ----  |
| width  | decimal | 100% | 图表宽度 (%)  |
| height  | number | 300 | 图表高度 (px) |

其中 `chart` 是标签名，`endchart` 是结束标签，不需要更改，`90%` 是图表容器的相对宽度，默认是 100%，`300` 是图表容器的高度，默认是按正常比例缩放的，你可以通过设置 `options` 里面的 `aspectRatio` 属性来调整宽高比例，另外还有许多属性可以自定义，你可以查看 [官方文档](https://www.chartjs.org/docs/latest/general/responsive.html)。在标签之间的部分，都是需要自己填充的图表数据和属性。

## 例子

```
{% chart 80% 300 %}
{
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        }
    }
};
{% endchart %}
```

## 效果

![](@img/3/3-8/1.jpg)

更多用法介绍，请参考 [这里](https://shen-yu.gitee.io/2020/chartjs/) 

> 最后宣传一波自己的主题~
>
> [hexo-theme-ayer](https://github.com/Shen-Yu/hexo-theme-ayer) 、[点击预览](https://shen-yu.gitee.io/)
