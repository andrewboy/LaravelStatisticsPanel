<?php namespace Andrewboy\LaravelStatisticsPanel;

use Illuminate\Support\ServiceProvider;

/**
 * Class LaravelStatisticsPanelServiceProvider
 * @package Andrewboy\LaravelStatisticsPanel
 */
class LaravelStatisticsPanelServiceProvider extends ServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;


    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }


    /**
     * Set service provider
     * @return void
     */
    public function boot()
    {
        $resourcesDir = __DIR__ .'/../../resources';

        // VIEW
        $this->loadViewsFrom(
            $resourcesDir.'/views/laravel_statistics_panel/adminlte/boxes',
            'laravel-statistics-panel-adminlte-boxes'
        );
        $this->loadViewsFrom(
            $resourcesDir.'/views/laravel_statistics_panel/adminlte/boxes/headers',
            'laravel-statistics-panel-adminlte-box-headers'
        );

        $this->publishes([
            $resourcesDir .'/views/laravel_statistics_panel/' => base_path('resources/views/vendor/laravel-statistics-panel')
        ]);

        #TRANSLATIONS
        $this->loadTranslationsFrom(
            $resourcesDir.'/lang/',
            'google-analytics-statistics'
        );
        $this->publishes(
            [
                $resourcesDir .'/lang/' => base_path('resources/lang/vendor/laravel-statistics-panel'),
            ]
        );

        #ASSETS
        $this->publishes(
            [
                $resourcesDir .'/assets/' => public_path('vendor/laravel-statistics-panel'),
            ],
            'public'
        );
    }
}