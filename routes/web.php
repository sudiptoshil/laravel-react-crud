<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// start Contact
Route::post('/save-contact', 'ContactController@save_contact')->name('save-contact');
Route::get('/all-contact', 'ContactController@index')->name('all-contact');
Route::get('/edit-contact/{id}', 'ContactController@edit_contact')->name('edit-contact');
Route::patch('/update-contact/{id}', 'ContactController@update_contact')->name('update-contact');
// end Contact
// Start warehouse ..
Route::post('/save-warehouse', 'Admin\WareHouse\WareHouseController@add_warehouse')->name('save-warehouse');
Route::get('/all-warehouse', 'Admin\WareHouse\WareHouseController@index')->name('all-warehouse');
Route::get('/all-warehouse', 'Admin\WareHouse\WareHouseController@index')->name('all-warehouse');
Route::get('/edit-warehouse/{id}', 'Admin\WareHouse\WareHouseController@edit_warehouse')->name('edit-warehouse');
Route::patch('/update-warehouse/{id}', 'Admin\WareHouse\WareHouseController@update_warehouse')->name('edit-warehouse');


//end warehouse


