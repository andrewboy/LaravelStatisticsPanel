<div id="{{ $id or '' }}"
     class="box {{ $class or '' }}"
     {!! isset($attributes) ? implode(' ', array_map(function ($v, $k) { return $k . '="' . $v .'"'; }, $attributes, array_keys($attributes))) : null !!}>
     <div class="box-header with-border">
        <h3 class="box-title">{{ $title }}</h3>
    </div>
    <div class="box-body no-padding">
        @if(isset($data))
        <div class="row">
            @if(isset($data['datasets']))
            @for($j = 0, $cc = count($data['datasets']); $j < $cc; $j++)
            <div class="col-md-{{ 12/count($data['datasets']) }}">
                <table class="table no-margin table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            @foreach($data['labels'] as $label)
                            <th>{{ $label }}</th>
                            @endforeach
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($data['datasets'][$j] as $row)
                        <tr>
                            @for($i = 0, $c = count($data['labels']); $i < $c; $i++)
                            <td>{{ $row[$i] }}</td>
                            @endfor
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            @endfor
            @else
            <div class="col-md-12 text-center margin">No data to display</div>
            @endif
        </div>
        @endif
    </div>
    @if(isset($data['footer']))
    <div class="box-footer footer no-padding">
        {!! $data['footer'] !!}
    </div>
    @endif
    <div class="overlay hide">
        <i class="fa fa-refresh fa-spin"></i>
    </div>
    <!-- /.box-body -->
</div>