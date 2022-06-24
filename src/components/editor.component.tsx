import { Radio, Row } from 'antd';
import { KeyboardEvent, ReactEventHandler, useState } from 'react';

interface ICustomEditor {
  removeThis: any;
}

const CustomEditor = () => {
  const [ctrl, setCtrl] = useState(false);

  const checkKeyAction = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    // event === 'Control' ? setCtrl(true) : setCtrl(false);
    if (event.ctrlKey && event.key === 'z') {
      console.log('Undo Pressed');
    }
  };
  return (
    <>
      <Row>
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="h">Highlight</Radio.Button>
          <Radio.Button value="b">Body</Radio.Button>
          <Radio.Button value="n">Note</Radio.Button>
          <Radio.Button value="q">Quote</Radio.Button>
          {/* <Radio.Button value="ma">Merge Above</Radio.Button>
          <Radio.Button value="mb">Merge Below</Radio.Button> */}
        </Radio.Group>
      </Row>
      <Row>
        <textarea
          className="my-custom-editor"
          placeholder="add text here..."
          onKeyDown={(e) => checkKeyAction(e)}
        />
      </Row>
    </>
  );
};

export default CustomEditor;
