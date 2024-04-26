<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Blog;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'title' => 'required|string',
            'leadtext' => 'required|string',
            'message' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);
    
        // Create a new message instance
        $message = new Blog([
            'title' => $request->title,
            'leadtext' => $request->leadtext,
            'message' => $request->message,
            'image' => null, // Default to null if no image is provided
        ]);
    
        // Check if an image file is uploaded
        if ($request->hasFile('image')) {
            // Store the uploaded image file in the specified directory
            $imagePath = $request->file('image')->store('images', 'public');
            // Assign the image path to the message
            $message->image = $imagePath;
        }
    
        // Assign the authenticated user's ID to the message
        $message->user_id = auth()->id();
        // Save the message
        $message->save();
    
        // Return a success response
        return response()->json(['message' => 'Message submitted successfully.'], 200);
    }
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
