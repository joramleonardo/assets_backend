import Vue from 'vue';
import Router from 'vue-router';


//EVENTS MANAGEMENT
import EventHome from './views/Event_Home.vue';
import EventDashboard from './views/Event_Dashboard.vue';
import EventCreate from './views/Event_Create.vue';
import EventManageList from './views/Event_ManageList.vue';
import EventDraft from './views/Event_Draft.vue';
import EventList from './views/Event_List.vue';
import EventListPending from './views/Event_PendingList.vue';
import EventLibrary from './views/Event_Library.vue';
import EventPhoto from './views/Event_PhotoList.vue';
import EventVideo from './views/Event_VideoList.vue';




Vue.use(Router);

const routes = [
 

    {
        path: '/',
        name: '',
        component: EventHome
    },
    //EVENT MANAGEMENT
    {
        path: '/event/',
        name: 'event',
        component: EventHome,
        children: [
            {
                path: '/event/dashboard',
                name: 'event-dashboard',
                component: EventDashboard,
            },
            {
                path: '/event/create',
                name: 'event-create',
                component: EventCreate,
            },
            {
                path: '/event/manage/list',
                name: 'event-manage-list',
                component: EventManageList,
            },
            {
                path: '/event/list/draft',
                name: 'event-list-draft',
                component: EventDraft,
            },
            {
                path: '/event/list/pending',
                name: 'event-list-pending',
                component: EventListPending,
            },
            {
                path: '/event/list',
                name: 'event-list',
                component: EventList,
            },
            {
                path: '/event/photo/list',
                name: 'event-photo-list',
                component: EventPhoto,
            },
            {
                path: '/event/video/list',
                name: 'event-video-list',
                component: EventVideo,
            },
            {
                path: '/event/library',
                name: 'event-library',
                component: EventLibrary,
            }
        ],
    },

];

const router = new Router({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;