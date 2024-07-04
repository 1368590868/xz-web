import type { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: '行展软件科技',
    description: '',
    project: {
      links: {
        github: '',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            { type: 'link', title: '首页', to: { path: '/' } },
            { type: 'link', title: '行展服务', to: { name: 'service' } },
            { type: 'link', title: '关于行展', to: { name: 'aboutMe' } },
            { type: 'link', title: '联系我们', to: { name: 'contact' } },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Nuxt&nbsp;3 Awesome Starter',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'ranlin',
      links: {
        github: '',
        medium: '',
        website: '',
      },
    },
  },
})
