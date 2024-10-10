<template>
<div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->    
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        <!-- Nav Item - Alerts -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bell fa-fw"></i>
                                <!-- Counter - Alerts -->
                                <span class="badge badge-danger badge-counter">3+</span>
                            </a>
                            <!-- Dropdown - Alerts -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 class="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-primary">
                                            <i class="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 12, 2019</div>
                                        <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-success">
                                            <i class="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-warning">
                                            <i class="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">John Doe</span>
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Draft Events</h1>
                        <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> -->
                    </div>

                    <!-- Content Row -->

                    <div class="row">

                        <!-- Area Chart -->
                        <div class="col-xl-12 col-lg-11">
                            <div class="card shadow mb-4">
                                <!-- Card Header - Dropdown -->
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Event Information</h6>
                                </div>
                                <!-- Card Body -->
                                <div class="card-body">
                                    <b-table striped hover 
                                    :items="list_draft"
                                    :fields="fields_draft"
                                    >

                                        <template #cell(action)="row">
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="success">
                                                Edit
                                            </b-button>
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="warning">
                                                Submit to Publisher
                                            </b-button>

                                        </template>
                                        <template #cell(details)="row">
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="info">
                                                View Details
                                            </b-button>

                                        </template>

                                    </b-table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            
            <b-modal :id="infoModal.id" title='Event Information' size="lg" centered ok-only @hide="resetInfoModal">
                <div class="row" style="margin-bottom: 10px">
                    <div class="col-md-4 col-lg-4 mb-0">
                        <span style="font-weight: 700">
                            Event Title
                        </span>
                    </div>
                    <div class="col-md-8 col-lg-8 mb-0">
                        National Commission on Muslim Filipinos (NCMF) on Halal Testing Ceremonial Signing of MOA
                    </div>
                </div>
                <div class="row" style="margin-bottom: 10px">
                    <div class="col-md-4 col-lg-4 mb-0">
                        <span style="font-weight: 700">
                            Description
                        </span>
                    </div>
                    <div class="col-md-8 col-lg-8 mb-0">
                        Halal Testing Ceremonial Signing of MOA with DOST-OURO
                    </div>
                </div>
                <div class="row" style="margin-bottom: 10px">
                    <div class="col-md-4 col-lg-4 mb-0">
                        <span style="font-weight: 700">
                            Organizing Agency/Office
                        </span>
                    </div>
                    <div class="col-md-8 col-lg-8 mb-0">
                        OURO
                    </div>
                </div>
                <div class="row" style="margin-bottom: 10px">
                    <div class="col-md-4 col-lg-4 mb-0">
                        <span style="font-weight: 700">
                            Event Category
                        </span>
                    </div>
                    <div class="col-md-8 col-lg-8 mb-0">
                        MOA Signing
                    </div>
                </div>
                <div class="row" style="margin-bottom: 10px">
                    <div class="col-md-4 col-lg-4 mb-0">
                        <span style="font-weight: 700">
                            Event Date
                        </span>
                    </div>
                    <div class="col-md-8 col-lg-8 mb-0">
                        2024-01-04
                    </div>
                </div>
                <div class="row" style="margin-bottom: 10px">
                    <div class="col-md-4 col-lg-4 mb-0">
                        <span style="font-weight: 700">
                            Event Venue
                        </span>
                    </div>
                    <div class="col-md-8 col-lg-8 mb-0">
                        Molave Function Room, Dusit Thani Hotel, Makati City
                    </div>
                </div>
            </b-modal>

        </div>
</template>


<script>

    import * as assets_service from '../../services/assets_service';

    export default {
        data() {
            return {
                list_draft: [],
                infoModal: {
                    id: 'info-modal',
                    title: '',
                    content: ''
                },
                
                // { key: 'id', label: 'ID'},
                //         { key: 'id_album', label: 'Album ID'},
                //         { key: 'photo_fileName', label: 'Photo Preview'},
                //         { key: 'photo_title', label: 'Title'},
                //         { key: 'photo_category', label: 'Category'},
                //         { key: 'photo_tags', label: 'Tags'},
                //         { key: 'action', label: 'Action' }

                fields_draft: [
                    { key: 'id', label: 'No'},
                    { key: 'album_id', label: 'Album ID'},
                    { key: 'event_title', label: 'Title'},
                    { key: 'event_date', label: 'Date'},
                    { key: 'event_category', label: 'Category'},
                    { key: 'details', label: 'Details'},
                    { key: 'action', label: 'Action' }
                ],
            }
            
        },
        mounted(){
            this.loadDraftList();
        },
        methods: {
            loadDraftList: async function() {


                try{
                    const response = await assets_service.getAllListDraft();
                    this.list_draft = response.data;
                    this.totalRows = this.list_draft.length;
                } catch(error) {
                    this.flashMessage.error({
                    message: 'Some error occured! Please try again.',
                    time: 5000
                    });
                }
            },
            info(item, index, button) {
                this.infoModal.title = `Row index: ${index}`
                this.infoModal.content = JSON.stringify(item, null, 2)
                this.$root.$emit('bv::show::modal', this.infoModal.id, button)
            },
            resetInfoModal() {
                this.infoModal.title = ''
                this.infoModal.content = ''
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        }
    }
</script>