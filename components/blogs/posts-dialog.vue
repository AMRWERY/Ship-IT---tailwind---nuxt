<template>
  <div>
    <button type="button" @click="openModal"
      class="font-medium leading-normal text-orange-500 shadow-md dark:text-orange-400">
      {{ $t('btn.read_more') }}
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
                class="w-full max-w-3xl p-6 mt-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl dark:bg-[#1e2022]">
                <HeadlessDialogTitle as="h3"
                  class="flex items-center text-lg font-medium leading-6 text-gray-700 dark:text-gray-300">
                  {{ $t('blogs.best_brands_for_fashion') }}
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
                      <p class="mb-4 text-2xl font-semibold text-blue-600 dark:text-blue-400">{{ $t(card.title) }}</p>
                      <div class="overflow-x-hidden overflow-y-auto text-gray-700 blogs max-h-48 dark:text-gray-200">
                        <p>{{
                          $t('blogs.happiness_is_the_reward_we_get_for_living_to_the_highest_right_we_know_a_gem_cannot_be_polished_without_friction_nor_a_man_perfected_without_trials_dont_ruin_the_present_with_the_ruined_past_respect_should_be_earned_by_actions_and_not_acquired_by_years_neither_genius_fame_nor_love_show_the_greatness_of_the_soul_only_kindness_can_do_that_being_in_humaneness_is_good_if_we_select_other_goodness_and_thus_are_far_apart_from_humaneness_how_can_we_be_the_wise')
                        }}</p>
                        <ul class="my-4 ml-8 list-disc">
                          <li>{{ $t('blogs.in_skating_over_thin_ice_our_safety_is_in_our_speed') }}</li>
                          <li>{{ $t('blogs.he_who_talks_more_is_sooner_exhausted') }}</li>
                        </ul>
                        <p>{{
                          $t('blogs.why_compare_yourself_with_others_no_one_in_the_entire_world_can_do_a_better_job_of_being_you_than_you_consider_how_hard_it_is_to_change_yourself_and_you_will_understand_what_little_chance_you_have_in_trying_to_change_others_it_is_not_enough_to_have_a_good_mind_the_main_thing_is_to_use_it_well_when_you_learn_teach_when_you_get_give_to_study_and_not_think_is_a_waste_to_think_and_not_study_is_dangerous')
                        }}</p>
                      </div>
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