<template>
    <div class="loader-div">
      <img class="loader" src="../assets/SmoothieLoading.gif" alt="Loading Animation">
      <p class="loader-text">Loading...</p>
    </div>
</template>

<script>
export default {
    name:"Loader",
}
</script>

<style>
    .loader {
  height: auto;
  width: 200px;
  top: 40px
}

.loader-text {
  font-weight: bold;
  color: #777777;
  font-size: 20px;
}

.loader-div{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin: 20px auto;
  align-items: center;
}

</style>