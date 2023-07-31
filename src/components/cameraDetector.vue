<script setup lang="ts">
import { QrcodeStream } from 'vue-qrcode-reader'

defineProps<{
    handleDetect: any
}>()
</script>

<template>
    <div class="rounded-xl shadow-xl bg-slate-900 overflow-hidden w-full h-[20rem] ">
        <qrcode-stream @detect="handleDetect" class="w-full h-full"></qrcode-stream>
    </div>
</template>