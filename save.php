<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Saving Data</title>
</head>
<body>
    <h1>Saving you data...</h1>
    <p><i>This shouldn't take to long</i></p>
    <?php
        $extractedData = $_GET["data"];
        $parsedData = json_decode($extractedData);
        file_put_contents("./js/data.json", json_encode($parsedData, JSON_PRETTY_PRINT));
        
        echo "<script>";
        echo "location.href = 'http://localhost:5500/index.php'";
        echo "</script>";
    ?>
</body>
</html>