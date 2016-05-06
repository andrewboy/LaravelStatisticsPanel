<div id="{{ $id }}"
     class="box {{ isset($class) ? $class : null }}"
     {!! isset($attributes) ? implode(' ', array_map(function ($v, $k) { return $k . '="' . $v .'"'; }, $attributes, array_keys($attributes))) : null !!}>
    <div class="box-header with-border">
        <h3 class="box-title title">{{ $title }}</h3>

        <div class="box-tools pull-right">
<!--            <button data-widget="collapse" class="btn btn-box-tool" type="button"><i class="fa fa-minus"></i>
            </button>
            <button data-widget="remove" class="btn btn-box-tool" type="button"><i class="fa fa-times"></i></button>-->
        </div>
    </div>
    <div class="box-body">
        <div class="chart">
            <canvas class="diagram" width="325" height="160"></canvas>
        </div>
    </div>
    <div class="overlay hide">
        <i class="fa fa-refresh fa-spin"></i>
    </div>
    <!-- /.box-body -->
</div>