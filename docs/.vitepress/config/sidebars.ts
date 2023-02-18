import microserviceLocale from '../i18n/pages/microservice.json'
import vue3 from '../i18n/pages/vue3.json'
import ios from '../i18n/pages/ios.json'
import android from '../i18n/pages/android.json'

// 后端
function getMicroserviceSidebar() {
  return Object.fromEntries(
    Object.entries(microserviceLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, "/microservice")),
    ])
  )
}

// 前端
function getVue3SideBar() {
  return Object.fromEntries(
    Object.entries(vue3).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/vue3')),
    ])
  )
}

// ios端
function getIosSideBar() {
  return Object.fromEntries(
    Object.entries(ios).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/ios')),
    ])
  )
}

// 安卓端
function getAndroidSideBar() {
  return Object.fromEntries(
    Object.entries(android).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/android')),
    ])
  )
}

// return sidebar with language configs.
// this might create duplicated data but the overhead is ignorable
const getSidebars = () => {
  return {
    '/microservice/': getMicroserviceSidebar(),
    '/vue3/': getVue3SideBar(),
    '/ios/': getIosSideBar(),
    '/android/': getAndroidSideBar(),
  }
}

type Item = {
  text?: string
  children?: Item[]
  link?: string
}

function mapPrefix(item: Item, lang: string, prefix = '') {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map((child) => mapPrefix(child, lang, prefix)),
    }
  }
  return {
    ...item,
    link: `${prefix}${item.link}`,
  }
}

export const sidebars = getSidebars()
