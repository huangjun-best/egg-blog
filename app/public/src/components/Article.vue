<template>
  <div class="article">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="Title" prop="title">
        <Input v-model="formValidate.title" placeholder="Enter your title"></Input>
      </FormItem>
      <FormItem label="Desc" prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formValidate: {
        title: '',
        desc: '',
      },
      ruleValidate: {
        title: [
          { required: true, message: 'The title cannot be empty', trigger: 'blur' },
        ],
        desc: [
          { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
          { type: 'string', min: 10, message: 'Introduce no less than 20 words', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          const csrftoken = this.$cookie.get('csrfToken');
          axios.post('/articleql/create', this.formValidate, {
            headers: { 'x-csrf-token': csrftoken },
          })
            .then((response) => {
              const res = response.data;
              this.$Message.success(res.message);
              this.$router.push({ path: '/index' });
            })
            .catch((error) => {
              console.log(error);
              const result = error.response.data;
              this.$Message.error(result.message);
              this.$router.push({ path: '/login' });
            });
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>
