// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AmazonSquareFilledSvg from 'icon-base/es/asn/AmazonSquareFilled';

export interface AmazonSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAmazonSquareFilled: AmazonSquareFilledIconType = (props, context) => (
    <Icon name='AmazonSquareFilled' {...{ ...props, ...context.attrs }} icon={AmazonSquareFilledSvg} />
);

IconAmazonSquareFilled.displayName = 'IconAmazonSquareFilled';

export default IconAmazonSquareFilled;
