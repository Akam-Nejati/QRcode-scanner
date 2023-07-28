<script setup lang="ts">
import { QrcodeCapture } from 'vue-qrcode-reader'

defineProps<{
    onDetect: any
}>()
</script>

<template>
    <div class="grid grid-cols-4 w-full gap-4">
        <div class="col-span-3">
            <label for="upload">
                    <div class="w-full bg-slate-900 p-4 rounded-xl shadow-xl text-xl font-bold text-slate-300 flex justify-center cursor-pointer">
                        upload
                    </div>
                    <QrcodeCapture id="upload" @detect="onDetect" class="hidden" />
            </label>
        </div>
        <div class="col-span-1">
            <slot  />
        </div>
    </div>
</template>