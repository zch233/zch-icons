// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AmazonSquareFilledSvg from 'gupo-icons-base/es/asn/AmazonSquareFilled';

export interface AmazonSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAmazonSquareFilled: AmazonSquareFilledIconType = (props, context) => (
    <Icon name='AmazonSquareFilled' {...{ ...props, ...context.attrs }} icon={AmazonSquareFilledSvg} />
);

IconAmazonSquareFilled.displayName = 'IconAmazonSquareFilled';
IconAmazonSquareFilled.theme = 'filled';
IconAmazonSquareFilled.originName = 'amazon-square';

export default IconAmazonSquareFilled;
