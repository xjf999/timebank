import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './CenterEntry.css';


function CenterEntry() {
    return (
        <div className='center-entry'>
            <Input placeholder='不知道' className="center-entry-container" prefix={ <SearchOutlined /> } allowClear />
        </div>       
    )
}


export default CenterEntry;