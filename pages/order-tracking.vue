<template>
  <div>
    <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex space-s-20">
        <p class="text-2xl font-semibold">Order details <span class="text-blue-700 underline">#A53365ax12</span></p>
        <span
          class="inline-flex items-center px-2 py-1 text-lg font-medium text-green-700 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20">Shipping</span>
      </div>
      <p class="text-gray-700">Date: 21/4/2024</p>

      <div class="mt-20">
        <ol
          class="border-s border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-s-0 md:border-t space-s-48">
          <!--First item-->
          <li>
            <div class="flex items-center pt-2 flex-start md:block md:pt-0">
              <div
                class="flex justify-center items-center -ms-[5px] me-3 h-[50px] w-[50px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[25px] md:me-0 md:ms-0">
                <icon name="icon-park-solid:transaction-order" class="text-gray-700" />
              </div>
              <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                21/4/2024
              </p>
            </div>
            <div class="pb-5 mt-2 ms-4 md:ms-0">
              <h4 class="mb-1.5 text-xl font-semibold">Order Confirmed</h4>
            </div>
          </li>

          <!--Second item-->
          <li>
            <div class="flex items-center pt-2 flex-start md:block md:pt-0">
              <div
                class="flex justify-center items-center -ms-[5px] me-3 h-[50px] w-[50px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[25px] md:me-0 md:ms-0">
                <icon name="tabler:ship" class="text-gray-700" />
              </div>
              <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                23/4/2024
              </p>
            </div>
            <div class="pb-5 mt-2 ms-4 md:ms-0">
              <h4 class="mb-1.5 text-xl font-semibold">Shipping</h4>
            </div>
          </li>

          <!--Third item-->
          <li>
            <div class="flex items-center pt-2 flex-start md:block md:pt-0">
              <div
                class="flex justify-center items-center -ms-[5px] me-3 h-[50px] w-[50px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[25px] md:me-0 md:ms-0">
                <icon name="material-symbols:local-shipping-rounded" class="text-gray-700" />
              </div>
              <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                27/4/2024
              </p>
            </div>
            <div class="pb-5 mt-2 ms-4 md:ms-0">
              <h4 class="mb-1.5 text-xl font-semibold">To Deliver</h4>
            </div>
          </li>
        </ol>
      </div>

      <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="courier-name" class="block text-sm font-medium leading-6 text-gray-900">Courier name</label>
          <div class="mt-2">
            <input type="text" name="courier-name" id="courier-name" autocomplete="courier-name"
              placeholder="courier-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="tracking-number" class="block text-sm font-medium leading-6 text-gray-900">Tracking number</label>
          <div class="mt-2">
            <input type="text" name="tracking-number" id="tracking-number" autocomplete="tracking-number"
              placeholder="#A53365ax12"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>

      <div class="mt-24">
        <ul class="space-y-4">
          <li class="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
              class="object-cover w-24 h-24 rounded-lg" />
            <div>
              <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>
              <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt class="inline">Size:</dt>
                  <dd class="inline">XXS</dd>
                </div>
                <div>
                  <dt class="inline">Color:</dt>
                  <dd class="inline">White</dd>
                </div>
              </dl>
            </div>

            <div class="flex items-center justify-end flex-1 gap-2">
              <form>
                <label for="Line1Qty" class="sr-only"> Quantity </label>
                <input type="number" min="1" value="1" id="Line1Qty"
                  class="h-8 w-14 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </form>
            </div>

            <div class="flex items-center justify-end flex-1 gap-2">
              <p class="text-lg font-semibold text-gray-700">320 EGP</p>
            </div>
          </li>
        </ul>

        <div class="flex justify-end pt-8 mt-8 border-t border-gray-100">
          <div class="w-screen max-w-lg space-y-4">
            <dl class="space-y-0.5 text-sm text-gray-700">
              <div class="flex justify-between">
                <dt>Subtotal</dt>
                <dd>£250</dd>
              </div>
              <div class="flex justify-between">
                <dt>VAT</dt>
                <dd>£25</dd>
              </div>
              <div class="flex justify-between">
                <dt>Discount</dt>
                <dd>-£20</dd>
              </div>
              <div class="flex justify-between !text-base font-medium border-t-2 border-gray-500">
                <dt class="mt-2">Total</dt>
                <dd class="mt-2">£200</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>