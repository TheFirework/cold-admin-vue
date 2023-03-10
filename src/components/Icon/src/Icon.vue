<template>
  <SvgIcon v-if="isSvgIcon" :size="size" :color="color" :name="getSvgIcon" :class="[$attrs.class, 'anticon']" />
  <span v-else ref="elRef" :class="[$attrs.class, 'app-iconify anticon']" :style="getIconifyStyle">
    <span class="iconify" :data-icon="icon"></span>
  </span>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue'
import Iconify from '@purge-icons/generated'

interface Props {
  // 图标文件名
  icon: string
  // 图标大小
  size?: number
  // 图标颜色
  color?: string
}

const SVG_START_FLAG = 'svg:'

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  size: 16,
  color: '#000000'
})

const elRef = ref()
const isSvgIcon = computed(() => props.icon.startsWith(SVG_START_FLAG))
const getSvgIcon = computed(() => props.icon.replace(SVG_START_FLAG, ''))

const getIconifyStyle = computed((): CSSProperties => {
  const { size, color } = props
  return {
    fontSize: `${size}px`,
    color
  }
})

async function updateIcon() {
  if (unref(isSvgIcon)) {
    return
  }

  const el = unref(elRef)
  if (!el) {
    return
  }

  await nextTick()

  if (!props.icon) {
    return
  }

  const svg = Iconify.renderSVG(props.icon, {})
  if (svg) {
    el.textContent = ''
    el.appendChild(svg)
  } else {
    const span = document.createElement('span')
    span.className = 'iconify'
    span.dataset.icon = props.icon
    el.textContent = ''
    el.appendChild(span)
  }
}

watch(
  () => props.icon,
  () => {
    updateIcon()
  }
)

onMounted(updateIcon)
</script>

<style scoped lang="less">
.app-iconify {
  display: inline-block;

  &-spin {
    svg {
      animation: loadingCircle 1s infinite linear;
    }
  }
}

span.iconify {
  display: block;
  min-width: 1em;
  min-height: 1em;
  background-color: rgb(12 12 12 / 6.7%);
  border-radius: 100%;
}
</style>
