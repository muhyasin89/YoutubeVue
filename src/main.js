import  Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import DashboardView from './views/DashboardView'
import TimeSheetView from './views/TimeSheetView'
import { createStore } from 'vuex'

const routes = [
  { path: '/', component: DashboardView },
  { path: '/timesheets', component: TimeSheetView }
]


const store = createStore({
  state () {
    return {
      count: 0,
      host: 'http://localhost:8000/api/',
      token: null,
      isAuthenticated: false,
      user: {},
      projects: {},
      users:{},
      clients: {}
    }
  },
  mutations: {
    changeToken (state, value) {
      state.token = value;
    },
    changeClients(state, value){
      state.clients = value;
    },
    changeUsers(state, data){
      state.users = data;
    },
    changeProjects(state, data){
      state.projects = data;
    },
    changeIsAuthenticated(state, value){
      state.isAuthenticated = value;
    },
    changeUserDetail(state, data){
      state.user = data
    }
  },
  getters: {
    getUser(state){
      return state.user;
    },
    getProjects(state){
      return state.projects
    },
    isAuth(state){
      return state.isAuthenticated
    },
    isUserNull(state){
      return state.user == {}
    },
    isUser(state){
      return state.user.is_user !== 'undefined';
    },
    isAdmin(state){
      return state.user.is_admin !== 'undefined';
    },
    getHeader(state){
      return {headers: {
        'Authorization': `Token ${state.token}`
      }}
    }
  }
});

const router = new VueRouter({
  mode: "history",
  routes, // short for `routes: routes`
})
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(store);
new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')

