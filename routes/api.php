<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AssetsController;

Route::group(['prefix' => 'auth'], function() {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('logout', 'AuthController@logout');
        Route::get('user_profile', 'AuthController@userProfile');
    });
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'scope:admin,author'], function () {
        
        Route::resource('users', 'UserController');
        Route::get('search-user', 'UserController@searchUser');
    });
});



Route::get('/test',function(){
    return \Session::all();
});

Route::post('register','UserController@register');
Route::post('login','UserController@login');
Route::get('profile','UserController@getAuthenticatedUser');


// Route::post('addEventData', 'AssetsController@addEventData');
Route::post('addEventData', [AssetsController::class, 'addEventData']);
Route::post('addAlbumTags', [AssetsController::class, 'addAlbumTags']);
Route::post('addAlbumStatus', [AssetsController::class, 'addAlbumStatus']);

Route::post('addPhotoData', [AssetsController::class, 'addPhotoData']);
Route::post('addVideoData', [AssetsController::class, 'addVideoData']);

Route::get('getAllListDraft', [AssetsController::class, 'getAllListDraft']);
Route::get('getAllListForRevision', [AssetsController::class, 'getAllListForRevision']);
Route::get('getAllListForReview', [AssetsController::class, 'getAllListForReview']);
Route::get('getAllListPublished', [AssetsController::class, 'getAllListPublished']);
Route::get('getAllListUnpublished', [AssetsController::class, 'getAllListUnpublished']);


Route::get('getAllListPhoto', [AssetsController::class, 'getAllListPhoto']);
Route::get('getAllListVideo', [AssetsController::class, 'getAllListVideo']);

Route::get('countAlbumEntry', [AssetsController::class, 'countAlbumEntry']);
Route::post('/countAlbumPhotoEntry/{album_id}', [AssetsController::class, 'countAlbumPhotoEntry']);
// Route::post('/countEntry/{date}', 'TicketController@countEntry');

