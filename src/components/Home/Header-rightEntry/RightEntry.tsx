import { Flex, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import './RightEntry.css';

function RightEntry() {
    return (
        <div className="right-entry">
            <Flex justify='flex-end' gap="large">
                <Avatar icon={<UserOutlined />} ></Avatar>
                <div className='home_i'> <Link to="/head" className='home_a'>登录</Link> </div>
                <div className='home_i'>注册</div>
                <div className='home_i'>我的</div>
                <div className='home_i'>发表</div>
            </Flex>
        </div>
    )
}

export default RightEntry;