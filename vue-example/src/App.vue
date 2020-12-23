<template>
  <v-app>
    <v-main>
      <TodoHeader/>
      <TodoBody/>
    </v-main>
  </v-app>
</template>

<script>

import TodoHeader from './components/TodoHeader'
import TodoBody from './components/TodoBody'

export default {
  name: 'App',

  components: {
    TodoHeader,
    TodoBody
  },

  data: () => ({
    //
  }),
};
</script>
