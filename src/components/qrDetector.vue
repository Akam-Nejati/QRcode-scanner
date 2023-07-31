<script setup lang="ts">
import { ref } from 'vue';
import Result from './result.vue';
import CameraDetector from './cameraDetector.vue';
import FileDetector from './fileDetector.vue';
import CreateQr from './createQr.vue';

const result = ref<string>("")

function handleDetect(detectedCodes: any) {
    result.value = detectedCodes[0].rawValue
}
</script>

<template>
    <div class="w-full h-screen flex justify-center items-center bg-slate-800 py-8">
        <div class="w-[30rem] h-[calc(100vh-4rem)] flex flex-col justify-between p-4">
            <div>
                <CameraDetector :handleDetect="handleDetect"/>
                <Result :result="result" class="mt-4"/>
            </div>
            <div>
                <FileDetector :handleDetect="handleDetect">
                    <CreateQr />
                </FileDetector>
            </div>
        </div>
    </div>
</template>

<style >
.qrcode-stream-overlay {
    @apply hidden
}
.qrcode-stream-camera{
    @apply w-full h-full object-cover rounded-xl shadow-xl
}
</style>
