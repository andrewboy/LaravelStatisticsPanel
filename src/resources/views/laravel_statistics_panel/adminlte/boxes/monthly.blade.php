@extends('laravel-statistics-panel-adminlte-boxes::box', [
    'statBoxId'     =>  isset($statBoxId) ? $statBoxId : null,
    'statBoxClass'  =>  isset($statBoxClass) ? $statBoxClass : null,
])

@section('statistics_box_header')

    @include('laravel-statistics-panel-adminlte-box-headers::monthly', [
        'statBoxTitle'              =>  isset($statBoxTitle) ? $statBoxTitle : null,
        'statBoxActualMonthDate'    =>  isset($statBoxActualMonthDate) ? $statBoxActualMonthDate : null,
    ])

@overwrite

@section('statistics_box_content')

    @yield('statistics_box_content')

@overwrite