import React, { useMemo } from 'react';
import { loadScript } from '@ww/utils-web'
import { Form, Input, InputNumber, Button, message } from 'antd'
import { addDocument } from '../../api/widget-weather'

const SCRIPT = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0'

const NewCmp = () => {

  const handleChange = (key: string) => {
    if (!key) return;

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
    loadScript(SCRIPT)
  }

  const handleSubmit = async (form: any) => {
    const { key, name, width, height } = form;
    if (!key) return;
    await addDocument(key, {
      "layout": "1",
      name,
      width,
      height,
      "background": "1",
      "dataColor": "FFFFFF",
    }).then(() => {
      message.success('提交成功')
    }).catch((err: any) => {
      message.error(err.response.data.msg)
    })

  }

  const initialName = useMemo(() => {
    const date = new Date();
    return `天气插件-${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getHours()}-${date.getMinutes()}`
  }, [])

  return <section>
    <Form onValuesChange={({ key }) => {
      handleChange(key);
    }} onFinish={(key) => { handleSubmit(key) }}>
      <Form.Item label="key" name="key" rules={[{ required: true, message: '请填写必填项!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="name" name="name" rules={[{ required: true, message: '请填写必填项!' }]} initialValue={initialName}>
        <Input />
      </Form.Item>
      <Form.Item label="width" name="width" initialValue={450}>
        <InputNumber min={1} max={1000} />
      </Form.Item>
      <Form.Item label="height" name="height" initialValue={150}>
        <InputNumber min={1} max={1000} />
      </Form.Item>
      <Button type="primary" htmlType='submit'>提交</Button>
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