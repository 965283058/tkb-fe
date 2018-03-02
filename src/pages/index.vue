<style scoped></style>
<template>
    <div>
        <headers></headers>
        <router-view></router-view>
        <footers></footers>
    </div>
</template>

<script>
    import headers from 'components/header'
    import footers from 'components/footer'
    export default {
        data(){
            return {}
        },
        computed: {},
        methods: {},
        mounted(){
        },
        components: {
            headers,
            footers
        },
        filters: {}
    }
</script>