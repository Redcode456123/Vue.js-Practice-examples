<template>
  <div>
    <div class="form-check-inline">
      <label class="form-check-label" for="radio1">
        <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked>Credit Card
      </label>
    </div>
    <div class="form-check-inline">
      <label class="form-check-label" for="radio2">
        <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">Delivery
      </label>
    </div>
    <div class="form-check-inline">
      <label class="form-check-label" for="radio2">
        <input type="radio" class="form-check-input" id="radio3" name="optradio" value="option3">Pickup
      </label>
    </div>
  </div>


</template>

<script>
export default {
  name: "ToggleCheckBoxes"
}
</script>

<style scoped>

</style>