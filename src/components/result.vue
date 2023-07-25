<script setup lang="ts">
defineProps<{
    result: string
}>()
</script>

<template>
    <div class="w-full border-4 border-[#9DC08B] rounded-xl p-8">
        <span class="text-xl font-bold">
            <span class="text-[#40513B]">
                result: 
            </span>
            <a :href="result" class="text-[#609966] hover:underline">
                {{ result ? result : "nothing here" }}
            </a>
        </span>
    </div>
</template>

<style >
</style>
