class AppDropdownButtonCtrl {

  constructor($scope) {
    this._$scope = $scope;

    this.items = [];
    this.status = {
      isOpen: false
    };    
  }
  
  $onInit () {}

  select(selectedOption){
    if(this.selected === selectedOption) return;

    this.selected = selectedOption;
    this.onSelect({ param: selectedOption });
  }

}

AppDropdownButtonCtrl.$inject = ['$scope']

const bindings = {
  items: '=',
  selected: '=',
  onSelect: '&'
}

const AppDropdownButton = {
  controller: AppDropdownButtonCtrl,
  controllerAs: 'ctrl',
  templateUrl: 'components/drop-button/drop-button.component.html',
  bindings,
};

export default AppDropdownButton;