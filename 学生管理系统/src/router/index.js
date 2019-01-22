import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import { getToken } from '@/libs/util'

Vue.use(Router)

const router =new Router({
  routes,
})

router.beforeEach((to, from, next) => {
	let token = getToken()
	if(to.meta.requireAuth) {
		if(token) {
			next()
		} else {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		}
	} 
	else {
		next()
	}
})
export default router

