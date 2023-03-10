<template>
  <svg :class="['svg-icon', $attrs.class]" :style="getStyle" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
interface Props {
  // 图标前缀
  prefix?: string
  // 图标文件名
  name: string
  // 图标大小
  size?: string | number
  // 图标颜色
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  name: '',
  size: '16px',
  color: '#000000'
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const getStyle = computed(() => {
  const { color, size } = props
  let s = `${size}`
  s = `${s.replace('px', '')}px`
  return {
    width: s,
    height: s,
    color
  }
})
</script>

<style scoped lang="less">
.svg-icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentcolor;
}
</style>
