<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

/*$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
	// Sample log message
	$this->logger->info("Slim-Skeleton '/' route");

	// Render index view
	return $this->renderer->render($response, 'index.phtml', $args);
});*/

$app->get('/', function (Request $request, Response $response, array $args) {
	// Sample log message
	$this->logger->info("Slim-Skeleton '/' route");

	// Render index view
	return $this->renderer->render($response, 'userlogin.phtml', $args);
});

$app->get('/update', function (Request $request, Response $response, array $args) {
	echo "suck it trebeck!";
	// $sys = new Systems();
	// print_array($sys);  
	$curl = curl_init();

	curl_setopt_array($curl, array(
		CURLOPT_URL => "https://esi.tech.ccp.is/latest/universe/systems/?datasource=tranquility",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "GET",
		CURLOPT_HTTPHEADER => array(
			"cache-control: no-cache"
		),
	));

	$response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ($err) {
		echo "cURL Error #:" . $err;
	} else {
		// echo $response;
		$json = json_decode($response,1);
		foreach ($json as $key => $val) {
			// echo $val."<br />";
			/*$sys = new Systems();
			$sys->setSystemId($val);
			$sys->save();*/
		}
	}
});

$app->get('/test', function (Request $request, Response $response, array $args) {
	/*$curl = curl_init();

	curl_setopt_array($curl, array(
		CURLOPT_URL => "https://esi.tech.ccp.is/latest/universe/systems/30000001/?datasource=tranquility&language=en-us",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "GET",
		CURLOPT_HTTPHEADER => array(
			"cache-control: no-cache"
		),
	));

	$response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ($err) {
		echo "cURL Error #:" . $err;
	} else {
		// echo $response;
		$json = json_decode($response,1);
		print_array($json);
	}*/

	$t = new Types();
	print_array($t);
});