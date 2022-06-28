// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import QqSquareFilledSvg from 'gupo-icons-base/es/asn/QqSquareFilled';

export interface QqSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconQqSquareFilled: QqSquareFilledIconType = (props, context) => (
    <Icon name='QqSquareFilled' {...{ ...props, ...context.attrs }} icon={QqSquareFilledSvg} />
);

IconQqSquareFilled.displayName = 'IconQqSquareFilled';
IconQqSquareFilled.theme = 'filled';
IconQqSquareFilled.originName = 'qq-square';

export default IconQqSquareFilled;
