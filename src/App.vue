<template>
    <div id="app">
        <main>
          <div class="wrapper">
            <h1>New Car Search</h1>
            <auto-complete></auto-complete>
            <hr />
            <div class="row">
              <div class="col-6">
                <fieldset class="checkboxes" id="auto_type">
                  <strong>FILTER BY TYPE</strong>
                  <label for="type-1"><input v-model="$root.filter_type" value="Car" id="type-1" type="checkbox"> <span>Car</span></label>
                  <label for="type-2"><input v-model="$root.filter_type" value="Truck" id="type-2" type="checkbox"> <span>Truck</span></label>
                  <label for="type-3"><input v-model="$root.filter_type" value="SUV" id="type-3" type="checkbox"> <span>SUV</span></label>
                </fieldset>
              </div>
              <div class="col-6">
                <fieldset>
                  <strong>SORT OPTIONS</strong>
                  <select v-model="$root.currentOrder">
                    <option value="0">Select One</option>
                    <option value="1">Year (Low to High)</option>
                    <option value="2">Year (High to Low)</option>
                    <option value="3">Price (Low to High)</option>
                    <option value="4">Price (High to Low)</option>
                  </select>
                </fieldset>
              </div>
            </div>

            <hr />
            <listings></listings>
          </div>
        </main>
    </div>
</template>
<script>
export default {
  name: 'App',
  data: function () {
    return {
      appName: 'AutoSearch'
    }
  }
}
</script>
