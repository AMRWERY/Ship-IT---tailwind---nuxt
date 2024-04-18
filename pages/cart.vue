<template>
    <div class="pt-20">
        <h1 class="mb-10 text-2xl font-bold text-center">{{ $t('cart.cart_items') }}</h1>
        <div class="items-center justify-center mt-8" v-if="cartStore.cart.length === 0">
            <div class="text-center">
                <p class="text-4xl text-gray-500">{{ $t('cart.your_cart_is_empty') }}</p>
                <nuxt-link to="" type="button" class="mt-16 font-medium text-indigo-600 hover:text-indigo-500">
                    {{ $t('cart.start_shopping') }}
                    <span aria-hidden="true"> &rarr;</span>
                </nuxt-link>
            </div>
        </div>

        <div class="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0" v-else>
            <div class="rounded-lg md:w-2/3">
                <div class="justify-between p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start"
                    v-for="product in cartStore.cart" :key="product">
                    <img :src="product.productImg" class="w-full rounded-lg sm:w-40 lg:h-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">{{ product.title }}</h2>
                            <p class="my-2 text-lg text-gray-700">EGP{{ product.price }}</p>
                            <strong class="text-sm text-gray-700">{{ product.quantity }} pieces</strong>
                        </div>
                        <div class="flex justify-between mt-4 sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div class="flex items-center">
                                <i @click="removeProduct(product.id)"
                                    class="w-5 h-5 ml-auto duration-150 cursor-pointer fa-solid fa-xmark hover:text-red-500"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sub total -->
            <div class="h-full p-6 mt-6 bg-white border rounded-lg shadow-md md:mt-0 md:w-1/3">
                <div class="flex justify-between mb-2">
                    <p class="text-gray-700">{{ $t('cart.subtotal') }}</p>
                    <p class="text-gray-700">EGP{{ calculateSubtotal() }}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-gray-700">{{ $t('cart.shipping') }}</p>
                    <p class="text-gray-700">EGP14.99</p>
                </div>
                <hr class="my-4" />
                <div class="flex justify-between">
                    <p class="text-lg font-bold">{{ $t('cart.total') }}</p>
                    <div class="">
                        <p class="mb-1 text-lg font-bold">EGP{{ calculateTotal }}</p>
                        <p class="ml-4 text-sm text-gray-700">{{ $t('cart.including_vat') }}</p>
                    </div>
                </div>
                <nuxt-link to="">
                    <button
                        class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                        {{ $t('btn.check_out') }}
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const cartStore = useCartStore()

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

const calculateTotal = computed(() => {
    const subtotal = parseFloat(calculateSubtotal());
    const shipping = 14.99;
    const total = subtotal + shipping;
    return total.toFixed(2);
});
</script>