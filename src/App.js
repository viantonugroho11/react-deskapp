
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

  </Switch>
  
</div>
  );
}

export default App;
