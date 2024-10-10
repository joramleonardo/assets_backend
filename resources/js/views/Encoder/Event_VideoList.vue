<template>
 
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Video List</h1>
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
                        <h6 class="m-0 font-weight-bold text-primary">Photo Information</h6>
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
                                <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="danger">
                                    Delete
                                </b-button>
                            </template>
                            <template #cell(video_youtubeID)="row">
                                <!-- <img class="img-fluid img-thumbnail" :src='`/storage/images/${row.value}`' alt="..." style="max-width: 10%;"/>    -->
                                <iframe width="420" height="315"
                                    :src='`https://www.youtube.com/embed/`+`${row.value}`'>
                                    
                                </iframe>
                            </template>

                        </b-table>
                    </div>
                </div>
            </div>
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
                    fields_draft: [
                        { key: 'id', label: 'No'},
                        { key: 'album_id', label: 'Album ID'},
                        { key: 'video_id', label: 'Video ID'},
                        { key: 'video_youtubeID', label: 'Video Preview'},
                        { key: 'video_title', label: 'Title'},
                        { key: 'video_category', label: 'Category'},
                        { key: 'video_tags', label: 'Tags'},
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
                        const response = await assets_service.getAllListVideo();
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