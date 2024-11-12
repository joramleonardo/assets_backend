import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap';
require("@fortawesome/fontawesome-free/css/all.min.css");



import BootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';




Vue.use(BootstrapVue);
Vue.use(FlashMessage);

Vue.config.productionTip = false



new Vue({
    el: '#app',
    router,
    render: h => h(App),
    mounted() {
        // Initial load of CSS/JS based on current route
        this.loadRouteAssets(this.$route.path);
    },
    watch: {
        // Watch for route changes and load new assets
        '$route.path': function (newPath) {
            this.loadRouteAssets(newPath);
        }
    },
    methods: {
        loadRouteAssets(path) {
            // Remove previous CSS and JS if necessary
            // this.removeOldAssets();

            if (path === '/admin/dashboard') {
                this.loadCssJs_dashboard();
            } else if (path === '/admin/event/add') {
                this.loadCssJs_addEvent();
            }
        },
        loadCss(href) {
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        },
        loadJs(src) {
            let script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
        },
        removeOldAssets() {
            let oldLinks = document.querySelectorAll("link[rel='stylesheet']");
            oldLinks.forEach(link => link.parentNode.removeChild(link));

            let oldScripts = document.querySelectorAll("script[src*='/js/']");
            oldScripts.forEach(script => script.parentNode.removeChild(script));
        },
        loadCssJs_dashboard(){
            //CSS
            this.loadCss('/notika/css/bootstrap.min.css');
            this.loadCss('/notika/css/font-awesome.min.css');
            this.loadCss('/notika/css/owl.carousel.css');
            this.loadCss('/notika/css/owl.theme.css');
            this.loadCss('/notika/css/owl.transitions.css');
            this.loadCss('/notika/css/meanmenu/meanmenu.min.css');
            this.loadCss('/notika/css/animate.css');
            this.loadCss('/notika/css/normalize.css');
            this.loadCss('/notika/css/scrollbar/jquery.mCustomScrollbar.min.css');
            this.loadCss('/notika/css/jvectormap/jquery-jvectormap-2.0.3.css');
            this.loadCss('/notika/css/notika-custom-icon.css');
            this.loadCss('/notika/css/wave/waves.min.css');
            this.loadCss('/notika/css/main.css');
            this.loadCss('/notika/style.css');
            this.loadCss('/notika/css/responsive.css');

            //JS
            this.loadJs('/notika/js/vendor/modernizr-2.8.3.min.js');
            this.loadJs('/notika/js/vendor/jquery-1.12.4.min.js');
            this.loadJs('/notika/js/bootstrap.min.js');
            this.loadJs('/notika/js/wow.min.js');
            this.loadJs('/notika/js/jquery-price-slider.js');
            this.loadJs('/notika/js/owl.carousel.min.js');
            this.loadJs('/notika/js/jquery.scrollUp.min.js');
            this.loadJs('/notika/js/meanmenu/jquery.meanmenu.js');
            this.loadJs('/notika/js/counterup/jquery.counterup.min.js');
            this.loadJs('/notika/js/counterup/waypoints.min.js');
            this.loadJs('/notika/js/counterup/counterup-active.js');
            this.loadJs('/notika/js/scrollbar/jquery.mCustomScrollbar.concat.min.js');
            this.loadJs('/notika/js/jvectormap/jquery-jvectormap-2.0.2.min.js');
            this.loadJs('/notika/js/jvectormap/jquery-jvectormap-world-mill-en.js');
            this.loadJs('/notika/js/jvectormap/jvectormap-active.js');
            this.loadJs('/notika/js/sparkline/jquery.sparkline.min.js');
            this.loadJs('/notika/js/sparkline/sparkline-active.js');
            this.loadJs('/notika/js/flot/jquery.flot.js');
            this.loadJs('/notika/js/flot/jquery.flot.resize.js');
            this.loadJs('/notika/js/flot/curvedLines.js');
            this.loadJs('/notika/js/flot/flot-active.js');
            this.loadJs('/notika/js/knob/jquery.knob.js');
            this.loadJs('/notika/js/knob/jquery.appear.js');
            this.loadJs('/notika/js/knob/knob-active.js');
            this.loadJs('/notika/js/wave/waves.min.js');
            this.loadJs('/notika/js/wave/wave-active.js');
            this.loadJs('/notika/js/todo/jquery.todo.js');
            this.loadJs('/notika/js/plugins.js');
            this.loadJs('/notika/js/chat/moment.min.js');
            this.loadJs('/notika/js/chat/jquery.chat.js');
            this.loadJs('/notika/js/main.js');
            // this.loadJs('/notika/js/tawk-chat.js');

        },
        loadCssJs_addEvent(){
            //CSS
            this.loadCss('/notika/css/bootstrap.min.css');
            this.loadCss('/notika/css/font-awesome.min.css');
            this.loadCss('/notika/css/owl.carousel.css');
            this.loadCss('/notika/css/owl.theme.css');
            this.loadCss('/notika/css/owl.transitions.css');
            this.loadCss('/notika/css/meanmenu/meanmenu.min.css');
            this.loadCss('/notika/css/animate.css');
            this.loadCss('/notika/css/summernote/summernote.css');
            this.loadCss('/notika/css/themesaller-forms.css');
            this.loadCss('/notika/css/normalize.css');
            this.loadCss('/notika/css/scrollbar/jquery.mCustomScrollbar.min.css');
            this.loadCss('/notika/css/notika-custom-icon.css');
            this.loadCss('/notika/css/bootstrap-select/bootstrap-select.css');
            this.loadCss('/notika/css/datapicker/datepicker3.css');
            this.loadCss('/notika/css/color-picker/farbtastic.css');
            this.loadCss('/notika/css/chosen/chosen.css');
            this.loadCss('/notika/css/notification/notification.css');
            this.loadCss('/notika/css/dropzone/dropzone.css');
            this.loadCss('/notika/css/wave/waves.min.css');
            this.loadCss('/notika/css/main.css');
            this.loadCss('/notika/style.css');
            this.loadCss('/notika/css/responsive.css');

            //JS
            this.loadJs('/notika/js/vendor/modernizr-2.8.3.min.js');
            this.loadJs('/notika/js/vendor/jquery-1.12.4.min.js');
            this.loadJs('/notika/js/bootstrap.min.js');
            this.loadJs('/notika/js/wow.min.js');
            this.loadJs('/notika/js/jquery-price-slider.js');
            this.loadJs('/notika/js/owl.carousel.min.js');
            this.loadJs('/notika/js/jquery.scrollUp.min.js');
            this.loadJs('/notika/js/meanmenu/jquery.meanmenu.js');
            this.loadJs('/notika/js/counterup/jquery.counterup.min.js');
            this.loadJs('/notika/js/counterup/waypoints.min.js');
            this.loadJs('/notika/js/counterup/counterup-active.js');
            this.loadJs('/notika/js/scrollbar/jquery.mCustomScrollbar.concat.min.js');
            this.loadJs('/notika/js/sparkline/jquery.sparkline.min.js');
            this.loadJs('/notika/js/sparkline/sparkline-active.js');
            this.loadJs('/notika/js/flot/jquery.flot.js');
            this.loadJs('/notika/js/flot/jquery.flot.resize.js');
            this.loadJs('/notika/js/flot/flot-active.js');
            this.loadJs('/notika/js/knob/jquery.knob.js');
            this.loadJs('/notika/js/knob/jquery.appear.js');
            this.loadJs('/notika/js/knob/knob-active.js');
            this.loadJs('/notika/js/jasny-bootstrap.min.js');
            this.loadJs('/notika/js/icheck/icheck.min.js');
            this.loadJs('/notika/js/icheck/icheck-active.js');
            this.loadJs('/notika/js/rangle-slider/jquery-ui-1.10.4.custom.min.js');
            this.loadJs('/notika/js/rangle-slider/jquery-ui-touch-punch.min.js');
            this.loadJs('/notika/js/rangle-slider/rangle-active.js');
            this.loadJs('/notika/js/datapicker/bootstrap-datepicker.js');
            this.loadJs('/notika/js/datapicker/datepicker-active.js');
            this.loadJs('/notika/js/bootstrap-select/bootstrap-select.js');
            this.loadJs('/notika/js/color-picker/farbtastic.min.js');
            this.loadJs('/notika/js/color-picker/color-picker.js');
            this.loadJs('/notika/js/notification/bootstrap-growl.min.js');
            this.loadJs('/notika/js/notification/notification-active.js');
            this.loadJs('/notika/js/summernote/summernote-updated.min.js');
            this.loadJs('/notika/js/summernote/summernote-active.js');
            this.loadJs('/notika/js/dropzone/dropzone.js');
            this.loadJs('/notika/js/wave/waves.min.js');
            this.loadJs('/notika/js/wave/wave-active.js');
            this.loadJs('/notika/js/chosen/chosen.jquery.js');
            this.loadJs('/notika/js/chat/jquery.chat.js');
            this.loadJs('/notika/js/todo/jquery.todo.js');
            this.loadJs('/notika/js/plugins.js');
            this.loadJs('/notika/js/main.js');
            // this.loadJs('/notika/js/tawk-chat.js');
        },
    }
});
