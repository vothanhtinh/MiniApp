import React, { useEffect } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userInfo } from "zmp-sdk";
import { userState } from "../state";

import UserCard from "../components/user-card";

const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue<userInfo>(userState);

  const script = `(function (b,e,f,n,g,h,i,j="",k=!1,l="production"){let m=a=>new Promise(b=>setTimeout(b,a)),d=()=>{"function"==typeof window.mt_run_campaign&&window.mt_run_campaign({campaignId:n,variantId:g,storyId:e,zoneId:f,zoneSelector:h,zoneRenderType:j,queryStr:i,env:l,isPreview:k})},c=async()=>{for(;window.mt_run_campaign_waiting;)await m(200);d()};if("function"==typeof window.mt_run_campaign)d();else if(window.mt_run_campaign_waiting)c();else{window.mt_run_campaign_waiting=!0;var a=b.createElement("script");a.src="//st-media-template.antsomi.com/js/media.cdp.min.js?v=654444",a.id="antsomi-cdp-optin",a.dataset.singleton="1",b.getElementsByTagName("head")[0].appendChild(a),c()}})(
    document,  8172689, 580746, 8172690, 8172691, '', 'portal_id=561236459&prop_id=564990801&uid=1559930&ec=webview_screen&ea=load&items=%5B%5D&dims=%7B%22users%22%3A%7B%22antsomi_webpush_uid%22%3A%229117a34e-110c-4838-9c8f-e5aa7cb5444d%22%7D%7D&extra=%7B%22pv_id%22%3A%221695192872141-0%22%2C%22session_id%22%3A%225355109952%22%2C%22prop_id%22%3A%22564993250%22%2C%22visitor_type%22%3A%22returning%22%2C%22is_webview%22%3Afalse%2C%22location_url%22%3A%22https%3A%2F%2Fretail.antsomi.com%2F%22%2C%22atm_type%22%3A%22on_session%22%7D&campaign_ids=&b_ws_ids=&b_wd_ids=&b_wz_ids=&format=json&session_id=79be8dd2f16c230d7b98bd50a49888c5', 'replace')
`;

  useEffect(() => {
    eval(script);
  }, []);
  const navigate = useNavigate();
  return (
    <Page className="page">
      <div className="section-container">
        <UserCard user={user} />
      </div>
      <div className="section-container">
        <List>
          <List.Item suffix={<Icon icon="zi-arrow-right" />}>
            <div onClick={() => navigate("/about")}>About</div>
          </List.Item>
          <List.Item suffix={<Icon icon="zi-arrow-right" />}>
            <div onClick={() => navigate("/user")}>User</div>
          </List.Item>
        </List>
      </div>
    </Page>
  );
};

export default HomePage;
