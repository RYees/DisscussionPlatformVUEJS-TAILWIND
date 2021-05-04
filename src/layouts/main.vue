<template>
    <div>
        <navbar>
            {{title}}
        </navbar>
        <slot></slot>
        <slot name="e"></slot>
    </div>
</template>
<script>
import navbar from '@/components/navbar.vue';
export default {
    props: ["title"],
    components: {
        navbar
    }
}
</script>