<template>
  <svg
    class="card-svg"
    width="160"
    height="120"
    viewBox="0 0 160 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle fill="var(--card-c-0)" cx="74" cy="60" r="60"/>
    <path class="cls-3" d="M2,39H10c1.1,0,2,.9,2,2h0c0,1.1-.9,2-2,2H2c-1.1,0-2-.9-2-2H0c0-1.1,.9-2,2-2Z"/>
    <path class="cls-2" d="M7.66,22.95l7.04,3.79c.97,.52,1.34,1.74,.81,2.71h0c-.52,.97-1.74,1.34-2.71,.81l-7.04-3.79c-.97-.52-1.34-1.74-.81-2.71h0c.52-.97,1.74-1.34,2.71-.81Z"/>
    <path class="cls-3" d="M18.47,12.74l3.95,6.95c.55,.96,.21,2.18-.75,2.73h0c-.96,.55-2.18,.21-2.73-.75l-3.95-6.95c-.55-.96-.21-2.18,.75-2.73h0c.96-.55,2.18-.21,2.73,.75Z"/>
    <path class="cls-4" d="M84.61,30.5l-10.61,18.19-10.61-18.19H28.11l45.89,78.79L119.89,30.5h-35.28Z"/>
    <path class="cls-5" d="M84.61,30.5l-10.61,18.19-10.61-18.19h-16.92l27.53,47.27,27.53-47.27h-16.92Z"/>
  </svg>
</template>

<style scoped lang="scss">
.card-svg {
  --card-c-0: #eff5fd;
}
.dark .card-svg {
  --card-c-0: #272b31;
}

.cls-2 {
  fill: #5eb0ff;
}

.cls-3 {
  fill: #6bd0ff;
}

.cls-4 {
  fill: #42b883;
}

.cls-5 {
  fill: #35495e;
}
</style>
