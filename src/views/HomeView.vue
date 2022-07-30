<template>
  <div class="parallax">
    <div class="parallax__content">
      <div class="parallax__layer parallax__layer--1"></div>
      <img
        class="image parallax__layer parallax__layer--2"
        src="@/assets/images/hero/layer-background-800w.png"
        srcset="
          @/assets/images/hero/layer-background-200w.png   200w,
          @/assets/images/hero/layer-background-400w.png   400w,
          @/assets/images/hero/layer-background-800w.png   800w,
          @/assets/images/hero/layer-background-1200w.png 1200w,
          @/assets/images/hero/layer-background-1600w.png 1600w,
          @/assets/images/hero/layer-background-2560w.png 2560w
        "
        alt="hero-image-background"
      />
      <img
        class="image parallax__layer parallax__layer--3"
        src="@/assets/images/hero/layer-1-800w.png"
        srcset="
          @/assets/images/hero/layer-1-200w.png   200w,
          @/assets/images/hero/layer-1-400w.png   400w,
          @/assets/images/hero/layer-1-800w.png   800w,
          @/assets/images/hero/layer-1-1200w.png 1200w,
          @/assets/images/hero/layer-1-1600w.png 1600w,
          @/assets/images/hero/layer-1-2560w.png 2560w
        "
        alt="hero-image-layer-1"
      />
      <img
        class="image parallax__layer parallax__layer--4"
        src="@/assets/images/hero/layer-2-800w.png"
        srcset="
          @/assets/images/hero/layer-2-200w.png   200w,
          @/assets/images/hero/layer-2-400w.png   400w,
          @/assets/images/hero/layer-2-800w.png   800w,
          @/assets/images/hero/layer-2-1200w.png 1200w,
          @/assets/images/hero/layer-2-1600w.png 1600w,
          @/assets/images/hero/layer-2-2560w.png 2560w
        "
        alt="hero-image-layer-2"
      />
      <img
        class="image parallax__layer parallax__layer--5"
        src="@/assets/images/hero/layer-3-800w.png"
        srcset="
          @/assets/images/hero/layer-3-200w.png   200w,
          @/assets/images/hero/layer-3-400w.png   400w,
          @/assets/images/hero/layer-3-800w.png   800w,
          @/assets/images/hero/layer-3-1200w.png 1200w,
          @/assets/images/hero/layer-3-1600w.png 1600w,
          @/assets/images/hero/layer-3-2560w.png 2560w
        "
        alt="hero-image-layer-3"
      />
      <h1 class="h1 parallax__title">
        Chào mừng bạn đến với đấu trường chân lý mùa 7
      </h1>
      <h2 class="h2 parallax__layer parallax__layer--subtitle">
        Hãy sẵn sàng bước vào thế giới rồng rộng lớn!
      </h2>
    </div>
    <section class="section">
      <div class="container section__content">
        <h2 class="h2">Tướng</h2>
        <p>
          58 vị tướng mới với các tộc hệ đa dạng sẵn sàng nhận lệnh! Hãy ngay
          lập tức ghé qua cửa hàng để đi tìm nhân phẩm nào!
        </p>
        <img
          class="image"
          src="@/assets/images/champion-cheatsheet.png"
          alt="champion_cheatsheet"
        />
        <RouterLink
          class="router-link btn btn--info btn--rounded btn--outlined"
          :to="{ name: 'champions' }"
        >
          Tìm hiểu thêm
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </RouterLink>
      </div>
    </section>
    <section class="section section--reversed">
      <div class="container section__content">
        <h2 class="h2">Trang bị</h2>
        <p>
          Các trang bị quen thuộc được giữ lại và nhiều trang bị mới được thêm
          vào. Đặc biệt là sự suất hiện của một số trang bị đặc trưng của
          tộc/hệ!
        </p>
        <img
          class="image"
          src="@/assets/images/item-cheatsheet.jpg"
          alt="champion_cheatsheet"
        />
        <RouterLink
          class="router-link btn btn--info btn--rounded"
          :to="{ name: 'items' }"
        >
          Tìm hiểu thêm
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </RouterLink>
      </div>
    </section>
    <section class="section">
      <div class="container section__content">
        <h2 class="h2">Xây dựng dội hình</h2>
        <p>
          Hãy vận dụng khả năng tư duy sáng tạo của bạn, sử dụng các vị tướng và
          các trang bị có sẵn để tạo nên các đội hình mạnh mẽ đem đến những trận
          chiến mãn nhãn, đầy cảm xúc.
        </p>
        <p>
          Chúng tôi cung cấp cho bạn một công cụ tiện lợi để thiết lập và lưu
          trữ những đội hình yêu thích!
        </p>
        <RouterLink class="router-link" :to="{ name: 'team-builder' }">
          <HexGrid :rows="4" :cellsPerRow="7" />
          <div class="text text--info">
            <span class="material-symbols-outlined">info</span>
            <span>Nhấp vào sân đấu để bắt đầu</span>
          </div>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import HexGrid from '@/components/HexGrid.vue';
</script>

<style scoped lang="scss">
.parallax {
  height: calc(100vh - var(--header-height));
  perspective: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;

  &__title {
    color: transparent;
    background: linear-gradient(45deg, #bfacff, white, #b3ddf1);
    background-clip: text;
    -webkit-background-clip: text;
  }

  &__content {
    height: 100%;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: -1;
  }

  &__layer {
    position: absolute;

    &--1,
    &--2,
    &--3,
    &--4,
    &--5 {
      inset: 0;
    }

    &--1 {
      background: linear-gradient(rgb(253, 206, 79), rgb(251, 102, 79));
      transform: translateZ(-30px) scale(4.05);
    }

    &--2 {
      transform: translateZ(-20px) scale(3.05);
    }

    &--3 {
      transform: translateZ(-10px) scale(2.05);
    }

    &--4 {
      transform: translateZ(-5px) scale(1.55);
    }

    &--5 {
      transform: translateZ(-8px) scale(1.85);
    }

    &--subtitle {
      color: transparent;
      background: linear-gradient(45deg, #bfacff, white, #b3ddf1);
      background-clip: text;
      -webkit-background-clip: text;
      top: 95%;
      transform: translateZ(2px) scale(0.8);
    }
  }
}

.section {
  color: var(--color-text);
  background-color: var(--color-background);
  padding: 1em 0;

  &--reversed {
    color: var(--color-background);
    background-color: var(--color-text);
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 1em;
  }

  .btn {
    align-self: center;
  }
}

.router-link {
  .material-symbols-outlined:last-child {
    transition: transform 150ms ease-in-out;
  }

  &:hover {
    .material-symbols-outlined:last-child {
      transform: translateX(0.25em);
    }
  }
}

.text--info {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5em;
}
</style>
