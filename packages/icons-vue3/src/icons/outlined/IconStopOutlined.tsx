// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StopOutlinedSvg from 'gupo-icons-base/es/asn/StopOutlined';

export interface StopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconStopOutlined: StopOutlinedIconType = (props, context) => <Icon name='StopOutlined' {...{ ...props, ...context.attrs }} icon={StopOutlinedSvg} />;

IconStopOutlined.displayName = 'IconStopOutlined';
IconStopOutlined.theme = 'outlined';
IconStopOutlined.originName = 'stop';

export default IconStopOutlined;
