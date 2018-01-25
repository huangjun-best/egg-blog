<template>
  <div class="hello">
      <Row>
        <Col span="12" v-for="item in items" v-bind:key="item.id">
        <h3>
          {{ item.title }}
        </h3>
        <p>{{ item.date }}</p>
        <p>{{ item.content }}</p>
        </Col>
      </Row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'index',
  data() {
    return {
      items: [],
    };
  },
  created() {
    const csrftoken = this.$cookie.get('csrfToken');
    axios.get('/articleql/query', {}, {
      headers: { 'x-csrf-token': csrftoken },
    })
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        const result = error.response.data;
        this.$Message.error(result.message);
      });
  },
};
</script>
<style scoped>
  .article-title{
    text-align:left;
  }
</style>
