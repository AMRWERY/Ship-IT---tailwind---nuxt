<template>
  <div>
    <button type="button" @click="openModal" class="font-medium leading-normal text-orange-500 shadow-md">
      Read More
    </button>

    <HeadlessTransitionRoot appear :show="isOpen" as="template">
      <HeadlessDialog as="div" @close="closeModal" class="relative z-10">
        <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
          enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex items-center justify-center min-h-full p-4 text-center">
            <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <HeadlessDialogPanel
                class="w-full max-w-3xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <HeadlessDialogTitle as="h3" class="flex items-center text-lg font-medium leading-6 text-gray-900">
                  Best brands for fashion
                  <button type="button" class="ml-auto" @click="closeModal">
                    <icon name="ci:close-md" />
                  </button>
                </HeadlessDialogTitle>

                <div class="mt-5">
                  <div>
                    <div class="w-full overflow-hidden bg-white rounded-lg shadow-md h-96">
                      <div class="w-full h-1/2 transit">
                        <img class="object-cover w-full h-96" :src="card.img">
                      </div>
                    </div>
                    <div class="mt-6">
                      <p class="mb-4 text-2xl font-semibold text-blue-600">{{ card.title }}</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et
                        dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu
                        fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt
                        mollit
                        anim id est laborum.</p>
                      <ul class="my-4 ml-8 list-disc">
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                      </ul>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et
                        dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu
                        fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt
                        mollit
                        anim id est laborum.</p>
                    </div>
                  </div>
                </div>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>

<script setup>
const props = defineProps(["card"]);

const isOpen = ref(false)

const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}
</script>