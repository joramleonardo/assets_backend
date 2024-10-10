<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a class="sidebar-brand d-flex align-items-center justify-content-center">

            <div class="sidebar-brand-text mx-3">DAMS</div>
        </a>

        <hr class="sidebar-divider my-0">

        <li class="nav-item">
            <router-link to="/pub/dashboard" class="nav-link">
                <i class="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </router-link>
        </li>

        <hr class="sidebar-divider">

        <div class="sidebar-heading">
            Event Management
        </div>

        <li class="nav-item">
            <router-link to="/pub/manage/list" class="nav-link">
                <i class="fas fa-calendar-alt"></i>
                <span>Event Tracker</span>
            </router-link>
        </li>
        <hr class="sidebar-divider">

        <li class="nav-item">
            <router-link to="/login" class="nav-link">
                <i class="fas fa-sign-out-alt"></i>
                <span>Logout</span>
            </router-link>
        </li>
        <hr class="sidebar-divider">


        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>


    </ul>
</template>


