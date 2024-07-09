<script lang="ts" setup>

import ico1 from '~/assets/images/home/ico1.png'
import xxfw1 from '~/assets/images/home/xxfw1.png'
import szfw2 from '~/assets/images/home/szfw2.jpg'
import xxfw2 from '~/assets/images/home/xxfw2.png'
import youshi from '~/assets/images/home/youshi.png'
import fwcg from '~/assets/images/home/fwcg.png'
import fwlc from '~/assets/images/home/fwlc.png'
import logs from '~/assets/images/home/logs.png'

import banner1 from '~/assets/images/home/banner1.png'
import banner2 from '~/assets/images/home/banner2.png'
import banner3 from '~/assets/images/home/banner3.jpg'

const serviceText = [
  {
    title: '行业方案咨询服务',
    desc: '覆盖政府、工业、科研、金融、办公、智慧城市、能源、军工、教育等50+行业',
    pic: ico1,
  },
  {
    title: '人力资源解决服务',
    desc: '人事代理、劳务派遣、薪酬服务、商业险服务、健康管理服务等',
    pic: ico1,
  },
  {
    title: '产品方案解决服务',
    desc: 'CRM客户关系系统、OA办公系统、项管理系统、费控管理系统等类型产品解决服务',
    pic: ico1,
  },
  {
    title: '行业综合服务',
    desc: '业务咨询+方案定制+产品研发+项目实施一体化的综合服务',
    pic: ico1,
  },
]
const szfw = [
  { title: '数字化转型规划服务' },
  { title: '数字化场景规划服务' },
  { title: '数字化商业模式规划服务' },
]

const swiperImgs = [
  {
    title: 'swiper1',
    img: banner3,
  },
  {
    title: 'swiper2',
    img: banner2,
  },
  {
    title: 'swiper3',
    img: banner1,
  },
]
</script>

<template>
  <div class="w-full">

    <!-- swiper -->
    <Swiper class="w-full" :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation, SwiperEffectFade]"
      :pagination="true" :slides-per-view="1" :loop="true" :autoplay="{
        delay: 3000,
      }" :grabCursor="true" :navigation="true" :effect="'fade'">
      <SwiperSlide v-for="(slide, idx) in swiperImgs" :key="idx">
        <img loading="lazy" :src="slide.img" class="w-full" :alt="slide.title" />
      </SwiperSlide>
    </Swiper>
    <div class="bg-[#F6F7FB] w-full">
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center mt-[52px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Our Serivers
          </div>
          <div class="text-[30px] font-bold text-left text-black">
            我们的服务
          </div>
        </div>

        <div class="flex flex-wrap max-w-[1050px] justify-center">
          <div v-for="(item, index) of serviceText" :class="index % 2 === 0 ? 'basis-3/5' : 'basis-2/5'">
            <div class="flex align-top mt-[42px]">
              <img loading="lazy" :src="item.pic" />
              <div class="h-[26px] text-[20px] font-bold text-left text-[#0d63be]">
                {{ item.title }}
              </div>
            </div>
            <div class="  font-normal text-left text-[#363636] leading-[26px] flex mt-[17px]">
              {{ item.desc }}
            </div>
          </div>
        </div>

        <div class="flex justify-between max-w-[991px] mt-[69px]">
          <div data-aos="fade-left">
            <div class="flex align-top mt-[42px]">
              <img loading="lazy" :src="xxfw1" />
              <div class="text-[26px] font-bold text-left text-[#0d63be]">
                数智服务
              </div>
            </div>
            <div class="  font-normal text-left text-[#363636] my-[28px]">
              集合AI大模型的数字化服务，助力企业数智化服务转型升级
            </div>
            <div v-for="item of szfw">
              <div class="flex mb-[19px]">
                <img loading="lazy" width="20px" height="20px" :src="szfw2" />
                <span class="ml-[9px]">{{ item.title }}</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" class="ml-[64px]">
            <img loading="lazy" :src="xxfw2" height="335px" />
          </div>
        </div>
      </LayoutPageWrapper>
    </div>

    <!-- 优势 -->
    <div class="bg-[#FBFBFB] w-full">
      <LayoutPageWrapper>
        <div data-aos="fade-up" class="flex w-full flex-col items-center my-[52px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Advantage
          </div>
          <div class="text-[30px] font-bold text-left text-black">
            我们的优势
          </div>
        </div>

        <div data-aos="fade-up" class="flex relative flex-wrap max-w-[1050px] justify-center">
          <img loading="lazy" :src="youshi" />
          <div
            class="absolute top-[102px] left-[-236px] w-[294px] h-[67px]   font-normal text-left text-[#959595] leading-[24px">
            五千余真实案例积累支撑，和几十家大型央国企长期合作，成熟的解决方案，合作方案多样化，交付有保障。
          </div>

          <div
            class="absolute top-[286px] left-[-310px] w-[313px] h-[91px]   font-normal text-left text-[#959595] leading-[24px">
            通过CMMI3、IS09001、IS020000、IS027001专业认证;自研开发平台;有云计算、大数据、A1、移动互联、物联网、安全可信、区块链5G等创新数字技术实践能力。
          </div>
          <div
            class="absolute top-[486px] left-[-210px] w-[225px] h-[91px]   font-normal text-left text-[#959595] leading-[24px">
            1000+专业研发团队，核心人员拥有10年以上工作经验，3年以上经验技术研发人员占90%，资深项目经理高效管控项目各个环节。
          </div>
          <!-- right -->
          <div
            class="absolute top-[102px] left-[600px] w-[310px] h-[43px]   font-normal text-left text-[#959595] leading-[24px">
            超10个分布全国主要区域的子公司，本地化服务，7X24小时为客户提供面对面的优质响应。
          </div>
          <div
            class="absolute top-[286px] left-[650px] w-[262px] h-[67px]   font-normal text-left text-[#959595] leading-[24px">
            行展科技提供业务咨询+方案定制+产品研发+项目实施一体化的综合服务，为客户数字化转型全方面赋能。
          </div>
          <div
            class="absolute top-[486px] left-[600px] w-[308px] h-[67px]   font-normal text-left text-[#959595] leading-[24px">
            专门的AI技术团队，向企业提供大模型连接服务，一站式行业训练平台，帮助企业快速构建专业级AI产品，紧跟人工智能时代步伐。
          </div>
        </div>
      </LayoutPageWrapper>
    </div>
    <!-- 服务成果 -->
    <div class="bg-[#FBFBFB] w-full pb-[30px]">
      <LayoutPageWrapper>
        <div data-aos="fade-up" class="flex w-full flex-col items-center mt-[60px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Service Outcomes
          </div>
          <div class="text-[30px] font-bold text-left text-black">服务成果</div>
        </div>

        <div class="flex relative flex-wrap max-w-[1050px] justify-center pt-[56px]">
          <img data-aos="fade-up" loading="lazy" :src="fwcg" />
        </div>
      </LayoutPageWrapper>
    </div>
    <!-- 服务流程 -->
    <div class="bg-[#F6F7FB] w-full">
      <LayoutPageWrapper>
        <div data-aos="fade-up" class="flex w-full flex-col items-center mt-[60px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            Service Process
          </div>
          <div class="text-[30px] font-bold text-left text-black">服务流程</div>
        </div>

        <div class="flex relative flex-wrap max-w-[1050px] justify-center pt-[56px]">
          <img data-aos="fade-up" loading="lazy" :src="fwlc" />
        </div>
      </LayoutPageWrapper>
    </div>
    <!-- 合作伙伴 -->
    <div class="bg-[#FBFBFB] w-full">
      <LayoutPageWrapper>
        <div data-aos="fade-up" class="flex w-full flex-col items-center my-[40px]">
          <div class="text-[30px] font-bold text-left text-[#000000]">
            合作伙伴
          </div>
          <div class="text-[12px] mt-[9px] font-normal text-left text-[#0d63be]">
            服务企业 成就自己
          </div>
          <div class="mt-[15px]">
            <span class="text-[40px] font-bold text-[#0d63be]">5000+</span>
            <span class="text-[20px] font-normal text-[#000000] ml-[10px]">合作企业客户的信赖之选</span>
          </div>
        </div>

        <!-- <div class="flex flex-wrap gap-4 max-w-[1100px] my-[69px]">
          <img loading="lazy" v-for="(item, i) of Array.from({ length: 20 })" :key="i" :src="c1" />
        </div> -->
        <img data-aos="fade-up" :src="logs" class="mb-[30px]" />
      </LayoutPageWrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
