// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlaySquareOutlinedSvg from 'icons-base/es/asn/PlaySquareOutlined';

export interface PlaySquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPlaySquareOutlined: PlaySquareOutlinedIconType = (props, context) => (
    <Icon name='PlaySquareOutlined' {...{ ...props, ...context.attrs }} icon={PlaySquareOutlinedSvg} />
);

IconPlaySquareOutlined.displayName = 'IconPlaySquareOutlined';
IconPlaySquareOutlined.theme = 'outlined';
IconPlaySquareOutlined.originName = 'play-square';

export default IconPlaySquareOutlined;
