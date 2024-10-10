<template>

    
                    <!-- Begin Page Content -->
                    <div class="container-fluid">
    
                        <!-- Page Heading -->
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Event Tracker</h1>
                            <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> -->
                        </div>
    
                        <!-- Content Row -->
    
                        <b-card no-body>
                            <b-tabs card>
                                <b-tab active>
                                    <template #title>
                                        Drafts 
                                        <span v-if="totalRows_draft != 0">
                                            <b-badge variant="danger">{{totalRows_draft}}</b-badge>
                                        </span>
                                        <span v-else>
                                            <b-badge variant="secondary">0</b-badge>
                                        </span>
                                    </template>
                                    <b-table striped hover 
                                        :items="list_draft"
                                        :fields="fields_draft"
                                        show-empty
                                        >

                                        <template #cell(action)="row">
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="success">
                                                Edit
                                            </b-button>
                                            <b-button size="sm" value="2" @click="changeStatus()" class="mr-1" variant="warning">
                                                Submit to Publisher
                                            </b-button>
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="danger">
                                                Delete
                                            </b-button>

                                        </template>
                                        <template #cell(details)="row">
                                            <b-button size="sm" @click="viewAlbumInfo(row.item, row.index, $event.target)" class="mr-1" variant="info">
                                                View Details
                                            </b-button>
                                        </template>
                                        <template #empty="scope">
                                            {{ scope.emptyText }}
                                        </template>

                                    </b-table>
                                </b-tab>
                                <b-tab >
                                    <template #title>
                                        Submitted for Review 
                                        <span v-if="totalRows_forReview != 0">
                                            <b-badge variant="danger">{{totalRows_forReview}}</b-badge>
                                        </span>
                                        <span v-else>
                                            <b-badge variant="secondary">0</b-badge>
                                        </span>
                                    </template>
                                    <b-table striped hover 
                                        :items="list_forReview"
                                        :fields="fields_forReview"
                                        show-empty
                                        >

                                        <template #cell(action)="row">
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="success">
                                                Edit
                                            </b-button>
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="warning">
                                                Submit to Publisher
                                            </b-button>
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="danger">
                                                Delete
                                            </b-button>

                                        </template>
                                        <template #cell(details)="row">
                                            <b-button size="sm" @click="viewAlbumInfo(row.item, row.index, $event.target)" class="mr-1" variant="info">
                                                View Details
                                            </b-button>

                                        </template>
                                        <template #empty="scope">
                                            {{ scope.emptyText }}
                                        </template>

                                    </b-table>
                                </b-tab>
                                <b-tab >
                                    <template #title>
                                        To Be Revised 
                                        <span v-if="totalRows_forRevision != 0">
                                            <b-badge variant="danger">{{totalRows_forRevision}}</b-badge>
                                        </span>
                                        <span v-else>
                                            <b-badge variant="secondary">0</b-badge>
                                        </span>
                                    </template>
                                    <b-table striped hover 
                                        :items="list_forRevision"
                                        :fields="fields_draft"
                                        show-empty
                                        >

                                        <template #cell(action)="row">
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="success">
                                                Edit
                                            </b-button>
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="warning">
                                                Submit to Publisher
                                            </b-button>
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="danger">
                                                Delete
                                            </b-button>

                                        </template>
                                        <template #cell(details)="row">
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="info">
                                                View Details
                                            </b-button>

                                        </template>
                                        <template #empty="scope">
                                            {{ scope.emptyText }}
                                        </template>

                                    </b-table>
                                </b-tab>
                                <b-tab >
                                    <template #title>
                                        Unpublished 
                                        <span v-if="totalRows_unpublished != 0">
                                            <b-badge variant="warning">{{totalRows_unpublished}}</b-badge>
                                        </span>
                                        <span v-else>
                                            <b-badge variant="secondary">0</b-badge>
                                        </span>
                                    </template>
                                    <b-table striped hover 
                                        :items="list_unpublished"
                                        :fields="fields_draft"
                                        show-empty
                                        >

                                        <template #cell(action)="row">
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="success">
                                                Edit
                                            </b-button>
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="warning">
                                                Submit to Publisher
                                            </b-button>
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="danger">
                                                Delete
                                            </b-button>

                                        </template>
                                        <template #cell(details)="row">
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="info">
                                                View Details
                                            </b-button>

                                        </template>
                                        <template #empty="scope">
                                            {{ scope.emptyText }}
                                        </template>

                                    </b-table>
                                </b-tab>
                                <b-tab >
                                    <template #title>
                                        Published 
                                        <span v-if="totalRows_published != 0">
                                            <b-badge variant="success">{{totalRows_published}}</b-badge>
                                        </span>
                                        <span v-else>
                                            <b-badge variant="secondary">0</b-badge>
                                        </span>
                                        
                                    </template>
                                    <b-table striped hover 
                                        :items="list_published"
                                        :fields="fields_draft"
                                        show-empty
                                        >

                                        <template #cell(action)="row">
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="success">
                                                Edit
                                            </b-button>
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="warning">
                                                Submit to Publisher
                                            </b-button>
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="danger">
                                                Delete
                                            </b-button>

                                        </template>
                                        <template #cell(details)="row">
                                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="info">
                                                View Details
                                            </b-button>

                                        </template>
                                        <template #empty="scope">
                                            {{ scope.emptyText }}
                                        </template>

                                    </b-table>
                                </b-tab>
                            </b-tabs>
                        </b-card>
    
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

                        

        <b-modal id="modal_albumInfo" ref="modal_albumInfo"  title="Album Information" size="xl" centered ok-only @hide="resetInfoModal">
            <div class="modal-card">
                
                <div class="modal-card-body">
                    
                    <h4>
                        {{albumInfo.event_title}}
                    </h4>
                    <p>
                        {{albumInfo.event_description}}
                    </p>
                    <b-list-group horizontal>
                        <b-list-group-item>
                            <span style="font-weight: 600;"> Category: </span>
                            
                                <span v-if="albumInfo.event_category === '1'">
                                    Anniversaries
                                </span>
                                <span v-if="albumInfo.event_category === '2'">
                                    Awarding Ceremonies
                                </span>
                                <span v-if="albumInfo.event_category === '3'">
                                    Competition/ Contests
                                </span>
                                <span v-if="albumInfo.event_category === '4'">
                                    Exhibits
                                </span>
                                <span v-if="albumInfo.event_category === '5'">
                                    Lectures, Discussion, Seminar, Training
                                </span>
                                <span v-if="albumInfo.event_category === '6'">
                                    MOA/MOU signing
                                </span>
                                <span v-if="albumInfo.event_category === '7'">
                                    NSTW
                                </span>
                                <span v-if="albumInfo.event_category === '8'">
                                    NYSTIF
                                </span>
                                <span v-if="albumInfo.event_category === '9'">
                                    Program Launch'
                                </span>
                                <span v-if="albumInfo.event_category === '10'">
                                    Project Launch
                                </span>
                                
                            
                        </b-list-group-item>
                        
                        <b-list-group-item>
                            <span style="font-weight: 600;"> Date: </span>
                                {{albumInfo.event_date}}
                        </b-list-group-item>
                        <b-list-group-item>
                            <span style="font-weight: 600;"> Venue: </span>
                                {{albumInfo.event_venue}}
                            </b-list-group-item>
                        <b-list-group-item>
                            <span style="font-weight: 600;"> Tags: </span>
                                <span v-for="(event, index) in list_albumTags" :key="index">
                                    <b-badge variant="dark">{{ event.album_tagName }}</b-badge>
                                </span>
                                
                            </b-list-group-item>
                    </b-list-group>
                </div>
            </div>
            <div class="modal-card">
                <div class="modal-card-body" >
                    <h4>
                        Photos
                    </h4>
                    <span v-if="photo_length === 0">
                        NO PHOTO AVAILAVLE
                    </span>
                    <span v-else>
                        <span v-for="(event, index) in list_photo" :key="index">
                            <b-media style="margin-bottom: 5px;">
                                <template #aside>
                                    <b-img :src='`/storage/images/${event.photo_fileName}`' width="64" alt="placeholder"></b-img>
                                </template>

                                <h5 class="mt-0">{{event.photo_title}}</h5>
                                <p>{{event.photo_description}}</p>
                                
                            </b-media>
                        </span>
                    </span>

                </div>
            </div>
            <div class="modal-card">
                <div class="modal-card-body" >
                    <h4>
                        Videos
                    </h4>
                    <span v-if="video_length === 0">
                        NO VIDEO AVAILAVLE
                    </span>
                    <span v-else>
                        <span v-for="(event, index) in list_video" :key="index">
                            <b-media style="margin-bottom: 5px;">
                                <template #aside>
                                    <!-- <b-img :src='`/storage/images/${event.photo_fileName}`' width="64" alt="placeholder"></b-img> -->
                                    <iframe width="420" height="315"
                                        :src='`https://www.youtube.com/embed/`+`${event.video_youtubeID}`'>
                                        
                                    </iframe>
                                </template>

                                <h5 class="mt-0">{{event.video_title}}</h5>
                                <p>{{event.video_description}}</p>
                                
                            </b-media>
                        </span>
                    </span>

                </div>

            </div>
        </b-modal>     

                    </div>
                    <!-- /.container-fluid -->
    

                
                

    </template>
    
    
    <script>
    
        import * as assets_service from '../../services/assets_service';
    
        export default {
            data() {
                return {
                    list_photo: [],
                    list_video: [],
                    photo_length: 0,
                    video_length: 0,
                    list_albumTags: [],
                    albumInfo:{},
                    list_draft: [],
                    list_forRevision: [],
                    list_forReview: [],
                    list_published: [],
                    list_unpublished: [],
                    totalRows_draft: '',
                    totalRows_forRevision: '',
                    totalRows_forReview: '',
                    totalRows_published: '',
                    totalRows_unpublished: '',
                    buttonValue: '',
                    infoModal: {
                        id: 'info-modal',
                        title: '',
                        content: ''
                    },
    
                    fields_draft: [
                        { key: 'id', label: 'No'},
                        { key: 'album_id', label: 'Album ID'},
                        { key: 'event_title', label: 'Title'},
                        { key: 'event_category', label: 'Category'},
                        { key: 'album_status', label: 'Status'},
                        { key: 'details', label: 'Details'},
                        { key: 'action', label: 'Action' }
                    ],
                    fields_draft: [
                        { key: 'id', label: 'No'},
                        { key: 'album_id', label: 'Album ID'},
                        { key: 'event_title', label: 'Title'},
                        { key: 'event_category', label: 'Category'},
                        { key: 'album_status', label: 'Status'},
                        { key: 'details', label: 'Details'},
                        { key: 'action', label: 'Action' }
                    ],
                    fields_forReview: [
                        { key: 'id', label: 'No'},
                        { key: 'album_id', label: 'Album ID'},
                        { key: 'event_title', label: 'Title'},
                        { key: 'event_category', label: 'Category'},
                        { key: 'album_status', label: 'Status'},
                        { key: 'details', label: 'Details'}
                    ],
                }
                
            },
            mounted(){
                this.loadDraftList();
                this.loadForReviewList();
                this.loadForRevisionList();
                this.loadPublishedList();
                this.loadUnpublishedList();
            },
            methods: {
                loadDraftList: async function() {
                    try{
                        const response = await assets_service.getAllListDraft();
                        this.list_draft = response.data;
                        this.totalRows_draft = this.list_draft.length;
                    } catch(error) {
                        this.flashMessage.error({
                        message: 'Some error occured! Please try again.',
                        time: 5000
                        });
                    }
                },
                loadForRevisionList: async function() {
                    try{
                        const response = await assets_service.getAllListForRevision();
                        this.list_forRevision = response.data;
                        this.totalRows_forRevision= this.list_forRevision.length;
                    } catch(error) {
                        this.flashMessage.error({
                        message: 'Some error occured! Please try again.',
                        time: 5000
                        });
                    }
                },
                loadForReviewList: async function() {
                    try{
                        const response = await assets_service.getAllListForReview();
                        this.list_forReview = response.data;
                        this.totalRows_forReview= this.list_forReview.length;
                    } catch(error) {
                        this.flashMessage.error({
                        message: 'Some error occured! Please try again.',
                        time: 5000
                        });
                    }
                },
                loadPublishedList: async function() {
                    try{
                        const response = await assets_service.getAllListPublished();
                        this.list_published = response.data;
                        this.totalRows_published= this.list_published.length;
                    } catch(error) {
                        this.flashMessage.error({
                        message: 'Some error occured! Please try again.',
                        time: 5000
                        });
                    }
                },
                loadUnpublishedList: async function() {
                    try{
                        const response = await assets_service.getAllListUnpublished();
                        this.list_unpublished = response.data;
                        this.totalRows_unpublished= this.list_unpublished.length;
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
                    console.log(`Row index: ${index}`);
                    console.log(item.album_id);
                },
                resetInfoModal() {
                    this.infoModal.title = ''
                    this.infoModal.content = ''
                },
                onFiltered(filteredItems) {
                    // Trigger pagination to update the number of buttons/pages due to filtering
                    this.totalRows = filteredItems.length
                    this.currentPage = 1
                },
                viewAlbumInfo: async function(data) {
                    this.albumInfo = {...data};
                    let a = this.albumInfo.album_id;
                    // console.log(a);

                    const response_photoList = await assets_service.getListPhoto_selected(a);
                    this.list_photo = response_photoList.data;
                    this.photo_length = this.list_photo.length;
                    // console.log(this.photo_length);

                    const response_albumTags = await assets_service.getTags_selected(a);
                    this.list_albumTags = response_albumTags.data;
                    // console.log(this.list_albumTags);
                    
                    const response_videoList = await assets_service.getListVideo_selected(a);
                    this.list_video = response_videoList.data;
                    this.video_length = this.list_video.length;
                    console.log("video lenght: " +this.video_length);
                    
                    this.$refs['modal_albumInfo'].show();
                },
                changeStatus: async function (){

                    console.log(this.buttonValue);

                    // if (this.buttonValue == "1"){
                    //     this.albumStatus = "Saved as Draft"
                    // }
                    // else if (this.buttonValue == "2"){
                    //     this.albumStatus = "Submitted for Review";
                    // }
                    // else if (this.buttonValue == "3"){
                    //     this.albumStatus = "Published";
                    // }
                    // else if (this.buttonValue == "4"){
                    //     this.albumStatus = "Unpublished";
                    // }
                    // else if (this.buttonValue == "5"){
                    //     this.albumStatus = "For Revision";
                    // }

                    // console.log(this.albumStatus)


                    try{
                        
                        // let formData_albumStatus = new FormData();
                        // formData_albumStatus.append('album_id', this.album_id);
                        // formData_albumStatus.append('album_status', this.albumStatus);
                        // const response_albumStatusData = await assets_service.addAlbumStatus(formData_albumStatus);
                        
                    }catch(error){

                    }
                },
            }
        }
    </script>
    <style>
        .modal-card {
            margin: 10px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            
        }
        .modal-card-header img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .modal-card-body{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 20px;
            /* min-height: 250px; */
        }

        .tag {
            background: #cccccc;
            border-radius: 50px;
            font-size: 12px;
            margin: 0;
            color: #ffffff;
            padding: 2px 10px;
            text-transform: uppercase;
            cursor: pointer;
        }
        .tag-teal {
            background-color: #47bcd4;
        }
        .tag-purple {
            background-color: #5e76bf;
        }
        .tag-pink {
            background-color: #cd5b9f;
        }

        .modal-card-body p {
            font-size: 13px;
            margin: 0 0 40px;
        }
        .user {
            display: flex;
            margin-top: auto;
        }

        .user img {
            border-radius: 50%;
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }
        .user-info h5 {
            margin: 0;
        }
        .user-info small {
            color: #545d7a;
        }

    </style>