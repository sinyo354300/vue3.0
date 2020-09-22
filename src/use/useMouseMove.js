import { reactive, onMounted, onUnmounted } from "vue";
export function useMousePosition() {
  const position = reactive({
    x: 0,
    y: 0,
  });

  onMounted(() => {
    window.addEventListener("mousemove", (e) => {
      position.x = e.pageX;
      position.y = e.pageY;
    });
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove");
  });

  return position;
}
