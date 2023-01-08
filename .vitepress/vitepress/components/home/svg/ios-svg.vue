<template>
  <svg
    class="card-svg"
    width="160"
    height="120"
    viewBox="0 0 160 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle fill="var(--card-c-0)" cx="80" cy="60" r="60"/>
    <path class="st1" d="M8,39h8c1.1,0,2,0.9,2,2l0,0c0,1.1-0.9,2-2,2H8c-1.1,0-2-0.9-2-2l0,0C6,39.9,6.9,39,8,39z"/>
    <path class="st2" d="M13.7,22.9l7,3.8c1,0.5,1.3,1.7,0.8,2.7l0,0c-0.5,1-1.7,1.3-2.7,0.8l-7-3.8c-1-0.5-1.3-1.7-0.8-2.7l0,0C11.5,22.8,12.7,22.4,13.7,22.9z"/>
    <path class="st1" d="M24.5,12.7l4,7c0.5,1,0.2,2.2-0.8,2.7l0,0c-1,0.5-2.2,0.2-2.7-0.8l-4-7c-0.5-1-0.2-2.2,0.8-2.7l0,0C22.7,11.4,23.9,11.8,24.5,12.7z"/>
    <linearGradient id="SVGID_00000056420909917467287580000001265078310002029202" gradientUnits="userSpaceOnUse" x1="79.4335" y1="94.5438" x2="79.4335" y2="19.312" gradientTransform="matrix(1 0 0 -1 0 122)">
	    <stop offset="0" style="stop-color:#FBA62D"/>
      <stop offset="0.174" style="stop-color:#FC8E2C"/>
      <stop offset="0.548" style="stop-color:#FE602A"/>
      <stop offset="0.835" style="stop-color:#FF4329"/>
      <stop offset="1" style="stop-color:#FF3829"/>
    </linearGradient>
    <path style="fill:url(#SVGID_00000056420909917467287580000001265078310002029202);" d="M117,102H41.8c-2.6,0-4.7-2.1-4.7-4.7V22.1c0-2.6,2.1-4.7,4.7-4.7H117c2.6,
      0,4.7,2.1,4.7,4.7v75.2C121.8,99.9,119.6,102,117,102z"/>
    <linearGradient id="SVGID_00000056420909917467287580000001265078310002029203" gradientUnits="userSpaceOnUse" x1="36.4387" y1="104.2887" x2="84.1379" y2="56.5895" gradientTransform="matrix(1 0 0 -1 0 122)">
	    <stop offset="0" style="stop-color:#FAA53D"/>
      <stop offset="0.438" style="stop-color:#E17A2F"/>
      <stop offset="0.795" style="stop-color:#D15D26"/>
      <stop offset="1" style="stop-color:#CB5223"/>
    </linearGradient>
    <path style="fill:url(#SVGID_00000056420909917467287580000001265078310002029203);" d="M93.5,73.8c20.8-20.8-9.4-44.7-9.4-44.7
      L72.4,17.4H41.8c-2.6,0-4.7,2.1-4.7,4.7v32.8l9.4,9.4C46.5,64.3,72.7,94.6,93.5,73.8z"/>
    <path class="st5" d="M84.2,29.1c26.9,18.1,18.2,38.1,18.2,38.1s7.6,8.5,4.6,16c0,0-3.2-5.2-8.4-5.2c-5.1,0-8.1,5.2-18.3,5.2
	    c-22.8,0-33.6-18.9-33.6-18.9c20.6,13.4,34.6,3.9,34.6,3.9c-9.3-5.3-29.9-32-29.9-32C68.4,50.7,77.1,55,77.1,55
	    c-4.4-3.6-18.8-21.2-18.8-21.2c9.9,10,31.3,24.4,31.3,24.4C95.2,42.9,84.2,29.1,84.2,29.1z"/>
  </svg>
</template>

<style scoped lang="scss">
.card-svg {
  --card-c-0: #eff5fd;
}
.dark .card-svg {
  --card-c-0: #272b31;
}

.st1{
  fill:#6bd0ff;
}

.st2{
  fill:#5eb0ff;
}

.st5{
  fill:#FFFFFF;
}

</style>
