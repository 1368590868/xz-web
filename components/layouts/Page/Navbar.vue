<script lang="ts" setup>
import logo from '~/assets/images/logo.png'

const { awesome } = useAppConfig()
const { parseMenuRoute, parseMenuTitle } = useNavbarParser()
const $screen = useAwesomeScreen()
const nuxtApp = useNuxtApp()

const menus = computed(
  () =>
    (awesome?.layout?.page?.navbar?.menus ||
      []) as AwesomeLayoutPageNavbarMenu[],
)

// drawer
const showDrawer = ref(false)
</script>

<template>
  <header
    class="flex fixed backdrop-filter backdrop-blur-md p-[5px] top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-gray-950/10 dark:border-gray-50/[0.2] bg-[#000000]/[0.27] dark:bg-gray-950/[0.5]">
    <!-- content -->
    <div class="flex-1 flex items-center justify-between mx-auto px-4">
      <!-- title -->
      <div>
        <slot name="title">
          <NuxtLink to="/">
            <div class="flex justify-center items-center gap-[8px]">
              <img loading="lazy" :src="logo" alt="logo" class=" w-[100px] md:w-[285px]" />

              <div v-if="$screen.higherThan('md', $screen.current.value)"
                class="flex flex-col text-white text-[18px] font-normal pl-[8px]  ">
                <span>行展科技</span>
                <span>服务致远</span>
              </div>
            </div>
          </NuxtLink>
        </slot>
      </div>
      <!-- menus -->
      <div v-if="$screen.higherThan('md', $screen.current.value)" class="flex gap-[17px] space-x-4 items-end"
        :class="{ ' divide-gray-500': menus.length > 0 }">
        <div class="flex space-x-4 text-sm items-center">
          <!-- dynamic menus -->
          <template v-for="(item, i) in menus" :key="i">
            <LayoutPageNavbarMenuWrapper :menu="item" />
          </template>
        </div>
        <div class="h-[24px] text-[18px] font-bold text-white flex items-center">
          <!-- svg -->
          <svg t="1720064807691" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="1659" width="20" height="20">
            <path
              d="M751.1 966.3c-16.6 0-32.2-2.6-46.2-7.7-18-4.8-171.8-50.8-380.2-259.3C122.6 497.3 71.9 338.3 66.4 319.6c-9.4-23.7-11.3-52.6-5.2-81.3 6.1-28.8 19.7-54.9 38.2-73.4L178 86.3c18.4-18.4 42.2-28.6 67-28.6 28.7 0 55.7 13.7 74.2 37.5l115.1 148.4c19.4 25 21.7 65.8 5.4 93l-56.2 93.1c5.3 17.6 23.6 61.2 85.2 126.5 68.5 64.9 111.1 81 125.1 84.7l93.6-56.5c11.4-6.9 26.2-10.7 41.6-10.7 19.4 0 38.1 5.8 51.3 16l148.4 115.2c22.4 17.4 35.6 41.7 37.3 68.5 1.7 26.8-8.4 52.6-28.4 72.6l-78.5 78.5C833.4 950.3 792 966.3 751.1 966.3L751.1 966.3zM244.9 107.3c-11.5 0-22.8 5-31.9 14l-78.5 78.5c-24.1 24.1-34.3 71.8-21.7 102.1l0.1 0.1 0.9 2.6 0 0.2c0.4 1.6 46 159.4 245.9 359.3 206.4 206.4 357.1 246.2 358.6 246.6l0.3 0.1 2.4 0.7 0.1 0.1c8.6 3.3 19 5 30 5 27.8 0 56.5-10.7 73-27.2l78.5-78.5c9.8-9.8 14.8-22 14-34.4-0.8-12.4-7.3-23.9-18.2-32.4L750 628.9c-4.6-3.6-12.6-5.8-20.8-5.8-6.4 0-12.2 1.3-16.1 3.7l-107.6 64.9-7-0.1c-6.1-0.1-62.3-3.4-164.7-100.4l-0.2-0.2C340.8 493 333 434 332.4 427.6l-0.7-8.1L397.2 311c6-9.9 4.9-27.8-2.1-36.9L279.9 125.6C270.8 113.8 258.3 107.3 244.9 107.3z"
              fill="#fff" p-id="1660"></path>
          </svg>
          &nbsp;&nbsp;
          400-888-8888
        </div>
        <!-- others -->
      </div>
      <!-- drawer:btn -->
      <div v-else class="flex space-x-4 items-center" :class="{ 'divide-x divide-gray-500': menus.length > 0 }">
        <div class="pl-4 flex space-x-3 text-xl">
          <AwesomeLink class="text-gray-400 hover:text-gray-100" @click.prevent="() => (showDrawer = !showDrawer)">
            <Icon name="heroicons:bars-3-bottom-right-20-solid" />
          </AwesomeLink>
        </div>
      </div>
    </div>
    <!-- misc -->
    <!-- drawer -->
    <AwesomeActionSheet v-if="!$screen.higherThan('md', $screen.current.value) && showDrawer"
      @close="() => (showDrawer = false)">
      <AwesomeActionSheetGroup>
        <AwesomeActionSheetHeader>
          <AwesomeActionSheetHeaderTitle text="全部菜单" />
        </AwesomeActionSheetHeader>
        <!-- dynamic menus -->
        <AwesomeActionSheetItem>
          <div class="flex flex-col text-sm items-center divide-y divide-gray-400 dark:divide-gray-700 text-center">
            <template v-for="(item, i) in menus">
              <template v-if="item?.type === 'link'">
                <NuxtLink :key="i" :to="parseMenuRoute(item.to)" #="{ isActive }" class="w-full py-2">
                  <span :class="{
                    'text-gray-900 dark:text-gray-100 font-bold': isActive,
                    'text-gray-700 dark:text-gray-300': !isActive,
                  }">{{ parseMenuTitle(item?.title) }}</span>
                </NuxtLink>
              </template>
              <template v-if="item?.type === 'button'">
                <AwesomeButton :key="i" :text="parseMenuTitle(item?.title)" size="sm" :to="parseMenuRoute(item.to)"
                  class="w-full" />
              </template>
              <template v-if="item?.type === 'dropdown'">
                <div :key="i" class="w-full">
                  <HeadlessDisclosure v-slot="{ open }">
                    <HeadlessDisclosureButton :key="i" :class="[
                      'text-gray-700 dark:text-gray-300 w-full py-2 flex items-center justify-center duration-300 transition-all',
                      open ? 'font-bold' : '',
                    ]">
                      <span>{{ parseMenuTitle(item?.title) }}</span>
                      <Icon name="carbon:chevron-right" class="ml-1" :class="[
                        open
                          ? 'duration-300 transition-all transform rotate-90'
                          : 'rotate-0',
                      ]" />
                    </HeadlessDisclosureButton>
                    <Transition enter-active-class="transition duration-100 ease-out"
                      enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                      leave-active-class="transition duration-75 ease-out"
                      leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                      <HeadlessDisclosurePanel class="text-gray-500 pb-2">
                        <template v-for="(child, j) in item?.children || []" :key="j">
                          <NuxtLink :to="parseMenuRoute(child.to)" #="{ isActive }" class="w-full py-2">
                            <span :class="[
                              isActive
                                ? 'text-gray-900 dark:text-gray-100 font-bold'
                                : 'text-gray-700 dark:text-gray-300',
                            ]">{{ parseMenuTitle(child?.title) }}</span>
                          </NuxtLink>
                        </template>
                      </HeadlessDisclosurePanel>
                    </Transition>
                  </HeadlessDisclosure>
                </div>
              </template>
            </template>
          </div>
        </AwesomeActionSheetItem>
        <!-- <AwesomeActionSheetItem class="flex flex-col">
          <div class="pb-2">
            <div class="mt-2 mb-2 text-sm font-bold capitalize">
              Change Theme
            </div>
            <LayoutPageNavbarDropdownThemeSwitcher type="select-box" />
          </div>
        </AwesomeActionSheetItem> -->
      </AwesomeActionSheetGroup>
      <!-- <AwesomeActionSheetGroup>
        <AwesomeActionSheetItemButton class="flex justify-center items-center text-base space-x-2">
          <Icon name="mdi:github-face" class="text-lg font-bold" />
          <span class="text-sm">Github</span>
        </AwesomeActionSheetItemButton>
      </AwesomeActionSheetGroup> -->
    </AwesomeActionSheet>
  </header>
</template>
