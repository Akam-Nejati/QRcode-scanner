<script setup  lang="ts">
import { ref } from 'vue';
import QrcodeVue from 'qrcode.vue'

const modalShow = ref<boolean>(false)
const qrValue = ref<string>()

function downloadQrCode() {
    const svg: any = document.querySelector(".svg")
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const dataUri = 'data:image/svg+xml;base64,' + btoa(svgString);
    const link = document.createElement('a');
    link.href = dataUri;
    link.download = `${qrValue.value}.svg`;
    link.click();
}
</script>

<template>
    <div @click="modalShow = true"
        class="w-full h-full bg-slate-900 text-slate-300 text-xl font-bold rounded-xl shadow-xl flex justify-center items-center cursor-pointer">
        +
    </div>

    <Transition>
        <div @click.self="modalShow = false" v-if="modalShow"
            class="w-full h-screen bg-[#000000b4] absolute top-0 left-0 flex flex-col justify-center items-center px-4">
            <div>
                <div class="grid grid-cols-6 sm:grid-cols-4 gap-4">
                    <input v-model="qrValue" type="text"
                        class="col-span-4 sm:col-span-3 p-4 rounded-xl bg-slate-300 outline-none font-bold text-xl text-slate-900">
                    <button type="button" @click="downloadQrCode" ref="download" class="w-full col-span-2 sm:col-span-1 h-full bg-slate-300 text-slate-900 text-lg sm:text-xl font-bold rounded-xl shadow-xl flex justify-center items-center cursor-pointer">
                        Download
                    </button>
                </div>
                <div v-show="qrValue" class="w-full flex justify-center mt-8">
                    <qrcode-vue :value="qrValue" :size="300" level="H" class="svg shadow-xl !rounded-xl" background="black"
                        foreground="#CBD5E1" render-as="svg" />
                </div>
            </div>
        </div>
    </Transition>
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