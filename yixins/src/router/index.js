import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/view/home'
import index from '@/view/index'
import cart from '@/view/cart'
import course from '@/view/course'
import my from '@/view/my'
import deta from '@/mao/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    	path:'/',
    	name:'home',
    	component:home,
    	redirect:'/index',
    	children:[
    		{
    			path:'index',
		    	name:'index',
		    	component:index
    		},{
    			path:'cart',
		    	name:'cart',
		    	component:cart
    		},{
    			path:'course',
		    	name:'course',
		    	component:course
    		},{
    			path:'my',
		    	name:'my',
		    	component:my
    		},{
    			path:'deta',
		    	name:'deta',
		    	component:deta
    		}
    			
    		
    	]
    }
  ]
})
