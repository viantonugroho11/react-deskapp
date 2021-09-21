
import './App.css';
import { Switch,Route } from 'react-router'

//forms
import Dashboard from './page/Dashboard';
import FormBasic from './page/forms/FormBasic';
import FormWizard from './page/forms/FormWizard';
import FormPickers from './page/forms/FormPickers';
import AdvancedComponents from './page/forms/AdvancedComponents';
import Html5Editor from './page/forms/Html5Editor';
import ImageCropper from './page/forms/ImageCropper';
import ImageDropzone from './page/forms/ImageDropzone';
// import FormPickers from '../page/forms/FormPickers'

// tables
import BasicTables from './page/tables/BasicTables';
import Datatables from './page/tables/Datatables';

//calendar
import Calendar from './page/Calendar';

// ui
import Cards from './page/ui-elements/Cards';
import CardsHover from './page/ui-elements/CardsHover';
import UiButtons from './page/ui-elements/UiButtons';
import UiCarousel from './page/ui-elements/UiCarousel';
import UiListgroup from './page/ui-elements/UiListgroup';
import UiNotification from './page/ui-elements/UiNotification';
import UiProgressBar from './page/ui-elements/UiProgressBar';
import UiRangeSlider from './page/ui-elements/UiRangeSlider';
import UiSweetAlert from './page/ui-elements/UiSweetAlert';
import UiTabs from './page/ui-elements/UiTabs';
import UiTimeline from './page/ui-elements/UiTimeline';
import UiTooltip from './page/ui-elements/UiTooltip';
import UiTypoGraphy from './page/ui-elements/UiTypoGraphy';
import UiModals from './page/ui-elements/UiModals';

function App() {
  return (
<div>
  <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/form-basic" component={FormBasic} />
        <Route exact path="/form-wizard" component={FormWizard} />
        <Route exact path="/form-pickers" component={FormPickers} />
        <Route exact path="/advanced-components" component={AdvancedComponents} />
        <Route exact path="/html5-editor" component={Html5Editor} />
        <Route exact path="/image-cropper" component={ImageCropper} />
        <Route exact path="/image-dropzone" component={ImageDropzone} />

        {/* tables */}
        <Route exact path="/basic-tables" component={BasicTables} />
        <Route exact path="/datatables" component={Datatables} />

        {/* calendar */}
        <Route exact path="/calendar" component={Calendar} />

        {/* ui-elements */}
        <Route exact path="/cards" component={Cards} />
        <Route exact path="/cards-hover" component={CardsHover} />
        <Route exact path="/ui-buttons" component={UiButtons} />
        <Route exact path="/ui-carousel" component={UiCarousel} />
        <Route exact path="/ui-list-group" component={UiListgroup} />
        <Route exact path="/ui-notification" component={UiNotification} />
        <Route exact path="/ui-progressbar" component={UiProgressBar} />
        <Route exact path="/ui-range-slider" component={UiRangeSlider} />
        <Route exact path="/ui-sweet-alert" component={UiSweetAlert} />
        <Route exact path="/ui-tabs" component={UiTabs} />
        <Route exact path="/ui-timeline" component={UiTimeline} />
        <Route exact path="/ui-tooltip" component={UiTooltip} />
        <Route exact path="/ui-typography" component={UiTypoGraphy} />
        <Route exact path="/ui-modals" component={UiModals} />
  </Switch>
  
</div>
  );
}

export default App;
