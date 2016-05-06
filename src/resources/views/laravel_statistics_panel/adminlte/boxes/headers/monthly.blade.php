<div class="row">
    <div class="col-md-2">
        <div class="input-group">
            <div class="input-group-addon">
                <i class="fa fa-calendar"></i>
            </div>
            <input name="stat_interval_from"
                   class="form-control pull-right stat_interval from"
                   type="text"
                   value="{{ $actualMonthDate or '2016-05' }}">
        </div>
    </div>
    <div class="col-md-9">
        <h3 class="box-title stat-title">@lang('month_statistics')</h3>
    </div>
    <div class="col-md-1">
        <div class="box-tools pull-right">
            <button data-widget="collapse" class="btn btn-box-tool" type="button">
                <i class="fa fa-minus"></i>
            </button>
        </div>
    </div>
</div>