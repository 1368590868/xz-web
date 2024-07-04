<script lang="ts" setup>
// compiler micro
import bg1 from '~/assets/images/home/bg1.jpg'

definePageMeta({ layout: 'page' })
useHead({ title: '行展服务' })
</script>

<template>
  <div class="w-full">
    <img ref="bgImgRef" class="w-full" alt="bg" :src="bg1" />
    <form>
      <div class="bg-[#F6F7FB] w-full">
        <LayoutPageWrapper>
          <div class="flex w-full flex-col items-center mt-[52px]">
            <div class="text-[30px] font-normal text-left text-[#b4b4b4]">
              Message online
            </div>
            <div class="text-[30px] font-bold text-left text-black">
              在线留言
            </div>
          </div>

          <div class="flex flex-wrap w-full justify-center">
            <div class="w-[calc(50%-20px)] mr-[20px]">
              <div class="flex align-top mt-[42px]">
                <div
                  class="h-[26px] text-[20px] flex font-bold text-left text-[#0d63be]"
                >
                  <em class="text-red mr-2">*</em>
                  <label
                    for="username"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >客户姓名</label
                  >
                </div>
              </div>
              <div
                class="text-[14px] font-normal text-left text-[#363636] leading-[26px] flex mt-[17px]"
              >
                <input
                  id="username"
                  required
                  placeholder="请输入您的名称（称呼）"
                  type="text"
                  name="username"
                  autocomplete="given-name"
                  class="placeholder-custom px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="w-[calc(50%-20px)] ml-[20px]">
              <div class="flex align-top mt-[42px]">
                <div
                  class="h-[26px] text-[20px] flex font-bold text-left text-[#0d63be]"
                >
                  <em class="text-red mr-2">*</em
                  ><label
                    for="phone"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >联系电话</label
                  >
                </div>
              </div>
              <div
                class="text-[14px] font-normal text-left text-[#363636] leading-[26px] flex mt-[17px]"
              >
                <input
                  id="phone"
                  required
                  placeholder="+86"
                  type="text"
                  name="phone"
                  autocomplete="tel-extension"
                  class="placeholder-custom px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="w-[calc(50%-20px)] mr-[20px]">
              <div class="flex align-top mt-[42px]">
                <div
                  class="h-[26px] text-[20px] flex font-bold text-left text-[#0d63be]"
                >
                  <em class="text-red mr-2">*</em>
                  <label
                    for="company-name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >公司名称</label
                  >
                </div>
              </div>
              <div
                class="text-[14px] font-normal text-left text-[#363636] leading-[26px] flex mt-[17px]"
              >
                <input
                  id="company-name"
                  required
                  placeholder="请输入您公司名字"
                  type="text"
                  name="company-name"
                  autocomplete="off"
                  class="placeholder-custom px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="w-[calc(50%-20px)] ml-[20px]">
              <div class="flex align-top mt-[42px]">
                <div
                  class="h-[26px] text-[20px] font-bold text-left text-[#0d63be]"
                >
                  <label
                    for="job"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >您的职位</label
                  >
                </div>
              </div>
              <div
                class="text-[14px] font-normal text-left text-[#363636] leading-[26px] flex mt-[17px]"
              >
                <input
                  id="job"
                  placeholder="请输入您职位"
                  type="text"
                  name="job"
                  autocomplete="off"
                  class="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="w-full">
              <div class="flex align-top mt-[42px]">
                <div
                  class="h-[26px] text-[20px] flex font-bold text-left text-[#0d63be]"
                >
                  <em class="text-red mr-2">*</em>
                  <label
                    for="remark"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >需求描述</label
                  >
                </div>
              </div>
              <div
                class="text-[14px] font-normal text-left text-[#363636] leading-[26px] flex mt-[17px]"
              >
                <textarea
                  id="remark"
                  required
                  placeholder="请输入您详细的需求内容"
                  name="remark"
                  rows="6"
                  class="placeholder-custom px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <!-- button -->
            <div class="w-full mb-[90px] flex flex-col items-center">
              <div class="text-[#F33939] mt-[41px] mb-[15px]">
                注：提交成功后我们将会安排专家尽快与您联系!
              </div>
              <button
                type="submit"
                class="rounded-md w-[179px] bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                提交内容
              </button>
            </div>
          </div>
        </LayoutPageWrapper>
      </div>
    </form>
  </div>
</template>
<style scoped>
/* .placeholder-custom::placeholder {
  padding-left: 0.75rem;
} */
</style>
