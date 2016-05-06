<div  id="{{ $id }}"
     class="box {{ isset($class) ? $class : null }}"
     {!! isset($attributes) ? implode(' ', array_map(function ($v, $k) { return $k . '="' . $v .'"'; }, $attributes, array_keys($attributes))) : null !!}>
    <div class="box-header with-border">
        <h3 class="box-title">{{ $title }}</h3>

        <div class="box-tools pull-right">
<!--            <button data-widget="collapse" class="btn btn-box-tool" type="button">
                <i class="fa fa-minus"></i>
            </button>
            <button data-widget="remove" class="btn btn-box-tool" type="button">
                <i class="fa fa-times"></i>
            </button>-->
        </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body no-padding">
        <div class="row">
            <div class="col-md-5">
                <div class="pad">
                    <!-- Map will be created here -->
                    <div style="height: 325px;" class="map"></div>
                </div>
            </div>
            <!-- /.col -->
            <div class="col-md-7 toplist">
                
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.box-body -->
    <div class="overlay hide">
        <i class="fa fa-refresh fa-spin"></i>
    </div>
</div>