// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AmazonCircleFilledSvg from 'icon-base/es/asn/AmazonCircleFilled';

export interface AmazonCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAmazonCircleFilled: AmazonCircleFilledIconType = (props, context) => (
    <Icon name='AmazonCircleFilled' {...{ ...props, ...context.attrs }} icon={AmazonCircleFilledSvg} />
);

IconAmazonCircleFilled.displayName = 'IconAmazonCircleFilled';

export default IconAmazonCircleFilled;
