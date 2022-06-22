import { Row, Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import './App.css';
import CustomEditor from './components/editor.component';

function App() {
  const addMore = () => {
    console.log('Add more...');
  }

  return (
    <div className="App">
      <header>
        POC - Custom Editor
      </header>
      <div>
        <CustomEditor />
      </div>
      <Row>
        <Button onClick={addMore}>
          <PlusCircleOutlined />
        </Button>
      </Row>


    </div>
  );
}

export default App;
