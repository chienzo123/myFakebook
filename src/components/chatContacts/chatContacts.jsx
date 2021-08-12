import React from 'react'
import './chatContacts.scss'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Contact from '../contacts/contacts';

function ChatContacts() {
    return(
        <div className="contacts contacts__wrp">
            <div className="contacts__header wrp">
                <h4 className="contacts__header--title">Contacts</h4>
                <div className="contacts__header--icons">
                <VideoCallIcon/>
                <SearchIcon/>
                <MoreHorizIcon/>
                </div>

            </div>
            <Contact contactAvatar="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.18169-1/cp0/p40x40/20476593_478499732512867_6769935892556117318_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=7206a8&_nc_ohc=_deBJnuzfLsAX-UODcb&_nc_ht=scontent.fhan4-1.fna&oh=c2787c92500d9967b4ec0ac5f09b3383&oe=613788CE" contactName="Ngọc Ánh" />
            <Contact contactAvatar="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-1/cp0/c0.13.40.40a/p40x40/149384912_2828252397443927_4994769497959471938_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=7206a8&_nc_ohc=a4j_ezkEV3IAX8eD8K9&_nc_ht=scontent.fhan3-2.fna&oh=9028e6ee955872d87c341d25038d26b0&oe=61394B1F" contactName="Đăng Quý" />
            <Contact contactAvatar="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/211279972_937962226772378_8184381366584475872_n.jpg?_nc_cat=106&ccb=1-4&_nc_sid=7206a8&_nc_ohc=av1fLzZPUwIAX-DYh9o&_nc_ht=scontent.fhan3-1.fna&oh=8d30760354cc2b18b3e03d3d8b4f67e7&oe=613B05B8" contactName="Chu Ánh" />
            <Contact contactAvatar="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/85195722_1607299562757253_7504790536067219456_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=7206a8&_nc_ohc=AfNVi9bOx50AX_8sjMO&_nc_ht=scontent.fhan4-1.fna&oh=130da9a63775941b6754f49b4e3e855a&oe=61383A29" contactName="Hữu Đạt" />
            <Contact contactAvatar="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/186482641_1332682270465732_4275151759233155273_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=7206a8&_nc_ohc=D8b5b4YbcLUAX-sr1uJ&_nc_ht=scontent.fhan4-1.fna&oh=aed8743a118dba1b0731d6d0f4f0e886&oe=61383EEA" contactName="Lê Tùng" />
            <Contact contactAvatar="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/222551310_2599742013655045_4613139646877488825_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=7206a8&_nc_ohc=bL_avEqZROkAX8WcLrT&_nc_ht=scontent.fhan3-3.fna&oh=0a412b919983b5301e008a864ed02a15&oe=6137764C" contactName="Giang Hoàng" />
            <Contact contactAvatar="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/163820398_1311341402569196_7806621023873593228_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=7206a8&_nc_ohc=O0FvGCivGBIAX9sk5L8&_nc_ht=scontent.fhan4-1.fna&oh=9bf744cc1751d5993cb7808fdbd6b0dc&oe=6137ED85" contactName="Dương Vương" />
            <Contact contactAvatar="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/128400604_396147361597579_2246867503483790095_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=7206a8&_nc_ohc=rThvlu9e_WUAX-fzDBU&_nc_ht=scontent.fhan3-3.fna&oh=81b07b4a1d04599f6b02d391bb2eaa38&oe=61394208" contactName="Marry Nguyễn" />
            <Contact contactAvatar="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/35531971_460034167743634_3341770871692853248_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=7206a8&_nc_ohc=zPLjS_nQIDMAX8XnYK1&_nc_ht=scontent.fhan3-3.fna&oh=54c6d6162628cb3757e4300c45dc1217&oe=613907F6" contactName="Minh Quân" />
            <Contact contactAvatar="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/221046618_1490253271322331_1795238862311669203_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=7206a8&_nc_ohc=3Rwxe4MwPHQAX8cjNgl&_nc_ht=scontent.fhan3-2.fna&oh=c203cb235aa401c6c16b9a60903c3f70&oe=61387E25" contactName="Quang Huy" />
            <Contact contactAvatar="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/165109081_247414247050430_7349794064867889892_n.jpg?_nc_cat=106&ccb=1-4&_nc_sid=7206a8&_nc_ohc=R8M6CqGd5r0AX-NpwUu&_nc_ht=scontent.fhan3-1.fna&oh=2b4e0a14296b47e673da4208545c2548&oe=613785C3" contactName="Đức Quyền" />
            <Contact contactAvatar="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/189633978_2918399555110131_7343458809456078734_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=7206a8&_nc_ohc=vMnKsY7zzLoAX8rN9Jq&_nc_ht=scontent.fhan3-1.fna&oh=536c61917a84381f0cd3fb3f923b7385&oe=6139FFF8" contactName="Kim Ngân" />
            <Contact contactAvatar="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/134459239_2850317991890785_7494217363215586850_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=7206a8&_nc_ohc=AuRINAIR6OsAX8csakm&_nc_ht=scontent.fhan3-2.fna&oh=ca6da039b6192a119972aa3f29a2498b&oe=613825E4" contactName="Thu Hà" />
            <Contact contactAvatar="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/163269016_2533843610242696_723918533954889770_n.jpg?_nc_cat=106&ccb=1-4&_nc_sid=7206a8&_nc_ohc=g47f1nBrFyAAX9zNUDS&_nc_ht=scontent.fhan3-1.fna&oh=a4b9199977414fc5359f97303372fca1&oe=6138554E" contactName="Lê Long" />
            <Contact contactAvatar="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/83218469_488780738501720_1393616836288839680_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=7206a8&_nc_ohc=bw3nr7s-W0MAX-EbYse&_nc_ht=scontent.fhan3-2.fna&oh=460af45ae2682655ea4eab379df458e1&oe=6138E056" contactName="Xuân Hiếu" />

        </div>
    )
}
export default ChatContacts