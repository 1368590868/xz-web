<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import banner from '~/assets/images/about/banner.png'
import gsjs from '~/assets/images/about/gsjs.png'
import fzlc from '~/assets/images/about/fzlc.png'
import jzg from '~/assets/images/about/jzg.jpg'
import map from '~/assets/images/about/map.png'
import dw from '~/assets/images/about/dw.png'

import zs1 from '~/assets/images/about/zs1.png'
import zs2 from '~/assets/images/about/zs2.png'
import zs3 from '~/assets/images/about/zs3.png'
import zs4 from '~/assets/images/about/zs4.png'
import zs5 from '~/assets/images/about/zs5.png'
// compiler micro
definePageMeta({ layout: 'page' })
useHead({ title: '关于行展' })
import zs6 from '~/assets/images/about/zs6.png'
import zs7 from '~/assets/images/about/zs7.png'

const gsjsUrl = ref(`url(${gsjs})`)
const dwUrl = ref(`url(${dw})`)
const $screen = useAwesomeScreen()
</script>

<template>
  <div class="w-full">
    <img loading="lazy" class="w-full" alt="bg" :src="banner" />
    <!-- 公司介绍 -->
    <div class="h-[780px] w-full gsjs">
      <!--  <img loading="lazy"class="w-full absolute left-0 top-0" alt="公司介绍" :src="gsjs"> -->
      <LayoutPageWrapper>
        <div class="flex w-full flex-col items-center md:mt-[52px] mt-[20px]">
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            <!-- Aptitude -->
          </div>
          <div class="text-[30px] font-bold text-left text-black">公司介绍</div>
        </div>

        <div
          class="flex mt-[40px] flex-col font-normal text-[#0d0d0d] gap-[24px] max-w-[1050px] justify-center indent-8"
        >
          <div>
            北京行展软件科技有限公司成立于2016年，总部坐落于北京海淀。公司是北京市中关村高新技术企业，专注于数字信息化建设综合服务领域，在西安、成都、深圳、重庆、济南、武汉、广州、杭州、大庆、宁波等多地设立了分支机构。
          </div>
          <div>
            公司在数字化服务方向深耕发展，主营业务包括向政府、企事业单位提供人力外包服务，咨询规划、方案设计、产品研发等软件开发服务。AI时代即将重塑各行各业，公司组建AIGC专家团队，为企业提供更多服务。公司成立8年来累计服务5000+企业，在业界享有较高知名度。
          </div>
        </div>

        <div
          class="flex md:gap-[60%] gap-6 mt-[68px] justify-center md:text-[37px] text-[24px]"
        >
          <div>
            <div class="text-[#0D63BE]">1000+</div>
            <div class="h-[2px] w-[63px] bg-[#0D63BE] mb-[10px]"></div>
            <div class="text-[16px] text-[#000000] font-normal">专业人员</div>
          </div>
          <div>
            <div class="text-[#0D63BE]">5000+</div>
            <div class="h-[2px] w-[63px] bg-[#0D63BE] mb-[10px]"></div>
            <div class="text-[16px]">服务企业</div>
          </div>
          <div>
            <div class="text-[#0D63BE]">500,000+</div>
            <div class="h-[2px] w-[63px] bg-[#0D63BE] mb-[10px]"></div>
            <div class="text-[16px]">人才资料库</div>
          </div>
        </div>
      </LayoutPageWrapper>
    </div>
    <!-- 行展资质 -->
    <div class="bg-[#FBFBFB] mt-[-98px] w-full pb-[30px]">
      <LayoutPageWrapper>
        <div
          data-aos="fade-up"
          class="flex w-full flex-col items-center mt-[60px]"
        >
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            <!-- Aptitude -->
          </div>
          <div class="text-[30px] font-bold text-left text-black">行展资质</div>
        </div>

        <div
          class="flex gap-[28px] flex-wrap max-w-[1220px] justify-center pt-[56px]"
        >
          <div data-aos="fade-up" class="flex flex-col items-center">
            <img loading="lazy" :src="zs1" />
            <div class="text-[16px] text-[#363636] font-normal mt-[19px]">
              中关村高新技术企业
            </div>
          </div>
          <div data-aos="fade-up" class="flex flex-col items-center">
            <img loading="lazy" :src="zs2" />
            <div class="text-[16px] text-[#363636] font-normal mt-[19px]">
              ISACA认证高新技术企业
            </div>
          </div>
          <div data-aos="fade-up" class="flex flex-col items-center">
            <img loading="lazy" :src="zs3" />
            <div class="text-[16px] text-[#363636] font-normal mt-[19px]">
              人力资源许可证
            </div>
          </div>
        </div>

        <div
          class="flex gap-[28px] flex-wrap max-w-[1220px] justify-center pt-[56px]"
        >
          <div data-aos="fade-up" class="flex flex-col items-center">
            <img loading="lazy" :src="zs4" />
            <div class="text-[16px] text-[#363636] font-normal mt-[19px]">
              信息技术服务管理认证证书
            </div>
          </div>
          <div data-aos="fade-up" class="flex flex-col items-center">
            <img loading="lazy" :src="zs5" />
            <div class="text-[16px] text-[#363636] font-normal mt-[19px]">
              质量管理体系认证证书
            </div>
          </div>
          <div data-aos="fade-up" class="flex flex-col items-center">
            <img loading="lazy" :src="zs6" />
            <div class="text-[16px] text-[#363636] font-normal mt-[19px]">
              计算机软件著作权登记证书
            </div>
          </div>
          <div data-aos="fade-up" class="flex flex-col items-center">
            <img loading="lazy" :src="zs7" />
            <div class="text-[16px] text-[#363636] font-normal mt-[19px]">
              信息安全管理体系认证证书
            </div>
          </div>
        </div>
      </LayoutPageWrapper>
    </div>
    <!-- 发展历程 -->
    <div class="bg-[#FBFBFB] w-full pb-[30px]">
      <LayoutPageWrapper>
        <div
          data-aos="fade-up"
          class="flex w-full flex-col items-center mt-[60px]"
        >
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            <!-- History -->
          </div>
          <div class="text-[30px] font-bold text-left text-black">发展历程</div>
        </div>
        <img data-aos="fade-up" loading="lazy" :src="fzlc" />
      </LayoutPageWrapper>
    </div>
    <img data-aos="fade-up" loading="lazy" :src="jzg" width="100%" />
    <!-- 区域分布 -->
    <div class="bg-[#FBFBFB] relative w-full pb-[30px]">
      <LayoutPageWrapper>
        <div
          data-aos="fade-up"
          class="flex w-full flex-col items-center mt-[60px]"
        >
          <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
            <!-- Distribution -->
          </div>
          <div class="text-[30px] font-bold text-left text-black">区域分布</div>
        </div>
        <img data-aos="fade-up" loading="lazy" :src="map" />
        <div
          data-aos="fade-up"
          v-if="$screen.higherThan('md', $screen.current.value)"
          class="absolute top-[42%] left-[24%] translate-x-[-160px] h-[197px] w-[262px] bg-white py-[23px] px-[12px]"
        >
          <div class="text-[16px] font-normal text-[#363636]">
            北京行展软件科技有限公司
          </div>
          <div class="text-[14px] text-[363636] font-normal mt-[13px]">
            联系电话：010-84291290
          </div>
          <div class="text-[14px] text-[363636] font-normal mt-[7px]">
            电子邮件：gouweisong@163.com
          </div>

          <div class="location-bg pl-[8px] py-[13px] mt-[5px]">
            <div class="text-[14px] font-normal text-[#363636]">
              北京市海淀区上地信息路1号金远见大厦B座8层829
            </div>
          </div>
        </div>
      </LayoutPageWrapper>
    </div>
  </div>
</template>
<style scoped>
.gsjs {
  background-image: v-bind(gsjsUrl);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.location-bg {
  background-image: v-bind(dwUrl);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
