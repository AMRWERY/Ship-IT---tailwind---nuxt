<template>
    <div>
        <div class="relative">
            <span
                class="absolute top-0 end-2 mt-2 -me-2.5 inline-flex items-center justify-center rounded-full bg-red-500 h-4 w-4 text-white text-xs">
                {{ cartStore.cart.length }}
            </span>
            <button type="button" class="rounded-full me-4 text-neutral-600 dark:text-white" @click="open = !open">
                <icon name="material-symbols:shopping-basket-outline" size="30px" class="text-gray-500" />
            </button>
        </div>

        <HeadlessTransitionRoot as="template" :show="open">
            <HeadlessDialog as="div" class="relative z-50" @close="open = false">
                <HeadlessTransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100"
                    leave-to="opacity-0">
                    <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                </HeadlessTransitionChild>

                <div class="fixed inset-0 overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                            <HeadlessTransitionChild as="template"
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enter-from="translate-x-full" enter-to="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leave-from="translate-x-0" leave-to="translate-x-full">
                                <HeadlessDialogPanel class="w-screen max-w-md pointer-events-auto">
                                    <div class="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                                        <div class="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                                            <div class="flex items-start justify-between">
                                                <HeadlessDialogTitle class="text-lg font-medium text-gray-900">
                                                    <nuxt-link to="/cart" @click="open = false">{{
                                                        $t('cart.shopping_cart')
                                                        }}</nuxt-link>
                                                </HeadlessDialogTitle>
                                                <div class="flex items-center ml-3 h-7">
                                                    <button type="button"
                                                        class="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
                                                        @click="open = false">
                                                        <span class="absolute -inset-0.5" />
                                                        <icon name="ci:close-md" class="w-6 h-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="flex items-center justify-center mt-8"
                                                v-if="cartStore.cart.length === 0">
                                                <p class="text-xl text-center text-gray-500">{{
                                                    $t('cart.your_cart_is_empty') }}</p>
                                            </div>
                                            <div class="mt-8" v-else>
                                                <div class="flow-root">
                                                    <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                        <li v-for="product in cartStore.cart" :key="product"
                                                            class="flex py-6">
                                                            <div
                                                                class="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                                                <img :src="product.productImg"
                                                                    class="object-cover object-center w-full h-full" />
                                                            </div>

                                                            <div class="flex flex-col flex-1 ml-4">
                                                                <div>
                                                                    <div
                                                                        class="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <nuxt-link to="">{{ product.title
                                                                                }}</nuxt-link>
                                                                        </h3>
                                                                        <p class="ml-4">EGP{{ product.price }}</p>
                                                                    </div>
                                                                    <p class="mt-1 text-sm text-gray-500">Quantity: {{
                                                                        product.quantity }}
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    class="flex items-end justify-between flex-1 text-sm">
                                                                    <!-- <p class="text-gray-500">Qty {{ product.quantity }}</p> -->

                                                                    <div class="flex">
                                                                        <button type="button"
                                                                            @click="removeProduct(product.id)"
                                                                            class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="px-4 py-6 border-t border-gray-200 sm:px-6"
                                            v-if="cartStore.cart.length > 0">
                                            <!-- Coupon -->
                                            <div>
                                                <form class="space-y-6">
                                                    <div>
                                                        <div class="relative flex mt-1 rounded-md shadow-sm"><input
                                                                class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 shadow-sm appearance-none focus:outline-none sm:text-sm rounded-is-md focus:ring-indigo-500 focus:border-indigo-500"
                                                                placeholder="Coupon Code" value="">
                                                            <span
                                                                class="inline-flex items-center px-3 rounded-ie-md border border-is-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm !bg-transparent !p-0 !border-none !rounded-none">
                                                                <button
                                                                    class="inline-flex items-center justify-center w-full h-full px-5 py-3 font-medium text-white bg-indigo-600 border border-transparent rounded-none shadow-sm rounded-ie-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-indigo-700 focus:ring-indigo-500"
                                                                    type="submit">{{ $t('btn.apply') }}</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p class="text-sm text-gray-700"></p>
                                                </form>
                                            </div>
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <p>{{ $t('cart.subtotal') }}</p>
                                                <p>EGP{{ calculateSubtotal() }}</p>
                                            </div>
                                            <p class="mt-0.5 text-sm text-gray-500">{{
                                                $t('cart.shipping_and_taxes_calculated_at_checkout') }}
                                            </p>
                                            <div class="mt-6">
                                                <nuxt-link to="/checkout" @click="open = false"
                                                    class="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Checkout</nuxt-link>
                                            </div>
                                            <div class="flex justify-center mt-6 text-sm text-center text-gray-500">
                                                <p>
                                                    or
                                                    <nuxt-link type="button" to=""
                                                        class="font-medium text-indigo-600 hover:text-indigo-500"
                                                        @click="open = false">
                                                        {{ $t('cart.continue_shopping') }}
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </nuxt-link>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="flex justify-center mb-6 text-sm text-center text-gray-500" v-else>
                                            <nuxt-link to="" type="button"
                                                class="font-medium text-indigo-600 hover:text-indigo-500"
                                                @click="open = false">
                                                {{ $t('cart.start_shopping') }}
                                                <span aria-hidden="true"> &rarr;</span>
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </HeadlessDialogPanel>
                            </HeadlessTransitionChild>
                        </div>
                    </div>
                </div>
            </HeadlessDialog>
        </HeadlessTransitionRoot>
    </div>
</template>

<script setup>
const cartStore = useCartStore()
const open = ref(false)

onMounted(() => {
    cartStore.cart = cartStore.getCart();
});

const totalQuantity = computed(() => {
    return cartStore.cart.reduce((total, product) => total + product.quantity, 0)
})

const removeProduct = (productId) => {
    const updatedCart = cartStore.cart.filter(product => product.id !== productId);
    cartStore.cart = updatedCart;
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
};

const calculateSubtotal = () => {
    return cartStore.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0).toFixed(2);
}
</script>