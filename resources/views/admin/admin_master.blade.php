<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png">
    <title>Admin</title>
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}admin/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}admin/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}admin/css/icofont.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}admin/css/fullcalendar.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}admin/css/dataTables.bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}admin/css/select2.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}admin/css/bootstrap-datetimepicker.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}admin/css/style.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!--[if lt IE 9]>
    <script src="assets/js/html5shiv.min.js"></script>
    <script src="assets/js/respond.min.js"></script>
    <![endif]-->

         <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!--Load the AJAX API-->
    <script type="text/javascript" src="{{asset('/')}}admin/js/google-chart.js"></script>
     <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

</head>

<body>
<div class="main-wrapper slide-nav">
  


        <div id="example"></div>

    </div>
    <div class="sidebar-overlay" data-reff=""></div>
    <script type="text/javascript" src="{{asset('/')}}admin/js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="{{asset('/')}}admin/js/popper.min.js"></script>
    <script type="text/javascript" src="{{asset('/')}}admin/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="{{asset('/')}}admin/js/Chart.bundle.min.js"></script>
    <script type="text/javascript" src="{{asset('/')}}admin/js/Chart.min.js"></script>
    <script type="text/javascript" src="{{asset('/')}}admin/js/jquery.slimscroll.js"></script>
    <script type="text/javascript" src="{{asset('/')}}admin/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="{{asset('/')}}admin/js/dataTables.bootstrap.min.js"></script>
    <script type="text/javascript" src="{{asset('/')}}admin/js/select2.min.js"></script>
    <script type="text/javascript" src="{{asset('/')}}admin/js/app.js"></script>
</body>

</html>
