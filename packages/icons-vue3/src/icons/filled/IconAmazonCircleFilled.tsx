// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AmazonCircleFilledSvg from 'gupo-icons-base/es/asn/AmazonCircleFilled';

export interface AmazonCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAmazonCircleFilled: AmazonCircleFilledIconType = (props, context) => (
    <Icon name='AmazonCircleFilled' {...{ ...props, ...context.attrs }} icon={AmazonCircleFilledSvg} />
);

IconAmazonCircleFilled.displayName = 'IconAmazonCircleFilled';
IconAmazonCircleFilled.theme = 'filled';
IconAmazonCircleFilled.originName = 'amazon-circle';

export default IconAmazonCircleFilled;
