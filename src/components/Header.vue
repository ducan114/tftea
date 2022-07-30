<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img class="logo__image" src="@/assets/images/logo.webp" alt="logo" />
        <div>
          <span class="logo__text logo__text--left">TFT</span>
          <span class="logo__text logo__text--right">ea</span>
        </div>
      </div>
      <nav class="nav">
        <ul class="nav__list nav__list--desktop">
          <li>
            <RouterLink :to="{ name: 'home' }" class="router-link">
              Trang chủ
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'champions' }" class="router-link">
              Tướng
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'items' }" class="router-link">
              Trang bị
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'team-builder' }" class="router-link">
              Đội hình
            </RouterLink>
          </li>
        </ul>
        <Transition name="fade">
          <ul v-show="showMobileNav" class="nav__list">
            <li>
              <RouterLink :to="{ name: 'home' }" class="router-link">
                Trang chủ
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'champions' }" class="router-link">
                Tướng
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'items' }" class="router-link">
                Trang bị
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'team-builder' }" class="router-link">
                Đội hình
              </RouterLink>
            </li>
          </ul>
        </Transition>
        <HamburgerButton
          :active="showMobileNav"
          @click="toggleMobileNav"
          class="hamburger-btn--mobile"
        />
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import HamburgerButton from './HamburgerButton.vue';

const showMobileNav = ref(false);

function toggleMobileNav() {
  showMobileNav.value = !showMobileNav.value;
}
</script>

<style scoped lang="scss">
.header {
  color: var(--color-primary-lighter);
  background-color: var(--color-primary-dark);
  height: var(--header-height);
  position: relative;
}

.router-link {
  font-weight: 500;
  transition: color 300ms ease;

  &:hover {
    color: var(--color-background);
  }

  &#{&}--active {
    color: var(--color-background);
  }
}

.container {
  padding: 0.5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: flex-end;
  column-gap: 0.25em;

  &__image {
    width: 32px;
  }

  &__text {
    font-family: 'Signika Negative', sans-serif;
    font-size: 1.5rem;

    &--left {
      color: var(--color-primary-light);
    }

    &--right {
      color: var(--color-primary-lighter);
    }
  }
}

.nav__list {
  background-color: var(--color-primary);
  position: absolute;
  top: 100%;
  left: 0;
  bottom: calc(100% - 100vh);
  right: 0;
  z-index: 100;

  &--desktop {
    display: none;
  }
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 300ms ease-in-out;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
  }
}

@media all and (min-width: 48em) {
  .nav__list {
    position: static;
    flex-direction: row;
    display: none;

    &--desktop {
      display: flex;
    }
  }

  .hamburger-btn--mobile {
    display: none;
  }
}
</style>
