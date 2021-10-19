import './App.css';
import Create from './components/create';
import ExpenseIdentifier from './components/ExpenseIdentifier';
import Header from './components/header';
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