var TOKEN = 'GARDR_UNIQUE_ID';

function replaceUniqueToken (params) {
    params.url = params.url.split(TOKEN).join(new Date().getTime() + (params.id));
}

module.exports = function (gardrPluginApi) {
    gardrPluginApi.on('params:parsed', replaceUniqueToken);
};
