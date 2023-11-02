  <template>
    <div class="wrapper w-full pt-5">
      <div class="images flex gap-2">
        <div
          v-for="(el, idx) in panels"
          :key="idx"
          class="panel bg-[url('/images/baku.jpeg')]"
          :class="[el.class, el.isActive ? ' active' : '']"
          @mouseover="() => actived(el.id)"
        >
          <h3>{{ el.text }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue'
    
  const countImages = [
    '/images/count11.png',
    '/images/count2.png',
    '/images/count3.png',
    '/images/count4.png',
  ];
  const panels = reactive([
    {
      text: 'Baku, Azerbaijan',
      class: "bg-[url('/images/count11.png')] ",
      isActive: false,
      id: 1
    },
    { text: 'Bakuu, Azerbaijan', class: "bg-[url('/images/count2.png')]", isActive: false, id: 2 },
    { text: 'Bakuuu, Azerbaijan', class: "bg-[url('/images/count3.png')]", isActive: true, id: 3 },
    { text: 'Bakuuuu, Azerbaijan', class: "bg-[url('/images/count4.png')]", isActive: false, id: 4 },
  ])
  const actived = (id: number) => {
    panels.forEach((item) => {
      item.isActive = false
      if (item.id === id) {
        // item.class = ' active'
        item.isActive = true
      }
    })
  }
  </script>
  
  <style scoped>
  .wrapper {
    overflow: hidden;
  }
  .images {
    display: flex;
  }
  
  /* ------------------ */
  
  .panel {
    background-size: auto 110%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    height: 50vh;
    flex: 1;
    position: relative;
    transition: flex 0.3s ease-in;
    cursor: pointer;
  }
  .panel h3 {
    font-size: 24px;
    position: absolute;
    color: white;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
  }
  .panel.active {
    flex: 5;
  }
  
  .panel.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }
  </style>