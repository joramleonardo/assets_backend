<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>DAMS</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        <!-- <link href="{{ asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/templatemo-lava.css')}}" rel="stylesheet" /> -->
        
        <link href="{{ asset('admin-template/vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" />
        <link href="{{ asset('admin-template/css/sb-admin-2.min.css')}}" rel="stylesheet" />





    </head>
    <body> 
        <div id="app"></div>
        
        <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script> -->
        <!-- <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script> -->
        <script src="{{ asset('js/app.js') }}"> </script>
        <script src="{{ asset('js/scripts2.js') }}"> </script>
        <script src="{{ asset('js/scripts.js') }}"> </script>

        
        <script src="{{ asset('admin-template/vendor/jquery/jquery.min.js') }}"> </script>
        <script src="{{ asset('admin-template/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"> </script>
        <script src="{{ asset('admin-template/vendor/jquery-easing/jquery.easing.min.js') }}"> </script>
        <script src="{{ asset('admin-template/js/sb-admin-2.min.js') }}"> </script>
        <!-- <script src="{{ asset('admin-template/vendor/chart.js/Chart.min.js') }}"> </script>
        <script src="{{ asset('admin-template/js/demo/chart-area-demo.js') }}"> </script>
        <script src="{{ asset('admin-template/js/demo/chart-pie-demo.js') }}"> </script> -->


    </body>
</html>
