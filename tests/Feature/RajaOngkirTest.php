<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RajaOngkirTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $RajaOngkir_API = config('rajaongkir.api_key');

        self::assertEquals(env('RajaOngkir_API'), $RajaOngkir_API);
    }
}
