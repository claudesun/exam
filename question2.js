<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Actions utilisateur et JavaScript</title>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="idemm.css" />
  <script>
    var mesphotos = ['http://vdoit.in/wp-content/uploads/2016/09/vDoIT_html-css-logo1.jpg','https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/DOM1.DOM','https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Deepweb_graphical_representation.svg/800px-Deepweb_graphical_representation.svg.png',];
    var image_en_cours = 0;
    function suivante () {
      image_en_cours = image_en_cours + 1;
      if (image_en_cours == mesphotos.length) {
        image_en_cours = 0;
      }
      document.getElementById('ecran').src = 'images/'+mesphotos[image_en_cours];
    }
    function precedente () {
      image_en_cours = image_en_cours - 1;
      if (image_en_cours < 0) {
        image_en_cours = mesphotos.length-1;
      }
      document.getElementById('ecran').src = 'images/'+mesphotos[image_en_cours];
    }
  </script>
</head>

<body>

  <h1>Actions utilisateur et JavaScript</h1>

  <h2>Diaporama manuel</h2>

  <div class="illustration">
  <img id="ecran" src="http://vdoit.in/wp-content/uploads/2016/09/vDoIT_html-css-logo1.jpg" alt="web" height="200" />
  </div>

  <button onclick="precedente();">image pr¨¦c¨¦dente</button>
  <button onclick="suivante();">image suivante</button>

  </body>
</html>