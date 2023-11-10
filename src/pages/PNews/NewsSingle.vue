<template>
  <div class="bg-bgColor">
    <div class="container">
      <Header />
      <CBreadCrumb />
      <div class="w-full max-w-[900px] m-auto my-5">
        <p class="text-40 font-semibold">
          Hungary is in talks with Turkey on gas <br />
          purchases and transit
        </p>
        <ul class="flex items-center my-5">
          <li class="mr-4 flex items-center">
            <img src="images/PNews/calendar.svg" alt="" class="mr-2" />
            05.05.2023
          </li>
          <li class="flex items-center">
            <img src="images/PNews/eye.svg" alt="" class="mr-2" />
            05.05.2023
          </li>
        </ul>
        <img src="images/PNews/news3.jpeg" alt="" class="w-full rounded-xl" />
        <p class="my-5 font-normal text-base">
            No sooner does a firm keel over than calls for a bailout or some other government rescue ring out. The effrontery that attends the call to hurl taxpayers beneath the wheels of the business failure bus is perhaps the most enduring dividend of a chain of government rescues beginning with the Penn Central loan guarantees in 1970. While the early, official comment from Treasury Secretary Janet Yellen is that there will be no bailout, as of this writing (5pm Sunday March 12, 2023) various sources are reporting depositors lining up at a number of other banks in SVB’s geographic and commercial ambit. While SVB is not a systemically significant financial institution, it’s worth mentioning that vast numbers of banks have large holdings of long-bonds purchased at record high prices and rock-bottom interest rates. Although the majority of them are not likely to be as precariously situated as SVB and its dubiously viewed neighbors are, a systemic problem of some magnitude may still lurk below the surface.
A few additional words which, in a few days or weeks may, and hopefully do, prove irrelevant.
Government rescues are frequently marketed as having been profitable or, at the very least, not losing taxpayer money. Those claims are best taken with the proverbial grain of salt. First, because if that’s true, it’s purely accidental. However marketed, bailouts usually occur under duress and little (if any) economic calculation accompanies them. They tend not to be cost-effective in light of the risk taken. And even if they are, it doesn’t matter. It’s not as if I will receive a check for my portion of the rewards reaped. There’s no conceivable reason why I, living 3,036 miles from Silicon Valley, should contribute even the meagerest financial support to a regional bank, much less to one that had an extraordinarily concentrated deposit base and was negligently slow to attempt to immunize its bond portfolios.
Some Silicon Valley start-ups may not be able to make payroll? That’s unfortunate. Certain VC portfolios may suffer damaging writedowns? That, too, is a shame. Many non-tech firms that service high tech clients — caterers, cleaning services, headhunters, accounting practices — may see their businesses irreparably harmed? Possibly. Hopefully these are all temporary setbacks. In some cases, they will not be. Yet I am aware of nothing under the sun that obligates anyone, anywhere, to sacrifice so little as a Continental dollar to alleviate their circumstances, whether they were aware of the possibilities or not.
        </p>
        <div class="grid grid-cols-3 gap-5">
            <img src="images/PNews/news1.jpeg" alt="" class="rounded-lg">
            <img src="images/PNews/news1.jpeg" alt="" class="rounded-xl">
            <img src="images/PNews/news1.jpeg" alt="" class="rounded-xl">
        </div>
      </div>
      <CFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
import CFake from '@/assets/Data/fake.json'
import NewsData from '../../assets/Data/NewsData'
import CBreadCrumb from '../../components/CBreadCrumb.vue'
import Header from '../../components/Header.vue'
import CFooter from '../../components/CFooter.vue'
import { ref, reactive, onMounted } from 'vue'
const news = ref(null);

    const fetchNews = async () => {
      try {
        const response = await fetch(NewsData);
        const data = await response.json();
        news.value = data[0];
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    onMounted(fetchNews);

</script>