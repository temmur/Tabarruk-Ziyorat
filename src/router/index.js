import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'activeClass',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/PAbout.vue')
    },
    {
      path: '/students',
      name: "Students",
      component: () => import('@/pages/PStudents/PIndex.vue'),
      children: [
        {
          path: '',
          name: "StudentsAbout",
          component: () => import('@/components/CAbout.vue')
        },
        {
          path: 'contact',
          name: "StudentsContact",
          component: () => import('@/components/CCountries.vue')
        }
      ]
    },
    {
      path: '/students/:slug(\\d+)',
      name: "StudentsSingle",
      component: () => import('@/pages/PStudents/PStudentSingle.vue')
    },
    {
      path: '/exam',
      name: 'exam',
      component: ()=> import ('@/pages/PExam.vue')
    },
    {
      path: '/news',
      name: "News",
      component: ()=> import ("@/pages/PNews.vue"),
    },
    {
      path: '/news-single',
      name: "News-Single",
      component: ()=> import ('@/pages/PNews/NewsSingle.vue')
    }
   
  ]
})

export default router
