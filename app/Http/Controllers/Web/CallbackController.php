<?php

namespace App\Http\Controllers\Web;

use Exception;
use Duitku\Api;
use Duitku\Config;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CallbackController extends Controller
{
    public function __invoke(Request $request)
    {
        $duitkuConfig = new Config(config('duitku.merchant_key'), config('duitku.merchant_code'));
        // true for sandbox mode, false for production mode
        $duitkuConfig->setSandboxMode(config('duitku.sandbox_mode'));
        // set sanitizer (default : true)
        $duitkuConfig->setSanitizedMode(true);
        // set log parameter (default : true)
        $duitkuConfig->setDuitkuLogs(false);
        try {
            $callback = Api::callback($duitkuConfig);
            header('Content-Type: application/json');
            $notif = json_decode($callback);
            //get transaction
            $transaction = Transaction::where('invoice', $notif->merchantOrderId)->first();
            if ($notif->resultCode == "00") {
                // Action Success
                $transaction->status = 'PAID';
                $transaction->save();
            } else if ($notif->resultCode == "01") {
                // Action Failed
                $transaction->status = 'UNPAID';
                $transaction->save();
            } else if ($notif->resultCode == "02") {
                // Action Failed
                $transaction->status = 'CANCELLED';
                $transaction->save();
            }
        } catch (Exception $e) {
            http_response_code(400);
            echo $e->getMessage();
        }
    }
}