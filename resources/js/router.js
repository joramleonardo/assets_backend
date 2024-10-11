import Vue from 'vue';
import Router from 'vue-router';

//LOGIN PAGE
import Login from './views/Login/Login.vue';
import Register from './views/Login/RegisterPage.vue';


//ENCODER MANAGEMENT
import Encoder_EventHome from './views/Encoder/Event_Home.vue';
import Encoder_EventDashboard from './views/Encoder/Event_Dashboard.vue';
import Encoder_EventCreate from './views/Encoder/Event_Create.vue';
import Encoder_EventManageList from './views/Encoder/Event_ManageList.vue';
import Encoder_EventDraft from './views/Encoder/Event_Draft.vue';
import Encoder_EventList from './views/Encoder/Event_List.vue';
import Encoder_EventListPending from './views/Encoder/Event_PendingList.vue';
import Encoder_EventLibrary from './views/Encoder/Event_Library.vue';
import Encoder_EventPhoto from './views/Encoder/Event_PhotoList.vue';
import Encoder_EventVideo from './views/Encoder/Event_VideoList.vue';


//PUBLISHER MANAGEMENT
import Publisher_EventHome from './views/Publisher/Event_Home.vue';
import Publisher_EventDashboard from './views/Publisher/Event_Dashboard.vue';
import Publisher_EventManageList from './views/Publisher/Event_ManageList.vue';

//ADMIN MANAGEMENT
import Admin_Home from './views/Admin/Home.vue';
import Admin_Dashboard from './views/Admin/Dashboard.vue';


Vue.use(Router);

const routes = [
 


    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: '',
        component: Login
    },
    //ADMIN MANAGEMENT
    {
        path: '/admin/home/',
        name: 'admin/home',
        component: Admin_Home,
        children: [
            {
                path: '/admin/dashboard',
                name: 'admin-dashboard',
                component: Admin_Dashboard,
            },
            // {
            //     path: '/admin/manage/list',
            //     name: 'admin-manage-list',
            //     component: Publisher_EventManageList,
            // }
        ],
    },
    //ENCODER MANAGEMENT
    {
        path: '/en/home/',
        name: 'en-home',
        component: Encoder_EventHome,
        children: [
            {
                path: '/en/dashboard',
                name: 'en-dashboard',
                component: Encoder_EventDashboard,
            },
            {
                path: '/en/create',
                name: 'en-create',
                component: Encoder_EventCreate,
            },
            {
                path: '/en/manage/list',
                name: 'en-manage-list',
                component: Encoder_EventManageList,
            },
            {
                path: '/en/list/draft',
                name: 'en-list-draft',
                component: Encoder_EventDraft,
            },
            {
                path: '/en/list/pending',
                name: 'en-list-pending',
                component: Encoder_EventListPending,
            },
            {
                path: '/en/list',
                name: 'en-list',
                component: Encoder_EventList,
            },
            {
                path: '/en/photo/list',
                name: 'en-photo-list',
                component: Encoder_EventPhoto,
            },
            {
                path: '/en/video/list',
                name: 'en-video-list',
                component: Encoder_EventVideo,
            },
            {
                path: '/en/library',
                name: 'en-library',
                component: Encoder_EventLibrary,
            }
        ],
    },
    //PUBLISHER MANAGEMENT
    {
        path: '/pub/home/',
        name: 'pub/home',
        component: Publisher_EventHome,
        children: [
            {
                path: '/pub/dashboard',
                name: 'pub-dashboard',
                component: Publisher_EventDashboard,
            },
            {
                path: '/pub/manage/list',
                name: 'pub-manage-list',
                component: Publisher_EventManageList,
            }
        ],
    },

];

const router = new Router({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;