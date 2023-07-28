<script setup  lang="ts">
import { ref } from 'vue';

const modalShow = ref<boolean>(false)
</script>

<template>
    <div @click="modalShow = true"
        class="w-full h-full bg-slate-900 text-slate-300 text-xl font-bold rounded-xl shadow-xl flex justify-center items-center cursor-pointer">
        +
    </div>

    <Transition>
        <div @click.self="modalShow = false" v-if="modalShow"
            class="w-full h-screen bg-[#00000071] absolute top-0 left-0 flex justify-center items-center px-4">
            <div class="grid grid-cols-6 sm:grid-cols-4 gap-4">
                <input type="text" class="col-span-4 sm:col-span-3 p-4 rounded-xl bg-slate-300 outline-none font-bold text-xl text-slate-900">
                <button type="button" @click="modalShow = true"
                    class="w-full col-span-2 sm:col-span-1 h-full bg-slate-300 text-slate-900 text-lg sm:text-xl font-bold rounded-xl shadow-xl flex justify-center items-center cursor-pointer">
                    generate
                </button>
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