<template>
    <div class="add-smoothie container">
        <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
        <form>
            <div class="field title">
                <label for="title">Smoothie Title</label>
                <input type="text" name="title" v-moddel='title'>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:"AddSmoothie",
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>

</style>