<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Blog;

use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Log;

use Inertia\Inertia;

class BlogController extends Controller
{
    // Show all blogs
    public function index()
    {
        $blogs = Blog::all();
        return response()->json($blogs);
    }

    // Show the form for creating a new blog
    public function create()
    {
        return view('blogs.create');
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
    
        // Create a new blog instance
        $blog = new Blog([
            'title' => $request->title,
            'leadtext' => $request->leadtext,
            'message' => $request->message,
            'image' => null, // Default to null if no image is provided
        ]);
    
        // Check if an image file is uploaded
        if ($request->hasFile('image')) {
            // Store the uploaded image file in the specified directory
            $imagePath = $request->file('image')->store('images', 'public');
            // Assign the image path to the blog
            $blog->image = $imagePath;
        }
    
        // Assign the authenticated user's ID to the blog
        $blog->user_id = auth()->id();
        // Save the blog
        $blog->save();
    
        // Return a success response
        return response()->json(['blog' => 'blog submitted successfully.'], 200);
    }
    

    /**
     * Display the specified resource.
     */
    public function update(Request $request, Blog $blog)
    {
        // Validation rules
        $rules = [
            'title' => 'required|string',
            'leadtext' => 'required|string',
            'message' => 'required|string',
        ];
    
        // Validate request data manually
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            // Log validation errors
            Log::error('Validation errors:', $validator->errors()->all());
            
            return response()->json(['errors' => $validator->errors()], 422);
        }
    
        // Update blog
        $blog->update($request->all());
    
        // Fetch the updated blog with the latest data
        $updatedBlog = Blog::find($blog->id);
    
        // Return the updated blog data
        return response()->json($updatedBlog, 200);
    }
    


    // Remove the specified blog from storage
    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response()->json(['blog' => 'blog deleted successfully.'], 200);
    }


    public function showSingleStory($id)
    {
        $blog = Blog::findOrFail($id);
        return Inertia::render('SingleStory', [
            'blog' => $blog,
            'authId' => auth()->id() // Pass the authenticated user's ID
        ]);
    }

    public function publicIndex()
{
    $blogs = Blog::all();
        return response()->json($blogs);
}
    

}
