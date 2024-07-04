<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

import rightLogo from '~/assets/images/service/right-logo.png'

import left1 from '~/assets/images/rlzyfw/left1.png'
import left2 from '~/assets/images/rlzyfw/left2.png'
import left3 from '~/assets/images/rlzyfw/left3.png'
import left5 from '~/assets/images/rlzyfw/left5.png'
import banner from '~/assets/images/rlzyfw/banner.jpg'
// compiler micro
definePageMeta({ layout: 'page' })
useHead({ title: '行业方案咨询服务' })
</script>

<template>
  <div class="w-full">
    <img loading="lazy" ref="bgImgRef" class="w-full" alt="bg" :src="banner" />
    <!-- 服务内容 -->
    <div class="bg-[#FBFBFB] w-full">
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center mt-[52px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Service Content
          </div>
          <div class="text-[30px] font-bold text-left text-black">服务内容</div>
        </div>

        <div>
          <img loading="lazy" :src="left1" />
        </div>
      </LayoutPageWrapper>
    </div>
    <!-- 六大服务特色 -->
    <div class="bg-[#FBFBFB] w-full">
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center mt-[52px] mb-[40px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Service Features
          </div>
          <div class="text-[30px] font-bold text-left text-black">
            六大服务特色
          </div>
        </div>
        <div>
          <img loading="lazy" :src="left2" />
        </div>
      </LayoutPageWrapper>
    </div>
    <div class="bg-[#FBFBFB] w-full">
      <!-- 人力资源服务流程 -->
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center mt-[52px] mb-[40px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Service Features
          </div>
          <div class="text-[30px] font-bold text-left text-black">
            人力资源服务流程
          </div>
        </div>
        <div>
          <img loading="lazy" :src="left3" />
        </div>
      </LayoutPageWrapper>
    </div>
    <!-- 合作案例 -->
    <div class="bg-[#FBFBFB] w-full">
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center mt-[52px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Cooperation Case
          </div>
          <div class="text-[30px] font-bold text-left text-black">合作案例</div>
        </div>

        <div class="flex gap-[40px] justify-between items-center max-w-[1200px] mt-[69px]">
          <div>
            <img loading="lazy" :src="left5" :height="308" />
          </div>
          <div class="w-[537px]   font-normal text-[#0d0d0d] leading-6 indent-8">
            <div class="text-[20px] text-blank font-bold indent-0 mb-[24px]">
              阳光保险长期合作
            </div>
            <div class="mb-[24px]">
              阳光保险集团股份有限公司是中国一家快速成长、行业领先的民营保险服务集团，持续致力于为客户提供专业的风险保障及综合服务解决方案。2005年7月，阳光财险成立，2007年6月，集团成立。历经17年发展，公司打造了知名的阳光品牌，形成了强大的品牌竞争力。
              公司通过遍布全国的分销和服务网络向个人和团体客户提供多样化的保险产品及服务。目前，公司拥有财产保险、人寿保险、信用保证保险、资产管理、医疗健康等多家专业子公司。为满足公司未来发展需要，大部分部门研发人员转为外包人员，针对主要部门人员与几大供应商进行人员外包服务，其中行展软件为优秀人才供应商之一。
            </div>
          </div>
        </div>
        <div class="xl:min-w-[1200px] my-[50px]">
          <div class="text-[26px] text-black font-bold">合作岗位</div>
          <div class="  text-[#0d0d0d] font-normal mt-[20px]">
            高级测试工程师、中级测试工程师、初级测试工程师、高级JAVA工程师、中级JAVA工程师、初级JAVA工程师、IOS高级、IOS中级、IOS初级、安卓高级、安卓中级、安卓初级
          </div>
        </div>
      </LayoutPageWrapper>
    </div>
  </div>
</template>
