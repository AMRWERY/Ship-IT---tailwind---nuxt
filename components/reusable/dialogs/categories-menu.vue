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
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.clothing') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.shoes') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.watches_jewelry') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.handbags_bags') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.accessories') }}</nuxt-link>
                  </div>
                  <div>
                    <p class="block w-full px-6 py-2 font-semibold bg-white text-neutral-700">{{ $t('menu.men') }}</p>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.clothing') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.shoes') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.watches_accessories') }}</nuxt-link>
                  </div>
                  <div>
                    <p class="block w-full px-6 py-2 font-semibold bg-white text-neutral-700">{{ $t('menu.juniors_kids')
                      }}</p>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.girls') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.baby_girls') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.boys') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.baby_boys') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.toys') }}</nuxt-link>
                  </div>
                  <div>
                    <p class="block w-full px-6 py-2 font-semibold bg-white text-neutral-700">{{ $t('menu.electronics')
                      }}</p>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.computers_laptops') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.cameras_camcorders') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.tv_home_theater') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.video_games') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.mobiles_tablets') }}</nuxt-link>
                  </div>
                  <div>
                    <p class="block w-full px-6 py-2 font-semibold bg-white text-neutral-700">{{ $t('menu.beauty') }}
                    </p>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.bath_body') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.makeup') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.hair_care') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white border-b border-neutral-150 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.fragrance') }}</nuxt-link>
                    <nuxt-link to="" aria-current="true"
                      class="block w-full px-6 py-2 bg-white text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25">{{
                        $t('menu.skin_care') }}</nuxt-link>
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
onMounted(async () => {
  const { Collapse, Dropdown, Ripple, initTWE } = await import("tw-elements");
  initTWE({ Collapse, Dropdown, Ripple });
});
</script>