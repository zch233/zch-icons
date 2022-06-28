// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloseSquareFilledSvg from 'gupo-icons-base/es/asn/CloseSquareFilled';

export interface CloseSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCloseSquareFilled: CloseSquareFilledIconType = (props, context) => (
    <Icon name='CloseSquareFilled' {...{ ...props, ...context.attrs }} icon={CloseSquareFilledSvg} />
);

IconCloseSquareFilled.displayName = 'IconCloseSquareFilled';
IconCloseSquareFilled.theme = 'filled';
IconCloseSquareFilled.originName = 'close-square';

export default IconCloseSquareFilled;
