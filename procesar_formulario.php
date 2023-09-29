<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href=".Css/style.css">
    <title>Mi Perfil</title>
</head>
<body>
    <header>
        <h1>Mi Perfil</h1>
    </header>
    <div class="container">
        <section class="profile-section">
            <h2>Mi Información</h2>
            <div class="profile-image">
                <img id="profile-img" src="default-profile-image.png" alt="Mi Foto de Perfil">
                <input type="file" id="image-upload" file="">
            </div>
            <div class="profile-details">
                <label for="birthdate">Fecha de Nacimiento:</label>
                <input type="date" id="birthdate">
                <label for="bio">Biografía:</label>
                <textarea id="bio" rows="4"></textarea>
               
            </div>
        </section>
    </div>
    <script src="./Js/script.js"></script>
</body>
</html>
