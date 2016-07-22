<div class="row">
    <div class="col-md-2">
        <div class="input-group">
            <div class="input-group-addon">
                <i class="fa fa-calendar"></i>
            </div>
            <input name="stat_interval from"
                   class="form-control pull-right stat_interval from"
                   type="text"
                   value="{{ $statBoxActualMonthDateFrom or '' }}">
        </div>
    </div>
    <div class="col-md-2">
        <div class="input-group">
            <div class="input-group-addon">
                <i class="fa fa-calendar"></i>
            </div>
            <input name="stat_interval to"
                   class="form-control pull-right stat_interval to"
                   type="text"
                   value="{{ $statBoxActualMonthDateTo or '' }}">
        </div>
    </div>
    <div class="col-md-7">
        <h3 class="box-title stat-title">{{ $statBoxTitle or '' }}</h3>
    </div>
    <div class="col-md-1">
        <div class="box-tools pull-right">
            <button data-widget="collapse" class="btn btn-box-tool" type="button">
                <i class="fa fa-minus"></i>
            </button>
        </div>
    </div>
</div>