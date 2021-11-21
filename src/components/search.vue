<template>
    <div>
        <div>
            <label for="search">Поиск:</label>
            <input id="search" type="text" v-model="searchValue"/>
        </div>
         <div>
    </div>
        <slot name="item" :item="filteredList"></slot>
    </div>
</template>

<script>
export default {
    name: 'search',
    props: ["listOfSearch"],
    emits: ["list"],
    data() {
        return {
            searchValue: '',
        }
    },
    computed: {
        filteredList() {
            return this.listOfSearch.filter( ({name}) => name.includes(this.searchValue) )
        }
    }
}
</script>

<style>
    
</style>