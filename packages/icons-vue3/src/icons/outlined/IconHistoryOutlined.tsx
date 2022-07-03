// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HistoryOutlinedSvg from 'icons-base/es/asn/HistoryOutlined';

export interface HistoryOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHistoryOutlined: HistoryOutlinedIconType = (props, context) => (
    <Icon name='HistoryOutlined' {...{ ...props, ...context.attrs }} icon={HistoryOutlinedSvg} />
);

IconHistoryOutlined.displayName = 'IconHistoryOutlined';
IconHistoryOutlined.theme = 'outlined';
IconHistoryOutlined.originName = 'history';

export default IconHistoryOutlined;
