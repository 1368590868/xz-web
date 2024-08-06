<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

import rightLogo from '~/assets/images/service/right-logo.png'

import left1 from '~/assets/images/hyzhfw/left1.png'
import banner from '~/assets/images/hyzhfw/banner.jpg'
// compiler micro
definePageMeta({ layout: 'page' })
useHead({ title: '行业综合服务' })
</script>

<template>
  <div class="w-full">
    <img loading="lazy" ref="bgImgRef" class="w-full" alt="bg" :src="banner" />
    <!-- 服务内容 -->
    <div class="bg-[#F6F7FB] w-full">
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center md:mt-[52px] mt-[20px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            <!-- Service Content -->
          </div>
          <div class="text-[30px] font-bold text-left text-black">服务内容</div>
        </div>

        <div
          class="flex md:gap-[54px] md:flex-row flex-col justify-between items-center max-w-[991px]"
        >
          <div class="flex justify-center">
            <img class="md:w-full w-[50%]" loading="lazy" :src="left1" />
          </div>
          <div
            class="md:w-[567px] md:h-[147px] font-normal text-[#0d0d0d] leading-8 indent-8"
          >
            <span>
              行展科技在电商行业、工业互联网、保险、互联网金融、在线教育、汽车、制造业、大健康、产业园区等行业有丰富的综合服务经验沉淀，从业务咨询一方案定制一实施运营一体化的综合服务。公司的规模和充足稳定的专业团队可为客户提供长期可持续发展提供保障，以“咨询”+“产品”+“服务”的模式为客户提供定制化专属服务，贴合客户需求，提升服务品质，为客户数字化转型一站式赋能。</span
            >
          </div>
        </div>
      </LayoutPageWrapper>
    </div>

    <!-- 合作案例 -->
    <div class="bg-[#FBFBFB] w-full">
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center md:mt-[52px] mt-[20px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Cooperation Case
          </div>
          <div class="text-[30px] font-bold text-left text-black">合作案例</div>
        </div>

        <div
          class="flex md:gap-[20px] md:flex-row flex-col justify-between max-w-[1200px] md:mt-[69px] mt-[20px]"
        >
          <div
            class="md:w-[537px] font-normal text-[#0d0d0d] leading-6 indent-8"
          >
            <div
              class="text-[20px] md:text-left text-center text-blank font-bold indent-0 mb-[24px]"
            >
              铁科院多业务板块长期合作
            </div>
            <div class="mb-[24px]">
              中国铁道科学研究院集团有限公司(中国铁道科学研究院)始建于1950年，是我国铁路唯一的多学科、多专业的综合性研究机构。2000年开始由事业单位转制为企业单位，目前已发展成为集科技创新、技术服务、成果转化、工程实施等业务为一体的大型高科技企业集团。
            </div>
            <div>
              铁科院集团公司下设22个二级单位，包括机车车辆研究所、铁道建筑研究所、通信信号研究所、运输及经济研究所、金属及化学研究所铁路12306科创中心、电子计算技术研究所、节能环保劳卫研究所(铁路节能环保技术中心、铁路卫生技术中心)、中国国家铁路集团有限公司铁路基础设施检测中心、基础设施检测研究所、中国国家铁路集团有限公司铁路安全研究中心、铁道科学技术研究发展中心、国家铁道试验中心、铁道技术研修学院(铁路继续教育培训中心)、铁科院(深圳)研究设计院有限公司、川藏铁路技术创新中心有限公司、国铁川藏科创中心(成都)有限公司、铁科后勤服务中心等单位。
            </div>
          </div>
          <div>
            <img
              class="md:mt-0 mt-[20px]"
              loading="lazy"
              :src="rightLogo"
              :height="308"
            />
          </div>
        </div>
        <div class="max-w-[1200px] mb-[50px]">
          <div
            class="text-[26px] text-black font-bold md:mt-0 mt-[20px] md:text-left text-center"
          >
            合作业务板块
          </div>
          <div class="text-[#0d0d0d] font-normal mt-[20px] indent-8">
            拥有6年+合作时间，16个合作业务板块(城轨装备及信息服务、工程、机电、移动设备、IT基础设施及运维、北斗、供应链、财务、大数据、基础研发、人力资源管理、数据分析与决策、协同办公、ERP、质量管理、综合等)
          </div>
        </div>
      </LayoutPageWrapper>
    </div>
  </div>
</template>
