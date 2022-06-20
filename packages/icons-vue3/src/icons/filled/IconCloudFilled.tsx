// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloudFilledSvg from 'icon-base/es/asn/CloudFilled';

export interface CloudFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCloudFilled: CloudFilledIconType = (props, context) => <Icon name='CloudFilled' {...{ ...props, ...context.attrs }} icon={CloudFilledSvg} />;

IconCloudFilled.displayName = 'IconCloudFilled';

export default IconCloudFilled;
