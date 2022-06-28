// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlaySquareFilledSvg from 'gupo-icons-base/es/asn/PlaySquareFilled';

export interface PlaySquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPlaySquareFilled: PlaySquareFilledIconType = (props, context) => (
    <Icon name='PlaySquareFilled' {...{ ...props, ...context.attrs }} icon={PlaySquareFilledSvg} />
);

IconPlaySquareFilled.displayName = 'IconPlaySquareFilled';
IconPlaySquareFilled.theme = 'filled';
IconPlaySquareFilled.originName = 'play-square';

export default IconPlaySquareFilled;
