<template>
    <div>
       <div class="container">
        <CTitleText title="Instagram"/>
        <p class="text-xl text-center max-md:text-base">Stay up-to-date on the latest news and developments in the Turkic world.</p>
       </div>
        <CInstagramInner class="my-[30px]"/>
        <div class="flex items-center max-md:flex-col">
            
                <div class="container">
                    <div class="hidden items-center max-md:block max-md:flex max-md:items-center max-md:rounded-xl max-md:p-2 max-md:bg-grayBack max-md:border-[0.865px] maxa-md:border-inputBack">
                   <div class="">
                    <p class="text-lg font-bold">Subscribe for more interesting posts</p>
                    <div class="flex items-center">
                        <img src="images/instagramIcon.svg" alt="" class="mr-2">
                        <a class="text-grayColor" href="">@Tabarruk_zuyorat</a>
                    </div>
                   </div>
                   <div class="bg-[url('images/instaFlag.svg')] w-[102px] h-[102px] rounded-xl flex items-center">
                        <img src="images/Star.svg" alt="" class="mx-auto">
                    </div>
                </div>
                </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import CTitleText from './TitleText/CTitleText.vue';
import CInstagramInner from './CInstagram-Inner.vue';
</script>
<style>
    
</style>