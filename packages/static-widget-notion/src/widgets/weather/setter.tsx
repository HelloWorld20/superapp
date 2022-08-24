import React, { useEffect } from 'react';
import { loadScript } from '@ww/utils-web'
import { Form, Input, Button } from 'antd'

const NewCmp = () => {

  const handleSubmit = (key: string) => {
    window.WIDGET = {
      CONFIG: {
        "layout": "1",
        "width": "450",
        "height": "150",
        "background": "1",
        "dataColor": "FFFFFF",
        key
      }
    }
    loadScript('https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0')
  }

  return <section>
    <Form onValuesChange={({ key }) => {
      handleSubmit(key);
    }} onFinish={() => {}}>
      <Form.Item label="key" name="key" >
        <Input />
      </Form.Item>
      <Button htmlType='submit'>commit</Button>
    </Form>

    <div>
      <h3>preview</h3>
      <div id="he-plugin-standard"></div>
    </div>
  </section>;
};

export default NewCmp;
{/* <div id="he-plugin-standard"></div>
<script>
WIDGET = {
  "CONFIG": {
    "layout": "1",
    "width": "450",
    "height": "150",
    "background": "1",
    "dataColor": "FFFFFF",
    "key": "3cdaa55fb90e45aeb5989731d044c589"
  }
}
</script>
<script src="https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0"></script> */}