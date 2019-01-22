import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Erro from '@/components/Erro'
export default [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/main',
      meta: {
				requireAuth: true
      },
      children:[
        {
          path:'main',
          name:'main',
          component: () => import('@/components/main/Main.vue')
        },
        {
          path:'teacher',
          name:'teacher',
          component: () => import('@/components/main/Teacher.vue')
        },
        {
          path:'student',
          name:'student',
          component: () => import('@/components/main/Student.vue')
        }
      ]
    },
    {
			path: '/login',
			name: 'login',
      component: Login,
    },
    {
        path:'/register',
        name:'register',
        component:() => import('@/components/Register')
    },
    {
			path: '*',
			component:Erro,
			hidden: true
		}
  ]
