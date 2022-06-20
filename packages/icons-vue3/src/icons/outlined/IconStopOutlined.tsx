// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StopOutlinedSvg from 'icon-base/es/asn/StopOutlined';

export interface StopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconStopOutlined: StopOutlinedIconType = (props, context) => <Icon name='StopOutlined' {...{ ...props, ...context.attrs }} icon={StopOutlinedSvg} />;

IconStopOutlined.displayName = 'IconStopOutlined';

export default IconStopOutlined;
