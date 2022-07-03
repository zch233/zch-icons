// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UpSquareFilledSvg from 'icons-base/es/asn/UpSquareFilled';

export interface UpSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUpSquareFilled: UpSquareFilledIconType = (props, context) => (
    <Icon name='UpSquareFilled' {...{ ...props, ...context.attrs }} icon={UpSquareFilledSvg} />
);

IconUpSquareFilled.displayName = 'IconUpSquareFilled';
IconUpSquareFilled.theme = 'filled';
IconUpSquareFilled.originName = 'up-square';

export default IconUpSquareFilled;
