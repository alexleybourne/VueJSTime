<template>
    <div class="navbar">
        <nav class="nav-extended blue darken-2">
            <div class="nav-content">
                <router-link to="">
                    <img class="nav-logo" src="../assets/SmoothieBookLogo.svg" alt="Smoothie Book Logo">
                    <span class="nav-title">SmoothieBook</span>
                </router-link>
                <a href="" class="btn-floating btn-large halfway-fab light-blue">
                    <router-link to="">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:"Navbar",
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .navbar nav {
        padding: 0 20px;
    }

    .nav-logo {
        height: 50px;
        width: auto;
        margin: 0 10px 0 0;
        position: relative;
        top: 13px;
    }
</style>