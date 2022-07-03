// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloudTwotoneSvg from 'icons-base/es/asn/CloudTwotone';

export interface CloudTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCloudTwotone: CloudTwotoneIconType = (props, context) => <Icon name='CloudTwotone' {...{ ...props, ...context.attrs }} icon={CloudTwotoneSvg} />;

IconCloudTwotone.displayName = 'IconCloudTwotone';
IconCloudTwotone.theme = 'twotone';
IconCloudTwotone.originName = 'cloud';

export default IconCloudTwotone;
