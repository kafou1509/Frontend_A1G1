<template>
<v-layout>
This is profile
</v-layout>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      message: 'Hello there, how are you this morning?',
      number: 4,
    };
  },
  methods: {
    reply() /* eslint-disable */ {
      this.message = "I'm doing great. Thank You!";
    },
  },
};
</script>
