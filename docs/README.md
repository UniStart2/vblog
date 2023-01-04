---
date: 2023-01-01
# 页面head标签内添加额外标签
head:
  - [meta, {charset: 'utf-8'}]
  - [meta, {name: 'application-name', content: "unistart's vue blog" }]
  - [meta, {name: 'author', content: 'unistart'}]
  - [meta, {name: 'keywords', content: 'unistart,unistart2,vue,vue2,vu3,study'}]
---

<div class="skills">
  <h2>Skills</h2>
  <ul>
    <li v-for="skill in skills" :key="skill.name">
      <span class="skills-name">{{ skill.name }}:</span>
      <div class="skill-level" :style="{ width: 100 + '%', background: 'linear-gradient(to right, ' + skill.bg1 + ' 0%, ' + skill.bg2 + ' 46%, ' + skill.bg3 + ' 100%)' }" v-if="skill.level > 0" >
        <span class="skill-level-text" :style="{ left: skill.level-5 + '%', }">{{ skill.level }}%</span>
      </div>
      <div class="skill-level" :style="{ width: 100 + '%', background: 'linear-gradient(to right, ' + skill.bg1 + ' 0%, ' + skill.bg2 + ' 46%, ' + skill.bg3 + ' 100%)' }" v-else>
        <span class="skill-level-text" :style="{ left: '0%', }">0%</span>
      </div>
    </li>
  </ul>
</div>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'Java', level: 85, bg1: '#4158D0', bg2: '#EF5350', bg3: '#FFCC70' },
        { name: 'Ruby', level: 70, bg1: '#0093E9', bg2: '#80D0C7', bg3: '#d11bff' },
        { name: 'Rust', level: 30, bg1: '#8EC5FC', bg2: '#E0C3FC', bg3: '#1a9596' },
        { name: 'JavaScript', bg1: '#BB48F3', bg2: '#FFBBEC', bg3: '#20e4f5' }
      ]
    }
  }
}
</script>

<style>
.skills {
  width: 100%;
  margin: 0 auto;
}

.skills ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.skills li {
  margin: 15px 0;
  position: relative;
}

.skills-name {
  position: relative;
  z-index: 1;
  border: 2px solid aqua;
  border-radius: 10px;
  right: 20%;
  width: 18%;
  display: block;
  text-align: right;
}

.skill-level {
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}

.skill-level-text {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 14px;
}

.skill-level-none {
  height: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  color: #aaa;
  font-size: 14px;
  text-align: center;
}
</style>