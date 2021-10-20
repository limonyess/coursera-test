<?php include('server.php') ?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>treelephant</title>
    <script src="js/jquery-2.1.4.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Boogaloo&family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <div class="container-fluid">
      <div class="row  row-cols-2">

        <div class="col-md-5 d-none d-md-block menu-left">
          <img src="https://limonyess.github.io/coursera-test/site/images/89-08.png" class="img-fluid">
        </div>

        <div class="col-12 col-md-7 menu-right">

          <div>
            <div><h1>Sign in</h1></div>
          </div>

          <div class="row menu-items-container">

            <div class="col">

              <form method="post" action="login.php">
                <?php include('errors.php'); ?>
                <div class="align-right">
                  <label>Username</label>
                  <input type="text" name="username" >
                </div>
                <div class="align-right">
                  <label>Password</label>
                  <input type="password" name="password">
                </div>
                <div class="align-right">
                  <button type="submit" class="btn border border-5 border-dark" name="login_user">Login</button>
                </div>
              </form>
              
            </div>

          </div>

        </div>

      </div>
    </div>

  </body>
</html>