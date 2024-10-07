<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a class="sidebar-brand d-flex align-items-center justify-content-center">

            <div class="sidebar-brand-text mx-3">DAMS</div>
        </a>

        <hr class="sidebar-divider my-0">

        <li class="nav-item">
            <router-link to="/event/dashboard" class="nav-link">
                <i class="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </router-link>
        </li>

        <hr class="sidebar-divider">

        <div class="sidebar-heading">
            Event Management
        </div>

        <li class="nav-item">
            <router-link to="/event/create" class="nav-link">
                <i class="fas fa-calendar-plus"></i>
                <span>Add Event</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/event/manage/list" class="nav-link">
                <i class="fas fa-calendar-alt"></i>
                <span>Event Tracker</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/event/list/draft" class="nav-link">
                <i class="fas fa-edit"></i>
                <span>Draft List</span>
            </router-link>
        </li>

        <li class="nav-item">
            <router-link to="/event/list/pending" class="nav-link">
                <i class="fas fa-clock"></i>
                <span>Pending List</span>
            </router-link>
        </li>

        <li class="nav-item">
            <router-link to="/event/list" class="nav-link">
                <i class="fas fa-calendar-alt"></i>
                <span>Published List</span>
            </router-link>
        </li>
        
        <div class="sidebar-heading">
            Media Management
        </div>
        <li class="nav-item">
            <router-link to="/event/photo/list" class="nav-link">
                <i class="fas fa-image"></i>
                <span>Photo List</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/event/video/list" class="nav-link">
                <i class="fas fa-video"></i>
                <span>Video List</span>
            </router-link>
        </li>
        <hr class="sidebar-divider">



        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>


    </ul>
</template>


