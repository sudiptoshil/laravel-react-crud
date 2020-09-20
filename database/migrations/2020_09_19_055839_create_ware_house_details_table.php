<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWareHouseDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ware_house_details', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("foreign_name");
            $table->string("wh_keeper");
            $table->string("location");
            $table->string("telephone");
            $table->string("sequence");
            $table->integer("province_no")->unsigned();
            $table->integer("resign_code")->unsigned();
            $table->string("wh_transfer_interface_account");
            $table->string("item_activity");
            $table->integer("default_cc_code")->unsigned();
            $table->string("account_name");
            $table->string("branch");
            $table->string("pricing_level");
            $table->integer("global_location_no")->unsigned();
            $table->string("longitude");
            $table->string("latitude");
            $table->string("address");
            $table->string("foreign_address");
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
        Schema::dropIfExists('ware_house_details');
    }
}
