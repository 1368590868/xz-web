<script lang="ts" setup>
const nuxtApp = useNuxtApp()
const { parseMenuRoute, parseMenuTitle } = useNavbarParser()

const props = defineProps({
  menu: {
    type: Object as () =>
      | AwesomeLayoutPageNavbarMenu
      | AwesomeLayoutPageNavbarMenuDropdownItem,
    required: true,
  },
  isDropdown: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <template v-if="menu?.type === 'link' && isDropdown">
    <NuxtLink :to="parseMenuRoute(menu?.to)" #="{ isActive }">
      <div :class="[
        'text-[16px] transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-800 px-4 py-2 rounded-lg w-full',
        isActive
          ? 'text-[#E7900E] dark:text-gray-100 font-bold'
          : 'text-white dark:text-gray-300',
      ]">
        {{ parseMenuTitle(menu?.title) }}
      </div>
    </NuxtLink>
  </template>
  <template v-else-if="menu?.type === 'link'">
    <NuxtLink :to="parseMenuRoute(menu?.to)" #="{ isActive }">
      <div class="flex flex-col items-center mr-[30px]">
        <span class="text-[16px]  text-center" :class="{
          'text-[#E7900E] dark:text-gray-100 font-bold ': isActive,
          'text-white dark:text-gray-300': !isActive,
        }">{{ parseMenuTitle(menu?.title) }}</span>
        <div v-show="isActive" class="w-[32px] h-[2px] bg-[#E7900E] mt-[2px]"></div>
      </div>

    </NuxtLink>
  </template>
  <template v-else-if="menu?.type === 'button'">
    <AwesomeButton :text="parseMenuTitle(menu?.title)" size="xs" :to="parseMenuRoute(menu.to)" />
  </template>
</template>
