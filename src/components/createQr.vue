<script setup  lang="ts">
import { ref } from 'vue';
import QrcodeVue from 'qrcode.vue'

const modalShow = ref<boolean>(false)
const qrValue = ref<string>()
function downloadQrCode() {
    const qrCode: HTMLCanvasElement | null = document.querySelector("#qrCode")

    if (!qrCode) {
        return
    } else {
        const dataUrl: string = qrCode.toDataURL('image/png');
        const link: HTMLAnchorElement = document.createElement('a');
        link.href = dataUrl;
        link.download = `${qrValue.value}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
</script>

<template>
    <div @click="modalShow = true"
        class="w-full h-full bg-slate-900 text-slate-300 text-xl font-bold rounded-xl shadow-xl flex justify-center items-center cursor-pointer">
        +
    </div>
    <div @click.self="modalShow = false" v-if="modalShow"
        class="w-full h-screen bg-[#000000b4] absolute top-0 left-0 flex flex-col justify-center items-center px-4">
        <div>
            <div class="grid grid-cols-6 sm:grid-cols-4 gap-4">
                <input v-model="qrValue" type="text"
                    class="col-span-4 sm:col-span-3 p-4 rounded-xl bg-slate-300 outline-none font-bold text-xl text-slate-900">
                <button type="button" @click="downloadQrCode" ref="download"
                    class="w-full col-span-2 sm:col-span-1 h-full bg-slate-300 text-slate-900 text-lg sm:text-xl font-bold rounded-xl shadow-xl flex justify-center items-center cursor-pointer">
                    Download
                </button>
            </div>
            <div v-show="qrValue" class="w-full flex justify-center mt-8">
                <qrcode-vue :value="qrValue" :size="300" level="H" id="qrCode" class="shadow-xl !rounded-xl"
                    background="black" foreground="#CBD5E1" />
            </div>
        </div>
    </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>