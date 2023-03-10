<template>
  <div>Analysis</div>
  <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
  <div class="color-green color-pink">UnoCss</div>
  <div class="color-green font-bold ml-3">UnoCss</div>
  <div class="card-shadow card"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.card {
  --at-apply: text-center my-0 font-medium w-200px h-200px bg-red-500;
}
</style>
