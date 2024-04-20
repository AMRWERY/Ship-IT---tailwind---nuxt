<template>
  <div>
    <slot name="fulfillment" plusIcon="ant-design:plus-outlined" minusIcon="ant-design:minus-outlined" :label="$t('products.fulfillment')"></slot>
    <slot name="categories" plusIcon="ant-design:plus-outlined" minusIcon="ant-design:minus-outlined" :label="$t('products.categories')"></slot>
    <slot name="colors" plusIcon="ant-design:plus-outlined" minusIcon="ant-design:minus-outlined" :label="$t('products.colors')"></slot>
  </div>
</template>

<script setup>

</script>