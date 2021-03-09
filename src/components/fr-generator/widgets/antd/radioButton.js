/**
 * Updated by Tw93 on 2019-12-07.
 * 单选组件
 */

import { Radio } from 'antd';
import radioHoc from '../../components/radioButtonHoc';

export default function radioButton(p) {
    const onChange = (e) => p.onChange(e.target.value);
    return radioHoc(p, onChange, Radio);
}
