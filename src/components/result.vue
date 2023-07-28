<script setup lang="ts">
defineProps<{
    result: string
}>()
</script>

<template>
    <div class="w-full border-4 border-slate-900 rounded-xl p-8">
        <span class="text-xl font-bold">
            <span class="text-slate-300">
                result: 
            </span>
            <a :href="result" class="text-slate-900 hover:underline">
                {{ result ? result : "nothing here" }}
            </a>
        </span>
    </div>
</template>

<style >
</style>
