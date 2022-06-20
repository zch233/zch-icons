// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AmazonOutlinedSvg from 'icon-base/es/asn/AmazonOutlined';

export interface AmazonOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAmazonOutlined: AmazonOutlinedIconType = (props, context) => (
    <Icon name='AmazonOutlined' {...{ ...props, ...context.attrs }} icon={AmazonOutlinedSvg} />
);

IconAmazonOutlined.displayName = 'IconAmazonOutlined';

export default IconAmazonOutlined;
