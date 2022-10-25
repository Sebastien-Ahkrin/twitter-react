import './App.css';
import Thread from './components/application/Thread';
import Layout from './components/layout/Layout';

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Thread />
      </Layout>
    </div>
  );
}
