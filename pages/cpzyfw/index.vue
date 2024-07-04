<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

import rightLogo from '~/assets/images/service/right-logo.png'

import left1 from '~/assets/images/cpzyfw/left1.png'
import left2 from '~/assets/images/cpzyfw/left2.png'
import left3 from '~/assets/images/cpzyfw/left3.png'
import banner from '~/assets/images/cpzyfw/banner.jpg'
// compiler micro
definePageMeta({ layout: 'page' })
useHead({ title: '行业方案咨询服务' })
</script>

<template>
  <div class="w-full">
    <img loading="lazy" ref="bgImgRef" class="w-full" alt="bg" :src="banner" />
    <!-- 服务内容 -->
    <div class="bg-[#F6F7FB] w-full">
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center mt-[52px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Cooperation Case
          </div>
          <div class="text-[30px] font-bold text-left text-black">合作案例</div>
        </div>

        <div class="flex gap-[40px] justify-between items-center max-w-[1200px] mt-[69px]">
          <div>
            <img loading="lazy" :src="left1" />
          </div>
          <div class="w-[537px]   font-normal text-[#0d0d0d] leading-6 indent-8">
            <div class="leading-8 w-[477px]">
              产品解决方案服务以常规技术为导向，为客户提供广泛的信息技术服务，如项目方案设计、软件开发、测试、运行维护等。
            </div>
            <div class="mb-[24px] w-[477px] leading-8">
              行展科技依托科学规范的质量管理体系、领先的交付管理体系和完善的人力资源管理体系，为客户提供全栈服务能力及多种服务合作模式。
            </div>
          </div>
        </div>
      </LayoutPageWrapper>
    </div>
    <!-- 服务范围 -->
    <div class="bg-[#FBFBFB] w-full">
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center mt-[52px] mb-[40px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Service Content
          </div>
          <div class="text-[30px] font-bold text-left text-black">服务范围</div>
        </div>
        <div>
          <img loading="lazy" :src="left2" />
        </div>
        <div class="xl:max-w-[1200px] my-[50px]">
          <div class="  text-[#0d0d0d] font-normal mt-[20px] text-center">
            提供从需求分析、系统架构设计到程序编写和测试的全流程信息系统设计与开发服务。拥有丰富的软件产品研发经验，为客户提供从设计研发运营的一站式服务。提供从单元测试、集成测试到用户验收测试的全流程测试服务，确保软件质量满足客户需求。提供7x24小时的系统运行监控、故障排查和更新维护等全方位的运行维护服务。
          </div>
        </div>
      </LayoutPageWrapper>
    </div>
    <div class="bg-[#FBFBFB] w-full">
      <!-- 合作案例 -->
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center mt-[52px] mb-[40px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Cooperation Case
          </div>
          <div class="text-[30px] font-bold text-left text-black">合作案例</div>
        </div>
        <div class="mb-[50px]">
          <img loading="lazy" :src="left3" />
        </div>
        <div class="xl:max-w-[868px] my-[50px]">
          <div class="text-[20px] text-[#000000] font-bold text-center">
            招商路检工程成本管控系统
          </div>
          <div class="  text-[#0d0d0d] font-normal mt-[20px] text-center">
            围绕“创建世界一流专业领军示范企业”目标，加快战略转型升级，加强项目直接生产成本管控，合理统筹工程项目的运营管理，拟通过系统为精细化管理提供准确的核算依据，致力于为公司实现经济效益最大化。
          </div>
        </div>
      </LayoutPageWrapper>
    </div>
  </div>
</template>
