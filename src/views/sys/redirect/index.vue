<template>
  <div></div>
</template>

<script lang="ts" setup>
import { unref } from 'vue'
import { useRouter } from 'vue-router'

const { currentRoute, replace } = useRouter()

const { params, query } = unref(currentRoute)
const { path, redirectType = 'path' } = params

Reflect.deleteProperty(params, 'redirectType')
Reflect.deleteProperty(params, 'path')

const _path = Array.isArray(path) ? path.join('/') : path

if (redirectType === 'name') {
  replace({
    name: _path,
    query,
    params
  })
} else {
  replace({
    path: _path.startsWith('/') ? _path : `/${_path}`,
    query
  })
}
</script>

<style></style>
