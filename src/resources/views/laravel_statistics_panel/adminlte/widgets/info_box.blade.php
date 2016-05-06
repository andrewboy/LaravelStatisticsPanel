@if(isset($title))
<div id="{{ $id or '' }}"
     class="small-box {{ $class or 'bg-aqua' }}"
     {!! isset($attributes) ? implode(' ', array_map(function ($v, $k) { return $k . '="' . $v .'"'; }, $attributes, array_keys($attributes))) : null !!}
     {!! isset($tooltip) ? ' data-toggle="tooltip" data-original-title="'. $tooltip .'"' : null !!}>
    <div class="inner">
        <h3 class="value">{{ $number or '0' }}</h3>

        <p class="title">{{ $title }}</p>
    </div>
    <div class="icon">
        <i class="{{ $icon or '' }}"></i>
    </div>
    <div class="overlay hide">
        <i class="fa fa-refresh fa-spin"></i>
    </div>
<!--<a class="small-box-footer" href="#">More info <i class="fa fa-arrow-circle-right"></i></a>-->
</div>
@endif