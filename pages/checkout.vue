<template>
  <div>
    <div class="flex flex-col items-center py-4 bg-white border-b sm:flex-row sm:px-10 lg:px-20 xl:px-16">
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
              <p class="text-lg font-bold">EGP138.99</p>
            </div>
          </div>
          <div class="flex flex-col bg-white rounded-lg sm:flex-row">
            <img class="object-cover object-center h-24 m-2 border rounded-md w-28"
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <div class="flex flex-col w-full px-4 py-4">
              <span class="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
              <span class="float-right text-gray-400">42EU - 8.5US</span>
              <p class="mt-auto text-lg font-bold">EGP238.99</p>
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
              <img class="object-contain w-14" src="https://justfields.com/storage/projects/7M5rV059/download.png" />
              <div class="ms-5">
                <span class="mt-2 font-semibold">{{ $t('checkout.fedex_delivery') }}</span>
                <p class="text-sm leading-6 text-slate-500">{{ $t('checkout.delivery') }}: 2-4 {{ $t('checkout.days') }}
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
              <img class="object-contain w-14" src="https://justfields.com/storage/projects/7M5rV059/download.png" />
              <div class="ms-5">
                <span class="mt-2 font-semibold">{{ $t('checkout.fedex_delivery') }}</span>
                <p class="text-sm leading-6 text-slate-500">{{ $t('checkout.delivery') }}: 3-6 {{ $t('checkout.days') }}
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
        <div>
          <label for="email" class="block mt-4 mb-2 text-sm font-medium">{{ $t('checkout.email_address') }}</label>
          <div class="relative">
            <input type="text" id="email" name="email"
              class="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="test@test.com" />
            <div class="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
              <icon name="ic:baseline-alternate-email" class="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <label for="card-holder" class="block mt-4 mb-2 text-sm font-medium">{{ $t('checkout.card_holder') }}</label>
          <div class="relative">
            <input type="text" id="card-holder" name="card-holder"
              class="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your full name here" />
            <div class="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
              <icon name="fa-regular:address-card" class="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <label for="card-no" class="block mt-4 mb-2 text-sm font-medium">{{ $t('checkout.card_details') }}</label>
          <div class="flex">
            <div class="relative flex-shrink-0 w-7/12">
              <input type="text" id="card-no" name="card-no"
                class="w-full px-2 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="xxxx-xxxx-xxxx-xxxx" />
              <div class="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                <icon name="fa-regular:credit-card" class="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <input type="text" name="credit-expiry"
              class="w-full px-2 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="MM/YY" />
            <input type="text" name="credit-cvc"
              class="flex-shrink-0 w-1/6 px-2 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="CVC" />
          </div>
          <label for="billing-address" class="block mt-4 mb-2 text-sm font-medium">{{ $t('checkout.billing_address')
            }}</label>
          <div class="flex flex-col sm:flex-row">
            <div class="relative flex-shrink-0 sm:w-7/12">
              <input type="text" id="billing-address" name="billing-address"
                class="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Street Address" />
              <div class="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                <img class="object-contain w-4 h-4"
                  src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" />
              </div>
            </div>
            <select type="text" name="billing-state"
              class="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
              <option value="State">{{ $t('checkout.state') }}</option>
            </select>
            <input type="text" name="billing-zip"
              class="flex-shrink-0 px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="ZIP" />
          </div>

          <!-- Total -->
          <div class="py-2 mt-6 border-t border-b">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">{{ $t('checkout.subtotal') }}</p>
              <p class="font-semibold text-gray-900">EGP399.00</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">{{ $t('checkout.shipping') }}</p>
              <p class="font-semibold text-gray-900">EGP8.00</p>
            </div>
          </div>
          <div class="flex items-center justify-between mt-6">
            <p class="text-sm font-medium text-gray-900">{{ $t('checkout.total') }}</p>
            <p class="text-2xl font-semibold text-gray-900">EGP408.00</p>
          </div>
        </div>
        <button class="w-full px-6 py-3 mt-4 mb-8 font-medium text-white bg-gray-900 rounded-md">
          {{ $t('btn.place_order') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>