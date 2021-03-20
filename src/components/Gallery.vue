<template>
  <div class="custom-container">
    <stack
      :column-min-width="300"
      :gutter-width="15"
      :gutter-height="15"
      monitor-images-loaded
      class="stack"
    >
      <stack-item
        
        v-for="(image, i) in images"
        :key="i"
        style="transition: transform 300ms"
      >
        <img :class="styleClass" :src="image.urls.small" :alt="image.alt_description" />
        <div class="img-footer">
          <img class="avatar" :src="image.user.profile_image.large" alt="" />
          <div class="info">
            <span>{{ image.user.name }}</span>
            <span v-if="image.user.for_hire"
              >Avaliable for hire <i class="fas fa-check-circle"></i
            ></span>
          </div>
        </div>
      </stack-item>
    </stack>
  </div>
</template>

<script>
import axios from "axios";
import { Stack, StackItem } from "vue-stack-grid";
export default {
  data() {
    return {
      images: [],
      styleClass: "classStack",
    };
  },
  mounted() {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=MTNcHBiwJl1DewakSTL6sNA2KmtlZ77ggYJvlB4S6SM`
      )
      .then((response) => {
        console.log(response);
        this.images = response.data;
      })
      .catch(() => {
        this.images = [];
      });
  },

  components: {
    Stack,
    StackItem,
  },
};
</script>

<style scoped>
.classStack:hover {
  opacity: 0.5;
  filter: blur(2px);
}

.custom-container {
  width: 80vw;
  margin: 0 auto;
  padding-top: 20px;
}

.img-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 15px 8px;
  width: 100%;
  display: flex;
  align-items: center;
}

.info {
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  font-weight: bold;
}
.info span:nth-child(1) {
  font-size: 17px;
  color: #2d3436;
}

.info span:nth-child(2) {
  font-size: 13px;
  color: #74b9ff;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 25px;
}
</style>