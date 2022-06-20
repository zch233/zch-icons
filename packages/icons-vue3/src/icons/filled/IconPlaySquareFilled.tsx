// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlaySquareFilledSvg from 'icon-base/es/asn/PlaySquareFilled';

export interface PlaySquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPlaySquareFilled: PlaySquareFilledIconType = (props, context) => (
    <Icon name='PlaySquareFilled' {...{ ...props, ...context.attrs }} icon={PlaySquareFilledSvg} />
);

IconPlaySquareFilled.displayName = 'IconPlaySquareFilled';

export default IconPlaySquareFilled;
