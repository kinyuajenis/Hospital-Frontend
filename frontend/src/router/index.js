import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ViewPatients from '../components/ViewPatients.vue'
import Signup from '../components/Signup.vue'
import Profile from '../components/Profile.vue'
import Patients from '../components/Patients.vue'
import Login from '../components/Login.vue'
import LandingPage from '../components/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/homepage',
      component: HomePage,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/signup',
      component: Signup,
    },
    {
      path: '/patients',
      component: Patients,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/view-patients',
      component: ViewPatients,
    },
    {
      path: '/',
      component: LandingPage,
    }
  ],
})


export default router
