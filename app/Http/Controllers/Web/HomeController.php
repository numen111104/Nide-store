<?php

namespace App\Http\Controllers\Web;

use App\Models\Slider;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //get Slider terbaru
        $sliders = Slider::latest()->get();

        //get 4 data category terbaru
        $categories = Category::latest()->take(4)->get();

        //get 6 data product terbaru
        $products = Product::with('productImages.color', 'productSizes')->latest()->take(6)->get();

        return inertia('Web/Home/Index', [
            'sliders'       => $sliders,
            'categories'    => $categories,
            'products'      => $products
        ]);
    }
}