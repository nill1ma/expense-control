import './App.css';
import Create from './components/Create';
import ExpenseIdentifier from './components/ExpenseIdentifier';
import Header from './components/Header';
import TotalResults from './components/TotalResults';
import ItemContextPoviter from './contexts/ItemContext';
import ReferenceProvider from './contexts/ReferenceContext';
import Visualize from './pages/visualize';

export default function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseIdentifier />
      <ItemContextPoviter>
        <ReferenceProvider>
          <TotalResults />
          <Create />
          <Visualize />
        </ReferenceProvider>
      </ItemContextPoviter>
    </div>
  )
}