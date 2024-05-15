<template>
  <div>
    <div class="px-6">
      <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContent1" data-twe-collapse-item>
        <ul class="flex flex-row me-auto" data-twe-navbar-nav-ref>
          <li class="static" data-twe-nav-item-ref data-twe-dropdown-ref>
            <nuxt-link
              class="flex items-center py-2 transition duration-200 cursor-pointer whitespace-nowrap pe-2 text-black/60 hover:text-black/300 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              to="" type="button" id="dropdownMenuButtonX" data-twe-dropdown-toggle-ref aria-expanded="false"
              data-twe-nav-link-ref>
              <span class="me-2">
                <icon name="simple-line-icons:grid" size="17px" />
              </span>
              {{ $t('menu.categories') }}
              <span class="ms-2">
                <icon name="ep:arrow-down-bold" size="17px" />
              </span>
            </nuxt-link>
            <div
              class="absolute left-0 right-0 top-full z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding shadow-lg data-[twe-dropdown-show]:block dark:bg-neutral-700"
              aria-labelledby="dropdownMenuButtonX" data-twe-dropdown-menu-ref>
              <div class="px-6 py-5 lg:px-8">
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                  <div>
                    <p class="block w-full px-6 py-2 font-semibold bg-white text-neutral-700">{{ $t('menu.women') }}</p>
                    <nuxt-link aria-current="true" v-for="item in women" :key="item" to=""
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">
                      {{ $t(item.title) }}</nuxt-link>
                  </div>
                  <div>
                    <p class="block w-full px-6 py-2 font-semibold bg-white text-neutral-700">{{ $t('menu.men') }}</p>
                    <nuxt-link aria-current="true" v-for="item in men" :key="item" to=""
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">
                      {{ $t(item.title) }}</nuxt-link>
                  </div>
                  <div>
                    <p class="block w-full px-6 py-2 font-semibold bg-white text-neutral-700">{{ $t('menu.juniors_kids')
                      }}</p>
                    <nuxt-link aria-current="true" v-for="item in juniors_kids" :key="item" to=""
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                      $t(item.title) }}</nuxt-link>
                  </div>
                  <div>
                    <p class="block w-full px-6 py-2 font-semibold bg-white text-neutral-700">{{ $t('menu.electronics')
                      }}</p>
                    <nuxt-link aria-current="true" v-for="item in electronics" :key="item" to=""
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t(item.title) }}</nuxt-link>
                  </div>
                  <div>
                    <p class="block w-full px-6 py-2 font-semibold bg-white text-neutral-700">{{ $t('menu.beauty') }}
                    </p>
                    <nuxt-link aria-current="true" v-for="item in beauty" :key="item" to=""
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t(item.title) }}</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

const women = ref([
  { title: 'menu.clothing', route: '' },
  { title: 'menu.shoes', route: '' },
  { title: 'menu.watches_jewelry', route: '' },
  { title: 'menu.handbags_bags', route: '' },
  { title: 'menu.accessories', route: '' },
])

const men = ref([
  { title: 'menu.clothing', route: '' },
  { title: 'menu.shoes', route: '' },
  { title: 'menu.watches_accessories', route: '' },
])

const juniors_kids = ref([
  { title: 'menu.girls', route: '' },
  { title: 'menu.baby_girls', route: '' },
  { title: 'menu.boys', route: '' },
  { title: 'menu.baby_boys', route: '' },
  { title: 'menu.toys', route: '' },
])

const electronics = ref([
  { title: 'menu.computers_laptops', route: '' },
  { title: 'menu.cameras_camcorders', route: '' },
  { title: 'menu.tv_home_theater', route: '' },
  { title: 'menu.video_games', route: '' },
  { title: 'menu.mobiles_tablets', route: '' },
])

const beauty = ref([
  { title: 'menu.bath_body', route: '' },
  { title: 'menu.makeup', route: '' },
  { title: 'menu.hair_care', route: '' },
  { title: 'menu.fragrance', route: '' },
  { title: 'menu.skin_care', route: '' },
])

onMounted(async () => {
  const { Collapse, Dropdown, Ripple, initTWE } = await import("tw-elements");
  initTWE({ Collapse, Dropdown, Ripple });
});
</script>