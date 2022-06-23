import { Radio, Row } from 'antd';

const CustomEditor = () => {
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
        <textarea className="my-custom-input"></textarea>
      </Row>
    </>
  );
};

export default CustomEditor;
