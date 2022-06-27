import { Row, Button, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import './App.css';
import CustomEditor from './components/editor.component';
import { Field, FieldArray, FieldArrayRenderProps, Formik } from 'formik';
import { useEffect, useState } from 'react';
interface ISetField {
  arrayHelpers: FieldArrayRenderProps;
  index: number;
  toDo: string;
}

interface IRemoveField {
  arrayHelpers: FieldArrayRenderProps;
  index: number;
}

function App() {
  const [queue, setQueue] = useState<number>(1);

  const setField = ({ arrayHelpers, index, toDo }: ISetField) => {
    console.log('Before: ', queue);
    if (toDo === 'remove') {
      arrayHelpers.remove(index);
      setQueue(queue - 1);
    } else if (toDo === 'insert') {
      arrayHelpers.insert(index + 1, '');
      setQueue(queue + 1);
    }
    console.log('After: ', queue);
  };

  console.log('Queue: ', queue);

  const undoFeature = (arrayHelpers: FieldArrayRenderProps) => {
    arrayHelpers.remove(queue);
    setQueue(queue - 1);
  };

  const removeThis = () => {
    // arrayHelpers.remove(index);
    console.log('Remove this content editor');
  };

  // useComponentDidMount(() => {
  //   if (window.event) {
  //     console.log(window.event);
  //   }
  // });

  useEffect(() => {
    if (window.event) {
      console.log('window.event', window.event);
    }
  }, [window.event]);

  return (
    <div className="App">
      <header className="App-header">POC - Custom Editor</header>
      <Row></Row>
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
                        <button
                          type="button"
                          onClick={() => setField({ arrayHelpers, index, toDo: 'remove' })}>
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => setField({ arrayHelpers, index, toDo: 'insert' })}>
                          <PlusCircleOutlined />
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push('')}>
                      Add a content
                    </button>
                  )}
                  <div>
                    <Button className="btn-primary" onClick={() => undoFeature(arrayHelpers)}>
                      Undo
                    </Button>
                  </div>
                </div>
              )}
            />
            <Row>
              <h3>Out of formik form</h3>
              <textarea name="extra"></textarea>
            </Row>
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
