<template>
  <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <router-link to="/">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>
                        </router-link>
                        <router-link to="/article">
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            发表文章
                        </MenuItem>
                        </router-link>
                        <router-link to="/login">
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            登录
                        </MenuItem>
                        </router-link>
                        <router-link to="/register">
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            注册
                        </MenuItem>
                        </router-link>
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>{{ currPage }}</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div id="app">
                      <router-view/>
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      currPage: '',
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 200px;
  margin-top: 60px;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
