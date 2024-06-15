import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login' 
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('../views/Element/ElementView.vue')
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: () => import('../views/Element/HelloWorld.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Element/LogIn.vue')
  },
  {
    path: '/operatorregister',
    name: 'operatorregister',
    component: () => import('../views/Element/OperatorRegister.vue')
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('../views/Element/HomePage.vue')
  },
  {
    path: '/usermanagement',
    name: 'usermanagement',
    component: () => import('../views/Element/UserManagement.vue')
  },
  {
    path: '/ridermanagement',
    name: 'ridermanagement',
    component: () => import('../views/Element/RiderManagement.vue')
  },
  {
    path: '/bikemanagement',
    name: 'bikemanagement',
    component: () => import('../views/Element/BikeManagement.vue')
  },
  {
    path: '/recordmanagement',
    name: 'recordmanagement',
    component: () => import('../views/Element/RecordManagement.vue')
  },
  {
    path: '/zonemanagement',
    name: 'zonemanagement',
    component: () => import('../views/Element/NoParkingZoneManagement.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
