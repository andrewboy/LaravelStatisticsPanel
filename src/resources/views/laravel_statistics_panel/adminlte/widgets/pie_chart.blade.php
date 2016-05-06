<div id="{{ $id }}"
     class="box {{ isset($class) ? $class : null }}"
     {!! isset($attributes) ? implode(' ', array_map(function ($v, $k) { return $k . '="' . $v .'"'; }, $attributes, array_keys($attributes))) : null !!}>
    <div class="box-header with-border">
        <h3 class="box-title">{{ $title }}</h3>

        <div class="box-tools pull-right">
<!--                <button data-widget="collapse" class="btn btn-box-tool" type="button"><i class="fa fa-minus"></i>
          </button>
          <button data-widget="remove" class="btn btn-box-tool" type="button"><i class="fa fa-times"></i></button>-->
        </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <div class="row">
            <div class="col-md-8 chart-item">
                <div class="chart-responsive">
                    <canvas class="diagram" height="160" width="325"></canvas>
                </div>
                <!-- ./chart-responsive -->
            </div>
            <!-- /.col -->
            <div class="col-md-4 chart-item">
                <ul class="chart-legend clearfix">
                    <!--<li><i class="fa fa-circle-o text-red"></i> legend1</li>-->
                </ul>
            </div>
            <!-- /.col -->
            <div class="col-md-12 padding text-center hidden no-data">No data to display</div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.box-body -->
    <div class="overlay hide">
        <i class="fa fa-refresh fa-spin"></i>
    </div>
    <!-- /.footer -->
</div>