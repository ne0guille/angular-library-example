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
    //this._$scope.$emit('selection-changed', selectedOption);
    this.onSelect({ param: selectedOption });
  }

  // injection here
  // static get $inject() {
  //   return [
  //     '$service1',
  //     '$service2'
  //   ];
  // }

}

AppDropdownButtonCtrl.$inject = ['$scope']

let bindings = {
  items: '=',
  selected: '=',
  onSelect: '&'
}

let AppDropdownButton = {
  controller: AppDropdownButtonCtrl,
  controllerAs: 'ctrl',
  templateUrl: 'components/drop-button/drop-button.component.html',
  bindings,
};

export default AppDropdownButton;