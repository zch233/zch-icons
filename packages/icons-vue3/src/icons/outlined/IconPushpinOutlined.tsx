// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PushpinOutlinedSvg from 'gupo-icons-base/es/asn/PushpinOutlined';

export interface PushpinOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPushpinOutlined: PushpinOutlinedIconType = (props, context) => (
    <Icon name='PushpinOutlined' {...{ ...props, ...context.attrs }} icon={PushpinOutlinedSvg} />
);

IconPushpinOutlined.displayName = 'IconPushpinOutlined';
IconPushpinOutlined.theme = 'outlined';
IconPushpinOutlined.originName = 'pushpin';

export default IconPushpinOutlined;
