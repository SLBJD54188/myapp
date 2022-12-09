// elememt 按需引入该组件
import Vue from 'vue';
import { Button, Form, Input, Message } from 'element-ui';
Vue.use(Button)
Vue.use(Form);
Vue.use(Input);
// Vue.use(FormItem);
Vue.prototype.$message = Message;