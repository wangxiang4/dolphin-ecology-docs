<script setup lang="ts">
import { useData } from "vitepress"
import notFoundLocale from "../../i18n/pages/not-found.json"
const goHome = () => {
  window.location.href = `/`
}, { lang } = useData(), locale = notFoundLocale[lang.value];
</script>

<template>
  <div class="container">
    <div class="entry" id="panda-cub">
      <div></div>
    </div>
    <h1>{{ locale.title }}</h1>
    <el-button type="primary" link @click="goHome">
      {{ locale['button-title'] }}
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.entry {
  text-align: center;
  min-height: 200px;
  position: relative;
}

#panda-cub {
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 210px;
    height: 160px;
    margin-left: -110px;
    margin-top: -80px;
    background-color: white;
    background-image: radial-gradient(ellipse at 50% 60%, #333 12px, transparent 12px), radial-gradient(ellipse at 50% 80%, #555 6px, transparent 6px);
    border-top-left-radius: 110px;
    border-top-right-radius: 110px;
    border-bottom-left-radius: 110px 60px;
    border-bottom-right-radius: 110px 60px;
    border: 5px solid #333;
    border-bottom-width: 10px;
    box-shadow: inset 10px -10px 0 #eee;

    &::before {
      display: block;
      content: '';
      position: absolute;
      width: 70px;
      height: 40px;
      left: 29px;
      top: 55px;
      background-color: #333;
      background-image: radial-gradient(circle at 51px 20px, white 3px, transparent 3px), radial-gradient(circle at 46px 20px, #333 7px, transparent 7px), radial-gradient(circle at 45px 20px, white 10px, transparent 10px);
      border-radius: 50% 50% 45% 42%;
      transform: rotate(-45deg);
      box-shadow: 10px -72px 0 -4px #333;
    }

    &::after {
      display: block;
      content: '';
      position: absolute;
      width: 70px;
      height: 40px;
      left: 111px;
      top: 55px;
      background-color: #333;
      background-image: radial-gradient(circle at 24px 15px, white 3px, transparent 3px), radial-gradient(circle at 24px 20px, #333 7px, transparent 7px), radial-gradient(circle at 25px 20px, white 10px, transparent 10px);
      border-radius: 50% 50% 42% 45%;
      transform: rotate(45deg);
      box-shadow: -10px -72px 0 -4px #333;
    }
  }
}

.container {
  text-align: center;
  margin: 100px auto;
}
</style>
