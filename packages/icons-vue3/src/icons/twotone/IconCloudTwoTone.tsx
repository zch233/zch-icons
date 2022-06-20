// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloudTwoToneSvg from 'icon-base/es/asn/CloudTwoTone';

export interface CloudTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCloudTwoTone: CloudTwoToneIconType = (props, context) => <Icon name='CloudTwoTone' {...{ ...props, ...context.attrs }} icon={CloudTwoToneSvg} />;

IconCloudTwoTone.displayName = 'IconCloudTwoTone';

export default IconCloudTwoTone;
