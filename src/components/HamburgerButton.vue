<template>
  <div class="hamburger-btn" :class="{ 'hamburger-btn--active': active }">
    <div class="hamburger-btn__burger"></div>
  </div>
</template>

<script setup>
defineProps({
  active: Boolean
});
</script>

<style lang="scss" scoped>
.hamburger-btn {
  $self: &;
  width: 2em;
  height: 2em;
  cursor: pointer;
  transition: all 500ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &__burger {
    &,
    &::before,
    &::after {
      width: 1.375em;
      height: 0.175em;
      background-color: var(--color-background);
      border-radius: 5px;
      transition: transform 300ms ease-in-out;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
    }

    &::before {
      transform: translateY(-225%);
    }

    &::after {
      transform: translateY(225%);
    }
  }

  &--active {
    #{$self}__burger {
      background-color: rgba(0, 0, 0, 0);

      &::before {
        transform: translateY(0) rotate(225deg);
      }

      &::after {
        transform: translateY(0) rotate(-225deg);
      }
    }
  }
}
</style>
