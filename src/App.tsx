import './App.css';
import Create from './components/Create';
import ExpenseIdentifier from './components/ExpenseIdentifier';
import Header from './components/Header';
import TotalResults from './components/TotalResults';
import EditModePoviter from './contexts/EditMode';
import ItemsContextPoviter from './contexts/ItemsContext';
import ItemContextPoviter from './contexts/ItemContext';
import ReferenceProvider from './contexts/ReferenceContext';
import Visualize from './pages/visualize';

export default function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseIdentifier />
      <ItemsContextPoviter>
        <ReferenceProvider>
          <TotalResults />
          <ItemContextPoviter>
            <EditModePoviter>
              <Create />
              <Visualize />
            </EditModePoviter>
          </ItemContextPoviter>
        </ReferenceProvider>
      </ItemsContextPoviter>
    </div>
  )
}