<div id="{{ $id or '' }}"
    class="info-box {{ $class or 'bg-aqua' }}"
     {!! isset($attributes) ? implode(' ', array_map(function ($v, $k) { return $k . '="' . $v .'"'; }, $attributes, array_keys($attributes))) : null !!}
 >
    <span class="info-box-icon">
        <i class="ion {{ $icon or '' }}"></i>
    </span>

    <div class="info-box-content">
        @if(!empty($buttons))
            @foreach($buttons as $button)
                <a href="{{ $button['url'] }}"
                   class="btn btn-primary pull-right {{ isset($button['classes']) ? $button['classes'] : '' }}"
                   {{ isset($target) ? 'target="'. $target .'"' : '' }}
                    {{ isset($title) ? 'title="'. $title .'"' : '' }}
                >
                    <i class="{{ isset($button['icon_classes']) ? $button['icon_classes'] : 'fa fa-plus' }}"></i>
                </a>
            @endforeach
        @endif
        <span class="info-box-text title">{{ $title or '' }}</span>
        <span class="info-box-number value">{{ $number or '&nbsp;' }}</span>

        <div class="progress">
            <div style="width: {{ $percent or 0 }}%" class="progress-bar"></div>
        </div>
        <span class="progress-description">
            {{ $description or '&nbsp;' }}
        </span>
    </div>
    <div class="overlay hide">
        <i class="fa fa-refresh fa-spin"></i>
    </div>
</div>