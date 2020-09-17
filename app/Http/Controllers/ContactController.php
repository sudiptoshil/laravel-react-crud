<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Contact;

class ContactController extends Controller
{



    public function index()
    {
        $contacts = Contact::all();
        // return $contact;
        // exit();

        return response()->json([
            'status'=>200,
            'contacts'=> $contacts
        ]);
    }

    public function save_contact(Request $request)
    {


        // return $request->all();
        // exit();

        $contact = new Contact();
        $contact->title = $request->title;
        $contact->description = $request->description;
        $contact->save();
        return response()->json([
            'status' => 200,
            'message' => 'Contact saved successfully!!'
        ]);
    }


    public function edit_contact($id){

        $contact = Contact::find($id);
        // return $contact;

        return response()->json([
            'status'=> 200,
            'contact'=>$contact
        ]);
    }

    public function update_contact(Request $request, $id){
        $contact = Contact::find($id);
        $contact->title = $request->title;
        $contact->description = $request->description;
        $contact->save();
        return response()->json([
            'status' => 200,
            'message' => "Contact updated successfully!!"
        ]);
    }
}
