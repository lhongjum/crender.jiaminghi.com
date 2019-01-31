## 基础图形

插件内置了丰富的基础图形，在这里将一一为你展示

## 圆形

<demo :config="circle" />

<fold-box>
<<< @/docs/guide/graphData/circle.js
</fold-box>

## 椭圆形

<demo :config="ellipse" />

<fold-box>
<<< @/docs/guide/graphData/ellipse.js
</fold-box>

## 矩形

<demo :config="rect" />

<fold-box>
<<< @/docs/guide/graphData/rect.js
</fold-box>

## 环形

<demo :config="ring" />

<fold-box>
<<< @/docs/guide/graphData/ring.js
</fold-box>

## 弧形

<demo :config="arc" />

<fold-box>
<<< @/docs/guide/graphData/arc.js
</fold-box>

## 扇形

<demo :config="sector" />

<fold-box>
<<< @/docs/guide/graphData/sector.js
</fold-box>

## 正多边形

<demo :config="regPolygon" />

<fold-box>
<<< @/docs/guide/graphData/regPolygon.js
</fold-box>

## 折线

## 光滑曲线

## 贝塞尔曲线

## 贝塞尔闭合图形

<script>

import circle from './graphData/circle.js'
import ellipse from './graphData/ellipse.js'
import rect from './graphData/rect.js'
import ring from './graphData/ring.js'
import arc from './graphData/arc.js'
import sector from './graphData/sector.js'
import regPolygon from './graphData/regPolygon.js'

export default {
  data () {
    return {
      circle,
      ellipse,
      rect,
      ring,
      arc,
      sector,
      regPolygon
    }
  }
}

</script>