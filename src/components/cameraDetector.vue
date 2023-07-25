<script setup lang="ts">
import { QrcodeStream } from 'vue-qrcode-reader'

defineProps<{
    onDetect: any
}>()

</script>

<template>
    <div class="rounded-xl shadow-xl bg-[#9DC08B] overflow-hidden w-full h-[20rem] p-4">
        <qrcode-stream @detect="onDetect" class="w-full h-full"></qrcode-stream>
    </div>
</template>