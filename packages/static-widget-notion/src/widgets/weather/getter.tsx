/**
 * 天气插件渲染页面
 * @author jianghong.wei
 * @since 2022-09-15 17:31:26
 */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import useSWR from 'swr';
import { Result } from 'antd'
import { loadScript } from '@ww/utils-web'
import { getDocument } from '../../api/widget-weather'

enum EStatus {
  LOADING,
  FULLFILL,
  ERROR
}

const SCRIPT = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0'

const NewCmp = () => {
  const [status, setStatus] = useState<EStatus>(EStatus.LOADING);
  const { id } = useParams();

  const { data, isValidating: loading } = useSWR(id, getDocument)

  useEffect(() => {
    if (!loading) {
      if (data) {
        const { clientHeight, clientWidth } = window.document.body;
        window.WIDGET = {
          CONFIG: {
            layout: data.layout,
            width: clientWidth + "",
            height: clientHeight + '',
            background: data.background,
            dataColor: data.dataColor,
            key: data.id
          }
        }
        loadScript(SCRIPT)
      } else {
        setStatus(EStatus.ERROR)
      }
    } else {
      setStatus(EStatus.FULLFILL)
    }

  }, [data, loading])

  const renderPlaceholder = () => {
    if (status === EStatus.ERROR) {
      return <Result status="error" title="未找到数据" />
    }
    if (status === EStatus.LOADING) {
      return <p>努力加载中...</p>
    }

    return null
  }

  return (
    <section>
      <div id="he-plugin-standard"></div>
      {renderPlaceholder()}
    </section>
  );
};

export default NewCmp;
