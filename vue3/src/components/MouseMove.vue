<template>
  <div>x:{{ x }}--y:{{ y }}</div>
</template>

<script>
import { useMousePosition } from './common'

export default {
  setup() {
    const { x, y } = useMousePosition()

    return {
      x,
      y
    }
  }
}

</script>
