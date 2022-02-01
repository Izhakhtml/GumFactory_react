import './App.css';
import AppRouter from './components/Gum_Factory/AppRouter.component';
import { ContextProvider } from './components/Gum_Factory/ContextProvider.component';
function App() {
  return (
    <ContextProvider >
         <AppRouter/>
    </ContextProvider>
  );
}

export default App;
