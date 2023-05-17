<?php

namespace App\Models;

use App\Models\Tag;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'slug'];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function saveTags(string $tags)
    {
        $tags = array_filter(array_unique(array_map(function ($item) {
            return trim($item);
        }, explode(',', $tags))), function($item){
            return !empty($item);
        });

        if(empty($tags)){
            return false;
        }

        $persisted_tags = Tag::whereIn('name', $tags)->get();

        $tags_to_create = array_diff($tags, $persisted_tags->pluck('name')->all());
        $tags_to_create = array_map(function ($tag) {
            return ['name' => $tag, 'slug' => Str::slug($tag)];
        }, $tags_to_create);

        $created_tags = $this->tags()->createMany($tags_to_create);
        $persisted_tags = $persisted_tags->merge($created_tags);
        $this->tags($persisted_tags);
        // $this->tags()->async($persisted_tags);
    }
}
