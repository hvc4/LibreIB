<?php

include 'inc/functions.php';

if (php_sapi_name() != 'cli') {
	error('Cannot be run directly.'); 	
}

$current_time = time();
$time   = $current_time - $config['bans_expire_global'];

$query = prepare(sprintf("DELETE FROM ``bans`` WHERE `created` < %d AND `board` IS NULL", $time));
$query->execute() or error(db_error($query));


$time   = $current_time - $config['bans_expire_local'];

$query = prepare(sprintf("DELETE FROM ``bans`` WHERE `created` < %d AND `board` IS NOT NULL", $time));
$query->execute() or error(db_error($query));

