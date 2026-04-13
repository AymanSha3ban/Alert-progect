import Alert from './components/Alert'
import './App.css'
import { BellRing , NotebookPen , Ban , CheckCheck, TriangleAlert} from 'lucide-react';

export default function App() {
  
  
  return (
   
    <div>
      <Alert  type='upgrade' alertIcon={<BellRing />} title ='Upgrade your plan' description='Upgrade your plan at any time to get access to all features.' />
      <Alert type='note' alertIcon={ <NotebookPen />} title ='Note' description={<>
        <p>This is a note alert. It contains important information that you should read carefully.</p>
        <h3 className='toast'>Lorem ipsum dolor sit amet.</h3>
      </>} />
      <Alert type='wrong' alertIcon={<Ban />} title ='Wrong' description='This is a wrong alert.' />
      <Alert type='success' alertIcon={<CheckCheck />} title ='Success' description='This is a success alert.' />
      <Alert type='tips' alertIcon={<TriangleAlert />} title ='Tips' description='This is a tips alert.' />
    </div>
  )
}
