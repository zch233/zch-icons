// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TwitterSquareFilledSvg from 'icon-base/es/asn/TwitterSquareFilled';

export interface TwitterSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTwitterSquareFilled: TwitterSquareFilledIconType = (props, context) => (
    <Icon name='TwitterSquareFilled' {...{ ...props, ...context.attrs }} icon={TwitterSquareFilledSvg} />
);

IconTwitterSquareFilled.displayName = 'IconTwitterSquareFilled';

export default IconTwitterSquareFilled;
