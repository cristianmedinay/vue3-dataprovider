<script setup>
import DataProvider from './components/DataProvider';


</script>

<template>

  <DataProvider url="https://jsonplaceholder.typicode.com/todos">
      <template v-slot="{data,loading,error}">
        <div class="loading" v-if="loading">
          Loading.. data
        </div>

        <div v-if="error">
         Error: {{ error }}
        </div>
        <div v-else>
          <ul v-if="data && data.length">
            <li v-for="item in data" :key="item.id">

                {{item.title}}

            </li>
          </ul>
        </div>
      </template>


  </DataProvider>


</template>
