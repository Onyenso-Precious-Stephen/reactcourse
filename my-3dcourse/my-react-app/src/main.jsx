import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './class1/App.jsx'
import './index.css'
import Card from './class2/Card1.jsx'
import Comp from './class3/comp.jsx'
import Props from './class4/props.jsx'
import Condi from './class5/conditions.jsx'
import Mainlist from './class6/mainlist.jsx'
import Mainevent from './class7/event.jsx'
import Hook from './class8/hook.jsx'
import Mainstuff from './class9/onchangeon.jsx'
import Maincolor from './classx/colorpickmain.jsx'
import Updatecomponent from './classxi/updatfunction.jsx'
import Maintodolist from './classxii/maintodolist.jsx'
import './project.css'
import Mainuseeffect from './classxiii/mainuseffect.jsx'
import Maintimer from './classxiv/maintimer.jsx'
import MainStopWatch from './classxv/mainstopwatch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <MainStopWatch />
    <hr />
    <Maintimer />
    <hr />
    <Mainuseeffect />
    <br />
    <Maintodolist />
    <hr />
    <Updatecomponent />
    <hr />
    <Maincolor />
    <hr />
    <Mainstuff />
    <hr />
    <Hook />
    <hr />
    <Mainevent />
    <hr />
    <Mainlist />
    <hr />
    <Condi />
    <hr />
    <Props />
    <hr />
    <Comp />
    <hr />
    <br />
    <App />
    <Card />
    
  </React.StrictMode>,
)
