import { createApp } from 'vue';
import router from '~/routes';
import store from '~/store/movie';
import App from '~/App';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Antd);
app.use(BootstrapVue3);
app.mount('#app');