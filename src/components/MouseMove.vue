<template>
  <div>
    {{"鼠标横轴X:"}}{{ x }} {{" - "}}{{"鼠标纵轴Y:"}}{{y}}
  </div>
</template>

<script>
import { useMousePosition } from "../use/useMouseMove";
import {  toRefs } from "vue";
export default {
  setup() {
    const position = useMousePosition();
    const { x, y } = toRefs(position);
    return {
      position,
      x,
      y
    };
  },
};
</script>

<style scoped></style>
