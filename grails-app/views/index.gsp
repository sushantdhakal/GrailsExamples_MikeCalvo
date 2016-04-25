<!doctype html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

  <asset:javascript src="application.js"/>
  <asset:stylesheet src="application.css"/>
</head>

<body ng-app="app">

<div class="container">

  <ng-include src="'/app/globalnav.html'"></ng-include>

  <div ng-view></div>

</div>


</body>
</html>
