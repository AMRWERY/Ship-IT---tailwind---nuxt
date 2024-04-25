<template>
    <div>
        <div class="bg-white">
            <div>
                <!-- Mobile filter dialog -->
                <HeadlessTransitionRoot as="template" :show="mobileFiltersOpen">
                    <HeadlessDialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
                        <HeadlessTransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                            enter-from="opacity-0" enter-to="opacity-100"
                            leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                            leave-to="opacity-0">
                            <div class="fixed inset-0 bg-black bg-opacity-25" />
                        </HeadlessTransitionChild>

                        <div class="fixed inset-0 z-40 flex">
                            <HeadlessTransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                                enter-from="translate-x-full" enter-to="translate-x-0"
                                leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                                leave-to="translate-x-full">
                                <HeadlessDialogPanel
                                    class="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 overflow-y-auto bg-white shadow-xl ms-auto">
                                    <div class="flex items-center justify-between px-4 mt-7">
                                        <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                                        <button type="button"
                                            class="flex items-center justify-center w-10 h-10 p-2 text-gray-400 bg-white rounded-md -me-2"
                                            @click="mobileFiltersOpen = false">
                                            <icon name="ci:close-sm" class="w-6 h-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    <!-- Filters -->
                                    <form class="mt-4 border-t border-gray-200">
                                        <!-- Price -->
                                        <HeadlessDisclosure as="div" class="px-4 py-6 border-t border-gray-200"
                                            v-slot="{ open }">
                                            <h3 class="flow-root -my-3">
                                                <HeadlessDisclosureButton
                                                    class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                                                    <span class="font-medium text-gray-900">{{ $t('products.price') }}
                                                        ({{ $t('products.egp') }})</span>
                                                    <span class="flex items-center ms-6">
                                                        <icon name="ant-design:plus-outlined" class="w-5 h-5"
                                                            aria-hidden="true" v-if="!open" />
                                                        <icon name="ant-design:minus-outlined" class="w-5 h-5"
                                                            aria-hidden="true" v-else />
                                                    </span>
                                                </HeadlessDisclosureButton>
                                            </h3>
                                            <HeadlessDisclosurePanel class="pt-6">
                                                <div class="space-y-4">
                                                    <form class="relative flex items-center space-s-1"
                                                        @submit.prevent="filterProducts">
                                                        <div>
                                                            <div class="relative mt-1 rounded-md shadow-sm">
                                                                <input id="minPrice" name="minPrice" v-model="minPrice"
                                                                    class="flex-1 block w-full px-2 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 h-9"
                                                                    type="number" step="100"
                                                                    :placeholder="$t('placeholder.min')">
                                                            </div>
                                                        </div>
                                                        <span class="mx-auto mt-1 text-gray-600">{{ $t('products.to')
                                                            }}</span>
                                                        <div>
                                                            <div class="relative mt-1 rounded-md shadow-sm">
                                                                <input id="maxPrice" name="maxPrice" v-model="maxPrice"
                                                                    class="flex-1 block w-full px-2 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 h-9"
                                                                    step="100" type="number"
                                                                    :placeholder="$t('placeholder.max')">
                                                            </div>
                                                        </div>
                                                        <button
                                                            class="inline-flex items-center justify-center px-2 py-1 mt-1 font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-indigo-200 focus:ring-indigo-500"
                                                            type="submit">{{ $t('products.go') }}</button>
                                                    </form>
                                                </div>
                                            </HeadlessDisclosurePanel>
                                        </HeadlessDisclosure>

                                        <!-- fulfillment -->
                                        <HeadlessDisclosure as="div" class="px-4 py-6 border-t border-gray-200"
                                            v-slot="{ open }">
                                            <h3 class="flow-root -my-3">
                                                <filteration>
                                                    <template #fulfillment="{ plusIcon, minusIcon, label }">
                                                        <HeadlessDisclosureButton
                                                            class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                                                            <span class="font-medium text-gray-900">{{ label }}</span>
                                                            <span class="flex items-center ms-6">
                                                                <icon :name="plusIcon" class="w-5 h-5"
                                                                    aria-hidden="true" v-if="!open" />
                                                                <icon :name="minusIcon" class="w-5 h-5"
                                                                    aria-hidden="true" v-else />
                                                            </span>
                                                        </HeadlessDisclosureButton>
                                                    </template>
                                                </filteration>
                                            </h3>
                                            <HeadlessDisclosurePanel class="pt-6">
                                                <div class="space-y-4">
                                                    <div v-for="ful in fulfillment" :key="ful.value"
                                                        class="flex items-center">
                                                        <input id="category" name="category" :value="ful.label"
                                                            type="checkbox" :checked="ful.checked"
                                                            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                        <label for="category" class="text-sm text-gray-600 ms-3">{{
                                                            ful.label
                                                            }}</label>
                                                    </div>
                                                </div>
                                            </HeadlessDisclosurePanel>
                                        </HeadlessDisclosure>

                                        <!-- Categories -->
                                        <HeadlessDisclosure as="div" class="px-4 py-6 border-b border-gray-200"
                                            v-slot="{ open }">
                                            <h3 class="flow-root -my-3">
                                                <filteration>
                                                    <template #categories="{ plusIcon, minusIcon, label }">
                                                        <HeadlessDisclosureButton
                                                            class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                                                            <span class="font-medium text-gray-900">{{ label }}</span>
                                                            <span class="flex items-center ms-6">
                                                                <icon :name="plusIcon" class="w-5 h-5"
                                                                    aria-hidden="true" v-if="!open" />
                                                                <icon :name="minusIcon" class="w-5 h-5"
                                                                    aria-hidden="true" v-else />
                                                            </span>
                                                        </HeadlessDisclosureButton>
                                                    </template>
                                                </filteration>
                                            </h3>
                                            <HeadlessDisclosurePanel class="pt-6">
                                                <div class="space-y-4">
                                                    <div v-for="category in categories" :key="category.value"
                                                        class="flex items-center">
                                                        <input id="category" name="category" :value="category.label"
                                                            type="checkbox" :checked="category.checked"
                                                            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                                            @change="category.checked = !category.checked; updateSelectedCategories(category.label, category.checked)" />
                                                        <label for="category" class="text-sm text-gray-600 ms-3">{{
                                                            $t(category.label)
                                                            }}</label>
                                                    </div>
                                                </div>
                                            </HeadlessDisclosurePanel>
                                        </HeadlessDisclosure>

                                        <!-- Colors -->
                                        <HeadlessDisclosure as="div" class="px-4 py-6 border-b border-gray-200"
                                            v-slot="{ open }">
                                            <h3 class="flow-root -my-3">
                                                <filteration>
                                                    <template #colors="{ plusIcon, minusIcon, label }">
                                                        <HeadlessDisclosureButton
                                                            class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                                                            <span class="font-medium text-gray-900">{{ label }}</span>
                                                            <span class="flex items-center ms-6">
                                                                <icon :name="plusIcon" class="w-5 h-5"
                                                                    aria-hidden="true" v-if="!open" />
                                                                <icon :name="minusIcon" class="w-5 h-5"
                                                                    aria-hidden="true" v-else />
                                                            </span>
                                                        </HeadlessDisclosureButton>
                                                    </template>
                                                </filteration>
                                            </h3>
                                            <HeadlessDisclosurePanel class="pt-6">
                                                <div class="space-y-4">
                                                    <div v-for="color in colors" :key="color.value"
                                                        class="flex items-center">
                                                        <input id="color" name="color" :value="color.label"
                                                            type="checkbox" :checked="color.checked"
                                                            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                                            @change="color.checked = !color.checked; updateSelectedColor(color.label, color.checked)" />
                                                        <label for="color" class="text-sm text-gray-600 ms-3">{{
                                                            color.label
                                                            }}</label>
                                                    </div>
                                                </div>
                                            </HeadlessDisclosurePanel>
                                        </HeadlessDisclosure>
                                    </form>
                                </HeadlessDialogPanel>
                            </HeadlessTransitionChild>
                        </div>
                    </HeadlessDialog>
                </HeadlessTransitionRoot>

                <main class="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="flex items-baseline justify-between pt-12 pb-6 border-b border-gray-200">
                        <p>1 - 2 {{ $t('products.pages_over') }} 43 {{ $t('products.items_for') }} <span
                                class="font-semibold tracking-tight text-blue-700 underline">carters</span>
                        </p>
                        <div class="flex items-center">
                            <button type="button" class="p-2 -m-2 text-gray-400 ms-5 hover:text-gray-500 sm:ms-7">
                                <span class="sr-only">View grid</span>
                                <icon name="material-symbols:square-rounded" class="w-5 h-5" aria-hidden="true" />
                            </button>
                            <button type="button"
                                class="p-2 -m-2 text-gray-400 ms-4 hover:text-gray-500 sm:ms-6 lg:hidden"
                                @click="mobileFiltersOpen = true">
                                <span class="sr-only">Filters</span>
                                <icon name="material-symbols:filter-alt" class="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" class="pt-6 pb-24">
                        <h2 id="products-heading" class="sr-only">Products</h2>
                        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                            <!-- Filters -->
                            <form class="hidden lg:block">
                                <!-- Price -->
                                <HeadlessDisclosure as="div" class="py-6 border-b border-gray-200" v-slot="{ open }">
                                    <h3 class="flow-root -my-3">
                                        <HeadlessDisclosureButton
                                            class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                                            <span class="font-medium text-gray-900">{{ $t('products.price') }} ({{
                                                $t('products.egp') }})</span>
                                            <span class="flex items-center ms-6">
                                                <icon name="ant-design:plus-outlined" class="w-5 h-5" aria-hidden="true"
                                                    v-if="!open" />
                                                <icon name="ant-design:minus-outlined" class="w-5 h-5"
                                                    aria-hidden="true" v-else />
                                            </span>
                                        </HeadlessDisclosureButton>
                                    </h3>
                                    <HeadlessDisclosurePanel class="pt-6">
                                        <div class="space-y-4">
                                            <form class="relative flex items-center space-s-1"
                                                @submit.prevent="filterProducts">
                                                <div>
                                                    <div class="relative mt-1 rounded-md shadow-sm">
                                                        <input id="minPrice" name="minPrice" v-model="minPrice"
                                                            class="flex-1 block w-full px-2 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 h-9"
                                                            type="number" step="100"
                                                            :placeholder="$t('placeholder.min')">
                                                    </div>
                                                </div>
                                                <span class="mt-1 text-gray-600">{{ $t('products.to') }}</span>
                                                <div>
                                                    <div class="relative mt-1 rounded-md shadow-sm">
                                                        <input id="maxPrice" name="maxPrice" v-model="maxPrice"
                                                            class="flex-1 block w-full px-2 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 h-9"
                                                            step="100" type="number"
                                                            :placeholder="$t('placeholder.max')">
                                                    </div>
                                                </div>
                                                <button
                                                    class="inline-flex items-center justify-center px-2 py-1 mt-1 font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-indigo-200 focus:ring-indigo-500"
                                                    type="submit">{{ $t('products.go') }}</button>
                                            </form>
                                        </div>
                                    </HeadlessDisclosurePanel>
                                </HeadlessDisclosure>

                                <!-- fulfillment -->
                                <HeadlessDisclosure as="div" class="py-6 border-b border-gray-200" v-slot="{ open }">
                                    <h3 class="flow-root -my-3">
                                        <filteration>
                                            <template #fulfillment="{ plusIcon, minusIcon, label }">
                                                <HeadlessDisclosureButton
                                                    class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                                                    <span class="font-medium text-gray-900">{{ label }}</span>
                                                    <span class="flex items-center ms-6">
                                                        <icon :name="plusIcon" class="w-5 h-5" aria-hidden="true"
                                                            v-if="!open" />
                                                        <icon :name="minusIcon" class="w-5 h-5" aria-hidden="true"
                                                            v-else />
                                                    </span>
                                                </HeadlessDisclosureButton>
                                            </template>
                                        </filteration>
                                    </h3>
                                    <HeadlessDisclosurePanel class="pt-6">
                                        <div class="space-y-4">
                                            <div v-for="ful in fulfillment" :key="ful.value" class="flex items-center">
                                                <input id="category" name="category" :value="ful.label" type="checkbox"
                                                    :checked="ful.checked"
                                                    class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                <label for="category" class="text-sm text-gray-600 ms-3">{{ ful.label
                                                    }}</label>
                                            </div>
                                        </div>
                                    </HeadlessDisclosurePanel>
                                </HeadlessDisclosure>

                                <!-- Categories -->
                                <HeadlessDisclosure as="div" class="py-6 border-b border-gray-200" v-slot="{ open }">
                                    <h3 class="flow-root -my-3">
                                        <filteration>
                                            <template #categories="{ plusIcon, minusIcon, label }">
                                                <HeadlessDisclosureButton
                                                    class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                                                    <span class="font-medium text-gray-900">{{ label }}</span>
                                                    <span class="flex items-center ms-6">
                                                        <icon :name="plusIcon" class="w-5 h-5" aria-hidden="true"
                                                            v-if="!open" />
                                                        <icon :name="minusIcon" class="w-5 h-5" aria-hidden="true"
                                                            v-else />
                                                    </span>
                                                </HeadlessDisclosureButton>
                                            </template>
                                        </filteration>
                                    </h3>
                                    <HeadlessDisclosurePanel class="pt-6">
                                        <div class="space-y-4">
                                            <div v-for="category in categories" :key="category.value"
                                                class="flex items-center">
                                                <input id="category" name="category" :value="category.label"
                                                    type="checkbox" :checked="category.checked"
                                                    class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                                    @change="category.checked = !category.checked; updateSelectedCategories(category.label, category.checked)" />
                                                <label for="category" class="text-sm text-gray-600 ms-3">{{
                                                    $t(category.label)
                                                    }}</label>
                                            </div>
                                        </div>
                                    </HeadlessDisclosurePanel>
                                </HeadlessDisclosure>

                                <!-- Colors -->
                                <HeadlessDisclosure as="div" class="py-6 border-b border-gray-200" v-slot="{ open }">
                                    <h3 class="flow-root -my-3">
                                        <filteration>
                                            <template #colors="{ plusIcon, minusIcon, label }">
                                                <HeadlessDisclosureButton
                                                    class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                                                    <span class="font-medium text-gray-900">{{ label }}</span>
                                                    <span class="flex items-center ms-6">
                                                        <icon :name="plusIcon" class="w-5 h-5" aria-hidden="true"
                                                            v-if="!open" />
                                                        <icon :name="minusIcon" class="w-5 h-5" aria-hidden="true"
                                                            v-else />
                                                    </span>
                                                </HeadlessDisclosureButton>
                                            </template>
                                        </filteration>
                                    </h3>
                                    <HeadlessDisclosurePanel class="pt-6">
                                        <div class="space-y-4">
                                            <div v-for="color in colors" :key="color.value" class="flex items-center">
                                                <input id="color" name="color" :value="color.label" type="checkbox"
                                                    :checked="color.checked"
                                                    class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                                    @change="color.checked = !color.checked; updateSelectedColor(color.label, color.checked)" />
                                                <label for="color" class="text-sm text-gray-600 ms-3">{{ color.label
                                                    }}</label>
                                            </div>
                                        </div>
                                    </HeadlessDisclosurePanel>
                                </HeadlessDisclosure>
                            </form>

                            <!-- Product grid -->
                            <div class="lg:col-span-4">
                                <carters-products :filteredProducts="filterProducts" />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
const minPrice = ref('');
const maxPrice = ref('');
const store = useCartersProductsStore()
const selectedCategories = ref([]);
const selectedColor = ref([]);
const { t } = useI18n();

const filterProducts = () => {
    store.filterProductsByPrice(minPrice.value, maxPrice.value);
};

const updateSelectedCategories = (categoryId, checked) => {
    if (checked) {
        selectedCategories.value.push(categoryId);
    } else {
        selectedCategories.value = selectedCategories.value.filter((id) => id !== categoryId);
    }
    store.filterProductsByCategory(selectedCategories.value);
    // console.log(updateSelectedCategories)
};

const updateSelectedColor = (color, checked) => {
    if (checked) {
        selectedColor.value.push(color);
    } else {
        selectedColor.value = selectedColor.value.filter((id) => id !== color);
    }
    store.filterProductsByColor(selectedColor.value);
    // console.log(updateSelectedCategories)
};

const fulfillment = ref([
    { value: "carter's", label: "Carter's", checked: true },
])

const categories = ref([
    { value: 'women', label: 'menu.women', checked: false },
    { value: 'men', label: 'menu.men', checked: false },
    { value: 'kids', label: 'menu.juniors_kids', checked: false },
    { value: 'electronics', label: 'menu.electronics', checked: false },
    { value: 'beauty', label: 'menu.beauty', checked: false },
])

const colors = ref([
    { value: 'yellow', label: 'Yellow', checked: false },
    { value: 'white', label: 'White', checked: false },
    { value: 'turquoise', label: 'Turquoise', checked: false },
    { value: 'silver', label: 'Silver', checked: false },
    { value: 'red', label: 'Red', checked: false },
    { value: 'purple', label: 'Purple', checked: false },
    { value: 'pink', label: 'Pink', checked: false },
    { value: 'orange', label: 'Orange', checked: false },
    { value: 'off-white', label: 'Off-White', checked: false },
    { value: 'grey', label: 'Grey', checked: false },
    { value: 'green', label: 'Green', checked: false },
    { value: 'gold', label: 'Gold', checked: false },
    { value: 'blue', label: 'Blue', checked: false },
    { value: 'black', label: 'Black', checked: false },
])

const mobileFiltersOpen = ref(false)
</script>