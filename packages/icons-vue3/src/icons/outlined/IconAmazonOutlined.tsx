// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AmazonOutlinedSvg from 'icons-base/es/asn/AmazonOutlined';

export interface AmazonOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAmazonOutlined: AmazonOutlinedIconType = (props, context) => (
    <Icon name='AmazonOutlined' {...{ ...props, ...context.attrs }} icon={AmazonOutlinedSvg} />
);

IconAmazonOutlined.displayName = 'IconAmazonOutlined';
IconAmazonOutlined.theme = 'outlined';
IconAmazonOutlined.originName = 'amazon';

export default IconAmazonOutlined;
