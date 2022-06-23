import { Row, Button, Form } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import './App.css';
import CustomEditor from './components/editor.component';
import { Field, FieldArray, Formik } from 'formik';

function App() {
  const addMore = () => {
    console.log('Add more...');
  };

  return (
    <div className="App">
      <header className="App-header">POC - Custom Editor</header>
      <Formik
        initialValues={{ contents: [''] }}
        onSubmit={(values) => console.log(values)}
        render={({ values }) => (
          <Form>
            <FieldArray
              name="contents"
              render={(arrayHelpers) => (
                <div>
                  {values.contents && values.contents.length > 0 ? (
                    values.contents.map((friend, index) => (
                      <div key={index}>
                        <Field name={`contents.${index}`} as={CustomEditor} />
                        <button type="button" onClick={() => arrayHelpers.remove(index)}>
                          -
                        </button>
                        <button type="button" onClick={() => arrayHelpers.insert(index, '')}>
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push('')}>
                      {/* show this when user has removed all friends from the list */}
                      Add a content
                    </button>
                  )}
                  <div>
                    <Button className="btn-primary" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      />
      {/* <Row>
        <Button onClick={addMore}>
          <PlusCircleOutlined />
        </Button>
      </Row> */}
    </div>
  );
}

export default App;
