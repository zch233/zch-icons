// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HistoryOutlinedSvg from 'icon-base/es/asn/HistoryOutlined';

export interface HistoryOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHistoryOutlined: HistoryOutlinedIconType = (props, context) => (
    <Icon name='HistoryOutlined' {...{ ...props, ...context.attrs }} icon={HistoryOutlinedSvg} />
);

IconHistoryOutlined.displayName = 'IconHistoryOutlined';

export default IconHistoryOutlined;
