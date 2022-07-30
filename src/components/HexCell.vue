<template>
  <div class="hex-cell-wrapper">
    <div class="hex-cell"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  row: Number,
  column: Number
});

const horizontalOffset = props.row % 2 == 1 ? 0 : 1;
const gridRowStart = (props.row - 1) * 3 + 1;
const gridRowEnd = gridRowStart + 4;
const gridColumnStart = (props.column - 1) * 2 + 1 + horizontalOffset;
const gridColumnEnd = gridColumnStart + 2;

const hexGridArea = `${gridRowStart} / ${gridColumnStart} / ${gridRowEnd} / ${gridColumnEnd}`;
</script>

<style scoped lang="scss">
.hex-cell-wrapper {
  --hex-grid-area: v-bind(hexGridArea);
  grid-area: var(--hex-grid-area);
  aspect-ratio: 1 / 1.1547;
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 150ms ease-in-out;

  .hex-cell {
    width: 95%;
    height: 95%;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    background-color: var(--color-primary-light);
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
