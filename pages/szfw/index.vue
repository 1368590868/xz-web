<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'


import banner from '~/assets/images/szfw/banner.jpg'
import dp from '~/assets/images/szfw/dp.png'
import left1 from '~/assets/images/szfw/left1.png'

import ljxz from '~/assets/images/service/ljxz.png'
import szfw1 from '~/assets/images/service/szfw1.png'
// compiler micro
definePageMeta({ layout: 'page' })
useHead({ title: '数智服务' })


</script>

<template>
  <div class="w-full">
    <img loading="lazy" ref="bgImgRef" class="w-full" alt="bg" :src="banner" />
    <!-- 了解行展 -->
    <div class="bg-[#FBFBFB] w-full">
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center mt-[52px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Service Content
          </div>
          <div class="text-[30px] font-bold text-left text-black">服务范围</div>
        </div>

        <div class="flex gap-[54px] justify-between items-center max-w-[991px] my-[50px]">
          <div>
            <img loading="lazy" :src="left1" />
          </div>
          <div class="w-[616px] h-[147px]   font-normal text-[#0d0d0d] leading-8 indent-8">
            <span>
              基于多种AIGC开源大模型结合行展科技大模型技术，提供多种场景的AI大模型应用解决方案，可支持公有云及私有化部署。在包括专业模型训练、文本创作、音视频创作、内容问答，等方面提供服务。基于大模型的智能服务、文本对话机器人、语音智控、公文写作、文案润色、智能客服等企业级办公应用，创新提效的解决方案。</span>
          </div>

        </div>
      </LayoutPageWrapper>
    </div>


    <div class="flex w-full flex-col items-center mt-[52px]">
      <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
        Cooperation Case
      </div>
      <div class="text-[30px] font-bold text-left text-black">合作案例</div>
    </div>
    <LayoutPageWrapper>
      <img loading="lazy" :src="dp" class="my-[50px]" />
      <div class="self-start text-[20px] text-[#000000] font-bold mb-[10px]">
        某城市对城市保障系统进行智能化升级，加速提升新质生产力
      </div>
      <div class="indent-8   text-[#0d0d0d] leading-8 mb-[50px]">
        行展科技以AI大模型为核心，结合虚拟人、智能语音、数字孪生等技术，无缝接入企业各类系统和业务数据，重构城市保障系统核心功能，帮助领导在任何时间、场地都能全面、准确、快速的了解城市运行情况和相应数据，协助企业领导者快速做出正确的决策，提升行政决策的效率。
      </div>
    </LayoutPageWrapper>

  </div>
</template>
