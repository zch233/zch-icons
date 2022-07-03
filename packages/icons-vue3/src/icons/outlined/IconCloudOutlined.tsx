// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloudOutlinedSvg from 'icons-base/es/asn/CloudOutlined';

export interface CloudOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCloudOutlined: CloudOutlinedIconType = (props, context) => <Icon name='CloudOutlined' {...{ ...props, ...context.attrs }} icon={CloudOutlinedSvg} />;

IconCloudOutlined.displayName = 'IconCloudOutlined';
IconCloudOutlined.theme = 'outlined';
IconCloudOutlined.originName = 'cloud';

export default IconCloudOutlined;
