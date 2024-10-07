<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblVideo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_video', function (Blueprint $table) {
            $table->id();
            $table->string('aldum_id');
            $table->string('video_id');
            $table->string('video_link');
            $table->string('video_title');
            $table->string('video_personInvolved');
            $table->string('video_category');
            $table->string('video_duration');
            $table->string('video_type');
            $table->string('video_description');
            $table->string('video_videographer');
            $table->string('video_tags');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_video');
    }
}
