<template>
    <div class="navbar">
        <nav class="bg-blue">
            <div class="container">
                <a href="" class="brand-logo left">Geo Chat</a>
                <ul class="right">
                    <li><a href="">Signup</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style>
    .bg-blue {
        background-color: #007BFF;
    }

    .txt-blue {
        color: #007BFF;
    }

    .bg-white {
        background-color: #ffff;
    }
</style>