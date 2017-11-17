class AppTabsCtrl {
 
  constructor() {    
      this.tabs = [];
  }
  
  $onInit(){
    if(this.tabs.length) this.tabs[0].isActive = true;      
  }

  select(selectedTab){
    this.tabs.forEach(tab => {
      if( tab.isActive && tab !== selectedTab) tab.isActive = false;
    });

    selectedTab.isActive = true;
    this.onSelect({ param: selectedTab.value });
  }

}

const AppTabs = {
  controller: AppTabsCtrl,
  controllerAs: 'ctrl',
  templateUrl: 'components/tabs/tabs.component.html',
  bindings: {
    tabs: '=',
    onSelect: '&',
  },
};

export default AppTabs;