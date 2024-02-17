<template>
    <div style="background-color: black; padding: .5em 1em; border-radius: 5px;" v-html="highlightedCode">
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-gdscript';
import 'prismjs/themes/prism-dark.css';

const highlightedCode = ref('');

onMounted(() => {
    const code = 'var name = "Godot"';
    highlightedCode.value = Prism.highlight(code, Prism.languages.gdscript, 'gdscript');
});
</script>
