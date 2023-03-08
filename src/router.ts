import { RouteRecordRaw, createWebHistory, createRouter } from 'vue-router';
import { useRootStore } from './store/root';

const routes: Array<RouteRecordRaw> = [
    {
        "path": "/",
        "alias": "/home",
        "name": "home",
        component: () => import("./pages/HomePage.vue"),
        meta: {requiredLogin: true}
    },
    {
        "path": "/login",
        "alias": "/login",
        "name": "login",
        component: () => import("./pages/LoginPage.vue")
    },
    {
        "path": "/register",
        "alias": "/register",
        "name": "register",
        component: () => import("./pages/RegisterPage.vue")
    },
    {
        "path": "/author",
        "alias": "/author",
        "name": "author",
        component: () => import("./pages/AuthorPage.vue"),
        meta: {requiredLogin: true}
    },
    {
        "path": "/books",
        "alias": "/books",
        "name": "books",
        component: () => import("./pages/BookPage.vue"),
        meta: {requiredLogin: true}
    },
    {
        "path": "/rent/history",
        "alias": "/rent_history",
        "name": "rent_history",
        component: () => import("./pages/RentHistoryPage.vue"),
        meta: {requiredLogin: true}
    },
    {
        "path": "/task",
        "alias": "/task",
        "name": "task",
        component: () => import("./pages/TaskPage.vue"),
        meta: {requiredLogin: true}
    },
    {
        "path": "/task/detail/:id",
        "alias": "/task_detail",
        "name": "task_detail",
        component: () => import("./pages/TaskDetailPage.vue"),
        meta: {requiredLogin: true}
    },
    {
        "path": "/task/report/:id",
        "alias": "/task_report",
        "name": "task_report",
        component: () => import("./pages/TaskReportPage.vue"),
        meta: {requiredLogin: true}
    },
];



export const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {

    const root = useRootStore()

    if(to.matched.some(record => record.meta.requiredLogin && root.isAuthenticate === true)){
        next("/login");
    }else{
        next();
    }
});
