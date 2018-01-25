<template>
  <div class="login">
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="username" prop="username">
            <Input type="text" v-model="formCustom.username"></Input>
        </FormItem>
        <FormItem label="password" prop="password">
            <Input type="password" v-model="formCustom.password"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')" long>登录</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'index',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your username'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'));
      } else {
        callback();
      }
    };
    return {
      formCustom: {
        username: '',
        password: '',
      },
      ruleCustom: {
        username: [
          { validator: validateUsername, trigger: 'blur' },
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          // xhr.setRequestHeader('x-csrf-token', csrftoken);
          const csrftoken = this.$cookie.get('csrfToken');
          axios.post('/user/login', this.formCustom, {
            headers: { 'x-csrf-token': csrftoken },
          })
            .then((response) => {
              const res = response.data;
              this.$Message.success(res.message);
              this.$router.push({ path: '/index' });
            })
            .catch((error) => {
              const result = error.response.data;
              this.$Message.error(result.message);
            });
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
  },
};
</script>
<style scoped>

</style>
