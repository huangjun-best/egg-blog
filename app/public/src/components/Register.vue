<template>
  <div class="login">
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="username" prop="username">
            <Input type="text" v-model="formCustom.username"></Input>
        </FormItem>
        <FormItem label="password" prop="password">
            <Input type="password" v-model="formCustom.password"></Input>
        </FormItem>
        <FormItem label="Confirm" prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')" long>注册</Button>
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
        if (this.formCustom.passwdCheck !== '') {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('passwdCheck');
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password again'));
      } else if (value !== this.formCustom.password) {
        callback(new Error('The two input passwords do not match!'));
      } else {
        callback();
      }
    };
    return {
      formCustom: {
        username: '',
        password: '',
        passwdCheck: '',
      },
      ruleCustom: {
        username: [
          { validator: validateUsername, trigger: 'blur' },
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
        ],
        passwdCheck: [
          { validator: validatePassCheck, trigger: 'blur' },
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
          axios.post('/user/register', this.formCustom, {
            headers: { 'x-csrf-token': csrftoken },
          })
            .then((response) => {
              const res = response.data;
              if (res.code === '201') {
                this.$Message.error(res.message);
              } else {
                this.$Message.success(res.message);
              }
            })
            .catch((error) => {
              this.$Message.error(error);
            });
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
  },
};
</script>
