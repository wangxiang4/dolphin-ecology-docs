<template>
  <div class="support">
    <div class="support-box">
      <h1>{{ locale['title'] }}</h1>
      <p>{{ locale['description'] }}</p>
    </div>
    <div class="support-box">
      <h2>{{ locale['donationTitle'] }}</h2>
      <p>{{ locale['donationDescription'] }}</p>
      <p>{{ locale['secondDonationDescription'] }}</p>
      <img src="/images/sponsors/wechat.jpeg" width="300">
      <img src="/images/sponsors/alipay.jpeg" width="300">
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import sponsorsSupportLocale from '../../../i18n/pages/sponsors-support.json'
const { lang } = useData(), locale = sponsorsSupportLocale[lang.value]
</script>

<style lang="scss" scoped>
 .support {
   color: black;
   position: relative;
   padding: 2.2em 20px;
   max-width: 650px;
   margin: 0 auto;

   h1, h2 {
     color: #242424;
     margin: 0 0 1em;
   }

   p {
     margin-bottom: 30px;
     line-height: 25px;
   }

   &-box {
     margin-bottom: 80px;
   }
 }

 .dark {
   .support {
     color: white;
     h1, h2 {
       color: white;
     }
   }
 }
</style>
