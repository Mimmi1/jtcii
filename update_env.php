<?php
if (!function_exists('base_path')) {
    function base_path($path = '')
    {
        return __DIR__ . '/' . $path;
    }
}

function changeEnv($data = array())
{
    if (count($data) > 0) {
        // Read .env-file
        $env = file_get_contents(base_path() . '/.env');

        // Split string on every " " and write into array
        $env = preg_split('/(\r\n|\n|\r)/', $env);

        // Loop through given data
        foreach ((array) $data as $key => $value) {
            // Loop through .env-data
            foreach ($env as $env_key => $env_value) {
                // Turn the value into an array and stop after the first split
                // So it's not possible to split e.g. the App-Key by accident
                $entry = explode("=", $env_value, 2);

                // Check, if new key fits the actual .env-key
                if ($entry[0] == $key) {
                    // If yes, overwrite it with the new one
                    if ($value !== null) {
                        $env[$env_key] = $key . "=" . $value;
                    }
                } else {
                    // If not, keep the old one
                    $env[$env_key] = $env_value;
                }
            }
        }

        // Turn the array back to a String
        $env = implode("\n", $env);

        // And overwrite the .env with the new data
        file_put_contents(base_path() . '/.env', $env);

        return true;
    } else {
        return false;
    }
}

// Define the data array
$data = array(
    "APP_NAME" => "JTCInventory",
    "APP_ENV" => "local",
    "APP_DEBUG" => true,
    "APP_KEY" => "base64:4jwPGXoD5lhscSMZkC7nkRlVEnpzYk7mTRfdoTAFe2U",
    "DB_HOST" => "127.0.0.1",
    "DB_PORT" => 3306,
    "DB_DATABASE" => "jtci",
    "DB_USERNAME" => "root",
    "DB_PASSWORD" => "",
);

// Call the function with the data array
$result = changeEnv($data);

if ($result) {
    echo "Environment variables updated successfully.\n";
} else {
    echo "Failed to update environment variables.\n";
}
?>