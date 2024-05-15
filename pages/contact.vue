<template>
  <div>
    <div class="m-auto max-w-[1500px] px-4 pt-28">
      <div class="max-w-[600px] m-auto flex justify-center items-center py-10">
        <div
          class="w-full px-6 py-8 pt-20 bg-white border border-orange-400 shadow-xl rounded-2xl dark:bg-[#131313] dark:border-blue-400">
          <div class="flex justify-center items-center mt-[-150px] relative">
            <img src="https://justfields.com/storage/projects/7M5rV059/profile.jpg"
              class="w-[150px] h-[150px] rounded-full shadow-xl p-1 border border-orange-400 bg-gray-50">
          </div>
          <h2 class="pt-6 pb-3 text-3xl font-semibold text-gray-800 dark:text-gray-300">{{ $t('contact.do_not_be_shy')
            }}
            <span class="inline-block animate-bounce">!</span>
          </h2>
          <div class="w-[30px] h-[3px] bg-[#ffb400] mb-2"></div>
          <p class="mb-5 text-lg text-gray-500 dark:text-gray-200">
            {{
              $t('contact.feel_free_to_get_in_touch_with_me_i_am_always_open_to_discussing_new_projects_creative_ideas_or_opportunities_to_be_part_of_your_visions')
            }}.
          </p>
          <div class="flex items-center justify-start mb-2">
            <span class="inline-block w-12 text-red-400 me-4">
              <icon name="material-symbols:location-on-rounded" size="40px" />
            </span>
            <nuxt-link to="#">
              <span class="block text-lg font-semibold text-gray-500 dark:text-gray-200">{{ $t('contact.address_point')
                }}</span>
              <span class="block text-gray-700 text-md dark:text-gray-100">Cairo, Egypt</span>
            </nuxt-link>
          </div>
          <div class="flex items-center justify-start my-4">
            <span class="inline-block w-12 text-blue-400 me-4">
              <icon name="material-symbols:alternate-email-rounded" size="40px" />
            </span>
            <nuxt-link to="/contact-us">
              <span class="block text-lg font-semibold text-gray-500 dark:text-gray-200">{{ $t('contact.email_address')
                }}</span>
              <span class="block text-gray-700 text-md dark:text-gray-100">amrmounir2@gmail.com</span>
            </nuxt-link>
          </div>
          <div class="flex items-center justify-start my-4">
            <span class="inline-block w-12 text-orange-400 me-4">
              <icon name="material-symbols:phone-enabled" size="40px" />
            </span>
            <nuxt-link to="#">
              <span class="block text-lg font-semibold text-gray-500 dark:text-gray-200">{{ $t('contact.mobile_no')
                }}.</span>
              <span class="block text-gray-700 text-md dark:text-gray-100">+20 1022655742</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead(() => ({
  title: t('head.hire_me')
}))
</script>