moduloDirectivas.component('miniactions', {
    templateUrl: "js/system/components/miniactions/miniactions.html",
    controllerAs: 'act',
        controller: miniactions,
    bindings:
            {
                id: '<',
                name: '<'
            }

});

function miniactions(serverService, $uibModal)
{
    var self = this;

    self.appurl = serverService.getCAppUrl();


}