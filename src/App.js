import React from 'react';

import './App.css';
import { Layout } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import MenuItem from 'antd/lib/menu/MenuItem';
import { Menu,Breadcrumb } from 'antd';
import {
  MailOutlined
} from '@ant-design/icons';


const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
      <Header style= {{padding : 10}}>
      <Avatar style ={{float : 'right'}} src ='./dp.png'/>
      <Title style={{color:'white'}} level={3}>Design thinking and innovation</Title>
        </Header>
      <Layout>
      <Sider>
        <Menu
          defaultSelectedkeys={['Dashboard']}
          mode="inline">
        
          <Menu.Item key ='Dashboard'>
          Dashboard
          </Menu.Item>
          
    
             <SubMenu
               title ={
                 <span>
                 <Menu.Item key ='mail'/>
                 <MailOutlined/>About us
              </span>
               }>
           
         <Menu.ItemGroup key ='About Us ' title='Country'>
              <Menu.Item key ='location'>Location 1</Menu.Item>
              <Menu.Item key ='location'>Location 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
        </Sider>
        
        <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb> 
      <div style ={{ background:'#fff',padding:24,minHeight:580 }}>Content</div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>  
    </div>
  );
}

export default App;
