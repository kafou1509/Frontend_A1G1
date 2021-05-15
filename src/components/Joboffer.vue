<template>
<v-layout>
This is job offer
</v-layout>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      message: 'Hello there, how are you this morning?',
      number: 2,
    };
  },
  methods: {
    reply() /* eslint-disable */ {
      this.message = "I'm doing great. Thank You!";
    },
  },

};
</script>
