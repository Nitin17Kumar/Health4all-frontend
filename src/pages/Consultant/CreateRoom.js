import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const CreateRoom = () => {
    const name = localStorage.getItem('name');
     const userid= localStorage.getItem('userId');
    const {roomId}=useParams();
     const myMeeting = async(element)=>{
        const appID = ID;
        const serverSecret = 'Api';
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  userid,  name);
        // const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, userid, name );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name:'Copy Link',
                    url:`https://health4all.netlify.app//room/${roomId}`
                },
            ],
            scenario:
            { 
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            }
        });
     };

  return (
    <div>
        <div ref={myMeeting} />
    </div>
  )
}

export default CreateRoom