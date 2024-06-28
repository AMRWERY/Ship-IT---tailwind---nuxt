<template>
  <div>
    <transition name="fade">
      <div v-if="showAlert"
        class="absolute z-50 p-4 leading-normal text-green-600 bg-green-100 rounded-lg shadow-md top-32 end-12 w-96"
        role="alert">
        <div class="flex items-center">
          <icon name="material-symbols:check-circle-outline" class="w-6 h-6 text-yellow-500 fill-current me-2" />
          <h2 class="text-lg font-semibold">{{ $t('reusable.successfully') }}</h2>
        </div>
        <p class="mt-2">{{ message }}</p>
        <div class="absolute text-gray-400 cursor-pointer top-4 end-4 hover:text-gray-800" @click="closeAlert">
          <icon name="material-symbols:close" class="w-4 h-4" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  showAlert: Boolean,
  message: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['closeAlert']);

const closeAlert = () => {
  emit('closeAlert');
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>