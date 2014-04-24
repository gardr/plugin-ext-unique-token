var assert = require('assert');
var sinon = require('sinon');
var unique = require('./index.js');
var PluginApi = require('gardr-core-plugin').PluginApi;

function createContainer () {
    var c = document.createElement('span');
    c.id = 'gardr';
    return c;
}

describe('unique-token-ext', function () {
    var pluginApi, now, clock, params;

    beforeEach(function () {
        params = {
            id: 'test123',
            url: 'http://external.com/script.js?q=1&m=GARDR_UNIQUE_ID&m2=GARDR_UNIQUE_ID'
        };
        pluginApi = new PluginApi();
        sinon.spy(pluginApi, 'on');
        now = new Date().getTime();
        clock = sinon.useFakeTimers(now);
    });

    afterEach(function () {
        clock.restore();
    });

    it('should be a function', function () {
        assert.equal(typeof unique, 'function');
    });

    it('should replace GARDR_UNIQUE_ID in the url with timestamp + id', function() {
        unique(pluginApi);
        pluginApi.trigger('params:parsed', params);

        assert(params.url.indexOf('m=' + now + params.id) >= 0, 'Should contain timestamp + id');
    });

    it('should replace all occurrences of GARDR_UNIQUE_ID', function() {
        unique(pluginApi);
        pluginApi.trigger('params:parsed', params);

        assert(params.url.indexOf('GARDR_UNIQUE_ID') == -1, 'Should not contain GARDR_UNIQUE_ID');
    });
});
