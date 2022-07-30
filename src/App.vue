<template>
  <Header />
  <main class="main">
    <RouterView />
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

:root {
  --color-primary-dark: #000;
  --color-primary: #151414;
  --color-primary-light: #4f4242;
  --color-primary-lighter: #765c5c;

  --color-background: #fff;

  --color-text: #000;
  --color-text-link: #765c5c;

  --font-size-sm: clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);
  --font-size-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);
  --font-size-md: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);
  --font-size-lg: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);
  --font-size-xl: clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem);
  --font-size-xxl: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);
  --font-size-xxxl: clamp(3.05rem, 3.54vw + 2.17rem, 5rem);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

.app {
  --header-height: 3em;
  min-height: 100vh;
  font-size: var(--font-size-base);
  color: var(--color-text);
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;

  .main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    row-gap: 1em;
  }
}

.h1 {
  font-weight: 700;
}

.h2 {
  font-weight: 600;
}

.text {
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 400;

  &--info {
    --color-text: blue;
  }
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
  vertical-align: text-bottom;
}

.router-link {
  text-decoration: none;
  color: var(--color-text-link);

  &:-webkit-any-link {
    color: var(--color-text-link);
  }
}

.image {
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.nav__list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
}

.btn {
  --btn-color: var(--color-text);
  --btn-background-color: var(--color-background);
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0.5em 1.5em;
  color: var(--btn-color);
  background-color: var(--btn-background-color);
  border-radius: 5px;
  transition: transform 150ms ease-in-out;

  &:active {
    transform: scale(0.95);
  }

  &--info {
    --btn-color: white;
    --btn-background-color: blue;

    &:-webkit-any-link {
      color: var(--btn-color);
    }
  }

  &--rounded {
    border-radius: 999px;
  }

  &--outlined {
    color: var(--btn-background-color);
    background-color: transparent;
    border: 2px solid var(--btn-background-color);
    transition: color 300ms ease-in, background-color 300ms ease-in;

    &:hover {
      color: var(--btn-color);
      background-color: var(--btn-background-color);
    }

    &:-webkit-any-link {
      color: var(--btn-background-color);

      &:hover {
        color: var(--btn-color);
      }
    }
  }
}
</style>
