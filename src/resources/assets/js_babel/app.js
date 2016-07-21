import {StatisticsBox} from 'boxes/StatisticsBox';


window.ez = {};

window.ez.config = (function() {

    class HelloWorld {
        constructor(message) {
            this.message = message;
        }
        getMessage() {
            return this.message;
        }
    }

    return {
        'bla': HelloWorld,
    };
}());