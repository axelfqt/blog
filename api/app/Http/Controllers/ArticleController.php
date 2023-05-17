<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ArticleResource;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ArticleResource::collection(Article::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request)
    {
        $article = Auth::user()->articles()->create($request->all());
        $article->saveTags($request->get('tags'));
        
        return ArticleResource::make($article);
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        return ArticleResource::make($article);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleRequest $request, Article $article, $slug)
    {
        $article = Article::where('slug', $slug)->first();
        $article->update($request->validated());
        return ArticleResource::make($article);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article, $slug)
    {
        $article = Article::where('slug', $slug)->first();
        $article->delete();

        return response()->noContent();
    }

    public function singleArticle($slug)
    {
        $article = Article::where('slug', $slug)->first();

        return ArticleResource::make($article);
    }
}
