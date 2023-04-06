import {Layout, Image, } from "antd";
import AppRoutes from "./components/Routes";
import SideMenu from "./components/SideMenu";
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import PlayerContextProvider from "./context/PlayerContext";
import { Player } from "./models";


Amplify.configure(awsconfig);


const {Sider, Content, Footer} = Layout

function App() {
  return (
    <PlayerContextProvider>
    <Layout>
      <Sider style={{backgroundColor: 'white'}}>
        <Image
        src="https://png.pngtree.com/template/20190214/ourmid/pngtree-modern-vector-hockey-logo-logo-for-hockey-team-silhouette-image_55587.jpg"
        preview={false}
        
        />
        <SideMenu/>
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Sylla Hockey Dashboard @2023
        </Footer>
      </Layout>
    </Layout>
    </PlayerContextProvider>
  );
}

export default withAuthenticator(App);
