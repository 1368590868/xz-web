<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

import rightLogo from '~/assets/images/service/right-logo.png'

import left1 from '~/assets/images/post/left1.png'
import left2 from '~/assets/images/post/left2.png'
import banner from '~/assets/images/post/banner.jpg'
// compiler micro
definePageMeta({ layout: 'page' })
useHead({ title: '行业方案咨询服务' })
</script>

<template>
  <div class="w-full">
    <img loading="lazy" ref="bgImgRef" class="w-full" alt="bg" :src="banner" />
    <!-- 服务范围 -->
    <div class="bg-[#F6F7FB] w-full">
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center mt-[52px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Service Content
          </div>
          <div class="text-[30px] font-bold text-left text-black">服务范围</div>
        </div>

        <div class="flex gap-[54px] justify-between items-center max-w-[991px]">
          <div>
            <img loading="lazy" :src="left1" />
          </div>
          <div class="w-[567px] h-[147px]   font-normal text-[#0d0d0d] leading-8 indent-8">
            <span>
              行展科技行业方案咨询服务团队包含100+各行业资深专家，从事行业平均经验超过10年,聚焦行业的全面的咨询体系。数字化时代下，基于对国内市场和数字化的深入了解和积淀，紧抓数字化机遇，注重创新和可持续发展，以前瞻性眼光布局数字化咨询服务发展战略，致力于帮助企事业单位解决管理经营以及与数字化相关的重要问题，为企业提供专业咨询服务。</span>
          </div>
        </div>
      </LayoutPageWrapper>
    </div>
    <!-- 服务内容 -->
    <div class="bg-[#FBFBFB] w-full">
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center mt-[52px] mb-[40px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Service Content
          </div>
          <div class="text-[30px] font-bold text-left text-black">服务内容</div>
        </div>

        <div class="flex flex-col gap-[54px] justify-between items-center max-w-[991px]">
          <div>
            <img loading="lazy" :src="left2" />
          </div>
          <div class="  font-normal text-[#0d0d0d]">
            <div class="w-[762px] text-center leading-8">
              包含战略咨询、商业模式规划、产业模式规划、企业业务流程设计/优化、集成产品研发、技术方案、企业人力资源、品牌、IPMS、财经、市场营销、供应链等数字化转型规划咨询。
            </div>
          </div>
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

        <div class="flex gap-[20px] justify-between max-w-[1200px] mt-[69px]">
          <div class="w-[537px]   font-normal text-[#0d0d0d] leading-6 indent-8">
            <div class="text-[20px] text-blank font-bold indent-0 mb-[24px]">
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
            <img loading="lazy" :src="rightLogo" :height="308" />
          </div>
        </div>
        <div class="max-w-[1200px] mb-[50px]">
          <div class="text-[26px] text-black font-bold">合作业务板块</div>
          <div class="  text-[#0d0d0d] font-normal mt-[20px]">
            拥有6年+合作时间，16个合作业务板块(城轨装备及信息服务、工程、机电、移动设备、IT基础设施及运维、北斗、供应链、财务、大数据、基础研发、人力资源管理、数据分析与决策、协同办公、ERP、质量管理、综合等)
          </div>
        </div>
      </LayoutPageWrapper>
    </div>
  </div>
</template>
