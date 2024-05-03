<template>
  <div>
    <section class="px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h3 class="mb-6 text">{{ $t('blogs.testimonials') }}</h3>
        <p class="pb-2 mb-6 text-neutral-500 dark:text-neutral-300 md:mb-12">
          {{
            $t('blogs.he_who_conquers_others_is_strong_he_who_conquers_himself_is_mighty_if_you_spend_too_much_time_thinking_about_a_thing_you_will_never_get_it_done_there_are_things_so_deep_and_complex_that_only_intuition_can_reach_it_in_our_stage_of_development_as_human_beings')
          }}
        </p>
      </div>

      <div class="grid gap-12 text-center md:grid-cols-2">
        <!--First Testimonial-->
        <div class="mb-6 md:mb-0" v-for="user in users" :key="user">
          <div class="flex justify-center mb-6 transit">
            <img :src="user.img" class="w-24 rounded-full shadow-lg dark:shadow-black/30" />
          </div>
          <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
            "{{ $t(user.desc) }}"
          </p>
          <p class="italic text-gray-800 dark:text-gray-300">- {{ $t(user.name) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
const users = ref([
  { name: 'blogs.anna_morian', desc: 'blogs.i_cannot_make_my_days_longer_so_i_strive_to_make_them_better_trust_yourself_you_know_more_than_you_think_you_do', img: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg' },
  { name: 'blogs.lisa_cudrow', desc: 'blogs.everyone_is_a_genius_at_least_once_a_year_a_real_genius_has_his_original_ideas_closer_together', img: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(19).jpg' },
  { name: 'blogs.teresa_may', desc: 'blogs.people_are_not_lazy_they_simply_have_impotent_goals_that_is_goals_that_do_not_inspire_them_you_only_lose_what_you_cling_to', img: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp' },
  { name: 'blogs.john_smith', desc: 'blogs.patience_is_the_companion_of_wisdom_every_strike_brings_me_closer_to_the_next_home_run_chaos_and_order_are_not_enemies', img: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp' }
])
</script>