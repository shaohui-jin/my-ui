---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
import { ref } from 'vue'

const members = ref([
  {
    avatar: 'https://avatars.githubusercontent.com/u/57162776?v=4',
    name: 'Jinshaohui',
    title: 'Creator',
    desc: '一切慢慢来',
    links: [
      { icon: 'github', link: 'https://github.com/shaohui-jin' },
      { icon: 'wechat' },
      { icon: 'qq' }
    ]
  },
])
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      本站的开发由以下组员联合开发，介绍如下。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>





