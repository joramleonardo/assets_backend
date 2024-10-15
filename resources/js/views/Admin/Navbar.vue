<template>
    <div>
        <!-- Mobile Menu start -->
        <!-- <div class="mobile-menu-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="mobile-menu">
                            <nav id="dropdown">
                                <ul class="mobile-menu-nav">
                                    <li><a data-toggle="collapse" data-target="#Charts" href="#">Home</a>
                                        <ul class="collapse dropdown-header-top">
                                            <li><a href="index.html">Dashboardsss</a></li>
                                        </ul>
                                    </li>
                                    <li><a data-toggle="collapse" data-target="#demoevent" href="#">Event Management</a>
                                        <ul id="demoevent" class="collapse dropdown-header-top">
                                            <li><a href="inbox.html">Add Event</a></li>
                                            <li><a href="view-email.html">Event Tracker</a></li>
                                        </ul>
                                    </li>
                                    <li><a data-toggle="collapse" data-target="#democrou" href="#">Photo Management</a>
                                        <ul id="democrou" class="collapse dropdown-header-top">
                                            <li><a href="animations.html">Add Photo</a></li>
                                            <li><a href="google-map.html">Photo List</a></li>
                                        </ul>
                                    </li>
                                    <li><a data-toggle="collapse" data-target="#demolibra" href="#">Video Management</a>
                                        <ul id="demolibra" class="collapse dropdown-header-top">
                                            <li><a href="flot-charts.html">Add Video</a></li>
                                            <li><a href="bar-charts.html">Video List</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- Mobile Menu end -->

        <!-- Main Menu area start-->
        <div class="main-menu-area mg-tb-40">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <ul class="nav nav-tabs notika-menu-wrap menu-it-icon-pro">
                            <li class="active">
                                <a data-toggle="tab" href="#Home">
                                    <i class="notika-icon notika-house"></i>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#mailbox">
                                    <i class="notika-icon notika-form"></i> 
                                    Event Management
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#Interface">
                                    <i class="notika-icon notika-edit"></i> 
                                    Photo Management
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#Charts"><i class="notika-icon notika-bar-chart"></i> 
                                    Video Management
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content custom-menu-content">
                            <div id="Home" class="tab-pane in active notika-tab-menu-bg animated flipInX">
                                <ul class="notika-main-menu-dropdown">
                                    <li>
                                        <!-- <a href="index.html">Dashboard</a> -->
                                        <router-link to="/admin/dashboard" class="nav-link">
                                            <span>Dashboard</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                            <div id="mailbox" class="tab-pane notika-tab-menu-bg animated flipInX">
                                <ul class="notika-main-menu-dropdown">
                                    <li>
                                        <!-- <a href="inbox.html">Add Event</a> -->
                                        <router-link to="/admin/event/add" class="nav-link">
                                            <span>Add Event</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <a href="view-email.html">Event Tracker</a>
                                    </li>
                                </ul>
                            </div>
                            <div id="Interface" class="tab-pane notika-tab-menu-bg animated flipInX">
                                <ul class="notika-main-menu-dropdown">
                                    <li>
                                        <a href="animations.html">Add Photo</a>
                                    </li>
                                    <li>
                                        <a href="google-map.html">Photo List</a>
                                    </li>
                                </ul>
                            </div>
                            <div id="Charts" class="tab-pane notika-tab-menu-bg animated flipInX">
                                <ul class="notika-main-menu-dropdown">
                                    <li>
                                        <a href="flot-charts.html">Add Video</a>
                                    </li>
                                    <li>
                                        <a href="bar-charts.html">Video List</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Main Menu area End-->
    </div>
</template>