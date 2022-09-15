/**
 * 天气插件列表页面
 * @author jianghong.wei
 * @since 2022-09-15 17:31:49
 */

import React from 'react';
import useSWR from 'swr';
import { Table, Button } from 'antd';
import { getList } from '../../api/widget-weather'

const List = () => {
  const { data: list } = useSWR<Record<string, any>[]>({}, getList);
  console.log('%c [ list ]-7', 'font-size:13px; background:pink; color:#bf2c9f;', list)


  function onCopy() {

  }

  function onPreview() {
    
  }

  function onDelete() {

  }

  const columns = [
    {
      key: 'name',
      title: '名称',
      dataIndex: 'name',
    },
    {
      key: 'createTime',
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      key: 'updateTime',
      title: '更新时间',
      dataIndex: 'updateTime',
    },
    {
      key: 'action',
      title: '操作',
      render: (_: any, record: any) => {
        return <div><Button onClick={onPreview}>查看</Button><Button onClick={onCopy}>复制</Button><Button danger onClick={onDelete}>删除</Button></div>
      }
    }
  ]

  return <section>
    <Table dataSource={list || []} columns={columns} rowKey="id" />
  </section>;
};

export default List;
