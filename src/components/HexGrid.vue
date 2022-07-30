<template>
  <div class="hex-grid">
    <HexCell
      v-for="num in rows * cellsPerRow"
      :key="num"
      :row="getRow(num)"
      :column="getColumn(num)"
    />
  </div>
</template>

<script setup>
import HexCell from './HexCell.vue';

const props = defineProps({
  rows: Number,
  cellsPerRow: Number
});

function getRow(position) {
  return Math.floor((position - 1) / props.cellsPerRow) + 1;
}

function getColumn(position) {
  const column = position % props.cellsPerRow;
  return column === 0 ? props.cellsPerRow : column;
}
</script>

<style scoped lang="scss">
.hex-grid {
  --hex-grid-rows: v-bind(rows);
  --hex-grid-cells-per-row: v-bind(cellsPerRow);
  --hex-grid-column-number: calc(var(--hex-grid-cells-per-row) * 2 + 1);
  --hex-grid-row-number: calc(
    (1 + var(--hex-grid-rows) + 0.5 * (var(--hex-grid-rows) - 1)) * 2
  );
  display: grid;
  grid-template-columns: repeat(var(--hex-grid-column-number), 1fr);
  grid-template-rows: repeat(var(--hex-grid-row-number), 1fr);
  grid-gap: clamp(5px, 0.17vw + 0.3rem, 0.595rem);
}
</style>
