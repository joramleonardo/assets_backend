<template>


    <!-- Begin Page Content -->
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        <!-- Content Row -->
        <div class="row">

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Pending Events</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Published Events</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                                    Total Number of Events</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">36</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <!-- <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                </div>
                                <div class="row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                    </div>
                                    <div class="col">
                                        <div class="progress progress-sm mr-2">
                                            <div class="progress-bar bg-info" role="progressbar"
                                                style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

            <!-- Pending Requests Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Users</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">6</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-user-alt fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Row -->

        <div class="row">

            <!-- Area Chart -->
            <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Monitoring</h6>
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                        
                        <b-table striped hover :items="items">

                            <template #cell(action)="row">
                                <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="success">
                                    Edit
                                </b-button>
                                <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="danger">
                                    Delete
                                </b-button>

                            </template>

                        </b-table>
                    </div>
                </div>
            </div>

            <!-- Pie Chart -->
            <div class="col-xl-4 col-lg-5">
                <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Recent Activities</h6>
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                        <b-list-group>
                            <b-list-group-item href="#" active class="flex-column align-items-start" style="margin-bottom: 10px">
                                <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-1">John Doe Published an event</h6>
                                <small>2 days ago</small>
                                </div>
                                <small>Donec id elit non mi porta.</small>
                            </b-list-group-item>

                            <b-list-group-item href="#" active class="flex-column align-items-start" style="margin-bottom: 10px">
                                <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-1">Lara Pressman Uplaoded an event</h6>
                                <small>2 days ago</small>
                                </div>
                                <small>Donec id elit non mi porta.</small>
                            </b-list-group-item>

                            <b-list-group-item href="#" active class="flex-column align-items-start" style="margin-bottom: 10px">
                                <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-1">John Doe Edited an event</h6>
                                <small>3 days ago</small>
                                </div>
                                <small>Donec id elit non mi porta.</small>
                            </b-list-group-item>

                            <b-list-group-item href="#" active class="flex-column align-items-start" style="margin-bottom: 10px">
                                <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-1">Lara Pressman Uplaoded an event</h6>
                                <small>3 days ago</small>
                                </div>
                                <small>Donec id elit non mi porta.</small>
                            </b-list-group-item>

                            <b-list-group-item href="#" active class="flex-column align-items-start" style="margin-bottom: 10px">
                                <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-1">Lara Pressman Uplaoded an event</h6>
                                <small>3 days ago</small>
                                </div>
                                <small>Donec id elit non mi porta.</small>
                            </b-list-group-item>

                        </b-list-group>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <!-- /.container-fluid -->

</template>

<style>
    .list-group-item.active{
        background-color: #4e73df !important;
        border-color: #4e73df !important;
    }
</style>


<script>
    export default {
        data() {
            return {
                items: [
                    { ID: 1, Name:'John Doe', events_encoded: '26', published_events: '14'},
                    { ID: 2, Name:'Geneva Wilson', events_encoded: '30', published_events: '24'},
                    { ID: 3, Name:'Jami Carney', events_encoded: '14', published_events: '6'},
                    { ID: 4, Name:'Shaw Larsen', events_encoded: '7', published_events: '2'},
                    { ID: 5, Name:'Jack King', events_encoded: '18', published_events: '10'}
                ],
                infoModal: {
                    id: 'info-modal',
                    title: '',
                    content: ''
                }
            }
            
        }
        ,
        methods: {
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