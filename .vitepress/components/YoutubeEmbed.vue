<template>
    <div class="video-container">
        <iframe :src="videoUrl" frameborder="0" allow="encrypted-media" allowfullscreen>
        </iframe>
    </div>
</template>
  
<script setup>
import { computed } from 'vue';

const props = defineProps({
    videoId: {
        type: String,
        required: true
    }
});

const videoUrl = computed(() => {
    return `https://www.youtube-nocookie.com/embed/${props.videoId}?rel=0&modestbranding=1`;
});
</script>
  
<style scoped>
.video-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    /* 16:9 Aspect Ratio */
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
  