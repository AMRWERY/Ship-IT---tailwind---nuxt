<template>
  <div>
    <div class="flex flex-col items-center py-4 bg-white border-b sm:flex-row sm:px-10 lg:px-20 xl:px-16">
      <p class="text-2xl font-bold text-gray-800">{{ $t('checkout.checkout') }}</p>
      <div class="py-2 mt-4 text-xs sm:mt-0 sm:ms-auto sm:text-base">
        <div class="relative">
          <ul class="relative flex items-center justify-between w-full space-s-2 sm:space-s-4">
            <li class="flex items-center text-start space-s-3 sm:space-s-4">
              <span
                class="flex items-center justify-center text-xs font-semibold rounded-full w-7 h-7 bg-emerald-200 text-emerald-700">
                <icon name="fa-regular:check-circle" class="w-4 h-4" />
              </span>
              <nuxt-link to="#" class="font-semibold text-gray-900">{{ $t('checkout.shop') }}</nuxt-link>
            </li>
            <icon name="material-symbols:double-arrow-rounded" class="w-4 h-4 text-gray-400" />
            <li class="flex items-center space-x-3 text-left sm:space-s-4">
              <span
                class="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-600 rounded-full ring ring-gray-600 ring-offset-2">2</span>
              <nuxt-link to="#" an class="font-semibold text-gray-900">{{ $t('checkout.shipping') }}</nuxt-link>
            </li>
            <icon name="material-symbols:double-arrow-rounded" class="w-4 h-4 text-gray-400" />
            <li class="flex items-center space-x-3 text-left sm:space-s-4">
              <span
                class="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-400 rounded-full">3</span>
              <nuxt-link to="#" class="font-semibold text-gray-500">{{ $t('checkout.payment') }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      <div class="px-4 pt-8">
        <p class="text-xl font-medium">{{ $t('checkout.order_summary') }}</p>
        <p class="text-gray-400">
          {{ $t('checkout.check_your_items_and_select_a_suitable_shipping_method') }}
        </p>
        <div class="px-2 py-4 mt-8 space-y-3 bg-white border rounded-lg sm:px-6">
          <div class="flex flex-col bg-white rounded-lg sm:flex-row">
            <img class="object-cover object-center h-24 m-2 border rounded-md w-28"
              src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <div class="flex flex-col w-full px-4 py-4">
              <span class="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
              <span class="float-right text-gray-400">42EU - 8.5US</span>
              <p class="text-lg font-bold">{{ $t('products.egp') }} 138.99</p>
            </div>
          </div>
          <div class="flex flex-col bg-white rounded-lg sm:flex-row">
            <img class="object-cover object-center h-24 m-2 border rounded-md w-28"
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <div class="flex flex-col w-full px-4 py-4">
              <span class="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
              <span class="float-right text-gray-400">42EU - 8.5US</span>
              <p class="mt-auto text-lg font-bold">{{ $t('products.egp') }} 238.99</p>
            </div>
          </div>
        </div>

        <p class="mt-8 text-lg font-medium">{{ $t('checkout.shipping_methods') }}</p>
        <form class="grid gap-6 mt-5">
          <div class="relative">
            <input class="hidden peer" id="radio_1" type="radio" name="radio" checked />
            <span
              class="box-content absolute block w-3 h-3 -translate-y-1/2 bg-white border-8 border-gray-300 rounded-full peer-checked:border-gray-700 end-4 top-1/2"></span>
            <label
              class="flex p-4 border border-gray-300 rounded-lg cursor-pointer select-none peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
              for="radio_1">
              <img class="object-contain w-14" src="https://justfields.com/storage/projects/7M5rV059/fedex.jpg" />
              <div class="ms-5">
                <span class="mt-2 font-semibold">{{ $t('checkout.fedex_delivery') }}</span>
                <p class="text-sm leading-6 text-slate-500">{{ $t('checkout.delivery') }}: 2 - 4 {{ $t('checkout.days')
                  }}
                </p>
              </div>
            </label>
          </div>
          <div class="relative">
            <input class="hidden peer" id="radio_2" type="radio" name="radio" checked />
            <span
              class="box-content absolute block w-3 h-3 -translate-y-1/2 bg-white border-8 border-gray-300 rounded-full peer-checked:border-gray-700 end-4 top-1/2"></span>
            <label
              class="flex p-4 border border-gray-300 rounded-lg cursor-pointer select-none peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
              for="radio_2">
              <img class="object-contain w-14" src="https://justfields.com/storage/projects/7M5rV059/dhl.jpg" />
              <div class="ms-5">
                <span class="mt-2 font-semibold">{{ $t('checkout.dhl_delivery') }}</span>
                <p class="text-sm leading-6 text-slate-500">{{ $t('checkout.delivery') }}: 3 - 6 {{ $t('checkout.days')
                  }}
                </p>
              </div>
            </label>
          </div>
        </form>
      </div>

      <div class="px-4 pt-8 mt-10 bg-gray-50 lg:mt-0">
        <p class="text-xl font-medium">{{ $t('checkout.payment_details') }}</p>
        <p class="text-gray-400">
          {{ $t('checkout.complete_your_order_by_providing_your_payment_details') }}
        </p>
        <FormKit type="form" id="checkout-form" :actions="false" :incomplete-message="false">
          <div class="space-y-4">
            <form-inputs>
              <template #email="{ icon, label, placeholder }">
                <label for="email" class="label">{{
                  label }}</label>
                <div class="relative">
                  <FormKit name="email" type="email" v-model="email" validation="required|email|ends_with:.com"
                    validation-visibility="dirty" :placeholder="placeholder" message-class="error-message"
                    input-class="input" />
                  <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                    <icon :name="icon" class="w-5 h-5 text-gray-400" />
                  </span>
                </div>
              </template>
            </form-inputs>

            <form-inputs>
              <template #card-holder="{ icon, label, placeholder }">
                <label for="name" class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                  label }}</label>
                <div class="relative">
                  <FormKit name="first name" type="text" v-model="cardHolder" validation="required|contains_alpha"
                    validation-visibility="dirty" :placeholder="placeholder" message-class="error-message"
                    input-class="input" />
                  <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                    <icon :name="icon" class="w-5 h-5 text-gray-400" />
                  </span>
                </div>
              </template>
            </form-inputs>

            <div class="flex gap-2">
              <div class="relative flex-shrink-0 w-7/12">
                <form-inputs>
                  <template #card-details="{ icon, label, placeholder }">
                    <label for="card-no" class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                      label }}</label>
                    <div class="relative">
                      <FormKit name="card-no" type="text" v-model="cardNumber" validation="required|number"
                        validation-visibility="dirty" :placeholder="placeholder" message-class="error-message"
                        input-class="input" />
                      <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                        <icon :name="icon" class="w-5 h-5 text-gray-400" />
                      </span>
                    </div>
                  </template>
                </form-inputs>
              </div>
              <form-inputs>
                <template #expiry_date="{ placeholder }">
                  <label for="credit-expiry" class="inline-block mb-1 text-sm text-gray-800 sm:text-base"></label>
                  <div class="relative">
                    <FormKit name="credit-expiry" type="text" v-model="expiryDate"
                      validation="required|date_format:MM/YY" validation-visibility="dirty" :placeholder="placeholder"
                      message-class="error-message"
                      input-class="w-full px-3 py-2 mt-1 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50" />
                  </div>
                </template>
              </form-inputs>
              <form-inputs>
                <template #cvc="{ placeholder }">
                  <label for="credit-cvc" class="inline-block mb-1 text-sm text-gray-800 sm:text-base"></label>
                  <div class="relative">
                    <FormKit name="credit-cvc" type="text" v-model="cvc" validation="required|number|length:3"
                      validation-visibility="dirty" :placeholder="placeholder" message-class="error-message"
                      input-class="w-full px-3 py-2 mt-1 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50" />
                  </div>
                </template>
              </form-inputs>
            </div>

            <div class="flex gap-2">
              <div class="relative flex-shrink-0 w-7/12">
                <form-inputs>
                  <template #street-address="{ label, placeholder }">
                    <label for="street-address" class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                      label }}</label>
                    <div class="relative">
                      <FormKit name="street-address" type="text" v-model="streetAddress"
                        validation="required|contains_alpha_spaces|length:10,100" validation-visibility="dirty"
                        :placeholder="placeholder" message-class="error-message"
                        input-class="input" />
                      <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                        <img class="object-contain w-4 h-4"
                          src="https://justfields.com/storage/projects/7M5rV059/egy=flag.png" />
                      </span>
                    </div>
                  </template>
                </form-inputs>
              </div>
              <div class="relative mt-6 rounded-md shadow-sm">
                <select id="billing-state" name="billing-state" v-model="state"
                  class="w-full px-3 py-2 mt-1 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50"
                  required autocomplete="state">
                  <!-- <option selected>-- {{ $t('placeholder.select_a_state') }} --</option> -->
                  <option v-for="country in countriesData" :key="country" :value="country">
                    {{ country.governorate_name_en }} - {{ country.governorate_name_ar }}
                  </option>
                </select>
              </div>
              <form-inputs>
                <template #billing-zip="{ placeholder }">
                  <label for="billing-zip" class="inline-block mb-1 text-sm text-gray-800 sm:text-base"></label>
                  <div class="relative">
                    <FormKit name="billing-zip" type="text" v-model="zip" :placeholder="placeholder"
                      input-class="w-full px-3 py-2 mt-1 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50" />
                  </div>
                </template>
              </form-inputs>
            </div>
          </div>
          <!-- Total -->
          <div>
            <div class="py-2 mt-6 border-t border-b">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">{{ $t('checkout.subtotal') }}</p>
                <p class="font-semibold text-gray-900">{{ $t('products.egp') }} 399.00</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">{{ $t('checkout.shipping') }}</p>
                <p class="font-semibold text-gray-900">{{ $t('products.egp') }} 8.00</p>
              </div>
            </div>
            <div class="flex items-center justify-between mt-6">
              <p class="text-sm font-medium text-gray-900">{{ $t('checkout.total') }}</p>
              <p class="text-2xl font-semibold text-gray-900">{{ $t('products.egp') }} 408.00</p>
            </div>
          </div>
          <button type="submit" class="w-full px-6 py-3 mt-4 mb-8 font-medium text-white bg-gray-900 rounded-md">
            {{ $t('btn.place_order') }}
          </button>
        </FormKit>

      </div>
    </div>
  </div>
</template>

<script setup>
import dataBase from '/public/countries.json';

const email = ref('')
const cardHolder = ref('')
const cardNumber = ref('')
const expiryDate = ref('')
const cvc = ref('')
const streetAddress = ref('')
const state = ref(null)
const zip = ref(null)
const countriesData = ref(dataBase.governorates);
</script>