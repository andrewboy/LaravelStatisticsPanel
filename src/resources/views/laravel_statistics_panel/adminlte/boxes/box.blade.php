<div id="{{ $id or '' }}" class="box box-solid {{ $class or '' }}">
    <div class="box-header with-border">
        @yield('statistics_box_header')
    </div>
    <div class="box-body">
        @yield('statistics_box_content')
    </div>
</div>