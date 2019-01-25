import { getTwoPointDistance } from '../extend/methods'

export const circle = {
  shape: {
    rx: 0,
    ry: 0,
    r: 10
  },

  draw (ctx, shape, style) {
    ctx.beginPath()

    const { rx, ry, r } = shape

    ctx.arc(rx, ry, r, 0, Math.PI * 2)

    ctx.fill()
    ctx.stroke()

    ctx.closePath()
  },

  hoverCheck (pos, shape, style) {
    const { rx, ry, r } = shape

    const distance = getTwoPointDistance(pos, [rx, ry])

    return distance <= r
  },

  setGraphOrigin (shape, style) {
    const { rx, ry } = shape

    style.graphOrigin = [rx, ry]
  },

  drag ({movementX, movementY}, shape, style) {
    this.attr('shape', {
      rx: shape.rx + movementX,
      ry: shape.ry + movementY
    })
  }
}

export const ellipse = {
  shape: {
    rx: 0,
    ry: 0,
    hr: 10,
    vr: 5
  },

  draw (ctx, shape, style) {
    ctx.beginPath()

    let { rx, ry, hr, vr } = shape

    ctx.ellipse(rx, ry, hr, vr, 0, 0, Math.PI * 2)

    ctx.fill()
    ctx.stroke()

    ctx.closePath()
  },

  hoverCheck (pos, shape, style) {
    const { rx, ry, hr, vr } = shape

    const a = Math.max(hr, vr)
    const b = Math.min(hr, vr)

    const c = Math.sqrt(a * a - b * b)

    const leftFocusPoint = [rx - c, ry]
    const rightFocusPoint = [rx + c, ry]

    const distance = getTwoPointDistance(pos, leftFocusPoint) + getTwoPointDistance(pos, rightFocusPoint)

    return distance <= 2 * a
  },

  setGraphOrigin (shape, style) {
    const { rx, ry } = shape

    style.graphOrigin = [rx, ry]
  },

  drag ({movementX, movementY}, shape, style) {
    this.attr('shape', {
      rx: shape.rx + movementX,
      ry: shape.ry + movementY
    })
  }
}

export default new Map([
  ['circle', circle],
  ['ellipse', ellipse]
])