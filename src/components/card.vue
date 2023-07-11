<template>
<div class="card">
  <div class="card-header">
    <slot name="card-header" />
  </div>
  <div class="card-body">
    <slot name="card-body"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'CardComponent'
}
</script>