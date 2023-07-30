<script setup lang="ts">
import { QrcodeStream } from 'vue-qrcode-reader'

defineProps<{
    onDetect: any
}>()

function error(e: any) {
    console.log(e);
    
}

</script>

<template>
    <div class="rounded-xl shadow-xl bg-slate-900 overflow-hidden w-full h-[20rem] ">
        <qrcode-stream :on-error="error" @detect="onDetect" class="w-full h-full"></qrcode-stream>
    </div>
</template>