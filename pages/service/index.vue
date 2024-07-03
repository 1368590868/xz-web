<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
// compiler micro
definePageMeta({ layout: 'page' })
useHead({ title: 'Posts' })

import bg1 from '~/assets/images/home/bg1.jpg'
import ico1 from '~/assets/images/home/ico1.png'

import banner from '~/assets/images/service/banner.png'
import leftLogo from '~/assets/images/service/left-logo.png'
import rightLogo from '~/assets/images/service/right-logo.png'
import ljxz from '~/assets/images/service/ljxz.png'
import xzfw1 from '~/assets/images/service/xzfw1.png'
import xzfw2 from '~/assets/images/service/xzfw2.png'
import xzfw3 from '~/assets/images/service/xzfw3.png'
import fwfw from '~/assets/images/service/fwfw.png'
import rightIco from '~/assets/images/service/right-ico.png'
import szfw1 from '~/assets/images/service/szfw1.png'


const serviceText = [
  { title: '行业方案咨询服务', desc: '覆盖政府、工业、科研、金融、办公、智慧城市、能源、军工、教育等50+行业', pic: ico1 },
  { title: '人力资源解决服务', desc: '人事代理、劳务派遣、薪酬服务、商业险服务、健康管理服务等', pic: ico1 },
  { title: '产品方案解决服务', desc: 'CRM客户关系系统、OA办公系统、项管理系统、费控管理系统等类型产品解决服务', pic: ico1 },
  { title: '行业综合服务', desc: '业务咨询+方案定制+产品研发+项目实施一体化的综合服务', pic: ico1 },
]
const szfw = [{ title: '集合AI大模型的数字化服务，助力企业' }, { title: '集合AI大模型的数字化服务，助力企业' }, { title: '集合AI大模型的数字化服务，助力企业' },]

const currentComponent = ref('A');
const router = useRouter()
function showComponent(component: string) {
  currentComponent.value = component;
}

const componentText = {
  'A': '覆盖政府、工业、科研、金融、办公、智慧城市、能源、军工、教育等50+行业',
  'B': '人事代理、劳务派遣、薪酬服务、商业险服务、健康管理服务等',
  'C': 'CRM客户关系系统、OA办公系统、项目管理系统、费控管理系统等类型产品解决服务',
  'D': '业务咨询+方案定制+产品研发+项目实施一体化的综合服务'
}
const componentRouter = {
  'A': '/post',
  'B': '/rlzyfw',
  'C': '/cpzyfw',
  'D': '/'
}

function goDetail() {
  router.push(componentRouter[currentComponent.value])
}


</script>

<template>

  <div class="w-full">
    <img ref="bgImgRef" class="w-full" alt="bg" :src="banner">
    <!-- 了解行展 -->
    <div class="bg-[#FBFBFB]  w-full ">

      <LayoutPageWrapper>
        <div class="flex w-full flex-col  items-center mt-[52px] ">
          <div class=" text-[30px]  font-normal text-left text-[#b4b4b4]">
            Development</div>
          <div class="text-[30px]  font-bold text-left text-black">了解行展</div>
        </div>

        <div class="flex  gap-[54px] justify-between items-center max-w-[991px]  my-[50px]  ">
          <div class="w-[616px] h-[147px] text-[14px] font-normal text-[#0d0d0d]  leading-8 indent-8">
            <span>
              社会生产力日新月异的今天，模式不断被改变和替换，企业经营者需要保持清晰、准确的视角，来做出决策和改变。行展科技作为一家科技类综合服务商，紧跟市场发展变化，通过数字技术手段，将传统服务转化为数智化形式的服务，将服务过程、服务内容、服务形式数字化自动化，为企业获取更多商业机会和利润提供专业服务。</span>
          </div>
          <div>
            <img :src="ljxz" :height="251" />
          </div>
        </div>


      </LayoutPageWrapper>
    </div>
    <!-- 行展服务 -->
    <div class="bg-[#F6F7FB]  w-full ">

      <LayoutPageWrapper>
        <div class="flex w-full flex-col  items-center mt-[52px] ">
          <div class=" text-[30px]  font-normal text-left text-[#b4b4b4]">
            Service</div>
          <div class="text-[30px]  font-bold text-left text-black">行展服务</div>
        </div>

        <div class="flex flex-wrap w-full">

          <div class="flex flex-col items-center basis-1/2 mt-6  md:basis-1/4  " @click="showComponent('A')">
            <img :src="xzfw1" class="w-[44px] h-[44px]" />
            <div :class="currentComponent === 'A' ? 'text-[#0D63BE]' : 'text-[#212121]'"
              class="mt-5 text-[16px]  font-bold  ">行业方案咨询服务 </div>
          </div>


          <div class="flex flex-col items-center basis-1/2 mt-6  md:basis-1/4 " @click="showComponent('B')">
            <img :src="xzfw2" class="w-[44px] h-[44px]" />
            <div :class="currentComponent === 'B' ? 'text-[#0D63BE]' : 'text-[#212121]'"
              class="mt-5  text-[16px]  font-bold ">人力资源解决服务</div>
          </div>


          <div class="flex flex-col items-center basis-1/2 mt-6  md:basis-1/4 " @click="showComponent('C')">
            <img :src="xzfw1" class="w-[44px] h-[44px]" />
            <div :class="currentComponent === 'C' ? 'text-[#0D63BE]' : 'text-[#212121]'"
              class="mt-5  text-[16px]  font-bold ">产品方案解决服务</div>
          </div>



          <div class="flex flex-col items-center basis-1/2 mt-6  md:basis-1/4 " @click="showComponent('D')">
            <img :src="xzfw3" class="w-[44px] h-[44px]" />
            <div :class="currentComponent === 'D' ? 'text-[#0D63BE]' : 'text-[#212121]'"
              class="mt-5  text-[16px]  font-bold ">行业综合服务</div>
          </div>
        </div>

        <div class="flex  justify-between items-center  mt-[30px] w-full  pl-[20%]  ">
          <div class="xl:w-[700px] md:w-full  text-[14px] font-normal text-[#0d0d0d]  leading-6 ">
            <div class="text-[20px] text-blank font-bold  mb-[24px] text-center">服务范围</div>
            <div class="mb-[10px]">
              {{ componentText[currentComponent] }}
            </div>
            <div class="align-middle cursor-pointer " @click="goDetail">
              <img class=" inline-block" :src="rightIco" />
              <span class="text-[14px] font-bold text-[#0d63be]"> 查看详情</span>
            </div>
          </div>
          <div class="xl:w-[66%]">
            <img :src="fwfw" :height="308" />
          </div>
        </div>

      </LayoutPageWrapper>
    </div>

    <LayoutPageWrapper>

      <img :src="szfw1" class="my-[50px]" />
      <div class=" self-start text-[20px] text-[#000000] font-bold mb-[10px] ">服务范围</div>
      <div class=" indent-8 text-[14px] text-[#0d0d0d] leading-8">
        基于多种AIGC开源大模型结合行展科技大模型技术，提供多种场景的AI大模型应用解决方案，可支持公有云及私有化部署。在包括专业模型训练、文本创作、音视频创作、内容问答，等方面提供服务。基于大模型的智能服务、文本对话机器人、语音智控、公文写作、文案润色、智能客服等企业级办公应用，创新提效的解决方案。
      </div>
      <div class="self-start align-middle cursor-pointer my-[30px] ">
        <img class=" inline-block" :src="rightIco" />
        <span class="text-[14px] font-bold text-[#0d63be]"> 查看详情</span>
      </div>
    </LayoutPageWrapper>

  </div>
</template>
