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
            Management
        </div>

        <li class="nav-item">
            <router-link to="/event/create" class="nav-link">
                <i class="fas fa-calendar-plus"></i>
                <span>Add User</span>
            </router-link>
        </li>

        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>


    </ul>
</template>


