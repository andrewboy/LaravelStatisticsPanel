@extends('laravel-statistics-panel-adminlte-boxes::box', [
    'statBoxId'     =>  isset($statBoxId) ? $statBoxId : null,
    'statBoxClass'  =>  isset($statBoxClass) ? $statBoxClass : null,
])

@section('statistics_box_header')

    @include('laravel-statistics-panel-adminlte-box-headers::time_independent', [
        'statBoxTitle'  =>  isset($statBoxTitle) ? $statBoxTitle : null,
        'statBoxActualMonthDateFrom'    =>  isset($statBoxActualMonthDateFrom) ? $statBoxActualMonthDateFrom : null,
        'statBoxActualMonthDateTo'    =>  isset($statBoxActualMonthDateTo) ? $statBoxActualMonthDateTo : null,
    ])

@overwrite

@section('statistics_box_content')

    @yield('statistics_box_content')

@overwrite