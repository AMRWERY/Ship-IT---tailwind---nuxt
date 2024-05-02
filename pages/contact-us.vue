<template>
  <div>
    <section class="relative mx-auto my-12 text-gray-600 body-font max-w-7xl">
      <div class="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style="filter:contrast(1.2) opacity(0.4)">
        </iframe>
      </div>
      <div class="flex px-5 py-24 mx-auto">
        <div
          class="relative z-10 flex flex-col w-full p-8 mt-10 bg-white dark:bg-[#131313] shadow-md rounded-2xl lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
          <h2 class="mb-1 text-lg font-medium text-gray-800 title-font dark:text-gray-300">{{ $t('contact.feedback') }}
          </h2>
          <p class="mb-5 leading-relaxed text-gray-600 dark:text-gray-200">{{
            $t('contact.our_lives_are_a_sum_total_of_the_choices_we_have_made_truth_is_powerful_and_it_prevails') }}
          </p>

          <FormKit type="form" id="contact-form" :actions="false" :incomplete-message="false">
            <div class="relative mb-4">
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
            </div>
            <div class="relative mb-4">
              <form-inputs>
                <template #message="{ icon, label, placeholder }">
                  <label for="message" class="label">{{
                    label }}</label>
                  <div class="relative">
                    <FormKit type="textarea" name="message" v-model="message" inner-class="relative" cols="6" rows="4"
                      input-class="w-full text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 dark:bg-gray-100"
                      validation="required" maxlength="120" help="You can still have help text!" :sections-schema="{
                        help: {
                          children: [
                            '$: $fns.length($value || 0)',
                            ' / ',
                            '$: $attrs.maxlength'
                          ]
                        }
                      }" :validation-messages="{ length: 'Instructions cannot be more than 120 characters.' }"
                      message-class="error-message" :placeholder="placeholder" />
                    <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                      <icon :name="icon" class="w-5 h-5 text-gray-400" />
                    </span>
                  </div>
                </template>
              </form-inputs>
            </div>
            <button type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                $t('btn.lets_chat') }}</button>
          </FormKit>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const email = ref('')
const message = ref('')

useHead({
  title: 'Contact Us'
})
</script>