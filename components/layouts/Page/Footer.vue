<script lang="ts" setup>
import gongan from '~/assets/images/about/gongan.png'
const { awesome } = useAppConfig()
</script>

<template>
  <footer class="border-t bg-[#3F4F71] dark:border-gray-50/[0.2]">
    <div
      class="flex md:flex-row flex-col h-[107px] gap-[15px] items-center justify-center font-normal text-center text-white leading-[16px]"
    >
      <span> 版权所有：北京行展软件科技有限公司 </span>
      <span> 京ICP备18007287号 </span>
      <span class="flex items-center gap-[3px]">
        <img loading="lazy" :src="gongan" />
        <a
          href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802044726"
          rel="noreferrer"
          target="blank"
          >京公网安备11010802044726</a
        >
      </span>
    </div>
  </footer>
</template>
